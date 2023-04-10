import { useTheme } from 'next-themes';
import Image from 'next/legacy/image';
import styles from '../styles/Home.module.css';

const ThemeSwitch = (): JSX.Element => {
    /** Sets dark mode or light mode theme */
    const { theme, setTheme } = useTheme();

    /** Indicates current state of theme */
    const isDark = theme === 'dark';

    return (
        <Image
            className={styles.themeicon}
            alt="theme"
            height="25"
            width="25"
            src={isDark ? '/icons/dark.svg' : '/icons/light.svg'}
            onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
        />
    );
};

export default ThemeSwitch;
