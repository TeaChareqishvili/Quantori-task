"use client";
import { useState } from "react";
import LogInForm from "./LogInForm";
import LogInModal from "./LogInModal";

export default function LogInBtn() {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <button
        onClick={handleModal}
        className="cursor-pointer bg-[#66837e] text-[#eaefef] px-[20px] py-[7px] rounded-md w-[100px] hover:bg-[#eaefef] hover:text-[#66837e] transition-all duration-300 "
      >
        Login
      </button>
      <LogInModal isOpen={isModalOpen}>
        <LogInForm
          handleModalClose={handleModalClose}
          onClose={handleModalClose}
        />
      </LogInModal>
    </>
  );
}
