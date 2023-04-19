import Layout from '@/components/Layout'
import styles from './courseView.module.css'
import Accordion from '@/components/Accordion'

export default function CourseView() {
    return (
        <Layout>
            <>
            <div className={styles.textContainer}>
                <h1>My Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem facilisis iaculis pretium 
                    sagittis eget. Sollicitudin feugiat iaculis justo lacus bibendum. Non in 
                    eu est nec laoreet in dignissim scelerisque sagittis. Consectetur nibh fusce 
                    nibh platea et. Odio mattis at faucibus velit. Vitae justo quis ornare vivamus 
                    ornare. Nulla neque massa ultrices non.
                </p>
            </div>
            <div className={styles.progressContainer}>
                <h3>Course Progress:</h3>
            </div>
            <div className={styles.accordionContainer}>
                <Accordion title="Video 1">
                    <div className={styles.video}></div>
                    <div className={styles.videoText}>
                        <h3>Title</h3>
                        <p>Description: Lorem ipsum dolor sit amet consectetur. Lorem facilisis 
                            iaculis pretium sagittis eget. Sollicitudin feugiat iaculis justo lacus
                            bibendum. Non in eu est nec laoreet in dignissim scelerisque sagittis. 
                            Consectetur nibh fusce nibh platea et. Odio mattis at faucibus velit.
                            Vitae justo quis ornare vivamus ornare. Nulla neque massa ultrices non.
                        </p>
                    </div>
                </Accordion>
                <Accordion title="Video 2">
                    <div className={styles.video}></div>
                    <div className={styles.videoText}>
                        <h3>Title</h3>
                        <p>Description: Lorem ipsum dolor sit amet consectetur. Lorem facilisis 
                            iaculis pretium sagittis eget. Sollicitudin feugiat iaculis justo lacus
                            bibendum. Non in eu est nec laoreet in dignissim scelerisque sagittis. 
                            Consectetur nibh fusce nibh platea et. Odio mattis at faucibus velit.
                            Vitae justo quis ornare vivamus ornare. Nulla neque massa ultrices non.
                        </p>
                    </div>
                </Accordion>
                <Accordion title="Video 3">
                    <div className={styles.video}></div>
                    <div>
                        <h3>Title</h3>
                        <p>Description: Lorem ipsum dolor sit amet consectetur. Lorem facilisis 
                            iaculis pretium sagittis eget. Sollicitudin feugiat iaculis justo lacus
                            bibendum. Non in eu est nec laoreet in dignissim scelerisque sagittis. 
                            Consectetur nibh fusce nibh platea et. Odio mattis at faucibus velit.
                            Vitae justo quis ornare vivamus ornare. Nulla neque massa ultrices non.
                        </p>
                    </div>
                </Accordion>
            </div>
            </>
        </Layout>
    )
}