const ReviewItem = () => {
  return (
    <li className="comment-item">
      <div className="comment-avatar">
        <img src="/img/avatars/avatar1.jpg" alt="" />
      </div>
      <div className="comment-text">
        <ul className="comment-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
        </ul>
        <div className="comment-meta">
          <strong>İrem Nisa</strong>
          <span>-</span>
          <time>Ocak 1, 2024</time>
        </div>
        <div className="comment-description">
          <p>
            7 yıldır kullanıyorum. Çok memnunum.
          </p>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
