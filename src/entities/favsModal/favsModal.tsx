import { useSneakersStore } from '../../features/store/store';
import { StoreMapToCardsArray } from '../../shared/utils/cardsMapToArray';
import { CardContainer } from '../../widgets/cardContainer/cardContainer';

export const FavsModal = () => {
  const { favs } = useSneakersStore();
  const favsArr = StoreMapToCardsArray(favs);

  return <CardContainer cards={favsArr} />;
};
