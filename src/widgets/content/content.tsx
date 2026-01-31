import { SearchBlock } from '../../entities/searchBlock/searchBlock';
import { useGetData } from '../../shared/hooks/useGetData';
import { CardContainer } from '../cardContainer/cardContainer';

import styles from './content.module.css';

// const cardsArray: CardsArray = [
//   { id: '1', description: 'Card 1', img: testImg1, isFav: false, price: '12 999', isAddedInCard: false },
//   { id: '2', description: 'Card 2', img: testImg2, isFav: true, price: '8 999', isAddedInCard: true },
//   { id: '3', description: 'Card 3', img: testImg1, isFav: false, price: '15 999', isAddedInCard: false },
//   { id: '4', description: 'Card 4', img: testImg2, isFav: true, price: '7 999', isAddedInCard: true },
//   { id: '1', description: 'Card 1', img: testImg1, isFav: false, price: '12 999', isAddedInCard: false },
//   { id: '2', description: 'Card 2', img: testImg2, isFav: true, price: '8 999', isAddedInCard: true },
//   { id: '3', description: 'Card 3', img: testImg1, isFav: false, price: '15 999', isAddedInCard: false },
//   { id: '4', description: 'Card 4', img: testImg2, isFav: true, price: '7 999', isAddedInCard: true },
// ];
export const Content = () => {
  const { isPending, data, error } = useGetData();
  console.log('data', data);
  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Oops..</div>;

  return (
    <div className={styles.content}>
      <SearchBlock />
      <CardContainer cards={data ?? []} />
    </div>
  );
};
