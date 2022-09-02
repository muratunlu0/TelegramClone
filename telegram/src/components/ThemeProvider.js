import React, {useState} from 'react';
import {ThemeContext} from './theme';

import darkTheme from './dark';
import lightTheme from './light';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);

  const handleToggleTheme = () => {
    if (theme.type === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme: handleToggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
