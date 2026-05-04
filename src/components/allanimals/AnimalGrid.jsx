'use client';

import React, { useMemo, useState } from 'react';
import { Tag, MapPin, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const SORT_OPTIONS = [
  { value: 'default',   label: 'Default',        icon: ArrowUpDown },
  { value: 'asc',       label: 'Price: Low → High', icon: ArrowUp },
  { value: 'desc',      label: 'Price: High → Low', icon: ArrowDown },
];

const AnimalGrid = ({ animals }) => {
  const [sortOrder, setSortOrder] = useState('default');

  const sorted = useMemo(() => {
    if (!animals) return [];
    if (sortOrder === 'asc')  return [...animals].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    if (sortOrder === 'desc') return [...animals].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    return animals;
  }, [animals, sortOrder]);

  return (
    <>
      {/* Sort Controls */}
      <AnimateOnScroll animation="fadeIn" duration="0.5s" className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <p className="text-sm text-gray-500 font-medium">
          Showing <span className="text-gray-900 font-bold">{sorted.length}</span> animals
        </p>

        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl p-1.5 shadow-sm">
          {SORT_OPTIONS.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => setSortOrder(value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                sortOrder === value
                  ? 'bg-amber-500 text-white shadow-md shadow-amber-200'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Animal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sorted.map((animal, index) => (
          <AnimateOnScroll
            key={animal.id}
            animation="fadeInUp"
            duration="0.6s"
            delay={`${(index % 4) * 0.1}s`}
          >
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src={animal.image || 'https://via.placeholder.com/400x300?text=No+Image'}
                  alt={animal.name || 'Animal'}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90" />

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
                  {animal.location && (
                    <div className="flex items-center text-gray-600 text-sm">
                      <div className="bg-gray-100 p-1.5 rounded-md mr-3">
                        <MapPin className="w-4 h-4 text-gray-500" />
                      </div>
                      <span className="truncate font-medium">{animal.location}</span>
                    </div>
                  )}
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Asking Price</p>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 text-green-600 mr-1.5" />
                      <span className="text-lg font-extrabold text-gray-900">
                        {animal.price
                          ? new Intl.NumberFormat('en-IN', {
                              style: 'currency',
                              currency: 'BDT',
                              maximumFractionDigits: 0,
                            }).format(animal.price)
                          : 'N/A'}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/animaldetails/${animal.id}`}
                    className="bg-amber-50 text-amber-700 hover:bg-amber-600 hover:text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Empty State */}
      {(!sorted || sorted.length === 0) && (
        <AnimateOnScroll animation="fadeIn" duration="0.6s">
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No animals found</h3>
            <p className="text-gray-500">Check back later or try refreshing the page.</p>
          </div>
        </AnimateOnScroll>
      )}
    </>
  );
};

export default AnimalGrid;
