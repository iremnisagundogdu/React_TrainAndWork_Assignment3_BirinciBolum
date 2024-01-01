import "./CategoryItem.css"
import PropTypes from "prop-types";

const CategoryItem = ({categoryItem}) => {
  return (
    <li className="category-item">
      <a href="#">
        <img
          style={{height:"200px"}}
          src={categoryItem.img}
          alt=""
          className="category-image"
        />
        <span className="category-title">{categoryItem.name}</span>
      </a>
    </li>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  categoryItem: PropTypes.object,
}