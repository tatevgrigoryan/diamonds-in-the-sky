import './product.css';

function Product() {
  return (
    <div className="product">
      <div>
        <h2 className="pb-3">The Product</h2>
        <p className="text-center mt-3 pt-md-3">
          At <b>Crystalit&Co,</b> our passion for diamonds is at the heart of
          everything we do. With precision cutting and polishing, diamonds
          achieve their ultimate beauty and perfection. Leveraging advanced
          technology, our skilled production team transforms rough diamonds into
          a variety of stunning cuts including{' '}
          <b>
            Round, Princess, Marquise, Oval, Emerald, Pear, and Special Cuts.
          </b>{' '}
          We excel in producing and supplying diamonds ranging from 0.005 to 5
          carats. We offer both certified and non-certified products to cater to
          diverse client needs.
        </p>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="product-item">
              <h3>CERTIFICATE PRODUCTS</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/product-img1.png`}
                alt="Image"
              />
              <div className="product-item-txt">
                <p>Cooperation with Coca Cola asenq</p>
                <p className="small">
                  Designers and arkaskasm learn through a combination of formal
                  education, practical experience, and continuing professional
                  development.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="product-item">
              <h3>NON-CERTIFICATE PRODUCTS</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/product-img2.png`}
                alt="Image"
              />
              <div className="product-item-txt">
                <p>Cooperation with Coca Cola asenq</p>
                <p className="small">
                  Designers and arkaskasm learn through a combination of formal
                  education, practical experience, and continuing professional
                  development.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-types">
          <div className="mb-3">
            <img
              src={`${process.env.PUBLIC_URL}/images/round.png`}
              alt="Image"
            />
            <p>Round</p>
          </div>
          <div className="mb-3">
            <img
              src={`${process.env.PUBLIC_URL}/images/marquise.png`}
              alt="Image"
            />
            <p>Marquise</p>
          </div>
          <div className="mb-3">
            <img
              src={`${process.env.PUBLIC_URL}/images/oval.png`}
              alt="Image"
            />
            <p>Oval</p>
          </div>
          <div className="mb-3">
            <img
              src={`${process.env.PUBLIC_URL}/images/princess.png`}
              alt="Image"
            />
            <p>Princess</p>
          </div>
          <div className="mb-3">
            <img
              src={`${process.env.PUBLIC_URL}/images/pear.png`}
              alt="Image"
            />
            <p>Pear</p>
          </div>
          <div className="mb-3">
            <img
              src={`${process.env.PUBLIC_URL}/images/emerald.png`}
              alt="Image"
            />
            <p>Emerald</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
