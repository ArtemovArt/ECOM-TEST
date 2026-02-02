import { create } from 'zustand';

import type { SneakersStore } from '../../shared/types';

export const useSneakersStore = create<SneakersStore>((set, get) => ({
  favs: new Map(),
  setFav: (id, newData) => set((store) => ({ favs: new Map(store.favs).set(id, newData) })),
  removeFav: (id) =>
    set((store) => {
      const next = new Map(store.favs);
      next.delete(id);
      return { favs: next };
    }),
  checkIsFav: (id) => get().favs.has(id),
}));
