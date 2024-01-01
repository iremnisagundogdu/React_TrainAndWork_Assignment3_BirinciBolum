import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">SAnayi Tipi </a>
          </li>
          <li>
            <a href="#">Dikiş Makinaları</a>
          </li>
          <li>
            <a href="#">Reçme</a>
          </li>
          <li>Soldan Bıçaklı Reçme Makinası</li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
