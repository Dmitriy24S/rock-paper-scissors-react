import React, { useState } from "react";
import Modal from "./Modal";
import "./Rules.css";

const Rules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        className="rules-btn"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Rules
      </button>
      <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </>
  );
};

export default Rules;
