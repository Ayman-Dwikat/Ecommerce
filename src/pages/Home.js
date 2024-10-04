import BestSellers from "../components/BestSellers";
import Header from "../components/Header";
import LatestCollection from "../components/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <LatestCollection /> */}
      {/* <BestSellers /> */}
      <OurPolicy />
      <div className="overflow-hidden">
        <NewsletterBox />
      </div>
    </>
  );
};

export default Home;
