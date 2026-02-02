import { create } from 'zustand';

import type { ModalHook } from '../types';

export const useModal = create<ModalHook>((set) => ({
  isOpen: false,
  modalData: null,
  modalHeader: '',
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setModalData: (children) => set({ modalData: children }),
  setModalHeader: (newHeader) => set({ modalHeader: newHeader }),
}));
