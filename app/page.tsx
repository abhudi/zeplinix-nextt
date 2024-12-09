import Banner from "./components/Banner";
import Blogcards from "./components/Blogcards";
import Brandssection from "./components/Brandssection";
import HomeServiceCard from "./components/HomeServiceCard";
import StandardProduct from "./components/StandardProduct";
import Testimonialmap from "./components/Testimonialmap";

export default function Home() {
  return (
    <div className="min-h-[50%] text-white">
      <Banner />
      <Brandssection />
      <StandardProduct />
      <HomeServiceCard />
      <Testimonialmap />
      <Blogcards />
    </div>
  );
}
