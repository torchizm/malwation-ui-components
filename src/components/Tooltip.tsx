import React, { FunctionComponent, ReactNode, useEffect, useRef } from "react";

import style from "./Tooltip.module.css";

interface Props {
  description: string;
  children: ReactNode | string;
}

const Tooltip: FunctionComponent<Props> = (props) => {
  const tooltipItem = useRef<HTMLDivElement>(null);
  const tooltipText = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    tooltipItem.current?.addEventListener("mouseover", () => {
      let height = tooltipText.current!.clientHeight + 8;
      tooltipText.current!.style.top = `-${height}px`;
    });
  }, []);

  return (
    <div ref={tooltipItem} className={style["tooltip-container"]}>
      <div className={style["tooltip-hidden"]}></div>
      <p ref={tooltipText} className={style["tooltip-show"]}>
        {props.description}
      </p>
      {props.children}
    </div>
  );
};

export default Tooltip;
