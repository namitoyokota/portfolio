import styles from '../styles/skeleton.module.css';

const Skeleton = ({ height, width }): JSX.Element => {
    return <div className={styles.skeleton} style={{ height: height, width: width }}></div>;
};

export default Skeleton;
