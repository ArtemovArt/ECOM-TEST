import { CardItem } from '../../entities/cardItem/cardItem';
import { consts } from '../../shared/consts';
import type { CardContainerProps } from '../../shared/types';
import { Typography } from '../../shared/typography/typography';
import { filterFn } from '../../shared/utils/filterCards';

import styles from './cardContainer.module.css';

export const CardContainer: React.FC<CardContainerProps> = ({ cards, filterQuery = '' }) => {
  const cardsToMap = filterQuery ? filterFn(cards, filterQuery) : cards;

  if (cardsToMap.length === 0) {
    if (filterQuery)
      return (
        <Typography as="p" className={styles.noItems}>
          {consts.searchBlock.nothingFound}
        </Typography>
      );
    return (
      <Typography as="p" className={styles.noItems}>
        {consts.modal.noItems}
      </Typography>
    );
  }

  return (
    <div className={styles.contentWrapper}>
      {cardsToMap?.map((card) => (
        <CardItem
          key={card.id}
          id={card.id}
          img={card?.img}
          description={card?.description}
          price={card?.price}
          title={card?.title}
        />
      ))}
    </div>
  );
};
