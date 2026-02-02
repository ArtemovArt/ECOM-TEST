import favIcon from '../../assets/activeFavIcon.svg';
import addToCartButtonIcon from '../../assets/addToCartButtonIcon.svg';
import addedToCartIcon from '../../assets/addedToCartIcon.svg';
import unfavIcon from '../../assets/unactiveFavIcon.svg';
import { useSneakersStore } from '../../features/store/store';
import { consts } from '../../shared/consts';
import { useModal } from '../../shared/hooks/useModal';
import type { CardItemProps } from '../../shared/types';
import { Typography } from '../../shared/typography/typography';
import { CardItemModal } from '../cardItemModal/cardItemModal';

import styles from './cardItem.module.css';

export const CardItem: React.FC<CardItemProps> = ({ description, img, price, isAddedInCard, id, title }) => {
  const { open, setModalData } = useModal();
  const { setFav, removeFav, checkIsFav } = useSneakersStore();
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardTopContent}>
        <button
          className={styles.svgButtonWrapper}
          onClick={() => (!checkIsFav(id) ? setFav(id, { description, img, price, title }) : removeFav(id))}
        >
          <img src={checkIsFav(id) ? favIcon : unfavIcon} />
        </button>
        <img className={styles.sneakerImg} src={img} />
      </div>

      <div
        className={styles.sneakerTitle}
        onClick={() => {
          setModalData(<CardItemModal description={description} title={title} img={img} price={price} id={id} />);
          open();
        }}
      >
        <Typography as="span">{title}</Typography>
      </div>

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
