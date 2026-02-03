import type { FallbackProps } from 'react-error-boundary';

import { consts } from '../consts';
import { Heading } from '../heading/heading';
import { Typography } from '../typography/typography';

import styles from './fallback.module.css';

export const Fallback: React.FC<FallbackProps> = ({ error }) => {
  const err = error as Error;
  return (
    <div className={styles.errorContainer}>
      <Heading level="2">{consts.errors.generalError}</Heading>
      <Typography className={styles.errorDescription}>{err.message}</Typography>
    </div>
  );
};
