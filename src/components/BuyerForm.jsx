// components/BuyerForm.jsx
"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const BuyerForm = ({ animal, isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const { name, email, phone, address } = form;
    if (!name || !email || !phone || !address) {
      toast.error("Please fill in all fields!");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    toast.success(
      `Booking confirmed for ${animal.name}! Seller will contact you soon. 🐄`,
    );
    setForm({ name: "", email: "", phone: "", address: "" });
    onClose();
  };

  if (!mounted || !isOpen) return null;

 
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-extrabold text-gray-900">
              Book this Animal
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Seller will contact you after confirmation
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg
              className="w-4 h-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Animal summary */}
        <div className="px-6 pt-4">
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-xl flex-shrink-0">
              🐄
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {animal.name}
              </p>
              <p className="text-xs text-gray-400">
                {animal.breed} · {animal.location}
              </p>
              <p className="text-sm font-bold text-emerald-600">
                ৳{animal.price.toLocaleString("bn-BD")}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              {
                label: "Full name",
                name: "name",
                type: "text",
                placeholder: "e.g. Rahim Uddin",
              },
              {
                label: "Email address",
                name: "email",
                type: "email",
                placeholder: "e.g. rahim@gmail.com",
              },
              {
                label: "Phone number",
                name: "phone",
                type: "tel",
                placeholder: "e.g. 01711-123456",
              },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Delivery address
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="House no, road, area, district..."
                rows={3}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all resize-none"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-2.5 px-6 py-4 mt-1">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 active:scale-95 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-sm font-semibold rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <ClipLoader size={18} color="#ffffff" />
                <span>Confirming...</span>
              </>
            ) : (
              "Confirm Booking"
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body, 
  );
};

export default BuyerForm;
