import FooterBottom from "./FooterBottom";
import FooterContent from "./FooterContent";
import MessageForm from "./MessageForm";
import sectionEnd from "../../../assets/images/v1/section-end-dark.svg"

function Footer() {
	return (
		<footer className="aximo-footer-section dark-bg">
			<div className="container"style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
				<div className="aximo-footer-top aximo-section-padding" style={{border:'none', paddingBottom:"30px"}}>
					<div className="row">
						<div className="col-lg-7">
							<FooterContent />
						</div>
						<div className="col-lg-5">
							<div className="aximo-form-wrap">
								<h4>Send us a message</h4>
								<MessageForm />
							</div>
						</div>
					</div>
				</div>
				 <div className="section-end-wrapper position-relative">
						<div className="section-end-light" style={{backgroundColor:"#272039"}}></div>
						<img src={sectionEnd} alt="section-end-light"/>
					  </div>
				<div className="aximo-footer-bottom" style={{border:'none'}}>
					<div className="row">
						<FooterBottom />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
