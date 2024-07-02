import './banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="row justify-content-center">
        <div className="col-md-4 col-lg-6 col-12">
          <div className="row ">
            <div className="col-12 text-end">
              <h6>Since 1975 —</h6>
            </div>
            <div className="col-12">
              <h1>Diamonds.</h1>
              <h1>Planning.</h1>
              <h1>Design.</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 col-12 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/crystal.png`}
            alt="Crystal"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
