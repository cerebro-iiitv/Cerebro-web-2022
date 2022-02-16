import Navbar from "../Navbar/Navbar";
import "./CommonLayer.scss";
import "../Navbar/Navbar.scss";

const CommonLayer = () => {
  return (
    <div className="main-wrapper">
      <div className="blur-layer"></div>
      <div className="visible-layer">
        <div className="visible-layer-top">
          <div className="visible-layer-top-spacer"></div>
          <div className="visible-layer-top-center"></div>
          <div className="visible-layer-top-dashboard">
            <div className="visible-layer-top-dashboard-main">DASHBOARD</div>
          </div>
        </div>
          <Navbar status="hover" />
    
      </div>
    </div>
  );
};

export default CommonLayer;
