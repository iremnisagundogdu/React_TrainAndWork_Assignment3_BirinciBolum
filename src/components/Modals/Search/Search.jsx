import PropTypes from "prop-types";
import "./Search.css";

const Search = ({ isSearchShow, setIsSearchShow }) => {
  return (
    <div className={`modal-search ${isSearchShow ? "show" : ""} `}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Ürünlerde Ara</h3>
        <p className="modal-text">
        Aradığınız ürünleri görmek için yazmaya başlayın.
        </p>
        <form className="search-form">
          <input type="text" placeholder="Search a product" />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>ARAMA SONUÇLARI</h3>
          </div>
          <div className="results">
            <a href="#" className="result-item">
              <img
                src="/img/products/product1/1.png"
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4> 4 İplik Overlok Makinası</h4>
                <span className="search-sku">SK-700-04d</span>
                <span className="search-price">$1965.00</span>
              </div>
            </a>
            <a href="#" className="result-item">
              <img
                src="/img/products/product2/1.png"
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4>Soldan Bıçaklı Reçme</h4>
                <span className="search-sku">SKU: PD0016</span>
                <span className="search-price">$1208.00</span>
              </div>
            </a>
          </div>
        </div>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={() => setIsSearchShow(false)}
        ></i>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={() => setIsSearchShow(false)}
        ></i>
      </div>
      <div
        className="modal-overlay"
        onClick={() => setIsSearchShow(false)}
      ></div>
    </div>
  );
};

Search.propTypes = {
  isSearchShow: PropTypes.bool, // boolean olarak tanımladım
  setIsSearchShow: PropTypes.func, // fonksiyon olarak tanımladım
};
export default Search;
