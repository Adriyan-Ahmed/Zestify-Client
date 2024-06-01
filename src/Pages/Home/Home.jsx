// -------------------------------- //
// -------- Imported Items -------- //
// -------------------------------- //

import Banner from "../../Components/Banner/Banner";
import HomeFood from "../../Components/Home Food/HomeFood";
import OurCategories from "../../Components/Our Categories/OurCategories";
import OurTeam from "../../Components/Our Team/OurTeam";
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
                <HomeFood></HomeFood>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
            <section>
                <OurCategories></OurCategories>
            </section>
            <section>
                <OurTeam></OurTeam>
            </section>
        </>
    );
};

export default Home;