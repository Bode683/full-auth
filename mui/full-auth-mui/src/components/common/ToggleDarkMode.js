"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemePaletteModeContext = React.createContext({
  toggleThemePaletteMode: () => {}
});

const ToggleThemePaletteMode = () => {
  const theme = useTheme();
  const themePaletteModeContext = React.useContext(ThemePaletteModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "left",
        bgcolor: "background.default",
        color: "text.primary"
      }}
    >
      <IconButton
        sx={{ ml: 1 }}
        onClick={themePaletteModeContext.toggleThemePaletteMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};

export default function App() {
  const isSystemDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [themePaletteMode, setThemePaletteMode] = React.useState(
    isSystemDarkMode ? "dark" : "light"
  );

  const themePaletteModeContextProvider = React.useMemo(
    () => ({
      toggleThemePaletteMode: () => {
        setThemePaletteMode((prevMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      }
    }),
    []
  );

  const themeProvider = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themePaletteMode
        }
      }),
    [themePaletteMode]
  );

  return (
    <ThemePaletteModeContext.Provider value={themePaletteModeContextProvider}>
      <ThemeProvider theme={themeProvider}>
        <CssBaseline />
        <ToggleThemePaletteMode />
       
      </ThemeProvider>
    </ThemePaletteModeContext.Provider>
  );
}
