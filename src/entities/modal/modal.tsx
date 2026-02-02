import { useEffect, useRef } from 'react';
import { useClickAway } from 'react-use';

import { useModal } from '../../shared/hooks/useModal';
import { CardItemModal } from '../cardItemModal/cardItemModal';

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
    <dialog className={styles.dialog} ref={modalRef}>
      <div className={styles.modalContent}>
        <button onClick={modal.close} className={styles.close}>
          X
        </button>

        {modal.modalData && <CardItemModal {...modal.modalData} />}
      </div>
    </dialog>
  );
};
