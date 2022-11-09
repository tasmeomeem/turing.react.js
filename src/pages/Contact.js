import {Link} from "react-router-dom";
import Header from "./../components/Header"
import Footer from "./../footer/Footer"
function Contact() {
	return (
    	<>
			<Header/>
			<main className="main">
				<section className="contact py-5">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-12">
								<div>
									<div className="fs-1 fw-bold">
										Contact us
									</div>

									<div className="fs-5 mt-4">
										Have any questions? We'd love to hear from you.
									</div>
								</div>

								<div className="card shadow rounded-3 mt-5 border-0">
									<div className="card-body">
										<div className="">
											<div>
												<form>
													<div className="mb-3">
													  	<label className="form-label">Full name</label>
														<input type="text" className="form-control" placeholder="Full name"/>
													</div>

													<div className="mb-3">
													  	<label className="form-label">Email</label>
														<input type="email" className="form-control" placeholder="Email"/>
													</div>

													<div className="mb-3">
													  	<label className="form-label">Your inquiry</label>
														<select className="form-select">
															<option value="">Select your inquiry</option>
														    <option value="Hire Developers">Hire Developers</option>
														    <option value="Apply for Jobs">Apply for Jobs</option>
														    <option value="General questions">General questions</option>
														    <option value="Media & Press">Media & Press</option>
														</select>
													</div>

													<div className="mb-3">
													    <label htmlFor="exampleFormControlTextarea1" className="form-label">How can we help you?</label>
													    <textarea className="form-control" placeholder="I would like to know about" rows="5"></textarea>
													</div>
												</form>

												<button className="bg-primary btn-lg border-0 text-white mb-3">Send message</button>
											</div>
										</div>
									</div>

								</div>
							</div>

							<div className="col-md-6 col-sm-12 mt-5">
								<div>
									<img className="img-fluid"src="./assets/images/company/Contact-Us-Turing.png"/>
								</div>

								<div className="d-flex flex-wrap gap-5 ms-5">
									<div>
										<div className="fs-5 fw-bold mt-4">
											Have general questions?
										</div>

										<div className="fs-6 text-primary">
											Check our FAQs
										</div>

										<div className="fs-5 fw-bold mt-4">
											Customer support
										</div>

										<div className="fs-6 text-primary">
											partnerships@turing.com
										</div>
									</div>

									<div>
										<div className="fs-5 fw-bold mt-4">
											Developer support
										</div>

										<div className="fs-6 text-primary mb-3">
											support@turing.com
										</div>

										<div className="fs-5 fw-bold">
											Press
										</div>

										<div className="fs-6 text-primary mb-5">
											press@turing.com
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer/>
		</>
	);
}	
export default Contact;

