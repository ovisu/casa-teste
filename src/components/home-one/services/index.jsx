import Star2Img from "../../../assets/images/v1/star2.png";
import ServiceCard from "./ServiceCard";
import squareDecoLight from "../../../assets/images/v1/square_decor_light.svg";
import cubeDecoLight from "../../../assets/images/v1/cube_decor_light.svg";
import sectionEnd from "../../../assets//images/v1/section-end-light.svg";

function Services({ services }) {
  return (
    <div
      className="section aximo-section-padding4 bg-light position-parent mobile-centering overflow-none"
      style={{ marginTop: "-1px" }}
    >
      <div className="container">
        <img
          src={squareDecoLight}
          alt="Square decoration light"
          className="square-deco-light-r"
        />
        <img
          src={squareDecoLight}
          alt="Square decoration light"
          className="square-deco-light-l"
        />
        <div className="aximo-section-title center position-relative overflow-none">
          <img
            src={cubeDecoLight}
            alt="Cube decor light"
            className="cube-deco-light"
          />
          <p className="title-decor">SERVICES</p>
          <h2>
            Br<span className="font-decor-dark">i</span>ng
            <span className="font-decor-dark">i</span>ng your{" "}
            <span className="font-decor-dark">i</span>deas to l
            <span className="font-decor-dark">i</span>fe{" "}
            <span className="font-decor-dark">i</span>s what we do
          </h2>
          <p className="services-p">
            Behind every product we deliver, there’s a team committed to <br />{" "}
            making a difference. We’re not just building technology, we’re also
            fostering relationships.
          </p>
        </div>
        <div className="aximo-service-wrap" style={{border: "none"}}>
          <div
            className="row"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {services.map((item) => (
              <ServiceCard key={item.id} service={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="section-end-wrapper position-relative">
        <div className="section-end-light"></div>
        <img src={sectionEnd} alt="section-end-light"/>
      </div>
    </div>
  );
}

export default Services;
