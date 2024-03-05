import Banner from "../../Components/Banner/Banner";
import OurCategories from "../../Components/Our Categories/OurCategories";
import SpecialOffer from "../../Components/Special Offer/SpecialOffer";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <SpecialOffer></SpecialOffer>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
            <section>
                <OurCategories></OurCategories>
            </section>
        </>
    );
};

export default Home;