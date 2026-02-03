import { useEffect, useRef } from 'react';
import { useClickAway } from 'react-use';

import { CardItemModal } from '../../entities/cardItemModal/cardItemModal';
import { CartModal } from '../../entities/cartModal/cartModal';
import { FavsModal } from '../../entities/favsModal/favsModal';
import { Heading } from '../../shared/heading/heading';
import { useModal } from '../../shared/hooks/useModal';

import styles from './modal.module.css';

export const Modal = () => {
  const { isOpen, type, props, modalHeader, close } = useModal();

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const modalContentRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) return;

    // `showModal` и `close` - это нативные методы, предоставляемые HTML-элементом `dialog`
    if (isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isOpen]);

  useClickAway(modalContentRef, close);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && modalRef.current === target) {
        close();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('click', handleWrapperClick);
    window.addEventListener('keydown', handleEscapePress);

    return () => {
      window.removeEventListener('click', handleWrapperClick);
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [close]);

  if (!isOpen) return null;

  return (
    <dialog className={modalHeader ? styles.dialogForActions : styles.dialog} ref={modalRef}>
      <div className={styles.modalContent}>
        <div>
          <button onClick={close} className={styles.close}>
            X
          </button>
          {modalHeader && (
            <Heading level="2" className={styles.modalHeader}>
              {modalHeader}
            </Heading>
          )}
        </div>

        {type === 'cart' && <CartModal />}
        {type === 'favs' && <FavsModal />}
        {type === 'card' && props && <CardItemModal {...props} />}
      </div>
    </dialog>
  );
};
