import Star2Img from "../../../assets/images/v1/star2.png";
import ServiceCard from "./ServiceCard";

function Services({ services }) {
  return (
    <div className="section aximo-section-padding4" style={{backgroundColor:"#EFE9FB"}}>
      <div className="container">
        <div className="aximo-section-title center" style={{position:"relative"}}>
			<p className="title-decor">ABOUT US</p>
          <h2>
            Br<span className="font-decor-dark">i</span>ng
            <span className="font-decor-dark">i</span>ng your{" "}
            <span className="font-decor-dark">i</span>deas to l
            <span className="font-decor-dark">i</span>fe{" "} 
            <span className="font-decor-dark">i</span>s what we do
          </h2>
        </div>
        <div className="aximo-service-wrap">
          <div className="row">
            {services.map((item) => (
              <ServiceCard key={item.id} service={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
