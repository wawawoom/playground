import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [list, setList] = useState([]);

  // Log list when it's updated
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <ThemeContext.Provider value={{ list, setList }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
