import imgLogo from '../../assets/image 4.png'
import { consts } from '../../shared/consts'
import { Heading } from '../../shared/heading/heading'
import { Typography } from '../../shared/typography/typography'

import styles from './logo.module.css'

export const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img src={imgLogo}></img>
      <div className={styles.logoTextBlock}>
        <Heading level="3" as="span" className={styles.logoTitle}>
          {consts.logoTexts.logoTitle}
        </Heading>
        <Typography as="span">{consts.logoTexts.logoDescription}</Typography>
      </div>
    </div>
  )
}
