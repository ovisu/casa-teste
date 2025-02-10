import logoCasa from "../../../assets/images/logo/logo-casa.svg"
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6" style={{display:"flex", flexDirection: "column", alignItems:"center", border:"none"}}>
				<div className="aximo-footer-logo">
					<a href="" style={{display:"flex", alignItems:"center", gap: "5px", textDecoration:"none"}}>
						<img src={logoCasa} alt="Logo" style={{width:"35px"}} />
						<p style={{fontFamily:"title", color:"white", fontSize:"1.5rem"}}>Casa Agency</p>
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p> &copy; Copyright 2024, All Rights Reserved by Casa Agency</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
