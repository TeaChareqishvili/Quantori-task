"use client";

import { useState } from "react";
import { loginUser } from "../utils/auth";
import { FaSpinner } from "react-icons/fa";

interface LogInFormProps {
  handleModalClose: () => void;
}

export default function LogInForm({ handleModalClose }: LogInFormProps) {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser(userName, password);
      console.log("Login successful!", data);

      window.location.reload();
      handleModalClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-14 py-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#66837e] mb-6">Login</h2>
      <form className="space-y-6" onSubmit={handleLogin}>
        <div className="relative">
          <label
            htmlFor="username"
            className="absolute -top-3 left-2 bg-white px-1 text-sm font-medium text-[#66837e]"
          >
            Email
          </label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="mt-1 block w-full text-[#66837e] px-3 py-2 border border-[#66837e] rounded-md shadow-sm focus:outline-none focus:ring-[#66837e] focus:border-[#66837e]"
            placeholder="email@example.com"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="absolute -top-3 left-2 bg-white px-1 text-sm font-medium text-[#66837e]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block text-[#66837e] w-full px-3 py-2 border border-[#66837e] rounded-md shadow-sm focus:outline-none focus:ring-[#66837e] focus:border-[#66837e]"
            placeholder="********"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleModalClose}
            type="button"
            className="px-4 py-2 w-[100px] mr-[10px] h-[40px] bg-gray-100 text-[#66837e] border border-[#66837e] rounded-md hover:bg-gray-200 transition"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 w-[100px] h-[40px] flex items-center justify-center bg-[#66837e] text-white rounded-md hover:bg-[#556e6b] transition"
            disabled={loading}
          >
            {loading ? <FaSpinner className="animate-spin mr-2" /> : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}
