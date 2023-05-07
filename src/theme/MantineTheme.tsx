import { MantineThemeOverride } from "@mantine/core";

export function setTheme(theme: "dark" | "light") {
  mantineTheme.colorScheme = theme;
}

export const mantineTheme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: "grape",
  defaultRadius: "md",
  loader: "dots",
  cursorType: "pointer",
};