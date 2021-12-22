import { useContext } from "react";
import ThemeContextProvider, { ThemeContext } from "./ThemeContext";

const Playground = () => {
  const { list, setList } = useContext(ThemeContext);

  const onPushHandler = () => {
    setList((items) => {
      return [...items, Math.random()];
    });
  };

  const onPopHandler = () => {
    setList((prevState) => {
      const newItems = [...prevState];
      newItems.pop();
      return newItems;
    });
  };

  return (
    <>
      <h1>Experiment array in Context state.</h1>
      <button onClick={onPushHandler}>Push</button>
      <button onClick={onPopHandler}>Pop</button>
      <pre>
        {list.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </pre>
    </>
  );
};

const Page = () => {
  return (
    <ThemeContextProvider>
      <Playground />
    </ThemeContextProvider>
  );
};

export default Page;
