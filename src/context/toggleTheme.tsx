import { ThemeProvider, createTheme } from '@mui/material';
import { createContext, ReactNode, useMemo, useState } from 'react';

interface ComponentProps {
  children: ReactNode;
}

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: 'light' | 'dark';
}

export const ColorModeContext = createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: 'light',
});

const themeObj = {
  light: {
    palette: {
      primary: {
        main: 'hsl(270, 95%, 60%)',
      },
      grey: {
        primary: '#cacde8',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: ' rgba(0, 0, 0, 0.38)',
      },
    },
    background: {
      default: 'hsl(0, 0%, 100%)',
      paper: 'hsl(235, 32%, 92%)',
    },
  },

  dark: {
    palette: {
      primary: {
        main: '#8717ff',
      },
      grey: {
        primary: '#4d5066',
      },
      text: {
        primary: '#fff',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
      },
    },
    background: {
      default: 'hsl(0, 0%, 5%)',
      paper: 'hsl(0, 0%, 7%)',
    },
  },
};

function ColorContextProvider({ children }: ComponentProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...themeObj[mode],
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}> {children} </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ColorContextProvider;
