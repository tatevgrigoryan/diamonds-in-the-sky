import Process from "../../components/Process/Process";
import Headline from "../../components/Headline/Headline";
import Product from "../../components/Product/Product";
import Career from "../../components/Career/Career";
import Location from "../../components/Location/Location";
import Gallery from "../../components/Gallery/Gallery";
import './../../styles/global.css';

function Home() {
    return (
        <div className="App">
            <Headline title="Expertise"/>
            <div className="container">
                <Process/>
                <Product/>
            </div>
            <Headline title="Career"/>
            <div className="container">
                <Career/>
            </div>
            <Headline title="Locations"/>
            <div className="container">
                <Location />
            </div>
            <Headline title="Cooperation"/>
            <Gallery />
        </div>
    );
}

export default Home;
