import { useState } from "react";
import Reviews from "../../Reviews/Reviews";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "desc")}
          >
           Açıklamalar
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "info")}
          >
            Ek Bilgiler
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Yorumlar
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" ? "active" : ""
          }`}
        >
          <p>
          Bu makinalar, kumaşlara ilik açma ve düğme dikme işlemlerini hızlı, düzenli ve verimli bir şekilde yapmak için tasarlanmıştır. İlik düğme makinası, giysilerde, çantalarda, yastıklarda ve diğer birçok tekstil ürününde kullanılan ilikleri açma işlemini otomatik veya yarı otomatik olarak gerçekleştirir. Ayrıca, düğmeleri kumaşa dikmek için de kullanılır.
          </p>
          <br />
         
        </div>
        <div
          className={`tab-panel-information content ${
            activeTab === "info" ? "active" : ""
          }`}
          id="info"
        >
        </div>
        <Reviews
          active={activeTab === "reviews" ? "content active" : "content"}
        />
      </div>
    </div>
  );
};

export default Tabs;
