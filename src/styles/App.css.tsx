import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export const flex = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: vars.colors.primary,
  color: vars.colors.secondary,
});

export const button = style({
  background: vars.colors.secondary,
  color: vars.colors.primary,
  border: "none",
  fontSize: "1rem",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
  margin: "1rem",
  outline: "none",
  boxShadow: "0 5px 10px 3px rgba(4, 4,4, 0.2)",
  transition: "all 0.05s ease-in-out",
  fontWeight: "600",

  ":active": {
    transform: "scale(0.96)",
    transition: "all 0.05s ease-in-out",
  },
});

export const textField = style({
  padding: "1rem 2rem",
  border: vars.colors.textFieldBorder,
  backgroundColor: vars.colors.textFieldBg,
  margin: "1rem",
  borderRadius: "0.5rem",
  color: vars.colors.secondary,
  fontSize: "1rem",
  outline: "none",
});

export const colorVariant = styleVariants(vars.colors, (color) => ({
  background: color,
}));
