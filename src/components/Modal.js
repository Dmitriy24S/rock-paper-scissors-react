import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import closeIcon from "../images/icon-close.svg";
import rulesImage from "../images/image-rules.svg";

import "./Modal.css";

const Modal = ({ setIsModalOpen, isModalOpen }) => {
  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);

  useEffect(() => {
    const closeOnEscapeKey = (e) =>
      e.key === "Escape" ? setIsModalOpen(false) : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [setIsModalOpen]);

  return createPortal(
    <>
      <CSSTransition
        in={isModalOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        nodeRef={nodeRef2}
        classNames="modal-backdrop"
      >
        <div
          className="modal-backdrop"
          onClick={() => setIsModalOpen(false)}
          ref={nodeRef2}
        ></div>
      </CSSTransition>
      <CSSTransition
        in={isModalOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <section className="modal" ref={nodeRef}>
          <section className="rules-modal">
            <div className="rules-header">
              <h2>Rules</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <img src={closeIcon} alt="close modal" />
              </button>
            </div>
            <div className="rules-content">
              <img src={rulesImage} alt="rules" />
            </div>
          </section>
        </section>
      </CSSTransition>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
