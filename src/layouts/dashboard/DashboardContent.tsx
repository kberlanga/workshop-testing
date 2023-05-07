import { ActionIcon, AppShell, Header, Navbar, useMantineColorScheme } from "@mantine/core";
import { MoonStars, Sun } from "@phosphor-icons/react";
import { Outlet } from "react-router-dom";
import { Links } from "./links";

export default function DashboardContent() {
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();

  return (
    <AppShell
      header={
        <Header className="header" height={60} p="xs">
          <ActionIcon data-testid="theme-button" onClick={() => toggleColorScheme()}>
            {colorScheme === "light" ? <MoonStars size={18} /> : <Sun size={18} />}
          </ActionIcon>
        </Header>
      }
      navbar={
        <Navbar p="xs" width={{base: 200}}>
          <Navbar.Section grow mt="xs">
            <Links />
          </Navbar.Section>
        </Navbar>
      }
      padding="md"
      styles={(theme) => ({
        main: {
          backgroundColor: colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
}
