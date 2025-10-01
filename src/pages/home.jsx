import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark">
        <Navbar></Navbar>
        <Hero></Hero>
        <Features></Features>

    </div>
  );
};

export default Home;
