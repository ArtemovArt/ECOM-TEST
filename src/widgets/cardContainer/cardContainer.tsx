import { CardItem } from '../../entities/cardItem/cardItem';
import type { CardContainerProps } from '../../shared/types';

import styles from './cardContainer.module.css';

export const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <div className={styles.contentWrapper}>
      {cards?.map((card) => (
        <CardItem
          key={card?.id}
          id={card?.id}
          img={card?.img}
          description={card?.description}
          isAddedInCard={card?.isAddedInCard}
          isFav={card?.isFav}
          price={card?.price}
        />
      ))}
    </div>
  );
};
