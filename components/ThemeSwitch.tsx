import { useTheme } from 'next-themes';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import useSound from 'use-sound';

const ThemeSwitch = (): JSX.Element => {
  const [mounted, setMounted] = React.useState(true);
  const { theme, setTheme } = useTheme();
  const [play] = useSound('/sound/stop.mp3');

  React.useEffect(() => setMounted(true), []);

  const isDark = theme === 'dark';

  return (
    <Image
      className={styles.themeicon}
      alt="Sun Glasses"
      height="25px"
      width="25px"
      src={ isDark ? "/glasses.png" : "/face.png" }
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        play()
      }}
    />
  );
};

export default ThemeSwitch;
