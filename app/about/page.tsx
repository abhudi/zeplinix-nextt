import AboutGrow from "../components/aboutGrow";
import Aboutheader from "../components/aboutHeader";
import AboutStats from "../components/aboutStats";
import FAQ from "../components/Faq";
import Foundationintegrity from "../components/Foundationintegrity";

export default function About() {
  return (
    <>
      <Aboutheader />
      <AboutStats />
      <Foundationintegrity />
      <AboutGrow />
      <FAQ />
    </>
  );
}
