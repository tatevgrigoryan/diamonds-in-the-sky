import './process.css';
import Headline from '../Headline/Headline';
import Swiper from '../../Swiper/Swiper';


function Process() {
    return (
        <div className="process">
            <div>
                <h2 className="pb-3">The Process</h2>
                <div className="row mt-3 align-items-center">
                      <div className="col-md-6 col-12">
                          <p className="text-center">
                              At <b>Crystalit&Co</b>, our passion for diamonds is at the heart of everything we do. With
                              precision cutting and polishing, diamonds achieve their ultimate beauty and perfection.
                              Leveraging advanced technology, our skilled production team transforms rough diamonds into a
                              variety of stunning cuts including <b>Round, Princess, Marquise, Oval, Emerald, Pear, and
                              Special Cuts.</b> We excel in producing and supplying diamonds ranging from 0.005 to 5 carats.
                              We offer both certified and non-certified products to cater to diverse client needs.
                          </p>
                      </div>
                    <div className="col-md-6 col-12">
                        <Swiper />

                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );

}

export default Process;
