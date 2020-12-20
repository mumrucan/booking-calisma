import Link from 'next/link';

import styles from './styles/searchindex.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchIndex() {
  return (
    <div className={styles.container}>
      <div className={styles.row1}>
        <p>Welcome to the StudentsBooking</p>
        <p>Please select a service.. </p>
      </div>

      <div className={styles.row2}>
        <div className={styles.box1}>
          <div className={styles.boxtext}>
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div className={styles.boxcontent}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                100% online. Find and book your new home in minutes.
              </li>
              <li className={styles.li}>
                We visit the property so you can book from wherever you are.
              </li>
              <li className={styles.li}>
                Video tours, quality photos and floorplans for easy comparison.
              </li>
              <li className={styles.li}>
                Move in with confidence. If anything is wrong on arrival, we’ll
                sort it.
              </li>
            </ul>
          </div>
          <div className={styles.enter}>
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>

            <div>
              <Link href="http://studentsbooking.com">
                <a className={styles.a}>Live Anywhere</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.boxtext}>
            <FontAwesomeIcon icon={faInfo} />
          </div>
          <div className={styles.boxcontent}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                100% online. Find and book your new home in minutes.
              </li>
              <li className={styles.li}>
                We visit the property so you can book from wherever you are.
              </li>
              <li className={styles.li}>
                Video tours, quality photos and floorplans for easy comparison.
              </li>
              <li className={styles.li}>
                Move in with confidence. If anything is wrong on arrival, we’ll
                sort it.
              </li>
            </ul>
          </div>
          <div className={styles.enter}>
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>

            <div>
              <Link href="http://studentsbooking.com">
                <a className={styles.a}>Experience the World</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
