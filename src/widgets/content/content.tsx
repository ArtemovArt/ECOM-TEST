import { useState } from 'react';

import { SearchBlock } from '../../entities/searchBlock/searchBlock';
import { useGetData } from '../../shared/hooks/useGetData';
import Spinner from '../../shared/spinner/spinner';
import { CardContainer } from '../cardContainer/cardContainer';

import styles from './content.module.css';

export const Content = () => {
  const { isPending, data, error } = useGetData();
  const [filterQuery, setFilterQuery] = useState('');

  if (isPending) return <Spinner />;

  if (error) return <div>Oops..</div>;

  return (
    <div className={styles.content}>
      <SearchBlock setFilterQuery={setFilterQuery} />
      <CardContainer cards={data ?? []} filterQuery={filterQuery} />
    </div>
  );
};
