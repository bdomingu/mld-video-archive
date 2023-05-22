import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import styles from './video.module.css'

export default function VideoPage() {
    const router = useRouter();
    const embedUrl = Array.isArray(router.query.embedUrl)
    ? router.query.embedUrl[0]
    : router.query.embedUrl;

    return (
        <Layout>
        <div className={styles.videoContainer}>
            <iframe
            className={styles.videoIframe}
            src={embedUrl}
            allow="autoplay; fullscreen"
             allowFullScreen
            
            >

            </iframe>
        </div>
        </Layout>
    )
}