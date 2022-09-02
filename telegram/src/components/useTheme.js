import {useContext} from 'react';
import {ThemeContext} from './theme';

const useTheme = () => {
  // object/array destruct
  const themeContext = useContext(ThemeContext);

  return themeContext;
};

export default useTheme;
