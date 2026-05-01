import Image from "next/image";
import Banner from "@/components/home/Banner";
import FeatureAnimalSection from "@/components/home/FeatureAnimalSection";
import QurbaniSection from "@/components/home/QurbaniSection";
import TopBreed from "@/components/home/TopBreed";

export default function Home() {
  return (
    <div className="text-center">
      
      <Banner/>
      <FeatureAnimalSection/>
      <QurbaniSection/>
      <TopBreed/>
    </div>
  );
}
