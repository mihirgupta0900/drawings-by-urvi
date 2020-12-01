// import "../tailwind/main.css";
import "../styles/global.css";
import { Chakra } from "../components/Chakra";

function MyApp({ Component, pageProps, cookies }) {
  // const darkMode = useDarkMode(false, {
  //   classNameDark: "dark",
  //   classNameLight: "light",
  // });

  return (
    // <ThemeProvider toggleTheme={darkMode.toggle} theme={darkMode.value}>
    // <ChakraProvider resetCSS={true}>
    <Chakra cookies={cookies}>
      <Component {...pageProps} />
    </Chakra>
    // </ChakraProvider>
    // </ThemeProvider>
  );
}

export { getServerSideProps } from "../components/Chakra";

export default MyApp;
