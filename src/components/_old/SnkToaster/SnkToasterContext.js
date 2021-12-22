// https://latteandcode.medium.com/react-toast-an-implementation-with-the-context-api-and-hooks-f52fa564e4a8

import React, { useCallback, useEffect, useState, createContext } from "react";
import "./styles.scss";

const ToastContext = createContext();
export default ToastContext;

const generateUID = () => {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
};

export function ToastContextProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // Executed when a new tost is added
  useEffect(() => {
    const lastToast = toasts[toasts.length - 1];
    console.log(lastToast);

    if (lastToast) {
      setTimeout(() => {
        setToasts((toasts) =>
          toasts.filter((toast) => toast.id !== lastToast.id)
        );
      }, lastToast.closingDelay);
    }
  }, [toasts]);

  const addToast = useCallback(
    function (toast) {
      setToasts((toasts) => [...toasts, { ...toast, id: generateUID() }]);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div id={"snk-toaster-root"}>
        {toasts.map((toast, i) => {
          return (
            <div className={`snk-toast time-${toast.closingDelay}`} key={i}>
              <div className="snk-toast-content">
                {toast.text} {toast.id}
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
