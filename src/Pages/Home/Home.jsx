import Navber from "../../Shared/Navber/Navber";
import Banner from "./Banner";
import ExpertDoc from "./ExpertDoc";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import Review from "./Review";
import ServiceSection from "./ServiceSection";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <ServiceSection></ServiceSection>
            <Review></Review>
            <ExpertDoc></ExpertDoc>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;