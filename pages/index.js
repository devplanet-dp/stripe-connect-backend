import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className="container">
      <main className="main">
      <Link href="/register">
            <div className={styles.card}>
              <h3>Register to receive payments &rarr;</h3>
              <p>Register yourself as a service provider</p>
            </div>
          </Link>
      </main>
    </div>
  )
}
