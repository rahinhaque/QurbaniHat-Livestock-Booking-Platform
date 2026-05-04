import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const FeatureAnimalSection = async () => {
  const featuredAnimals = async () => {
    try {
      const res = await fetch("http://localhost:3004/animals");
      const data = await res.json();
      return data.filter((animal) => animal.isFeatured === true).slice(0, 4);
    } catch (error) {
      console.log(error);
    }
  };
  const animalHome = await featuredAnimals();

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Section Title */}
      <AnimateOnScroll animation="fadeInDown" duration="0.6s" className="text-center mb-10">
        <h2 className="text-4xl font-extrabold">
          <span className="text-emerald-500">Premium</span> Qurbani Animals
          You'll Love
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Handpicked livestock for this Eid ul Adha season
        </p>
      </AnimateOnScroll>

      {/* Cards Grid — 2 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {animalHome.map((animal, index) => (
          <AnimateOnScroll
            key={animal.id}
            animation="fadeInUp"
            duration="0.6s"
            delay={`${index * 0.15}s`}
          >
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:border-emerald-500 transition-all duration-200 shadow-sm h-full">
              {/* Image */}
              <div className="relative h-80 bg-emerald-50 overflow-hidden">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 840px) 150vw, 100vw"
                />
                <span className="absolute top-2.5 left-2.5 bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="absolute top-2.5 right-2.5 bg-white/90 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full border border-emerald-200">
                  {animal.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col gap-1.5 flex-1">
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {animal.name}
                </h3>
                <p className="text-xs text-gray-400">
                  Breed: {animal.breed} &nbsp;·&nbsp; {animal.type}
                </p>

                {/* Meta pills */}
                <div className="flex gap-2 mt-1">
                  <span className="flex items-center gap-1 bg-gray-50 rounded-lg px-2.5 py-1 text-xs text-gray-500">
                    ⚖️ {animal.weight} kg
                  </span>
                  <span className="flex items-center gap-1 bg-gray-50 rounded-lg px-2.5 py-1 text-xs text-gray-500">
                    🕐 {animal.age} yrs
                  </span>
                </div>

                {/* Location */}
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                  📍 {animal.location}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                <div>
                  <p className="text-xl font-bold text-emerald-600">
                    ৳{animal.price.toLocaleString("bn-BD")}
                  </p>
                  <p className="text-xs text-gray-400">Negotiable</p>
                </div>
                <Link
                  href={`/animaldetails/${animal.id}`}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default FeatureAnimalSection;
