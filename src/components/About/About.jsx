import './about.css';
import Button from '../Button/Button';

const About = () => {
  return (
    <div className="about" name="about">
      <h2>About Us</h2>
      <p>
        We are a leading diamond processing factory based in Armenia, founded by
        Manvel Movsisyan in 2022. In a short period, we have quickly established
        ourselves as one of the top processing facilities in the region.At
        Crystalit&Co, our primary focus is on excellence and precision in
        diamond processing. We have formed strong partnerships with esteemed
        entities in India, allowing us to expand our reach and capabilities
        significantly.Our dedicated team works tirelessly to ensure that every
        diamond we process meets the highest standards of quality. We are
        committed to innovation and efficiency, using state-of-the-art
        technology to enhance our processes and deliver the best results for our
        clients.
      </p>
      <div className="row justify-content-center">
        <div className="col-4 imgCard">
          <img
            src={`${process.env.PUBLIC_URL}/images/crystal1.png`}
            alt="crystal1"
          />
        </div>
        <div className="col-4 imgCard">
          <img
            src={`${process.env.PUBLIC_URL}/images/crystal2.png`}
            alt="crystal2"
          />
        </div>
        <div className="col-4 imgCard">
          <img
            src={`${process.env.PUBLIC_URL}/images/crystal3.png`}
            alt="crystal3"
          />
        </div>
      </div>
      <div className="row text-end mt-4">
        <Button text="Contact us" url="/contact" />
      </div>
    </div>
  );
};

export default About;
