import favIcon from '../../assets/activeFavIcon.svg';
import addToCartButtonIcon from '../../assets/addToCartButtonIcon.svg';
import addedToCartIcon from '../../assets/addedToCartIcon.svg';
import trashIcon from '../../assets/icons-trash.svg';
import unfavIcon from '../../assets/unactiveFavIcon.svg';
import { useCartStore } from '../../features/store/cartStore';
import { useSneakersStore } from '../../features/store/store';
import { consts } from '../../shared/consts';
import { useModal } from '../../shared/hooks/useModal';
import type { CardItemProps } from '../../shared/types';
import { Typography } from '../../shared/typography/typography';

import styles from './cardItem.module.css';

export const CardItem: React.FC<CardItemProps> = ({ description, img, price, id, title }) => {
  const { open } = useModal();
  const { setFav, removeFav, checkIsFav } = useSneakersStore();
  const { addItemInCart, cart, removeItemFromCart } = useCartStore();

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardTopContent}>
        <button
          className={styles.svgButtonWrapper}
          onClick={() => (!checkIsFav(id) ? setFav(id, { description, img, price, title }) : removeFav(id))}
        >
          <img src={checkIsFav(id) ? favIcon : unfavIcon} />
        </button>
        <div className={styles.sneakerImg}>
          <img src={img} />
        </div>
        {cart.has(id) && (
          <button className={styles.svgButtonWrapper} onClick={() => removeItemFromCart(id)}>
            <img src={trashIcon} />
          </button>
        )}
      </div>

      <div
        className={styles.sneakerTitle}
        onClick={() => {
          // setModalData(<CardItemModal description={description} title={title} img={img} price={price} id={id} />);
          open('card', { description, img, price, id, title });
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
        {cart.has(id) ? (
          <img src={addedToCartIcon} />
        ) : (
          <button
            className={styles.svgButtonWrapper}
            onClick={() => addItemInCart(id, { description, img, price, title })}
          >
            <img src={addToCartButtonIcon} />
          </button>
        )}
      </div>
    </div>
  );
};
