import { Link } from "react-router-dom";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon } }) {
	return (
		<div className="col-lg-6">
			<div className="aximo-iconbox-wrap">
				<div className="aximo-iconbox-icon" style={{marginBottom:"15px"}}>
					<i className={`${icon}`} style={{color:"#AFA0D1"}}></i>
				</div>
				<div className="aximo-iconbox-data">
					<h3  style={{fontFamily:"content-medium"}}>{title}</h3>
					<p>{description}</p>
				
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
