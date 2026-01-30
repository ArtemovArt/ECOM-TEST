import cartIcon from '../../assets/Group.svg'
import profileIcon from '../../assets/Union.svg'
import favIcon from '../../assets/zmdi_favorite-outline.svg'
import { consts } from '../../shared/consts'
import { HeaderActionItem } from '../../shared/divider/headerActionItem/headerActionItem'

import styles from './headerActionsBlock.module.css'

export const ActionsBlock = () => {
  return (
    <div className={styles.headerActionsBlockWrapper}>
      <HeaderActionItem img={cartIcon} actionName="1205" />
      <HeaderActionItem img={favIcon} actionName={consts.headerActionItemsNames.favourites} />
      <HeaderActionItem img={profileIcon} actionName={consts.headerActionItemsNames.profile} />
    </div>
  )
}
