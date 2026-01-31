import favIcon from '../../assets/activeFavIcon.svg';
import addToCartButtonIcon from '../../assets/addToCartButtonIcon.svg';
import addedToCartIcon from '../../assets/addedToCartIcon.svg';
import unfavIcon from '../../assets/unactiveFavIcon.svg';
import { consts } from '../../shared/consts';
import type { CardItemProps } from '../../shared/types';
import { Typography } from '../../shared/typography/typography';

import styles from './cardItem.module.css';

export const CardItem: React.FC<CardItemProps> = ({ description, img, isFav, price, isAddedInCard }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardTopContent}>
        <img src={isFav ? favIcon : unfavIcon} />
        <img className={styles.sneakerImg} src={img} />
      </div>
      <Typography as="span" className={styles.sneakerName}>
        {description}
      </Typography>
      <div className={styles.cardPriceSection}>
        <div className={styles.cardPrice}>
          <Typography as="span" className={styles.cardPriceTop}>
            {consts.cardItem.price}
          </Typography>
          <Typography as="span" className={styles.cardPriceBottom}>
            {price} {consts.cardItem.pricePostfix}
          </Typography>
        </div>
        {!isAddedInCard ? (
          <button className={styles.svgButtonWrapper} onClick={() => console.log('hi')}>
            <img src={addToCartButtonIcon} />
          </button>
        ) : (
          <img src={addedToCartIcon} />
        )}
      </div>
    </div>
  );
};
