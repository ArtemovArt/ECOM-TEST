export interface CardItemProps {
  description: string;
  img: string;
  isFav: boolean;
  price: string;
  isAddedInCard: boolean;
  id: string;
}

export interface IHeaderActionItem {
  img: string;
  actionName: string;
}

export interface CardContainerProps {
  cards: CardItemProps[];
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
