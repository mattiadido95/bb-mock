import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Recommendation from "@/components/Recommendation";
import Find from "@/components/Find";
import Testimonials from "@/components/Testimonials";

export default function About() {
  return (
    <main className="max-w-[1440px] mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
     
      <Footer />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
