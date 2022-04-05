import {
  EventHandler,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";

import style from "./Modal.module.css";

interface Props {
  id?: string;
  show: boolean;
  cancel?: EventHandler<any>;
  className?: string;
}

const Modal: FunctionComponent<Props> = (props) => {
  const [show, setShow] = useState(props.show);
  const modalElement = useRef<HTMLDivElement>(null);
  const id: string = "random-" + Math.round(Math.random() * 99999999 + 1);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const handleCloseModal = () => {
    setShow(false);

    if (props.cancel !== undefined) {
      props.cancel(null);
    }
  };

  return (
    <div
      ref={modalElement}
      id={props.id !== undefined ? props.id : id}
      style={{ display: show ? "block" : "none" }}
      className={style["modal-container"]}
    >
      <div onClick={handleCloseModal} className={style.black}></div>
      <div id={props.id} className={style.modal}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
