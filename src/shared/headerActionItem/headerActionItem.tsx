import type { IHeaderActionItem } from '../types';
import { Typography } from '../typography/typography';

import styles from './headerActionItem.module.css';

export const HeaderActionItem: React.FC<IHeaderActionItem> = ({ img, actionName, action }) => {
  return (
    <div className={styles.headerActionItemWrapper} onClick={() => action()}>
      <img src={img} />
      <Typography as="span">{actionName}</Typography>
    </div>
  );
};
