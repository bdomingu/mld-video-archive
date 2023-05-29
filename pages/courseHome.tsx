import Layout from "@/components/Layout";
import styles from "./courseHome.module.css";
import Courses from "../components/Courses";
import withAuth from "@/components/ProtectedRoute";

const CourseHome = () => {
  return (
    <Layout>
      <div className={styles.textContainer}>
        <h1>My Courses</h1>
        <p>
          In this digital age, it's crucial to know how to present yourself
          attractively online, decode and reciprocate non-verbal cues
          accurately, and delve into the psychological intricacies of the women
          you're interested in.
        </p>
      </div>
      <div className={styles.courseContainer}>
        <Courses />
      </div>
    </Layout>
  );
};

export default withAuth(CourseHome);
