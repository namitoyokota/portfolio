import { useTheme } from 'next-themes';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const ThemeSwitch = (): JSX.Element => {
  const [mounted, setMounted] = React.useState(true);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  const isDark = theme === 'dark';
  const color = isDark ? '#fff' : '#000';
  const maskColor = isDark ? '#000' : '#fff';

  return (
    <Image
      className={styles.themeicon}
      alt="Sun Glasses"
      height="25px"
      width="25px"
      src={ isDark ? "/glasses.png" : "/face.png" }
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  );
};

export default ThemeSwitch;
