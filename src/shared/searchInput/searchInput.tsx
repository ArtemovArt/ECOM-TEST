import searchIcon from '../../assets/searchIcon.svg';

import styles from './searchInput.module.css';

export const SearchInput = () => {
  return (
    <div className={styles.searchInputWrapper}>
      <img className={styles.searchIcon} src={searchIcon} />
      <input className={styles.searchInput} name="search" placeholder="Поиск..." />
    </div>
  );
};
