import styles from '../styles/footer.module.css';

const Footer = (): JSX.Element => {
    return (
        <>
            <div className={styles.footerpane}>
                <div className={styles.sociallinks}>
                    <a className={styles.sociallink} href="https://github.com/namitoyokota" target="_blank" rel="noreferrer">
                        GitHub
                    </a>

                    <a className={styles.sociallink} href="https://www.linkedin.com/in/namito/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>

                    <a className={styles.sociallink} href="https://photos.namitoyokota.com" target="_blank" rel="noreferrer">
                        Photos
                    </a>
                </div>

                <p className={styles.copyright}>© 2024 Namito Yokota</p>
            </div>
        </>
    );
};

export default Footer;
