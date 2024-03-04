import Banner from "../../Components/Banner/Banner";
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
        </>
    );
};

export default Home;