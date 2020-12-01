import { useTheme } from "../components/theme";
import {
  Button,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeToggle from "../components/themeToggle";
import Navbar from "../components/Navbar";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  // const {} = useColorMode()

  return (
    <div className="">
      <Navbar />
      <Heading size="4xl" className="">
        Hello
      </Heading>
      <Button colorScheme="teal" size="sm">
        Click
      </Button>
    </div>
  );
};

export default Home;
