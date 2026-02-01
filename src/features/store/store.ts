import { create } from 'zustand';

import type { CardItemProps, SneakersStore } from '../../shared/types';

export const useSneakersStore = create<SneakersStore>((set) => ({
  favs: [],
  setFav: (newFavs: CardItemProps[]) => set((store) => ({ ...store, favs: newFavs })),
}));
