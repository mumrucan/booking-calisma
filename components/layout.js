import Navigation from '../components/navigation';
import styles from './styles/layout.module.css'



import Head from 'next/head';
export default function Layout({ children }) {
  return (

      <div className={styles.container}>
        <Navigation className={styles.nav}/>
        <Head>
          <title>StudentsBooking - Housing and Experience</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

<script defer src="/your-path-to-fontawesome/js/brands.js"></script>
  <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
  <script defer src="/your-path-to-fontawesome/js/fontawesome.js"></script>
        </Head>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>Designed by Tunç Yanık</footer>

      </div>
  );
}
