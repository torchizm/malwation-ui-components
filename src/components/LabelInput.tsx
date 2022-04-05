import {
  CSSProperties,
  FunctionComponent,
  ChangeEventHandler,
  ReactNode,
} from "react";

import style from "./LabelInput.module.css";

interface Props {
  id?: string;
  type: "text" | "email" | "password";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
  text: string;
  className?: string;
  style?: CSSProperties;
}

const LabelInput: FunctionComponent<Props> = (props) => {
  const randomId: string =
    "random-" + (Math.round(Math.random() * 999999) + 1).toString();

  return (
    <div className={style["label-input"]}>
      <input
        placeholder=" "
        {...props}
        id={props.id !== undefined ? props.id : randomId}
      ></input>
      <label
        className={style.input}
        htmlFor={props.id !== undefined ? props.id : randomId}
      >
        {props.text}
      </label>
    </div>
  );
};

export default LabelInput;
