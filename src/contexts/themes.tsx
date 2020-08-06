import React, { useState, useEffect } from 'react';

import { createContext } from 'react';
import AsyncStorage from '~/services/storage/auth';
import { ThemeType } from '~/styles/type';
import { Light, Dark } from '~/styles';
import { set } from 'react-native-reanimated';

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
      const storedUser = await AsyncStorage.getUser();
      if (storedUser) {
        setThemeName(storedUser);
      }
    }
    )();
  }, []);


  function toggleTheme() {
    if (themeName === 'light') {
      setThemeName('dark')
      setTheme(Light)
    } else {
      setThemeName('light')
      setTheme(Dark)
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
