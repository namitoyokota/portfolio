import Image from 'next/legacy/image';
import styles from '../styles/footer.module.css';

const Footer = (): JSX.Element => {
    return (
        <>
            <div className={styles.footerpane}>
                <a className={styles.sociallink} href="https://github.com/namitoyokota" target="_blank" rel="noreferrer">
                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                    <span>github</span>
                </a>

                <a className={styles.sociallink} href="https://www.linkedin.com/in/namito/" target="_blank" rel="noreferrer">
                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                    <span>linkedin</span>
                </a>

                <a className={styles.sociallink} href="https://photos.namitoyokota.com" target="_blank" rel="noreferrer">
                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                    <span>photos</span>
                </a>

                <a className={styles.sociallink} href="mailto:namitoyokota@icloud.com">
                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                    <span>email</span>
                </a>
            </div>
        </>
    );
};

export default Footer;
