import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "../components/ThemeProvider";
import "../styles/globals.css";
import "../styles/masonry.scss";

function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(false, {
    classNameLight: "light",
    classNameDark: "dark",
  });

  return (
    <ThemeProvider theme={darkMode.value} toggleTheme={darkMode.toggle}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
