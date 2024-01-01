import "./Info.css";

const Info = () => {
  return (
    <div className="product-info">
      <h1 className="product-title">M49-D-12 İlik-Düğme Makinası</h1>
      <div className="product-review">
        <ul className="product-star">
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
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <span>1 Yorum</span>
      </div>
      <div className="product-price">
        <s className="old-price">$1965</s>
        <strong className="new-price">$1500</strong>
      </div>
      <p className="product-description">
      Bu makinalar, kumaşlara ilik açma ve düğme dikme işlemlerini hızlı, düzenli ve verimli bir şekilde yapmak için tasarlanmıştır. İlik düğme makinası, giysilerde, çantalarda, yastıklarda ve diğer birçok tekstil ürününde kullanılan ilikleri açma işlemini otomatik veya yarı otomatik olarak gerçekleştirir. Ayrıca, düğmeleri kumaşa dikmek için de kullanılır.
      </p>
      <form className="variations-form">
        <div className="variations">
        
          <div className="cart-button">
            <input type="number" defaultValue="1" min="1" id="quantity" />
            <button
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
            >
              SEPETE EKLE
            </button>
          </div>
          <div className="product-extra-buttons">
            
            <a href="#">
              <i className="bi bi-heart"></i>
              <span>Favorilere Ekle</span>
            </a>
            <a href="#">
              <i className="bi bi-share"></i>
              <span>Ürünü Paylaş</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
        <div className="product-sku">
          <span>SKU:</span>
          <strong>BE45VGRT</strong>
        </div>
        <div className="product-categories">
          <span>Categories:</span>
          <strong>Makina , İlik Düğme</strong>
        </div>
        
      </div>
    </div>
  );
};

export default Info;
