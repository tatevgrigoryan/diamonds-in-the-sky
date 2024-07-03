import Process from "../../components/Process/Process";
import Headline from "../../components/Headline/Headline";
import Product from "../../components/Product/Product";
import Career from "../../components/Career/Career";
import Location from "../../components/Location/Location";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import './../../styles/global.css';
import About from "../../components/About/About";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <div className="home">
           <div className="container">
               <Navigation />
               <Banner />
               <About />
               <Headline title="Expertise"/>
               <Process/>
               <Product/>
               <Headline title="Career"/>
               <Career/>
               <Headline title="Locations"/>
               <Location />
               <Headline title="Cooperation"/>
           </div>
            <Gallery />
            <div className="container">
                <Footer />
            </div>


        </div>
    );
}

export default Home;
