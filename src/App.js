import React, { useState } from 'react';
import Package from '../package.json';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import color from '@edma/design-tokens/js/color';
import Routing from './components/Routing';

// Current version synced from package.json
const appVer = Package.version;

// Define custom component styles
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  }
}));

export default function App() {
  const custom = useStyles();

  // Define Kirby theme colors using Tokens in App state,
  // so that we can let users customize them later.
  const [theme, setTheme] = useState({
    palette: {
      type: 'dark',
      primary: {
        light: color.b100,
        main: color.b300,
        dark: color.b500,
      },
      secondary: {
        light: color.p100,
        main: color.p300,
        dark: color.p500,
      },
      error: {
        light: color.r100,
        main: color.r300,
        dark: color.r500,
      },
    },
  });

  // Toggles between light and dark modes.
  // This uses all the values defined above, except for palette type.
  const toggleDarkMode = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType,
        primary: {
          light: theme.palette.primary.light,
          main: theme.palette.primary.main,
          dark: theme.palette.primary.dark,
        },
        secondary: {
          light: theme.palette.secondary.light,
          main: theme.palette.secondary.main,
          dark: theme.palette.secondary.dark,
        },
        error: {
          light: theme.palette.error.light,
          main: theme.palette.error.main,
          dark: theme.palette.error.dark,
        }
      }
    });
  };

  const kirby = createMuiTheme (theme);

  return (
    <ThemeProvider theme={kirby}>
      <div className="App">
        <div className={custom.root}>
          <CssBaseline />
          <Routing onToggle={toggleDarkMode} version={appVer} />
        </div>
      </div>
    </ThemeProvider>
  );
}
