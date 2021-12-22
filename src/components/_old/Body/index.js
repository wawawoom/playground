import React from "react";
import useToastContext from "../SnkToaster/SnkToasterContextHook";

const Body = () => {
  const addToast = useToastContext();

  const handleClickGreen = () => {
    addToast({
      text: "Hello GREEN",
      closingDelay: 3000,
      // onClosed: () => {
      //   console.log("close red");
      // },
    });
  };

  const handleClickRed = () => {
    addToast({
      text: "Hello RED",
      closingDelay: 5000,
      // onClosed: () => {
      //   console.log("close red");
      // },
    });
  };

  return (
    <>
      <button onClick={handleClickGreen}>add green</button>
      <button onClick={handleClickRed}>add red</button>
    </>
  );
};

export default Body;
