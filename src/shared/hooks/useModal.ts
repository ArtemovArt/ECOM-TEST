import { create } from 'zustand';

import type { ModalHook } from '../types';

export const useModal = create<ModalHook>((set) => ({
  isOpen: false,
  modalData: null,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setModalData: (item) => set({ modalData: item }),
}));
