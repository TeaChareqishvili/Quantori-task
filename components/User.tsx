"use client";

import user from "../public/assets/anonym.jpg";
import logInUser from "../public/assets/emilys.png";
import Image from "next/image";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function User() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check for token in cookies
    const savedToken = Cookies.get("token");
    setToken(savedToken || null);
  }, []);

  return (
    <div className="flex flex-col">
      <Image
        src={token ? logInUser : user}
        alt="user-img"
        width={50}
        height={50}
        className="mr-[15px]"
      />
    </div>
  );
}
