import {Link} from "react-router-dom";
function Footer () {
	return (
		<>
			<footer className="footer py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-sm-12">
							<div>
								<img src="./assets/images/logo_white.svg" />
							</div>
						</div>

						<div className="col-md-2 col-sm-12">
							<div className="fs-6 fw-bold text-white">
								Customers
							</div>

							<div className="footer-link mt-3">
								<div>
									<Link to="/hire">Hire Developers</Link>
								</div>
								
								<div>
									<a href="">Book a Call</a>
								</div>

								<div>
									<a href="">Hire for Specific Skills</a>
								</div>

								<div>
									<a href="">Customer Reviews</a>
								</div>

								<div>
									<a href="">How to Hire</a>
								</div>
							</div>
							
						</div>

						<div className="col-md-2 col-sm-12">
							<div className="fs-6 fw-bold text-white">
								Developers
							</div>

							<div className="footer-link mt-3">
								<div>
									<a href="">Apply for jobs</a>
								</div>
								
								<div>
									<a href="">Developer Login</a>
								</div>

								<div>
									<a href="">Remote Developer Jobs</a>
								</div>

								<div>
									<a href="">Developer Community</a>
								</div>

								<div>
									<a href="">Developer Stories</a>
								</div>
							</div>
						</div>

						<div className="col-md-2 col-sm-12">
							<div className="fs-6 fw-bold text-white">
								Company
							</div>

							<div className="footer-link mt-3">
								<div>
									<a href="">Blog</a>
								</div>
								
								<div>
									<a href="">Press</a>
								</div>

								<div>
									<Link to="./company">About us</Link>
								</div>

								<div>
									<a href="">Non-developer jobs</a>
								</div>

								<div>
									<a href="">Turing Reviews</a>
								</div>
							</div>
						</div>

						<div className="col-md-2 col-sm-12">
							<div className="fs-6 fw-bold text-white">
								Contact us
							</div>

							<div className="footer-link mt-3">
								<div>
									<Link to="./contact">Contact us</Link>
								</div>
								
								<div>
									<a href="">Help Center</a>
								</div>
							</div>
						</div>
					</div>

					<div className="row py-5">
						<div className="col-md-6 col-sm-12">
							<div className="social-icon d-flex">
								<a href=""><i className="fa-brands fa-facebook"></i></a>
								<a href=""><i className="fa-brands fa-twitter"></i></a>
								<a href=""><i className="fa-brands fa-linkedin"></i></a>
								<a href=""><i className="fa-brands fa-instagram"></i></a>
								<a href=""><i className="fa-brands fa-youtube"></i></a>
							</div>

							<div className="fs-6 fw-bold text-white">© 2022 Turing</div>
							<div className="text-white">
								<small>
									1900 Embarcadero Road Palo Alto, CA,94303
								</small>	
							</div>
						</div>

						<div className="col-md-6 col-sm-12">
							<div className="social-link d-flex justify-content-end">
								<a href="">Sitemap</a>
								<a href="">Terms of Service</a>
								<a href="">Privacy Policy</a>
							</div>
							
						</div>
						
					</div>
				</div>
			</footer>
		</>
	);
}
export default Footer;