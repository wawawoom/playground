// https://www.kaherecode.com/tutorial/creer-votre-propre-composant-modal-avec-react-hooks

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import "./styles.scss";

export const UseSnkToaster = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    setToasts([...toasts, toast]);
  };

  useEffect(() => {
    console.log(toasts);
  }, [toasts]);

  return { toasts, addToast };
};

export const SnkToaster = () => {
  const { toasts } = UseSnkToaster();

  return createPortal(
    <div id={"snk-toaster-root"}>{toasts.map((toast) => toast)}</div>,
    document.body
  );
};

// export default SnkToaster;

// import { memo, useEffect, useRef, useState } from 'react';
// import { createPortal } from 'react-dom';

// const Portal = ({ id, children }) => {
//   const el = useRef(document.getElementById(id) || document.createElement('div'));
//   const [dynamic] = useState(!el.current.parentElement);
//   useEffect(() => {
//     if (dynamic) {
//       el.current.id = id;
//       document.body.appendChild(el.current);
//     }
//     return () => {
//       if (dynamic && el.current.parentElement) {
//         el.current.parentElement.removeChild(el.current);
//       }
//     };
//   }, [id]);
//   return createPortal(children, el.current);
// };
// export default memo(Portal);
