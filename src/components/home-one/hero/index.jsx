import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
import squareDecorDark from "../../../assets/images/v1/square_decor_dark.svg"

function HeroSection() {
	return (
		<div className="aximo-hero-section dark-bg position-relative padding-adj-hero overflow-none">
			<img src={squareDecorDark} alt="Square Decoration Dark Bg" className="square-deco-dark" />
			<div className="container position-relative">
				<div className="row">
					<div className="col-lg-8 mobile-centering">
						<HeroContent />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
