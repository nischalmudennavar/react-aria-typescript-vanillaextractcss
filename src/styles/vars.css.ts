import {
  createGlobalTheme,
  createThemeContract,
  createTheme,
} from "@vanilla-extract/css";

export const root = createGlobalTheme("#root", {
  // set padding and margin to 0
});

const colors = createThemeContract({
  primary: null,
  secondary: null,
  textFieldBorder: null,
  textFieldBg: null,
});

export const light = createTheme(colors, {
  primary: "#fff",
  secondary: "#1c1c1c",
  textFieldBorder: "1px solid #1c1c1c33",
  textFieldBg: "#dcdcdc44",
});

export const dark = createTheme(colors, {
  primary: "#1F0E2F",
  secondary: "#F2F2F2",
  textFieldBorder: "1px solid #F2F2F222",
  textFieldBg: "#dcdcdc22",
});

export const vars = { ...root, colors }; // export all themes
