import { create } from 'zustand';

import type { CartStore } from '../../shared/types';

export const useSneakersStore = create<CartStore>((set, get) => ({
  cart: new Map(),
  addItemInCart: (id, newData) => set((store) => ({ cart: new Map(store.cart).set(id, newData) })),
  removeItemFromCart: (id) =>
    set((store) => {
      const next = new Map(store.cart);
      next.delete(id);
      return { cart: next };
    }),
  checkIsInCart: (id) => get().cart.has(id),
}));
