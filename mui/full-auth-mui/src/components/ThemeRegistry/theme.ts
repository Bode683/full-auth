'use client';

import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#037C8F',
    },
    secondary: {
      main: '#002A37',
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#111111',
          color: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none',
          color: '#fff',
          margin: '0.5rem',
          backgroundColor: '#027486',
          border: '1px solid',
          borderColor: '#007788',
          borderRadius: 0, 
          '&:hover': {
            borderColor: '#07a4bc',
            backgroundColor: '#007788',
          },
        },
        outlined: {
          textTransform: 'none',
          borderRadius: 0, 
          
        },
        text: {
          textTransform: 'none',
          borderRadius: 0, 
          
        },
        
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#fff',
          textDecoration: 'none',
          margin: '1rem',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          },
        }
      }
    }
  },
});

export const text = '#035A64';
export const title = '#002A37';
export const bg_card = '#DCE8E8';
export const palette = theme.palette;
export default theme;
