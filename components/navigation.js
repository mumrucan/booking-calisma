import Link from 'next/link'
import styles from './styles/nav.module.css'

export default function Navigation() {
    return (
  <nav className={styles.nav}>
      <Link href='/'>
          <a className={styles.logo}>StudentsBooking</a>
      </Link>
      <Link href='/listings'>
          <a className={styles.a}>Blog</a>
      </Link>
      <Link href='/about'>
          <a className={styles.a}>About</a>
      </Link>
      <Link href='/'>
          <a className={styles.a}>Sign Up</a>
      </Link>
      <Link href='/'>
          <a className={styles.a}>Login</a>
      </Link>

      <style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
</style>
      
  </nav>
    )
  }
  