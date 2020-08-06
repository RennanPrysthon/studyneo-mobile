import React, { useState, useEffect } from 'react';

import { createContext } from 'react';
import AsyncStorage from '~/services/storage/themes';
import { ThemeType } from '~/styles/type';
import { Light, Dark } from '~/styles';

interface ThemeContextData {
  toggleTheme: () => void;
  theme: ThemeType;
}
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemesProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(Dark);
  const [themeName, setThemeName] = useState('dark');

  useEffect(() => {
    (async () => {
      const name = await AsyncStorage.getTheme();
      if (name) {
        setThemeName(name);
      } else {
        AsyncStorage.setTheme('light')
      }
    }
    )();
  }, []);


  function toggleTheme() {
    if (themeName === 'light') {
      setThemeName('dark')
      setTheme(Dark)
      AsyncStorage.setTheme('dark')
    } else {
      setThemeName('light')
      setTheme(Light)
      AsyncStorage.setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
