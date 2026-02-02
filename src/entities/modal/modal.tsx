import { useEffect, useRef } from 'react';
import { useClickAway } from 'react-use';

import { Heading } from '../../shared/heading/heading';
import { useModal } from '../../shared/hooks/useModal';

import styles from './modal.module.css';

export const Modal = () => {
  const modal = useModal();

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const modalContentRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) return;

    // `showModal` и `close` - это нативные методы, предоставляемые HTML-элементом `dialog`
    if (modal.isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [modal.isOpen]);

  useClickAway(modalContentRef, modal.close);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && modalRef.current === target) {
        modal.close();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        modal.close();
      }
    };

    window.addEventListener('click', handleWrapperClick);
    window.addEventListener('keydown', handleEscapePress);

    return () => {
      window.removeEventListener('click', handleWrapperClick);
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [modal]);

  if (!modal.isOpen) return null;

  return (
    <dialog className={modal.modalHeader ? styles.dialogForActions : styles.dialog} ref={modalRef}>
      {modal.modalHeader && (
        <Heading level="2" className={styles.modalHeader}>
          {modal.modalHeader}
        </Heading>
      )}
      <div className={styles.modalContent}>
        <button onClick={modal.close} className={styles.close}>
          X
        </button>

        {modal.modalData && modal.modalData}
      </div>
    </dialog>
  );
};
