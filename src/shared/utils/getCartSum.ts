import type { CardItem } from '../types';

export const getCartSum = (cart: Map<string, Omit<CardItem, 'id'>>) => {
  return Array.from(cart.values())
    .reduce((acc, val) => {
      return (acc += val.price);
    }, 0)
    .toString();
};
