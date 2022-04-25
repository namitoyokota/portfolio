import { useTheme } from 'next-themes';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import useSound from 'use-sound';

const ThemeSwitch = (): JSX.Element => {

  /** Sets dark mode or light mode theme */
  const { theme, setTheme } = useTheme();

  /** Indicates current state of theme */
  const isDark = theme === 'dark';

  /** Plays click sound on button press */
  const [play] = useSound('/sound/stop.mp3');

  return (
    <Image
      className={styles.themeicon}
      alt="theme"
      height="25px"
      width="25px"
      src={ isDark ? "/icons/dark.svg" : "/icons/light.svg" }
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        play()
      }}
    />
  );
};

export default ThemeSwitch;
