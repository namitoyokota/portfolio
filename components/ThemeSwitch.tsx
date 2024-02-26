import { useTheme } from 'next-themes';
import Image from 'next/legacy/image';
import styles from '../styles/theme.module.css';

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
            src={isDark ? 'https://api.namitoyokota.com/assets/logos/white.svg' : 'https://api.namitoyokota.com/assets/logos/black.svg'}
            onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
        />
    );
};

export default ThemeSwitch;
