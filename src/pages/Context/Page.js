import ThemeContextProvider from "./ThemeContext";
import HelloWorld from "./HelloWorld";

const Page = () => {
  return (
    <ThemeContextProvider>
      <HelloWorld />
    </ThemeContextProvider>
  );
};

export default Page;
