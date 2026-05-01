// components/BuyNowButton.jsx
"use client";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BuyerForm from "./BuyerForm";

const BuyNowButton = ({ animal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ToastContainer position="top-right" />
      <BuyerForm
        animal={animal}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm font-medium px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 transition-all animate-pulse hover:animate-none"
      >
        Buy Now
      </button>
    </>
  );
};

export default BuyNowButton;
