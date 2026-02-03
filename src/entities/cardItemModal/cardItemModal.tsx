import favIcon from '../../assets/activeFavIcon.svg';
import unfavIcon from '../../assets/unactiveFavIcon.svg';
import { useCartStore } from '../../features/store/cartStore';
import { useSneakersStore } from '../../features/store/store';
import { consts } from '../../shared/consts';
import type { CardItemProps } from '../../shared/types';
import { Typography } from '../../shared/typography/typography';

import styles from './cardItemModal.module.css';

export const CardItemModal: React.FC<CardItemProps> = ({ description, img, price, title, id }) => {
  const { setFav, removeFav, checkIsFav } = useSneakersStore();
  const { cart, addItemInCart } = useCartStore();
  return (
    <>
      <div className={styles.cardTopContent}>
        <button
          className={styles.svgButtonWrapper}
          onClick={() => (!checkIsFav(id) ? setFav(id, { description, img, price, title }) : removeFav(id))}
        >
          <img src={checkIsFav(id) ? favIcon : unfavIcon} />
        </button>

        <div className={styles.cardText}>
          <Typography as="span" className={styles.sneakerTitle}>
            {title}
          </Typography>
          <Typography as="span" className={styles.sneakerDescription}>
            {description}
          </Typography>
        </div>

        <div className={styles.cardPriceWrapper}>
          <div className={styles.sneakerImg}>
            <img src={img} />
          </div>

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
              {!cart.has(id) ? (
                <button
                  className={styles.buttonAddToCart}
                  onClick={() => addItemInCart(id, { description, img, price, title })}
                >
                  <Typography as="p">{consts.modal.buyButtonText}</Typography>
                </button>
              ) : (
                <div className={styles.alreadyInCart}>
                  <Typography as="p">{consts.modal.alreadyInCart}</Typography>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
