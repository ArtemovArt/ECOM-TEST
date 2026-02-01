import { useMemo } from 'react';

import searchIcon from '../../assets/searchIcon.svg';
import { debounce } from '../utils/debounce';

import styles from './searchInput.module.css';

interface SearchBlockProps {
  setFilterQuery: (query: string) => void;
}

export const SearchInput: React.FC<SearchBlockProps> = ({ setFilterQuery }) => {
  const debouncedSetFilter = useMemo(() => debounce((value: string) => setFilterQuery(value), 300), [setFilterQuery]);
  return (
    <div className={styles.searchInputWrapper}>
      <img className={styles.searchIcon} src={searchIcon} />
      <input
        className={styles.searchInput}
        name="search"
        placeholder="Поиск..."
        onChange={(e) => debouncedSetFilter(e.target.value)}
      />
    </div>
  );
};
