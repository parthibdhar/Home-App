import { light } from '@mui/material/styles/createPalette';

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    height: {
      header: '560px',
      rate: '400px',
    },
    fontSize: {
      h1: '2.6rem',
    },
    screens: {
      xs: '475px',
      lg:'1136px',
      md:'813px',
    },
    colors: {
      main: 'rgb(244,242,238)',
      subMain: '#F20000',
      dry: '#0B0F29',
      star: '#FFB000',
      text: 'black',
      textLight: "#BFBFBF",
      border: '#4b5563',
      dryGray: '#E0D5D5',
      pnk: "#E9A8F2",
      rd: "#BF3131",
      mediablue: "#509DEC",
      eventcolor: "#C37D16",
      article: "#E06847"
    },
  },
};
export const plugins = [
  require('@tailwindcss/line-clamp'),
];