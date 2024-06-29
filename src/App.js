import logo from './logo.svg';
import './App.css';
import Process from "./Process/Process";
import Headline from "./Headline/Headline";
import Product from "./Product/Product";
import Career from "./Career/Career";
import Location from "./Location/Location";
import Gallery from "./Gallery/Gallery";
import './styles/global.css';

function App() {
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

export default App;
