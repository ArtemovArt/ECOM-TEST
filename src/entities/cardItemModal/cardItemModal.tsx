import favIcon from '../../assets/activeFavIcon.svg';
import addToCartButtonIcon from '../../assets/addToCartButtonIcon.svg';
import addedToCartIcon from '../../assets/addedToCartIcon.svg';
import unfavIcon from '../../assets/unactiveFavIcon.svg';
import { consts } from '../../shared/consts';
import type { CardItemProps } from '../../shared/types';
import { Typography } from '../../shared/typography/typography';

import styles from './cardItemModal.module.css';

export const CardItemModal: React.FC<CardItemProps> = ({ description, img, isFav, price, isAddedInCard, title }) => {
  return (
    <>
      <div className={styles.cardTopContent}>
        <img src={isFav ? favIcon : unfavIcon} />

        <div className={styles.cardText}>
          <Typography as="span" className={styles.sneakerTitle}>
            {title}
          </Typography>
          <Typography as="span" className={styles.sneakerDescription}>
            {description}
          </Typography>
        </div>

        <div className={styles.cardPriceWrapper}>
          <img className={styles.sneakerImg} src={img} />
          <div className={styles.cardPriceWrapper}>
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
        </div>
      </div>
    </>
  );
};
