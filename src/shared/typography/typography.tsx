import classNames from 'classnames'

import type { TypographyProps } from '../types'

import styles from './typography.module.css'

export const Typography: React.FC<TypographyProps> = ({ children, as, className }) => {
  switch (as) {
    case 'div':
      return <div className={classNames(styles.typography, className)}>{children}</div>
    case 'span':
      return <span className={classNames(styles.typography, className)}>{children}</span>
    case 'strong':
      return <strong className={classNames(styles.typography, className)}>{children}</strong>
    default:
      return <p className={classNames(styles.typography, className)}>{children}</p>
  }
}
