import styles from './Background.module.css'
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <background className={styles.Background}>
        <Image src="/lainnoblack.png" layout="fill"/>
      </background>
    </>
  )
}
