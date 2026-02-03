import { create } from 'zustand';

import type { ModalStore } from '../types';

export const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  modalData: null,
  modalHeader: '',
  type: null,
  props: null,
  open: (type, props = null, modalHeader = '') => set({ isOpen: true, type, props, modalHeader }),

  close: () => set({ isOpen: false, type: null, props: null, modalHeader: '' }),
  // setModalData: (children) => set({ modalData: children }),
  // setModalHeader: (newHeader) => set({ modalHeader: newHeader }),
}));
