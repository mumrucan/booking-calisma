import Layout from '../components/layout'
import SearchIndex from '../components/searchindex'
import styles from '../components/styles/index.module.css'



function HomePage({ characters }) {
  return (
    <div className={styles.div}>
      <Layout>
        <SearchIndex/>
      </Layout>
    </div>
  )
}


export default HomePage
