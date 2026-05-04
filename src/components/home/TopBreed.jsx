"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Weight, Tag, Info } from "lucide-react";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const BREED_CATEGORIES = [
  {
    title: '1. Local & Regional Favorites (The "Deshi" Class)',
    description:
      "Authentic local breeds known for their premium meat quality and cultural significance.",
    breeds: [
      {
        id: "deshi",
        name: "Deshi Cow (Local)",
        description:
          "Small to medium-sized, known for lean, organic meat. These are usually the highest in demand due to affordability and taste.",
        weightRange: "150kg – 300kg",
        defaultPrice: 90000,
        defaultImage: "https://i.postimg.cc/T1QwXkRb/deshi-cow.jpg",
        matchBreed: "Local Deshi",
        matchType: "Cow",
      },
      {
        id: "pabna",
        name: "Pabna / Sirajganj Breed",
        description:
          "Famous for being well-built and having a high meat-to-bone ratio.",
        weightRange: "250kg – 450kg",
        defaultPrice: 140000,
        defaultImage:
          "https://brcranch.com/wp-content/uploads/2021/11/BRC-Dutton-376-April2021_Forwebsite_cropped.jpg",
        matchLocation: "Sirajganj",
      },
      {
        id: "mirkadim",
        name: "Mirkadim (Munshiganj)",
        description:
          'The "Premium" local breed. Known for their white coat and tender meat. Often considered the most prestigious local choice.',
        weightRange: "200kg – 350kg",
        defaultPrice: 160000,
        defaultImage:
          "https://c8.alamy.com/comp/2T2DAND/australian-brahman-cow-cattle-closeup-portrait-2T2DAND.jpg",
        matchBreed: "Mirkadim",
      },
    ],
  },
  {
    title: '2. Exotic & Cross-Breeds (The "Big Boys")',
    description:
      "Massive, majestic breeds for buyers looking for heavy-weight livestock.",
    breeds: [
      {
        id: "brahman",
        name: "Brahman (Cross)",
        description:
          "Massive builds, recognizable by the large hump. These are for buyers looking for heavy-weight livestock (800kg+).",
        weightRange: "500kg – 1000kg+",
        defaultPrice: 250000,
        defaultImage:
          "https://brcranch.com/wp-content/uploads/2021/11/BRC-Dutton-376-April2021_Forwebsite_cropped.jpg",
        matchBreed: "Brahman",
      },
      {
        id: "sahiwal",
        name: "Sahiwal",
        description:
          "Known for their reddish-brown color and long bodies. They are popular because they carry a lot of weight but are generally docile.",
        weightRange: "400kg – 600kg",
        defaultPrice: 180000,
        defaultImage: "https://i.postimg.cc/T1QwXkRb/shahiwal-cow.jpg",
        matchBreed: "Shahiwal",
      },
      {
        id: "gir",
        name: "Gir / Sindhi",
        description:
          "High-end breeds known for their majestic look and large size.",
        weightRange: "450kg – 700kg",
        defaultPrice: 220000,
        defaultImage:
          "https://c8.alamy.com/comp/2T2DAND/australian-brahman-cow-cattle-closeup-portrait-2T2DAND.jpg",
        matchBreed: "Sindhi",
      },
    ],
  },
  {
    title: "3. Goat & Sheep Varieties",
    description:
      "Premium small animals, highly sought after for individual Qurbani.",
    breeds: [
      {
        id: "bengal",
        name: "Black Bengal Goat",
        description:
          'The "King of Goats" in Bangladesh. Famous for its skin quality and the best-tasting meat.',
        weightRange: "20kg – 40kg",
        defaultPrice: 22000,
        defaultImage: "https://i.postimg.cc/T1QwXkRb/black-bengal-goat.jpg",
        matchBreed: "Black Bengal",
      },
      {
        id: "jamunapari",
        name: "Jamunapari",
        description:
          'Large, long-eared goats that look very impressive in a "Haat."',
        weightRange: "40kg – 80kg",
        defaultPrice: 35000,
        defaultImage: "https://i.postimg.cc/T1QwXkRb/jamnapari-goat.jpg",
        matchBreed: "Jamnapari",
      },
      {
        id: "dumba",
        name: "Dumba (Fat-tailed Sheep)",
        description:
          "A premium category often imported or cross-bred locally, highly sought after for specific religious traditions.",
        weightRange: "45kg – 90kg",
        defaultPrice: 120000,
        defaultImage: "https://i.postimg.cc/T1QwXkRb/deshi-dumba.jpg",
        matchName: "Dumba",
      },
    ],
  },
];

const BreedCard = ({ breedTemplate, fetchedAnimals }) => {
  // Try to find matching animal from API to get real price and image
  const match = fetchedAnimals.find((a) => {
    if (breedTemplate.matchType && a.type !== breedTemplate.matchType)
      return false;
    if (
      breedTemplate.matchBreed &&
      a.breed &&
      a.breed.includes(breedTemplate.matchBreed)
    )
      return true;
    if (
      breedTemplate.matchLocation &&
      a.location &&
      a.location.includes(breedTemplate.matchLocation)
    )
      return true;
    if (
      breedTemplate.matchName &&
      a.name &&
      a.name.includes(breedTemplate.matchName)
    )
      return true;
    return false;
  });

  const price = match ? match.price : breedTemplate.defaultPrice;
  const image = match ? match.image : breedTemplate.defaultImage;

  // Format price to BDT format
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer flex flex-col h-full"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* High-Res Thumbnail */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <motion.img
          src={image}
          alt={breedTemplate.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="text-2xl font-bold text-white drop-shadow-md">
            {breedTemplate.name}
          </h4>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {breedTemplate.description}
        </p>

        <div className="space-y-3 mt-auto border-t border-gray-100 pt-4">
          <div className="flex items-center text-gray-700">
            <div className="bg-amber-100 p-1.5 rounded-md mr-3">
              <Weight className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                Typical Weight
              </p>
              <p className="font-semibold text-gray-900">
                {breedTemplate.weightRange}
              </p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <div className="bg-green-100 p-1.5 rounded-md mr-3">
              <Tag className="w-4 h-4 text-green-700" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                Starting Price
              </p>
              <p className="font-semibold text-green-700">{formattedPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function TopBreed() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(
          "https://qurbanihat-server.onrender.com/animals",
        );
        if (response.ok) {
          const data = await response.json();
          setAnimals(data);
        }
      } catch (error) {
        console.error("Failed to fetch animals:", error);
      } finally {
        // Add a slight artificial delay to showcase the beautiful loading animation
        setTimeout(() => setLoading(false), 1200);
      }
    };
    fetchAnimals();
  }, []);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Top Breeds of <span className="text-amber-600">QurbaniHat</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of the finest livestock
            breeds, ranging from local favorites to majestic cross-breeds.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LoadingSpinner message="Curating the finest breeds..." />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              {BREED_CATEGORIES.map((category, idx) => (
                <div key={idx}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 border-l-4 border-amber-500 pl-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-500 pl-5">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.breeds.map((breed) => (
                      <BreedCard
                        key={breed.id}
                        breedTemplate={breed}
                        fetchedAnimals={animals}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
