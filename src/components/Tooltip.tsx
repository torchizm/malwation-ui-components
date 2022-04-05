import React, { FunctionComponent, ReactNode, useEffect, useRef } from "react";

import style from "./Tooltip.module.css";

interface Props {
  description: string;
  children: ReactNode | string;
}

const Tooltip: FunctionComponent<Props> = (props) => {
  const tooltipItem = useRef<HTMLDivElement>(null);
  const rectangle = useRef<HTMLDivElement>(null);
  const tooltipText = useRef<HTMLParagraphElement>(null);

  const isOverflown = (element: HTMLElement) => {
    const main = document.getElementsByClassName("app")[0] as HTMLDivElement;
    const { x, width } = element.getBoundingClientRect();

    return {
      isOverflow: x + width > main.clientWidth || x < 0,
      side: x < 0 ? "left" : "right",
      mainWidth: main.clientWidth,
    };
  };

  useEffect(() => {
    tooltipItem.current?.addEventListener("mouseover", () => {
      const { isOverflow, side, mainWidth } = isOverflown(tooltipText.current!);

      const {
        width,
        height,
        x: textX,
        left: textLeft,
      } = tooltipText.current!.getBoundingClientRect();

      tooltipText.current!.style.top = `-${height + 8}px`;

      if (isOverflow) {
        const textPos = side === "right" ? `-${mainWidth - width + 48}px` : "0";
        tooltipText.current!.style.left = textPos;

        rectangle.current!.style.display = side === "right" ? "none" : "block";
      }
    });
  }, []);

  return (
    <div ref={tooltipItem} className={style["tooltip-container"]}>
      <div className={style["tooltip-hidden"]}></div>
      <p ref={tooltipText} className={style["tooltip-show"]}>
        <div ref={rectangle} className={style["tooltip-rectangle"]}></div>
        {props.description}
      </p>
      {props.children}
    </div>
  );
};

export default Tooltip;
