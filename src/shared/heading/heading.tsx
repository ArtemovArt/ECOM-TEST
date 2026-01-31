import classNames from 'classnames';

import type { HeadingProps } from '../types';

import styles from './heading.module.css';

export const Heading: React.FC<HeadingProps> = ({ children, className, level, as }) => {
  if (as) {
    switch (as) {
      case 'div':
        return <div className={classNames(styles.heading, className)}>{children}</div>;
      case 'span':
        return <span className={classNames(styles.heading, className)}>{children}</span>;
      case 'p':
        return <p className={classNames(styles.heading, className)}>{children}</p>;
    }
  }
  switch (level) {
    case '1':
      return <h1 className={classNames(styles.heading, className)}>{children}</h1>;
    case '2':
      return <h2 className={classNames(styles.heading, className)}>{children}</h2>;
    case '3':
      return <h3 className={classNames(styles.heading, className)}>{children}</h3>;
    case '4':
      return <h4 className={classNames(styles.heading, className)}>{children}</h4>;
    case '5':
      return <h5 className={classNames(styles.heading, className)}>{children}</h5>;
    default:
      return <h3 className={classNames(styles.heading, className)}>{children}</h3>;
  }
};
