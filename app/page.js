import Image from "next/image";
import TopNav from "./components/layouts/TopNav";
import Hero from "./components/Slider";
import NewArrivals from "./components/sections/NewArrivel";
import ProductOverview from "./components/sections/ProductOverview";
import BottomNav from "./components/layouts/BottomNav";
import ImageSection from "./components/sections/HeroProduct";

export default function Home() {
  return (
    <>
    <Hero/>
    <NewArrivals/>
    <ProductOverview/>
    <ImageSection/>
    </>
  );
}
