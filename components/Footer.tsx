import Image from 'next/legacy/image';
import styles from '../styles/footer.module.css';

const Footer = (): JSX.Element => {
    return (
        <>
            <div className={styles.footerpane}>
                <a className="sentence" href="https://github.com/namitoyokota" target="_blank" rel="noreferrer">
                    <span>GitHub</span>
                    <Image alt="link" height="12" width="12" src="/icons/link.svg" />
                </a>

                <a className="sentence" href="https://www.linkedin.com/in/namito/" target="_blank" rel="noreferrer">
                    <span>LinkedIn</span>
                    <Image alt="link" height="12" width="12" src="/icons/link.svg" />
                </a>

                <a className="sentence" href="https://www.goodreads.com/user/show/105857646-namito-yokota" target="_blank" rel="noreferrer">
                    <span>Goodreads</span>
                    <Image alt="link" height="12" width="12" src="/icons/link.svg" />
                </a>

                <a className="sentence" href="https://photos.namitoyokota.com" target="_blank" rel="noreferrer">
                    <span>Photos</span>
                    <Image alt="link" height="12" width="12" src="/icons/link.svg" />
                </a>

                <a className="sentence" href="mailto:namitoyokota@icloud.com">
                    <span>Email</span>
                    <Image alt="link" height="12" width="12" src="/icons/link.svg" />
                </a>

                <a className="sentence" href="https://resume.namitoyokota.com/resume.html" target="_blank" rel="noreferrer">
                    <span>Resume</span>
                    <Image alt="link" height="12" width="12" src="/icons/link.svg" />
                </a>
            </div>
        </>
    );
};

export default Footer;
