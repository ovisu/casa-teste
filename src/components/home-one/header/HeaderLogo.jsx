import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo-casa.svg";

function HeaderLogo() {
	return (
		<div className="brand-logo position-parent">
			<Link to="/"  style={{display:"flex", alignItems:"center", gap:"5px"}}>
				<img src={Logo} alt="Logo" className="light-version-logo" style={{width: "35px"}}/>
				<p style={{fontFamily:"title"}}>Casa Agency</p>
			</Link>
		</div>
	);
}

export default HeaderLogo;
