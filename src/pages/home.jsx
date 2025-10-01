import DemoPreview from "../components/DemoPreview";
import Features from "../components/Features";
import Footer from "../components/Footer";
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
        <Footer></Footer>

    </div>
  );
};

export default Home;
