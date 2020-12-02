import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from "./ThemeProvider";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <DarkModeToggle
      onChange={toggleTheme}
      size={32}
      speed={4}
      checked={theme}
    />
  );
};

export default ThemeToggle;
