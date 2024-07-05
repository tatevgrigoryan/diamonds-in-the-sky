import Process from '../../components/Process/Process';
import Headline from '../../components/Headline/Headline';
import Product from '../../components/Product/Product';
import Career from '../../components/Career/Career';
import Location from '../../components/Location/Location';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import './../../styles/global.css';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Heading from '../../components/Headline/Headline';

function Home() {
  return (
    <div className="home position-relative" name="/">
      <div className="container">
        <Header />
        <Banner />
        <About />
        <Headline title="Expertise" />
        <Process />
        <Product />
        <Headline title="Career" />
        <Career />
        <Headline title="Locations" />
        <Location />
        <Headline title="Cooperation" />
      </div>
      <Gallery />
      <div className="container" style={{ marginTop: '60px' }}>
        <Heading
          title="Do you want to create a Diamond?"
          attr={<Button text="Contact us" url="/contact" />}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
