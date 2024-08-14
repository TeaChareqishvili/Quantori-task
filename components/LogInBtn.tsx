"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import LogInModal from "./LogInModal";
import LogInForm from "./LogInForm";

export default function LogInBtn() {
  const [token, setToken] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check for token in cookies
    const savedToken = Cookies.get("token");
    setToken(savedToken || null);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
    setToken(null);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    const savedToken = Cookies.get("token");
    setToken(savedToken || null);
  };

  return (
    <>
      {token ? (
        <button
          onClick={handleLogout}
          className="cursor-pointer bg-[#66837e] text-[#eaefef] px-[20px] py-[7px] rounded-md w-[100px] hover:bg-[#556e6b] transition"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleModalOpen}
          className="cursor-pointer bg-[#66837e] text-[#eaefef] px-[20px] py-[7px] rounded-md w-[100px] hover:bg-[#556e6b] transition"
        >
          Login
        </button>
      )}

      <LogInModal isOpen={isModalOpen}>
        <LogInForm handleModalClose={handleModalClose} />
      </LogInModal>
    </>
  );
}
