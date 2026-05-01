import React from 'react';
import { Tag, MapPin } from 'lucide-react';
import Link from 'next/link';

const AllAnimalPage = async() => {
  const allAnimalsData = async() =>{
    const res = await fetch("http://localhost:3004/animals", { cache: "no-store" });
    const data = await res.json();
    return data;
  }
  const animals = await allAnimalsData();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Discover All <span className="text-amber-600">Livestock</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of premium animals available for Qurbani. Find the perfect match for your requirements.
          </p>
        </div>

        {/* Animal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {animals?.map((animal) => (
            <div 
              key={animal.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <img 
                  src={animal.image || 'https://via.placeholder.com/400x300?text=No+Image'} 
                  alt={animal.name || 'Animal'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                
                {/* Type Badge */}
                {animal.type && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-amber-700 uppercase tracking-wide shadow-sm">
                    {animal.type}
                  </div>
                )}
                
                {/* Title and Breed */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg truncate">
                    {animal.name}
                  </h3>
                  {animal.breed && (
                    <p className="text-amber-300 text-sm font-semibold drop-shadow-md mt-1">
                      {animal.breed}
                    </p>
                  )}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                
                <div className="space-y-3 mb-6">
                  {/* Location Info */}
                  {animal.location && (
                    <div className="flex items-center text-gray-600 text-sm">
                      <div className="bg-gray-100 p-1.5 rounded-md mr-3">
                        <MapPin className="w-4 h-4 text-gray-500" />
                      </div>
                      <span className="truncate font-medium">{animal.location}</span>
                    </div>
                  )}
                </div>

                {/* Price & Action Section */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Asking Price</p>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 text-green-600 mr-1.5" />
                      <span className="text-lg font-extrabold text-gray-900">
                        {animal.price ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'BDT', maximumFractionDigits: 0 }).format(animal.price) : 'N/A'}
                      </span>
                    </div>
                  </div>
                  <Link href={`/animaldetails/${animal.id}`} className="bg-amber-50 text-amber-700 hover:bg-amber-600 hover:text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-sm">
                    View
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {(!animals || animals.length === 0) && (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No animals found</h3>
            <p className="text-gray-500">Check back later or try refreshing the page.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllAnimalPage;