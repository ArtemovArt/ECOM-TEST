import { consts } from '../../shared/consts';
import { Heading } from '../../shared/heading/heading';
import { SearchInput } from '../../shared/searchInput/searchInput';

import styles from './searchBlock.module.css';

export const SearchBlock = () => {
  return (
    <div className={styles.searchBlockWrapper}>
      <Heading level="2" className={styles.heading}>
        {consts.searchBlock.title}
      </Heading>
      <SearchInput />
    </div>
  );
};
