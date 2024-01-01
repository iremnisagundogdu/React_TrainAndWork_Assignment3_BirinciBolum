import PropTypes from "prop-types";

const BrandItem = ({brandItem}) => {
    return (
      <li className="brand-item">
        <a href="#">
          <img src={ brandItem.img} alt="" />
        </a>
      </li>
    );
  };
  
  export default BrandItem;
  BrandItem.propTypes = {
    brandItem: PropTypes.object,
  }