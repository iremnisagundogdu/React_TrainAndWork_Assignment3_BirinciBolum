import "./CampaignItem.css";

const CampaignItem = () => {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
        Yedek Parça<acronym title=""></acronym> <br />
        İplik <br /> <br /> 
        %40`a varan indirimler
      </h3>
      <a href="#" className="btn btn-primary">
        Göz At
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
};

export default CampaignItem;
