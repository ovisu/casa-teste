import Video from "./Video";
import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";

function About() {
	return (
		<div className="section aximo-section-padding bg-light">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2>
								<span className="aximo-title-animation">
									We make your
									
								</span>{" "}
								bus<span className="font-decor-dark">i</span>ness stand out
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
								We work closely with our clients to know their objectives, target audience, unique
								needs, and practical design solutions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
