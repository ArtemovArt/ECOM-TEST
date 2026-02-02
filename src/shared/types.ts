export interface CardItemProps {
  title: string;
  description: string;
  img: string;
  isFav?: boolean;
  price: string;
  isAddedInCard?: boolean;
  id: string;
}

export interface IHeaderActionItem {
  img: string;
  actionName: string;
}

export interface CardContainerProps {
  cards: CardItemProps[];
  filterQuery: string;
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

export type CardsArray = CardItemProps[];

export interface SearchInputProps {
  options: CardItemProps[];
  placeholder?: string;
}

export interface SneakersStore {
  favs: CardItemProps[];

  setFav: (newData: CardItemProps[]) => void;
}

export type ContainerOptions = { id: string; mountNode?: HTMLElement };

export interface ModalHook {
  isOpen: boolean;
  modalData: CardItemProps | null;
  open: () => void;
  close: () => void;
  setModalData: (item: CardItemProps) => void;
}
