import cartIcon from '../../assets/Group.svg';
import favIcon from '../../assets/zmdi_favorite-outline.svg';
import { useSneakersStore } from '../../features/store/store';
import { consts } from '../../shared/consts';
import { HeaderActionItem } from '../../shared/headerActionItem/headerActionItem';
import { useModal } from '../../shared/hooks/useModal';
import { FavsMapToCardsArray } from '../../shared/utils/cardsMapToArray';
import { CardContainer } from '../../widgets/cardContainer/cardContainer';

import styles from './headerActionsBlock.module.css';

export const ActionsBlock = () => {
  const { setModalData, open, setModalHeader } = useModal();
  const { favs } = useSneakersStore();
  const cards = FavsMapToCardsArray(favs);

  return (
    <div className={styles.headerActionsBlockWrapper}>
      <HeaderActionItem img={cartIcon} actionName="1205" action={() => {}} />
      <HeaderActionItem
        img={favIcon}
        actionName={consts.headerActionItemsNames.favourites}
        action={() => {
          setModalData(<CardContainer cards={cards} />);
          setModalHeader(consts.headerActionItemsNames.favourites);
          open();
        }}
      />
      {/* <HeaderActionItem img={profileIcon} actionName={consts.headerActionItemsNames.profile} /> */}
    </div>
  );
};
