import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
import PImg from "../../../assets/images/v1/pImageHero.svg";
function HeroContent() {
  return (
    <div className="aximo-hero-content">
      <h1 style={{ fontWeight: "normal", color: "#D4CEE3" }}>
        <span className="aximo-title-animation">
          An <span className="font-decor">i</span>nnovat
          <span className="font-decor">i</span>ve
        </span>{" "}
        Front-end stud<span className="font-decor">i</span>o
      </h1>
      <p
        style={{
          marginTop: "2rem",
          marginBottom: "0rem",
          position: "relative",
          zIndex: "2"
        }}
      >
        We're a creative design studio specializing in meeting the needs of the
        new generation.
        <br />
        We offer innovative and cutting-edge design solutions to help our
        clients stand out in today's fast-paced.
        <img
          src={PImg}
          alt="Shape Img"
        className="img-hero-mobile"
        />
      </p>
      <Link
        className="aximo-call-btn"
        to="/contact-us"
        style={{ fontWeight: "lighter" }}
      >
        Book a free consultation <i className="icon-call"></i>
      </Link>
    </div>
  );
}

export default HeroContent;
