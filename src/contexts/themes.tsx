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
  const [theme, setTheme] = useState<ThemeType>(Light);
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    (async () => {
      const name = await AsyncStorage.getTheme();
      console.log(name)
      if (name !== '' && name !== null) {
        setThemeName(name);
      } else {
        await AsyncStorage.setTheme('light')
      }
    })();
  }, []);


  useEffect(() => {
    if (themeName === 'dark') {
      setTheme(Dark)
    } else {
      setTheme(Light)
    }
  }, [themeName])


  async function toggleTheme() {
    if (themeName === 'light') {
      setThemeName('dark')
      setTheme(Dark)
      await AsyncStorage.setTheme('dark')
    } else {
      setThemeName('light')
      setTheme(Light)
      await AsyncStorage.setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
