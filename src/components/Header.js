import {Link} from "react-router-dom";
function Header () {
	return (
		<>
			<header className="header">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6 col-sm-12">
							<Link to="/"><img className="logo" src="./assets/images/logo_black.svg" /></Link>
						</div>

						<div className="col-md-6 col-sm-12">
							<ul className="nav justify-content-end">
								<li className="nav-item">
									<a href="#" className="nav-link me-3">Apply for Jobs</a>
								</li>

								<li className="nav-item">
									<Link to="/hire" className="nav-link btn btn-primary text-white fw-bold px-4">Hire Developers</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		</>
	);	
}
export default Header;