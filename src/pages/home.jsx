import DemoPreview from "../components/DemoPreview";
import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark">
        <Navbar></Navbar>
        <Hero></Hero>
        <Features></Features>
        <HowItWorks></HowItWorks>
        <DemoPreview></DemoPreview>

    </div>
  );
};

export default Home;
