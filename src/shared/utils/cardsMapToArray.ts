import type { CardItem } from '../types';

export const FavsMapToCardsArray = (favsMap: Map<string, Omit<CardItem, 'id'>>): CardItem[] => {
  return Array.from(favsMap).map((entry) => {
    return { ...entry[1], id: entry[0] };
  });
};
