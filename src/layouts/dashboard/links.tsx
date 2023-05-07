import { Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import { Link } from "react-router-dom";
import { House, User } from "@phosphor-icons/react";
import { customLinkSyles } from "./styles";

interface LinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
}

const ROUTES = [
  {icon: <House size={16} />, color: "blue", label: "Home", path: "/home"},
  {icon: <User size={16} />, color: "grape", label: "Users", path: "/users"},
];

function CustomLink({icon, color, label, path}: LinkProps) {
  return (
    <UnstyledButton
      sx={customLinkSyles}
    >
      <Link to={path}>
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </Link>
    </UnstyledButton>
  );
}

export function Links() {
  const links = ROUTES.map((link) => <CustomLink {...link} key={link.label} />);

  return <div>{links}</div>;
}
