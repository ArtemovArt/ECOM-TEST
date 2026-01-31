import { Divider } from '../../shared/divider/divider';
import { Content } from '../../widgets/content/content';
import { Header } from '../../widgets/header/header';

import styles from './layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Divider />
      <Content />
    </div>
  );
};
