import { useContext } from "react";
import ToastContext from "./SnkToasterContext";

export default function useToastContext() {
  return useContext(ToastContext);
}
