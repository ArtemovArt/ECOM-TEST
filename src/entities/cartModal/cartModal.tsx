import { useCartStore } from '../../features/store/cartStore';
import { StoreMapToCardsArray } from '../../shared/utils/cardsMapToArray';
import { CardContainer } from '../../widgets/cardContainer/cardContainer';

export const CartModal = () => {
  const { cart } = useCartStore();
  const cartArr = StoreMapToCardsArray(cart);

  return <CardContainer cards={cartArr} />;
};
