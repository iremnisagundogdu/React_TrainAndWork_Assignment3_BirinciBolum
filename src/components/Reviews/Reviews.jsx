import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import PropTypes from "prop-types";
import "./Reviews.css";

const Reviews = ({ active }) => {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      <h3>Reçme Makinası için 1 Yorum</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
          
        </ol>
      </div>
      <div className="review-form-wrapper">
        <h2>Yorum Ekle</h2>
        <ReviewForm />
      </div>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  active: PropTypes.string,
};
