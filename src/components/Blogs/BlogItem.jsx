import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BlogItem.css";

const BlogItem = ({blogItem}) => {
  console.log(blogItem)
  return (
    <li className="blog-item">
      <a href="#" className="blog-image">
        <img src= {blogItem.img} alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>01 Ocak, 2021 </span>-<span>1 Yorum</span>
        </div>
        <div className="blog-info-center">
          <a href="#">{blogItem.name}</a>
        </div>
        <div className="blog-info-bottom">
        <Link to ={"/blog/1"}> Okumaya Devam Et</Link>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;
BlogItem.propTypes = {
  blogItem: PropTypes.object,
}
