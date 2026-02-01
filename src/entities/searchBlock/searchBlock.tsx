import { consts } from '../../shared/consts';
import { Heading } from '../../shared/heading/heading';
import { SearchInput } from '../../shared/searchInput/searchInput';

import styles from './searchBlock.module.css';

interface SearchBlockProps {
  setFilterQuery: (query: string) => void;
}

export const SearchBlock: React.FC<SearchBlockProps> = ({ setFilterQuery }) => {
  return (
    <div className={styles.searchBlockWrapper}>
      <Heading level="2" className={styles.heading}>
        {consts.searchBlock.title}
      </Heading>
      <SearchInput setFilterQuery={setFilterQuery} />
    </div>
  );
};
