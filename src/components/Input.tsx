import {
  CSSProperties,
  FunctionComponent,
  ChangeEventHandler,
  ReactNode,
} from "react";

import style from "./Input.module.css";

interface Props {
  id?: string;
  type: "text" | "email" | "password";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
}

const InputComponent: FunctionComponent<Props> = (props) => {
  return <input className={style.input} {...props}></input>;
};

export default InputComponent;
