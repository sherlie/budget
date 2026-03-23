import { style } from "@vanilla-extract/css";

export const nav = style({
  position: "fixed",
  bottom: "1em",
  left: 0,
  width: "100%",
  backgroundColor: "rgb(119, 91, 145)",
});

export const navList = style({
  listStyle: "none",
  display: "flex",
  paddingInlineStart: 0,
  marginBlockStart: 0,
  marginBlockEnd: 0,
  margin: 0,
});

export const navLink = style({
  textDecoration: "none",
  fontWeight: "bold",
  color: "white",
  display: "flex",
  alignItems: "center",
  padding: "0.7rem",
});

export const activeNavLink = style([
  navLink,
  {
    backgroundColor: "rgb(199, 157, 239)",
  },
]);
