import './button.css';
import PropTypes from 'prop-types';

const Button = ({ text, url }) => {
  return (
    <div className="button">
      <a href={url} target="_blank">
        {text}
        <img src={`${process.env.PUBLIC_URL}/images/arrow.png`} alt="arrow" />
      </a>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

Button.default = {
  title: '',
  url: '',
};

export default Button;
