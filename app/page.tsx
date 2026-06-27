// import Hero from "@/component/hero";
import Welcome from "@/component/welcome";
import WhySkinsa from "@/component/why-skinsa";
import WhyUs from "@/component/why-us";
import AboutUs from "@/component/about-us";
// import Offers from "@/component/offers";
import BeforeAfter from "@/component/before-after";
import FAQ from "@/component/faq";
// import Navbar from "@/component/navbar";
import SparkleHero from "@/component/sparkle-hero";
import Footer from "@/component/footer";
import MobileActionBar from "@/component/mobile-bar";

export default function Home() {
  return (
    <main>
      
      <MobileActionBar />
      {/* <Navbar /> */}
      <SparkleHero />
      <BeforeAfter />
      {/* <Hero /> */}
      <Welcome />
      <AboutUs />
      <WhyUs />
      {/* <Offers /> */}
      <WhySkinsa />
      <FAQ />
      <Footer />
      
    </main>
  );
}
