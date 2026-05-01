import Image from "next/image";
import Banner from "@/components/home/Banner";
import FeatureAnimalSection from "@/components/home/FeatureAnimalSection";

export default function Home() {
  return (
    <div className="text-center">
      
      <Banner/>
      <FeatureAnimalSection/>
    </div>
  );
}
