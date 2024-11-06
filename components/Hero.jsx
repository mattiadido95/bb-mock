"use client"; // Dichiarazione necessaria per i Client Components

import { usePathname } from "next/navigation";
import SearchBox from "./SearchBox";
import ContentCard from "./CardContent";

const Hero = () => {
  const pathname = usePathname(); // Ottieni il pathname corrente
  const isAboutPage = pathname.includes("about") || pathname.includes("service") || pathname.includes("contact");


  return (
    <section className="pt-24 pb-12 xl:py-0 xl:h-[1087px] bg-hero2 xl:bg-hero bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-left">
        {isAboutPage ? <ContentCard /> : <SearchBox />}
      </div>
    </section>
  );
};

export default Hero;
