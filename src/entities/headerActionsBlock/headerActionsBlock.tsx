import cartIcon from '../../assets/Group.svg';
import favIcon from '../../assets/zmdi_favorite-outline.svg';
import { useCartStore } from '../../features/store/cartStore';
import { consts } from '../../shared/consts';
import { HeaderActionItem } from '../../shared/headerActionItem/headerActionItem';
import { useModal } from '../../shared/hooks/useModal';
import { StoreMapToCardsArray } from '../../shared/utils/cardsMapToArray';
import { getCartSum } from '../../shared/utils/getCartSum';

import styles from './headerActionsBlock.module.css';

export const ActionsBlock = () => {
  const { open } = useModal();

  const { cart } = useCartStore();

  const cartArr = StoreMapToCardsArray(cart);
  const sum = getCartSum(cart);

  console.log('cartArr', cartArr);

  return (
    <div className={styles.headerActionsBlockWrapper}>
      <HeaderActionItem
        img={cartIcon}
        actionName={sum}
        action={() => {
          // setModalData(<CardContainer cards={cartArr} />);
          // setModalHeader(consts.headerActionItemsNames.cart);
          open('cart', null, consts.headerActionItemsNames.cart);
        }}
      />
      <HeaderActionItem
        img={favIcon}
        actionName={consts.headerActionItemsNames.favourites}
        action={() => {
          // setModalData(<CardContainer cards={cards} />);
          // setModalHeader(consts.headerActionItemsNames.favourites);
          open('favs', null, consts.headerActionItemsNames.favourites);
        }}
      />
      {/* <HeaderActionItem img={profileIcon} actionName={consts.headerActionItemsNames.profile} /> */}
    </div>
  );
};
