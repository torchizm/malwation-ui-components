import React, { ReactNode, FunctionComponent } from "react";
import style from "./LabelWithIconButton.module.css";

interface Props {
  id?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  icon: ReactNode;
  children: string;
  position?: "left" | "right";
  className?: string;
  style?: React.CSSProperties;
  type?: string;
}

const LabelWithIconButton: FunctionComponent<Props> = (props) => {
  return (
    <div
      typeof={props.type}
      className={style["label-with-icon-button"]}
      {...props}
    >
      {props.icon}
      {props.children}
    </div>
  );
};

LabelWithIconButton.defaultProps = {
  position: "left",
  type: "button",
};

export default LabelWithIconButton;
