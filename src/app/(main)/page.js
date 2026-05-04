import React, { Suspense } from "react";
import Image from "next/image";
import Banner from "@/components/home/Banner";
import FeatureAnimalSection from "@/components/home/FeatureAnimalSection";
import QurbaniSection from "@/components/home/QurbaniSection";
import TopBreed from "@/components/home/TopBreed";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function Home() {
  return (
    <div className="text-center">
      <Banner />
      
      <Suspense fallback={<LoadingSpinner message="Loading Featured Animals..." />}>
        <FeatureAnimalSection />
      </Suspense>

      <QurbaniSection />

      <Suspense fallback={<LoadingSpinner message="Fetching Top Breeds..." />}>
        <TopBreed />
      </Suspense>
    </div>
  );
}
