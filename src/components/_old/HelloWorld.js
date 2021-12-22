import React from "react";

const HelloWorld = ({ styles, classNames }) => {
  const attrs = {};

  if (styles) {
    attrs.style = styles;
  }
  if (classNames) {
    attrs.className = classNames;
  }

  return <div {...attrs}>Hello World</div>;
};

export default HelloWorld;
