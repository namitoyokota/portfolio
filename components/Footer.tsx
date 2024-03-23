import Image from 'next/legacy/image';
import styles from '../styles/footer.module.css';

const Footer = (): JSX.Element => {
    return (
        <>
            <div className={styles.footerpane}>
                <a href="https://github.com/namitoyokota" target="_blank" rel="noreferrer">
                    <span>GitHub</span>
                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                </a>

                <a href="https://www.linkedin.com/in/namito/" target="_blank" rel="noreferrer">
                    <span>LinkedIn</span>
                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                </a>

                <a href="https://photos.namitoyokota.com" target="_blank" rel="noreferrer">
                    <span>Photos</span>
                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                </a>

                <a href="https://api.namitoyokota.com/assets/documents/resume.pdf" target="_blank" rel="noreferrer">
                    <span>Resume</span>
                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                </a>

                <a href="mailto:namitoyokota@icloud.com">
                    <span>Email</span>
                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                </a>
            </div>
        </>
    );
};

export default Footer;
