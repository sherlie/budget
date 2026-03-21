import { style } from '@vanilla-extract/css';

export const nav = style({
  position: "fixed",
  bottom: "1em",
  left: 0,
  width: "100%",
  backgroundColor: 'rgb(119, 91, 145)',
});

export const navList = style({
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
});

export const navLink = style({
  textDecoration: 'none',
  fontWeight: 'bold',
  color: 'white',
})