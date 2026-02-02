import { CardItem } from '../../entities/cardItem/cardItem';
import { consts } from '../../shared/consts';
import type { CardContainerProps } from '../../shared/types';
import { Typography } from '../../shared/typography/typography';
import { filterFn } from '../../shared/utils/filterCards';

import styles from './cardContainer.module.css';

export const CardContainer: React.FC<CardContainerProps> = ({ cards, filterQuery = '' }) => {
  const cardsToMap = filterQuery ? filterFn(cards, filterQuery) : cards;
  console.log('cardsToMap', cardsToMap);
  return (
    <>
      {cardsToMap.length === 0 && filterQuery ? (
        <Typography as="p">{consts.searchBlock.nothingFound}</Typography>
      ) : (
        <div className={styles.contentWrapper}>
          {cardsToMap?.map((card) => (
            <CardItem
              key={card?.id}
              id={card?.id}
              img={card?.img}
              description={card?.description}
              isAddedInCard={card?.isAddedInCard}
              isFav={card?.isFav}
              price={card?.price}
              title={card?.title}
            />
          ))}
        </div>
      )}
    </>
  );
};
