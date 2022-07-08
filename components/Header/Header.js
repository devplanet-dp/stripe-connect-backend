import styles from "../../styles/Header.module.css"
import Link from "next/link"
export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <div className={styles.headerLink}>SUGU Connect Payments</div>
      </Link>
      <div>
        <span className={styles.brandName}>SUGU</span>{" "}
        <img className={styles.logo} src="/favicon.ico" />
      </div>
    </div>
  )
}
