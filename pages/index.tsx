import Layout from '@/components/Layout';
import styles from './index.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.heroImage}>
            <img src='/images/mld.png'/>
          </div>
          <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h1>MLD Videos & Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem facilisis iaculis pretium sagittis eget. 
              Sollicitudin feugiat iaculis justo lacus bibendum. Non in eu est nec laoreet in dignissim 
              scelerisque sagittis. Consectetur nibh fusce nibh platea et. Odio mattis at faucibus velit.
               Vitae justo quis ornare vivamus ornare. Nulla neque massa ultrices non.</p>
            <div className={styles.button}>
              <Link href='/login' passHref >
              <button>Get Started</button>
              </Link>
            
            </div>
          </div>
        </div>
        </div>
      </Layout>
    </div>
      
   
  )
}
