import type { CardItemProps } from '../types';

export const filterFn = (cards: CardItemProps[], filterQuery: string) => {
  return cards?.filter((card) => card?.description?.toLowerCase()?.includes(filterQuery?.toLowerCase()));
};
