import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";
import { mantineTheme, setTheme } from "../../theme/MantineTheme";
import DashboardContent from "./DashboardContent";
import "./DashboardContent.css";

export default function Dashboard() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(mantineTheme.colorScheme || "light");

  function toggleColorScheme(value?: ColorScheme) {
    setTheme(colorScheme === "dark" ? "light" : "dark");
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <DashboardContent />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}