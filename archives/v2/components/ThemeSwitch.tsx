import { useTheme } from 'next-themes';
import Image from 'next/legacy/image';
import { useEffect } from 'react';
import { Theme } from '../models/enums/theme';
import styles from '../styles/theme.module.css';

const ThemeSwitch = (): JSX.Element => {
    /** Sets dark mode or light mode theme */
    const { theme, setTheme } = useTheme();

    /** Indicates current state of theme */
    const isDark = theme === Theme.dark;

    /** Event type to listen to */
    const changeEventType = 'change';

    /** Call back method called in device theme change */
    const themeChanger = (event: MediaQueryListEvent) => setTheme(event.matches ? Theme.light : Theme.dark);

    /** Update theme depending on device setting */
    useEffect(() => {
        const themeWatcher = window.matchMedia(`(prefers-color-scheme: ${Theme.light})`);
        if (themeWatcher.matches) {
            setTheme(Theme.light);
        }

        themeWatcher.addEventListener(changeEventType, themeChanger);
        return () => themeWatcher.removeEventListener(changeEventType, themeChanger);
    }, []);

    return (
        <button
            className={styles.button}
            title="Toggle theme"
            onClick={() => {
                setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
            }}
        >
            <Image
                className={styles.icon}
                alt="Toggle theme"
                height="20"
                width="20"
                src={`https://api.namitoyokota.com/assets/logos/${isDark ? 'white' : 'black'}.svg`}
            />
        </button>
    );
};

export default ThemeSwitch;
