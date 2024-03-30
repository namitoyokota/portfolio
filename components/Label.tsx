import styles from '../styles/label.module.css';

const Label = ({ children, alternate = false }): JSX.Element => {
    return <span className={alternate ? styles.alternate : styles.default}>{children}</span>;
};

export default Label;
