import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import AnimalGrid from '@/components/allanimals/AnimalGrid';

const AllAnimalPage = async () => {
  const allAnimalsData = async () => {
    const res = await fetch('https://qurbanihat-server.onrender.com/animals', { cache: 'no-store' });
    const data = await res.json();
    return data;
  };
  const animals = await allAnimalsData();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <AnimateOnScroll animation="fadeInDown" duration="0.6s" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Discover All <span className="text-amber-600">Livestock</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of premium animals available for Qurbani. Find the perfect match for your requirements.
          </p>
        </AnimateOnScroll>

        {/* Grid with sort controls — client component */}
        <AnimalGrid animals={animals} />

      </div>
    </div>
  );
};

export default AllAnimalPage;