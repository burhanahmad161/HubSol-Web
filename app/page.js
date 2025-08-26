import Image from "next/image";
import banner from "../Assets/banner-2.jpg";
import AboutUs from "@/Components/about-us";
import WhyChooseUs from "@/Components/whychooseus";
import ServicesCarousel from "@/Components/serivces";
import Workflow from "@/Components/workflow-section";

export default function HomePage() {
  return (
    // Give background a blur effect
    <div>

      <div className="relative h-screen w-full">
        <Image
          src={banner}
          alt="Background"
          fill
          className="object-cover z-0 blur-sm scale-101"
          priority
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 px-4 text-center flex-col">
          <h1 className="text-blue-600 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-[80%] sm:w-[60%]">
            Leading Web Design & Development Company in Lahore
          </h1>
          <p className="text-white md:text-2xl mt-4 md:w-[50%] w-[80%]">
            We specialize in creating stunning and functional websites that help businesses grow.
          </p>
        </div>
      </div>
      <AboutUs />
      <ServicesCarousel />
      <WhyChooseUs />
      <Workflow />
    </div>
  );
}
