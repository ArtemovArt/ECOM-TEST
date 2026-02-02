import { ActionsBlock } from '../../entities/headerActionsBlock/headerActionsBlock';
import { Logo } from '../../entities/logo/logo';

import styles from './header.module.css';

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Logo />
      <ActionsBlock />
    </div>
  );
};
