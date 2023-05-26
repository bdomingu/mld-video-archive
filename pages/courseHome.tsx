import Layout from '@/components/Layout';
import styles from './courseHome.module.css';
import Courses from '../components/Courses';
import withAuth from '@/components/ProtectedRoute';

const CourseHome = () => {
    return (
        <Layout>
            <div className={styles.textContainer}>
                <h1>My Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem facilisis iaculis 
                 pretium sagittis eget. Sollicitudin feugiat iaculis justo lacus 
                bibendum. Non in eu est nec laoreet in dignissim 
                </p>
            </div>
            <div className={styles.courseContainer}>
                <Courses/>
            </div>
        </Layout>
    )
}

export default withAuth(CourseHome);