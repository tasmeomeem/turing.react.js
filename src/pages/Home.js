import {Link} from "react-router-dom";
import Header from "./../components/Header"
import Footer from "./../footer/Footer"


function Home() {
	return (
    	<>

    		<Header/>
			<main className="main">
				<section className="hero">
					<div className="container">
						<div className="row">

							<div className="col-sm-12 col-md-5">
								<h1 className="hero-title mt-5"> Spin up <br />your engineering <br />dream team</h1>
								<p className="hero-description">
									Our <span className="text-primary">AI-backed Intelligent Talent Cloud </span> helps you source,vet, match, and manage theworld's best software developers remotely.
								</p>
							
								<Link to="./hire" className="btn btn-primary btn-lg">Hire Developer</Link>
								
								<h5><br />looking for jobs instead?<span className="text-primary">Apply for jobs
								</span></h5>
							</div>

							<div className="col-sm-12 col-md-7">
								<img className="pic.1" src="./assets/images/hero.png" />
							</div>

							<div className="col-12">
								<p>
									Join hundreds of companies that trust Turing to hire remote softwaredevelopers
								</p>	
							</div>

							<div className="col-12">
								<div className="d-flex">
									<img className="logo me-5" src="./assets/images/partners/partner-01.svg" />
									<img className="logo me-5" src="./assets/images/partners/partner-02.svg" />
									<img className="logo me-5" src="./assets/images/partners/partner-03.svg" />
									<img className="logo me-5" src="./assets/images/partners/partner-04.svg" />
									<img className="logo me-5" src="./assets/images/partners/partner-05.svg" />
								</div>
							</div>
						</div>
					</div> 
				</section>

				<section className="work mt-5 ">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12 py-5">
								<div className="mb-3 fs-1 text-center fw-bold text-white">
									We now live in a remote-first world
								</div>

								<div className="fs-3 text-center text-white">
									Companies are in competition to garner the <br />benefits of remote engineering talent
								</div>
							</div>

							<div className="px-5">
								<div className="row">
									<div className="col-sm-12 col-lg-4">
										<div className="card work-card">
											<div className="card-body d-flex align-items-center">
											    <div className="work-icon me-3">
											    	<img src="./assets/images/globe-02.svg" />
											    </div>

											    <div className="fs-4 text-white">
											    	Planetary pool of software developers
											    </div>
											</div>    
										</div>
									</div>

									<div className="col-sm-12 col-lg-4">
										<div className="card work-card">
											<div className="card-body d-flex align-items-center">
											    <div className="work-icon me-3">
											    	<img src="./assets/images/globe-02.svg" />
											    </div>

											    <div className="fs-4 text-white">
											    	Millions of untapped Silicon Valley caliber engineers
											    </div>
											</div>    
										</div>
									</div>

									<div className="col-sm-12 col-lg-4">
										<div className="card work-card">
											<div className="card-body d-flex align-items-center">
											    <div className="work-icon me-3">
											    	<img src="./assets/images/people.svg" />
											    </div>

											    <div className="fs-4 text-white">
											    	Proven success of distributed teams
											    </div>
											</div>    
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="middle">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-lg-6" >
								<img src="./assets/images/rowing.svg" />
							</div>

							<div className="col-lg-6 col-sm-12">
								<div className="row">
									<div className="col-12">
										<h2 className="fs-1 fw-bold mt-5" >
											Remote is challenging
										</h2>	
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body d-flex align-items-center">
											    <div className="me-3">
											    	<img src="./assets/images/blue_earth.svg" />
											    </div>

											    <div className="fs-4 text-black">
											    	Proven success of distributed teams
											    </div>
											</div>    
										</div>
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body d-flex align-items-center">
											    <div className="me-3">
											    	<img src="./assets/images/blue_search.svg" />
											    </div>

											    <div className="fs-4 text-black">
											    	Vetting remote candidates without taking up all of the engineering time
											    </div>
											</div>    
										</div>
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body d-flex align-items-center">
											    <div className="me-3">
											    	<img src="./assets/images/blue_shield.svg" />
											    </div>

											    <div className="fs-4 text-black">
											    	Making remote development easy, compliant, and secure
											    </div>
											</div>    
										</div>
									</div>

									 <div className="col-12">
								    	
								    	<Link to="/hire"className="btn btn-primary text-white fw-bold px-4">Hire Developers</Link>
		
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="combine-section">
					<div className="container">
						<div className="row mt-5">
							<div className="col-12">
								<div className="text align-center">
									<h1 className="py-5 display-5 text-center fw-bold">
										Turing combines planetary reach and AI <br />to deliver your ideal remote developers
									</h1>
								</div>
							</div>

							<div className="row gx-5">
								<div className="col-lg-3 col-sm-12">
									<div className="card shadow border-0 rounded p-4 h-100">
									    <img src="./assets/images/tailored.png" className="card-img-top" />
									    <div className="card-body">
									      	<div className="card-title fs-5 fw-bold">Tailored to your<br />
									      	    requirements
									      	</div>

									      	<div>
									      		<ul className="fs-5">
										      		<li>Role</li>
													<li>Tech Stack</li>
													<li>Seniority Level</li>
												</ul>
									      	</div>
									    </div>
									</div>
								</div>

								<div className="col-lg-6 col-sm-12">
									<div className="card shadow border-0 rounded p-5 h-100">
										<div className="card-body">
											<div className="text-center fw-bold fs-3 mb-3">
												Our <span className="text-primary">Intelligent Talent Cloud</span> Platform Leverages
											</div>

											<div className="card combine-card">
												<div className="card-body">
				            						<div className="d-flex align-items-center">
				                						<img src="./assets/images/icons/01.svg" alt="image" width="30" height="30" />
			                							<div className="fs-6 ms-3 text-primary fw-bold">
			                								Global Sourcing
			                							</div>
										            </div>
										        </div>
										    </div>

										    <div className="card combine-card">
												<div className="card-body">
				            						<div className="d-flex align-items-center">
				                						<img src="./assets/images/icons/02.svg" alt="image" width="30" height="30" />
			                							<div className="fs-6 ms-3 text-primary fw-bold">
			                								Intelligent Vetting
			                							</div>
										            </div>
										        </div>
										    </div>

										    <div className="card combine-card">
										        <div className="card-body">
										            <div className="d-flex align-items-center">
										                <img src="./assets/images/icons/02.svg" alt="image" width="30" height="30" />
										                <div className="fs-6 ms-3 text-primary fw-bold">Extensive Matching</div>
										            </div>
										        </div>
										    </div>

										    <div className="card combine-card">
										        <div className="card-body">
										            <div className="d-flex align-items-center">
										                <img src="./assets/images/icons/03.svg" alt="image" width="30" height="30" />
										                <div className="fs-6 ms-3 text-primary fw-bold">HR / Payments Compliance
										                </div>
										            </div>
										        </div>
										    </div>

										    <div className="card combine-card">
										        <div className="card-body">
										            <div className="d-flex align-items-center">
										                <img src="./assets/images/icons/04.svg" alt="image" width="30" height="30" />
										                <div className="fs-6 ms-3 text-primary fw-bold">Automated On-The-Job Quality Control
										                </div>
										            </div>
										        </div>
										    </div>

										    <button type="button"className="btn btn-primary btn-lg w-100">
									    		See how it works
									   		</button>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-sm-12">
									<div className="card shadow border-0 rounded p-4 h-100">
									    <img src="./assets/images/ideal_developer.png" className="card-img-top" />
									    <div className="card-body">
									      	<h5 className="card-title fs-3 fw-bold">
									      		Your ideal developer
									      	</h5>

									      	<ul className="card-text">
									      		<li>
									      			<span className="fw-bold fs-6">Typical engagement:</span>
													Full-time
												</li>

												<li>
													<span className="fs-6 fw-bold">Time zone overlap:</span>
													<br />
													4 hours
												</li>
									      	</ul>
									    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container">
						<div className="col-12">
							<div className="text align-center mt-5">
								<h1 className="fs-1 text-center fw-bold">
									Why businesses choose Turing
								</h1>
							</div>

							<div className="row px-5 mt-5">
								<div className="col-lg-4 col-sm-12">
									<div className="card border-0">
										<div className="card-body">
										    <div className="d-flex align-items-center me-3">
										    	<img src="./assets/images/bolt.svg" />
										    	<div className="fs-5 fw-bold ms-2">Speed</div>
										    </div>

										    <div className="h1 text-success fw-bold">
										    	5 days
										    </div>
										    
										    <div className="fs-5">
										    	to fill <span className="text-success">most roles,</span>
												sometimes same day.
										    </div>
										</div>    
									</div>
								</div>

								<div className="col-lg-4 col-sm-12">
									<div className="card border-0">
										<div className="card-body">
										    <div className="d-flex align-items-center me-3">
										    	<img src="./assets/images/stopwatch.svg" />
										    	<div className="fs-5 fw-bold ms-2"> Time saved</div>
										    </div>

										    <div className="h1 text-success fw-bold">
										    	50+ hours
										    </div>
										    
										    <div className="fs-5">
										    	of engineering team time
												saved <span className="text-success">per hire</span> on interviewing.
										    </div>
										</div>    
									</div>
								</div>

								<div className="col-lg-4 col-sm-12">
									<div className="card border-0">
										<div className="card-body">
										    <div className="d-flex align-items-center me-3">
										    	<img src="./assets/images/thumbsup.svg" />
										    	<div className="fs-5 fw-bold ms-2">Retention</div>
										    </div>

										    <div className="h1 text-success fw-bold">
										    	97%
										    </div>
										    
										    <div className="fs-5">
										    	to fill most roles'<br /><span className="text-success">
												sometimes same day.</span>
										    </div>
										</div>    
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="developer-work mt-5 ">
					<div className="container">
						<div className="row">
							<div className="col-12 py-5">
								<div className="mb-3 fs-1 fw-bold text-white">
									1.5 Million+ developers <br />
									from 150 countries <br />
									have already joined Turing
								</div>

								<div className="d-flex mt-5">
									<div className="fs-2 text-white me-4">
										<div className="fs-1 fw-bold">
											15+
										</div>

										<div className="fs-3">
											Job types
										</div>
										
									</div>

									<div className="fs-2 text-white me-4">
										<div className="fs-1 fw-bold">
											100+
										</div>

										<div className="fs-3">
											Technologies
										</div>
									</div>

									<div className="fs-2 text-white me-4">
										<div className="fs-1 fw-bold">
											7+ 
										</div>

										<div className="fs-3">
											Seniority levels
										</div>
									</div>
								</div>

								<div className="d-flex mt-5 fs-4 fw-bold">
									<Link to="./hire" className="btn btn-light text-primary me-3">Hire Developer</Link>

									<button className="btn btn-primary">
										Apply for Jobs
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="developers">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-12" >
								<img src="./assets/images/steps.svg" />
							</div>

							<div className="col-md-6 col-sm-12">
								<div className="row">
									<div className="col-12">
										<h2 className="fs-1 fw-bold mt-5" >
											Why are the best developers joining Turing?<span className="text-primary">Because they want careers, not gigs.</span>
										</h2>	
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body d-flex align-items-center">
											    <div className="me-3">
											    	<img src="./assets/images/profile_check.svg" />
											    </div>

											    <div className="fs-4 text-black">
											    	Vetted once, eligible for life
											    </div>
											</div>    
										</div>
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body d-flex align-items-center">
											    <div className="me-3">
											    	<img src="./assets/images/exclusive.svg" />
											    </div>

											    <div className="fs-4 text-black">
											    	Exclusive Turing developer community
											    </div>
											</div>    
										</div>
									</div>

									<div className="col-12">
										<div className="card border-0">
											<div className="card-body d-flex align-items-center">
											    <div className="me-3">
											    	<img src="./assets/images/income.svg" />
											    </div>

											    <div className="fs-4 text-black">
											    	Income stability thanks to 99% rematch rate
											    </div>
											</div>    
										</div>
									</div>

									 <div className="col-12">
								    	<button type="button"className="btn btn-primary btn-lg">
								    		Apply for jobs
								    	</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-light mt-4 py-5">
					<div className="container">
						<div className="row mb-5">
							<div className="col-md-6 col-sm-12">
								<div className="fs-2 fw-bold">
									People Turing
								</div>

								<div className="fs-6">
									Watch Turing.com reviews from developers across the world and learn what it's like working with top Silicon Valley firms.
								</div>	
							</div>

							<div className="col-md-6 col-sm-12 text-end">
								<div className="">
									<span className="fs-3 fw-bold">4.6</span>
									<span className="fs-6" style={{opacity: '0.7'}}>OUT OF 5</span>	
								</div>

								<div>
									<small style={{opacity: '0.7'}}>based on developer reviews as of May
										2022
									</small>
								</div>

								<div className="fs-6 text-primary">
									View all reviews
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4 col-sm-12">
								<div className="card review-card" style={{backgroundImage: "url(./assets/images/harsh_testimonial.jpeg)"}}>
									<div className="overlay">
										<div className="card-body p-4">
											<div className="fs-6 fw-bold text-white">
												Harsh, India
											</div>

											<div>
												<small className="text-white" style={{opacity: '0.7'}}>
													React/Node Developer
												</small>
											</div>

											<div className="fs-6 text-white mt-3 review-description">
												<i>
													"Turing bridges the gap in employment opportunities across the world giving developers a better quality of work, culture, exposure, and pay".
												</i>
											</div>

											<div className="fs-5 text-white mt-4">
												Watch video
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12">
								<div className="card review-card" style={{backgroundImage: "url(./assets/images/tiago_testimonial.jpeg)"}}>
									<div className="overlay">
										<div className="card-body p-4">
											<div className="fs-6 fw-bold text-white">
												Tiago, Brazil
											</div>

											<div>
												<small className="text-white" style={{opacity: '0.7'}}>
													Software Developer
												</small>
											</div>

											<div className="fs-6 text-white mt-3 review-description">
												<i>
													"What I love about Turing is that they offer long-term opportunities to work for amazing, mission-driven U.S. companies with a great salary. Here we celebrate each other's wins and success together."
												</i>
											</div>

											<div className="fs-5 text-white mt-4">
												Watch video
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12">
								<div className="card review-card" style={{backgroundImage: "url(./assets/images/baah_fullstack_developer.jpeg)"}}>
									<div className="overlay">
										<div className="card-body p-4">
											<div className="fs-6 fw-bold text-white">
												Baah, Ghana
											</div>

											<div>
												<small className="text-white" style={{opacity: '0.7'}}>
													React/Node Developer
												</small>
											</div>

											<div className="fs-6 text-white mt-3 review-description">
												<i>
													"With Turing's good and timely payments, 
													my financial health is better than ever."
												</i>
											</div>

											<div className="fs-5 text-white mt-4">
												Watch video
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="partner-section mt-5">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="text-center fs-3">
									<i>
										"Turing books $87M at a $1.1B valuation to help source,<br /> hire and manage engineers remotely"
									</i>	
								</div>
								
							</div>
						</div>

						<div className="row">
							<div className="col-12">
								<div className="d-flex justify-content-between mt-5">
									<img src="./assets/images/banners/press_banner_techcrunch.svg" />
									<img src="./assets/images/banners/company_slider_logo04.svg" />
									<img src="./assets/images/banners/the_information.svg" />
									<img src="./assets/images/banners/press_banner_fastcompany.svg" />
									<img src="./assets/images/banners/press_banner_entrepreneur.svg" />
								</div>
								
							</div>
							
						</div>
					</div>
				</section>

				<section className="news-latter py-5 mt-5">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="fs-1 fw-bold text-center text-white">
									Join Turing to unleash the world’s<br />
									untapped human potential
									<div className="fs-3 fw-bold justify-content-between mt-3">
										<Link to="./hire" className="btn btn-primary btn-lg">Hire Developer</Link>
										<span className="text-white fs-6">Or</span>
										<button className="btn btn-dark btn-lg border-1 rounded-3 border text-white"> Apply for jobs</button>
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

export default Home;
