import type { ReactNode } from 'react';

export interface CardItemProps {
  title: string;
  description: string;
  img: string;
  isFav?: boolean;
  price: string;
  isAddedInCard?: boolean;
  id: string;
}

export interface CardItem {
  title: string;
  description: string;
  img: string;
  price: string;
  id: string;
}

export interface IHeaderActionItem {
  img: string;
  actionName: string;
  action: () => void;
}

export interface CardContainerProps {
  cards: CardItem[];
  filterQuery?: string;
}

export interface TypographyProps {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'div' | 'strong';
  className?: string;
}

export interface HeadingProps {
  children: React.ReactNode;
  level: '1' | '2' | '3' | '4' | '5';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export interface SearchInputProps {
  options: CardItem[];
  placeholder?: string;
}

export interface SneakersStore {
  favs: Map<string, Omit<CardItem, 'id'>>;
  setFav: (id: string, newData: Omit<CardItem, 'id'>) => void;
  removeFav: (id: string) => void;
  checkIsFav: (id: string) => boolean;
}

export interface CartStore {
  cart: Map<string, Omit<CardItem, 'id'>>;
  addItemInCart: (id: string, newData: Omit<CardItem, 'id'>) => void;
  removeItemFromCart: (id: string) => void;
  checkIsInCart: (id: string) => boolean;
}

export type ContainerOptions = { id: string; mountNode?: HTMLElement };

export interface ModalHook {
  isOpen: boolean;

  modalData: ReactNode | null;
  modalHeader?: string;
  open: () => void;
  close: () => void;
  setModalData: (children: ReactNode) => void;
  setModalHeader: (newHeader: string) => void;
}
