import './location.css';

function Location() {
  return (
    <div className="location" name="locations">
      <img
        className="d-md-block d-none"
        src={`${process.env.PUBLIC_URL}/images/location.png`}
        alt="image"
      />
      <div className="location-mobile d-md-none d-flex">
        <div className="location-item">
          <p>Armenia, Hajn</p>
          <p> 10Charents 8a,</p>
          <p>Nor Hachn,2412 Kotayq</p>
          <a href="#">Contact link</a>
        </div>
        <div className="location-item">
          <p>Armenia, Hajn</p>
          <p> 10Charents 8a,</p>
          <p>Nor Hachn,2412 Kotayq</p>
          <a href="#">Contact link</a>
        </div>
        <div className="location-item">
          <p>Armenia, Hajn</p>
          <p> 10Charents 8a,</p>
          <p>Nor Hachn,2412 Kotayq</p>
          <a href="#">Contact link</a>
        </div>
        <div className="location-item">
          <p>Armenia, Hajn</p>
          <p> 10Charents 8a,</p>
          <p>Nor Hachn,2412 Kotayq</p>
          <a href="#">Contact link</a>
        </div>
      </div>
    </div>
  );
}

export default Location;
