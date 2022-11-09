import {Link} from "react-router-dom";
import Header from "./../components/Header"
import Footer from "./../footer/Footer"
function Hire() {
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

			<main className="main">
				<section className="hero mb-5">
					<div className="container">
						<div className="row">

							<div className="col-sm-12 col-md-7 mt-5">
								<div className="hero-title">
									<span className="text-primary fs-6">For companies</span> 
								</div>	

								<p className="hero-description fs-1 fw-bold">
									Tired of fighting with Silicon Valley giants to hire software developers?
								</p>
								
								<p className="fs-5">
									Hire senior pre-vetted remote developers with strong technical and communication skills at unbeatable prices, ready to work in your timezone.
								</p>

								<div>
									Looking for jobs instead?
									<span className="text-primary">Apply for jobs</span>
								</div>
							</div>

							<div className="col-sm-12 col-md-5">
								<img className="mt-5" src="./assets/images/hire1/hire/boat.png"/>
							</div>
						</div>
					</div> 
				</section>

				<section>
					<div className="work-section">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-sm-12">
									<div className="col-12">
										<h2 className="fs-1 fw-bold mt-5" >
											High quality/cost ratio
										</h2>	
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body d-flex align-items-center">
											    <div className="d-flex justify-content-between">
											    	<div className="me-3 ">
											    		<img src="./assets/images/hire1/hire/icon-box-money.svg"/>
											    	</div>

											    	<div>
											    		<div className="fs-4 fw-bold">
										    				Hire Silicon Valley caliber at half the cost
										    			</div>

										    			<div className="fs-5">
															Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.
											    		</div>
											    	</div>
											    </div>
											</div>    
										</div>
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body d-flex align-items-center">
											    <div className=" d-flex justify-content-between">
											    	<div className="me-3">
											    		<img src="./assets/images/hire1/hire/icon-box-skills.svg"/>
											    	</div>

											    	<div>
												    	<div className="fs-4 fw-bold">
												    		100+ skills available
												    	</div>

												    	<div className="fs-5">
												    		Hire React, Node, Python, Angular, Swift, React Native, Android, Java, Rails, Golang, DevOps, ML, Data Engineers, and more.
												    	</div>
												    </div>
												</div>
											</div>    
										</div>
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body">
												<div className="d-flex align-items-center">
												    <div className="me-3">
												    	<img src="./assets/images/hire1/hire/icon-box-guard.svg"/>
												    </div>

												    <div>
												    	<div className="fs-4 fw-bold">
												    		Zero risk
												    	</div>

												    	<div className="fs-5 text-black">
												    		If you decide to stop within two weeks, you pay nothing.
											    		</div>
											    	</div>	
											    </div>	
											</div>    
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-sm-12 mt-5">
									<img className="img-fluid" src="./assets/images/hire1/hire/pic-skills.webp"/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="middle mt-5">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-lg-6" >
								<img src="./assets/images/hire1/hire/search.svg"/>
							</div>

							<div className="col-lg-6 col-sm-12">
								<div className="row">
									<div className="col-12">
										<h2 className="fs-1 fw-bold" >
											Rigorous Vetting
										</h2>	
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body">
												<div className="d-flex justify-content-between">
												    <div className="me-3">
												    	<img src="./assets/images/hire1/hire/icon-box-checked.svg"/>
												    </div>

												    <div>
												    	<div className="fs-4 fw-bold">
												    		5+ hours of tests and interviews
												    	</div> 

													    <div className="fs-5">
													    	More rigorous than Silicon Valley job interviews. We test for 100+ skills, data structures, algorithms, systems design, software specializations & frameworks.
													    </div>
													</div>
												</div>
											</div>    
										</div>
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body">
											    <div className="d-flex justify-content-between">
											    	<div className="me-3">
											    		<img src="./assets/images/hire1/hire/icon-box-medal.svg"/>
											    	</div>

											    	<div>
												    	<div className="fs-4 fw-bold">
												    		Seniority tests
												    	</div>

													    <div className="fs-5 text-black">
													    	We select excellent communicators who can proactively take ownership of business and product objectives without micromanagement.
													    </div>
												    </div>
												</div>
											</div>    
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="lower-middle mt-5">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-12">
								<div className="row">
									<div className="col-12">
										<h2 className="fs-1 fw-bold">
											Effective collaboration
										</h2>	
									</div>

									<div className="col-12 mt-3">
										<div className="card border-0">
											<div className="card-body">
												<div className="d-flex justify-content-between">
												    <div className="me-3">
												    	<img src="./assets/images/hire1/hire/icon-box-timezone.svg"/>
												    </div>

												    <div>
												    	<div className="fs-4 fw-bold">
												    		Daily updates
												    	</div>

												    	<div className="fs-5 text-black">
												    		Turing’s Workspace gives you even more visibility into your remote developer’s work with automatic time tracking & virtual daily stand-ups.
												    	</div>
												    </div> 
												</div>
											</div>    
										</div>
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body">
												<div className="d-flex justify-content-between">
												    <div className="me-3">
												    	<img src="./assets/images/hire1/hire/icon-box-manage.svg"/>
												    </div>

												    <div>
												    	<div className="fs-4 fw-bold">
												    		Easy to manage
												    	</div>

												    	<div className="fs-5 text-black">
												    		High visibility makes Turing developers easy to manage and ensures that they constantly work on what’s most valuable to you.
												    	</div>
												    </div>	
												</div>    
											</div>    
										</div>
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body">
												<div className="d-flex justify-content-between">
												    <div className="me-3">
												    	<img src="./assets/images/hire1/hire/icon-box-calendar.svg"/>
												    </div> 

												    <div>
												    	<div className="fs-4 fw-bold">
												    		Match your timezone
												    	</div>

												    	<div className="fs-5">
												    		Our developers match your time zone and overlap a minimum of 4 hours with your workday.
												    	</div>
												    </div>
												</div>
											</div>    
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-sm-12">
								<img className="img-fluid" src="./assets/images/hire1/hire/earth-collab.svg"/>
							</div>
						</div>
					</div>
				</section>

				<section className="hired-turing py-5">
					<div className="container">
						<div className="fs-3 fw-bold text-center text-white">
							Join 200+ fast-scaling start-ups <br/>
							and Fortune 500 companies that have hired Turing developers
						</div>

						<div className="fs-5 text-white text-center mt-3">
							Including top companies backed by
						</div>

						<div className="d-flex flex-warp justify-content-between mt-5">
							<img src="./assets/images/hire1/hire/google-white.svg"/>
							<img src="./assets/images/hire1/hire/andressen-white.svg"/>
							<img src="./assets/images/hire1/hire/bloomerg-white.svg"/>
							<img src="./assets/images/hire1/hire/kleiner-white.svg"/>
							<img src="./assets/images/hire1/hire/founders-white.svg"/>
						</div>
					</div>
				</section>

				<section className="silicon-valley py-5">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="fs-2 fw-bold mt-3">
									Silicon Valley customers review Turing
								</div>

								<div className="fs-6">
									Turing has helped 200+ Fortune 500 companies and fast-scaling start-ups hire pre-<br/>vetted developers on-demand. Here’s what they have to say about us.
								</div>
							</div>
						</div>

						<div className="row mt-5">
							<div className="col-md-4 col-sm-12">
								<div className="card shadow-sm silicon-valley-card">
									<div className="card-header text-end">
										<img src="./assets/images/hire1/hire/quote.svg" width="30"/>
									</div>

									<div className="card-body fs-5"style={{height: '180px'}}>
										Turing has been a valuable partner in helping us grow our team. We use Turing because it helps us quickly find great talent globally in the ultra-competitive market climate.
									</div>

									<div className="mt-4 p-3 d-flex justify-content-between"style={{height: '100px'}}>
										<div className="me-3">
											<img src="./assets/images/hire1/hire/software_solutions_242940f846.svg"/>
										</div>

										<div className="text-primary fs-6 fw-bold">
											HR Manager of a US-based, multimillion-dollar software solution provider
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12">
								<div className="card shadow-sm silicon-valley-card">
									<div className="card-header text-end ">
										<img src="./assets/images/hire1/hire/quote.svg" width="30"/>
									</div>

									<div className="card-body fs-5"style={{height: '180px'}}>
										We are happy to tell you that Tony has done an excellent job. We would like to thank team Turing for finding us such a good developer in such a short span of time.
									</div>

									<div className="mt-4 p-3 d-flex justify-content-between"style={{height: '100px'}}>
										<div className="me-3">
											<img src="./assets/images/hire1/hire/software_solutions_242940f846.svg"/>
										</div>

										<div className="text-primary fs-6 fw-bold">
											Engineering Manager of a top financial services company
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12">
								<div className="card shadow-sm silicon-valley-card">
									<div className="card-header text-end p-2">
										<img src="./assets/images/hire1/hire/quote.svg" width="30"/>
									</div>

									<div className="card-body fs-5"style={{height: '180px'}}>
										Really happy to report that Tohsin's integration into the team has been seamless and he's thriving in his role -- all thanks to Turing.com :)
									</div>

									<div className="mt-4 p-3 d-flex justify-content-between"style={{height: '100px'}}>
										<div className="me-3">
											<img src="./assets/images/hire1/hire/software_solutions_242940f846.svg"/>
										</div>

										<div className="text-primary fs-6 fw-bold">
											Hiring Manager of a price optimization platform for Shopify brands
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="profile">
					<div className="container">
						<div className="row">
							<div className="col-md-5 col-sm-12">
								<div className="card-profile border-0">
									<div className="card-title fs-1 fw-bold" style={{marginTop: '150px'}}>
										Turing Deep<br/>Developer Profile
									</div>

									<div className="card-description mt-3 fs-5">
										Our in-depth resumes help you know your next developers better. Explore their strengths and weaknesses with our Deep Developer Profiles and decide if they are a good fit for your team.
									</div>

									<div className="col-12 mt-4">
										<button className="btn btn-primary fs-4 px-4">Hire Now</button>
									</div>
								</div>
							</div>

							<div className="col-md-7 col-sm-12 mt-5">
								<div className="card">
									<img src="./assets/images/hire1/hire/skill-1.png"/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="remote">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="fs-1 fw-bold text-center mt-5">
									How to hire top remote developers through Turing?
								</div>
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-md-3 col-sm-12">
								<div className="card border-0">
									<div className="card-body ">
										<div className="rounded-circle bg-dark text-white text-center" style={{width: '20px', height: '20px'}}>
										1
										</div>

										<div className=" fs-5 fw-bold">
											Tell us the skills you<br/>need
										</div>

										<div className="fs-6">	
											We’ll schedule a call and understand your requirements.
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-sm-12">
								<div className="card border-0">
									<div className="card-body ">
										<div className="rounded-circle bg-dark text-white text-center" style={{width: '20px', height: '20px'}}>
										2
										</div>

										<div className=" fs-5 fw-bold">
											Tell us the skills you<br/>need
										</div>

										<div className="fs-6">	
											We’ll schedule a call and understand your requirements.
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-sm-12">
								<div className="card border-0">
									<div className="card-body ">
										<div className="rounded-circle bg-dark text-white text-center" style={{width: '20px', height: '20px'}}>
										3
										</div>

										<div className=" fs-5 fw-bold">
											Tell us the skills you<br/>need
										</div>

										<div className="fs-6">	
											We’ll schedule a call and understand your requirements.
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-sm-12">
								<div className="card border-0">
									<div className="card-body ">
										<div className="rounded-circle bg-dark text-white text-center" style={{width: '20px', height: '20px'}}>
										4
										</div>

										<div className=" fs-5 fw-bold">
											Tell us the skills you<br/>need
										</div>

										<div className="fs-6">	
											We’ll schedule a call and understand your requirements.
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-12 text-center">
								<button className="btn btn-primary fs-4 px-4">Hire Developer</button>
							</div>
						</div>
					</div>
				</section>

				<section className="video">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="text-center mt-5">
									<iframe width="560" height="315" src="https://www.youtube.com/embed/WFdmshp8dB0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="partner-section mt-5">
					<div className="container">
						<div className="row">
							<div className="col-12 mt-3">
								<div className="text-center fs-3">
									<i>
										"Turing books $87M at a $1.1B valuation to help source,<br/> hire and manage engineers remotely"
									</i>	
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-12">
								<div className="d-flex justify-content-between mt-5">
									<img src="./assets/images/banners/press_banner_techcrunch.svg"/>
									<img src="./assets/images/banners/company_slider_logo04.svg"/>
									<img src="./assets/images/banners/the_information.svg"/>
									<img src="./assets/images/banners/press_banner_fastcompany.svg"/>
									<img src="./assets/images/banners/press_banner_entrepreneur.svg"/>
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
export default Hire;