import Navbar from '../Navigation/Navigation';
import './footer.css';
import useGetWindowSize from '../../hooks/usaGetWindowSize';

const Footer = () => {
  const { width } = useGetWindowSize();
  const isMobile = width <= 992;

  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <h2 className="col-6">Christal&Co</h2>
            <div className="col-6 text-end">
              <div className="row">
                <span className="col-12">Charents 8a,</span>
                <span className="col-12">Nor Hachn,</span>
                <span className="col-12">2412 Kotayq,</span>
                <span className="col-12">Armenia</span>
                <span className="col-12 pt-4">Tel. +37493108000</span>
              </div>
            </div>
          </div>
          <div className="row pt-4 justify-content-end">
            {!isMobile && (
              <div className="col-6">
                <Navbar />
              </div>
            )}
            <div className="col-6 social justify-content-end">
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
                  alt="Instagram"
                />
              </a>
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/images/facebook.svg`}
                  alt="Facebook"
                />
              </a>
            </div>
          </div>
          <div className="row copywrite">
            <p className="col-md-6 col-12 text-md-start text-center small">
              © Copywriting | All Rights Reserved
            </p>
            <p className="col-md-6 col-12 text-md-end text-center small">
              Terms of Use | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
