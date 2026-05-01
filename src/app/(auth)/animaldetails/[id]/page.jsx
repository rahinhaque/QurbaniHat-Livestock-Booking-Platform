// app/animals/[id]/page.jsx
import Image from "next/image";
import BuyNowButton from "@/components/BuyNowButton"; // ← add this import

const AnimalDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3004/animals/${id}`);
  const animal = await res.json();

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-300">
          {/* Image */}
          <div className="relative h-80 bg-emerald-50 overflow-hidden group">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 672px"
            />
            <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between z-10">
              <span className="bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                Featured
              </span>
              <span className="bg-white/90 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full border border-emerald-200">
                {animal.category}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-3 mb-1">
              <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                {animal.name}
              </h1>
              <button className="w-9 h-9 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center hover:bg-red-50 hover:border-red-200 hover:scale-110 active:scale-95 transition-all flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E24B4A"
                  strokeWidth="1.8"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            <p className="text-sm text-gray-400 mb-5">
              Breed: {animal.breed} &nbsp;·&nbsp; Type: {animal.type}
            </p>

            <div className="grid grid-cols-3 gap-2.5 mb-5">
              {[
                { icon: "⚖️", value: `${animal.weight} kg`, label: "Weight" },
                { icon: "🕐", value: `${animal.age} yrs`, label: "Age" },
                { icon: "🐄", value: animal.type, label: "Category" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-gray-50 rounded-xl p-3 text-center hover:bg-emerald-50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-base mb-1">{s.icon}</div>
                  <p className="text-sm font-semibold text-gray-800">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-5 mt-10">
              {animal.location}, Bangladesh
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-6">
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1.5">
                About this animal
              </p>
              <p className="text-sm text-emerald-900 leading-relaxed">
                {animal.description}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-gray-100">
              <div>
                <p className="text-3xl font-extrabold text-emerald-600">
                  ৳{animal.price.toLocaleString("bn-BD")}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Price is negotiable
                </p>
              </div>
              <div className="flex gap-2">
                <button className="text-sm font-medium px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-800 active:scale-95 transition-all">
                  Share
                </button>
                <BuyNowButton animal={animal} />{" "}
                {/* ← replace the old button */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimalDetails;
