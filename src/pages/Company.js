import {Link} from "react-router-dom";
import Header from "./../components/Header"
import Footer from "./../footer/Footer"
function Company() {
	return (
    	<>
			<Header/>

			<main className="main">
				<section className="hero mb-5">
					<div className="container">
						<div className="row">

							<div className="col-sm-12 col-md-7 mt-5">
								<div className="hero-title">
									<span className="text-primary fs-6">For companies</span>
								</div>

								<p className="hero-description fs-1 fw-bold">
									Our mission is to <br/> unleash the world's <br/> untapped human <br/> potential
								</p>

								<p className="fs-5">
									Who we are, what we do, how we do it, and everything else about us.
								</p>
							</div>

							<div className="col-sm-12 col-md-5">
								<img className="img-fluid mt-5" src="./assets/images/hire1/hire/earth-collab.svg"/>
							</div>
						</div>
					</div>
				</section>

				<section className="introdcing bg-light py-5">
					<div className="container">
						<div className="row mt-3">
							<div className="col-md-4 col-sm-12 mb-4">
								<div className="card-title fs-3"style={{color: '#6c7bd4'}}>
									What is Turing?
								</div>
							</div>

							<div className="col-md-8 col-sm-12 mb-4">
								<div className="card-description">
									We make the remote hiring journey easy and rewarding for both companies and developers. With Turing, companies can hire pre-vetted, Silicon Valley-caliber remote software talent across 100+ skills in 3-5 days. We also democratize opportunities for remote developers from around the world by offering them high-quality software jobs with top US firms.
								</div>
							</div>
						</div>

						<div className="row mt-3">
							<div className="col-md-4 col-sm-12 mb-4">
								<div className="card-title fs-3"style={{color: '#56a8f7'}}>
									What does Turing do?
								</div>
							</div>

							<div className="col-md-8 col-sm-12 mb-4">
								<div className="card-description">
									We make the remote hiring journey easy and rewarding for both companies and developers. With Turing, companies can hire pre-vetted, Silicon Valley-caliber remote software talent across 100+ skills in 3-5 days. We also democratize opportunities for remote developers from around the world by offering them high-quality software jobs with top US firms.
								</div>
							</div>
						</div>

						<div className="row mt-3">
							<div className="col-md-4 col-sm-12 mb-4">
								<div className="card-title fs-3"style={{color: '#3dbef8'}}>
									How does Turing work?
								</div>
							</div>

							<div className="col-md-8 col-sm-12 mb-4">
								<div className="card-description">
									Our Intelligent Talent Cloud uses AI to source, vet, match, and manage over 1.5 million developers worldwide. This, in turn, helps organizations save valuable time and resources as they build their dream engineering team in a matter of days.
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="glance">
					<div className="container">
						<div className="row">
							<div className="col-12 mt-5">
								<div className="fs-2 fw-bold text-center">
									Turing at a glance
								</div>
							</div>
						</div>

						<div className="row mt-3">
							<div className="col-12">
								<div className="card shadow-sm" style={{borderBottom: '5px solid #66cc80'}}>
									<div className="card-body py-4">
										<div className="fs-1 fw-bold text-center ">
											100% remote company
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row mt-3">
							<div className="col-md-4 col-sm-12">
								<div className="card shadow-sm" style={{borderBottom: '5px solid #41bfad'}}>
									<div className="card-body py-4 text-center">
										<div className="fs-1 fw-bold">
											1.5 million+
										</div>

										<div>
											Developers
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12">
								<div className="card shadow-sm" style={{borderBottom: '5px solid #56a8f7'}}>
									<div className="card-body py-4 text-center">
										<div className="fs-1 fw-bold">
											150+
										</div>

										<div>
											Countries represented
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12">
								<div className="card shadow-sm" style={{borderBottom: '5px solid #ffffff'}}>
									<div className="card-body py-4 text-center">
										<div className="fs-1 fw-bold text-center ">
											300+
										</div>

										<div>
											Customers
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12">
								<div className="card shadow-sm" style={{borderBottom: '5px solid #3dbef8'}}>
									<div className="card-body py-4 text-center">
										<div className="fs-1 fw-bold text-center ">
											100+
										</div>

										<div>
											Skills available
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12">
								<div className="card shadow-sm" style={{borderBottom: '5px solid #6c7bd4'}}>
									<div className="card-body py-4 text-center">
										<div className="fs-1 fw-bold text-center ">
											75%
										</div>

										<div>
											Of customers get developers under 3-5 days
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12">
								<div className="card shadow-sm" style={{borderBottom: '5px solid #8a62d6'}}>
									<div className="card-body py-4 text-center">
										<div className="fs-1 fw-bold text-center ">
											Palo Alto
										</div>

										<div>
											Headquarters
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="trusted mt-5 py-5"style={{background: 'linear-gradient(135deg,#57a6f6 41%,#6c7bd4)'}}>
					<div className="container">
						<div className="row">
							<div className="col-12 mt-5">
								<div>
									<div className="text-center fs-3 mt-3 text-white fw-bold">
										Turing is trusted by companies across industries
									</div>

									<div className="mt-5 text-white">
										Our customers come from diverse sectors like Banking, Finance, Healthcare, ITES, FMCG, Media & Entertainment, and more. We have helped hundreds of organizations hire high-quality software talent on-demand. From Fortune 500 companies to fast-scaling startups, hundreds of organizations trust us to scale their offshore engineering teams effortlessly.
									</div>

									<div className="mt-4 text-white">
										More than 300 firms, including well-known, new-age companies backed by top firms like Google Ventures, A16Z, Bloomberg, Khosla ventures, etc., have hired our pre-vetted developers.
									</div>

									<div className="mt-4 d-flex flex-wrap justify-content-between px-5 py-4">
										<div className="text-center">
											<img src="./assets/images/company/developer_board_white_24dp.svg" style={{width: '30px; height: 30px'}} />
											<div className="mt-2 text-white">
												Technology
											</div>
										</div>

										<div className="text-center">
											<img src="./assets/images/company/savings_white_24dp.svg"style={{width: '30px; height: 30px'}}/>
											<div className="mt-2 text-white">
												FinTech
											</div>
										</div>

										<div className="text-center">
											<img src="./assets/images/company/shopping_cart_white_24dp.svg"style={{width: '30px; height: 30px'}}/>
											<div className="mt-2 text-white">
												E-commerce
											</div>
										</div>

										<div className="text-center">
											<img src="./assets/images/company/health_and_safety_white_24dp.svg"style={{width: '30px; height: 30px'}}/>
											<div className="mt-2 text-white">
												Education
											</div>
										</div>

										<div className="text-center">
											<img src="./assets/images/company/school_white_24dp.svg"style={{width: '30px; height: 30px'}}/>
											<div className="mt-2 text-white">
												Healthcare
											</div>
										</div>

										<div className="text-center">
											<img src="./assets/images/company/developer_board_white_24dp.svg"style={{width: '30px; height: 30px'}}/>
											<div className="mt-2 text-white">
												Marketing & Advertising
											</div>
										</div>

										<div className="text-center">
											<img src="./assets/images/company/manage_search_white_24dp.svg"style={{width: '30px; height: 30px'}}/>
											<div className="mt-2 text-white">
												Consulting
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-light mt-4 py-5">
					<div className="container">
						<div className="row mb-5">
							<div className="col-12">
								<div className="fs-2 fw-bold">
									People <i className="fa-solid fa-heart text-danger"></i> Turing
								</div>

								<div className="fs-6">
									From better salary to career growth, top developers speak about <br/> the advantages of working with Turing.com.
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-12">
								<div className="swiper review-swiper">
									<div className="swiper-wrapper">
										<div className="swiper-slide">
											<div className="card review-card" style={{backgroundImage: 'url(./assets/images/company/Alexandar_b9dda9959c.webp)'}}>
												<div className="overlay">
													<div className="card-body p-4">
														<div className="fs-6 fw-bold text-white">
															Alexander, Costa Rica
														</div>

														<div>
															<small className="text-white" style={{opacity: '0.7'}}>
																Software Architect
															</small>
														</div>

														<div className="fs-6 text-white mt-3 review-description">
															<i>
																"With timely payments, consistent growth, and long-term opportunities, I am in a much better and happier place."
															</i>
														</div>

														<div className="fs-5 text-white mt-4">
															<i className="fa-solid fa-circle-play"></i> Watch video
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="swiper-slide">
											<div className="card review-card" style={{backgroundImage: 'url(./assets/images/company/Umar_e9f97f1e60.webp)'}}>
												<div className="overlay">
													<div className="card-body p-4">
														<div className="fs-6 fw-bold text-white">
															Umar, Pakistan
														</div>

														<div>
															<small className="text-white" style={{opacity: '0.7'}}>
																Software Engineer
															</small>
														</div>

														<div className="fs-6 text-white mt-3 review-description">
															<i>
																"My financial health is stronger and I feel more productive and refreshed."
															</i>
														</div>

														<div className="fs-5 text-white mt-4">
															<i className="fa-solid fa-circle-play"></i> Watch video
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="swiper-slide">
											<div className="card review-card" style={{backgroundImage: 'url(./assets/images/company/sergio_2_4a844ceb9b.webp)'}}>
												<div className="overlay">
													<div className="card-body p-4">
														<div className="fs-6 fw-bold text-white">
															Sergio, Colombia
														</div>

														<div>
															<small className="text-white" style={{opacity: '0.7'}}>
																Full-stack Engineer
															</small>
														</div>

														<div className="fs-6 text-white mt-3 review-description">
															<i>
																"Working remotely has changed my life completely, I am able to fulfill my dream of being a digital nomad, and earning in dollars has made me live a quality life."
															</i>
														</div>

														<div className="fs-5 text-white mt-4">
															<i className="fa-solid fa-circle-play"></i> Watch video
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="swiper-slide">
											<div className="card review-card" style={{backgroundImage: 'url(./assets/images/company/sergio_2_4a844ceb9b.webp)'}}>
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
															<i className="fa-solid fa-circle-play"></i> Watch video
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="swiper-slide">
											<div className="card review-card" style={{backgroundImage: 'url(./assets/images/tiago_testimonial.jpeg)'}}>
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
															<i className="fa-solid fa-circle-play"></i> Watch video
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="swiper-slide">
											<div className="card review-card" style={{backgroundImage: 'url(./assets/images/company/sergio_2_4a844ceb9b.webp)'}}>
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
																"With Turing's good and timely payments, my financial health is better than ever."
															</i>
														</div>

														<div className="fs-5 text-white mt-4">
															<i className="fa-solid fa-circle-play"></i> Watch video
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="swiper-pagination"></div>

									<div className="swiper-button-prev"></div>
									<div className="swiper-button-next"></div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="picture mt-5">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="mt-5 fs-2 text-center fw-bold">
									Meet our leadership
								</div>
							</div>
						</div>

						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 justify-content-center mt-4">
							<div className="col">
								<div className="card shadow-sm border-0 rounded-3 mb-3">
									<div className="card-body">
										<div className="text-center">
											<img className="rounded-circle" src="./assets/images/company/Jonathan_Sidhartha_Turing_Company_f218280d13.webp" style={{ width: '100px', height: '100px' }} />
										</div>

										<div className="card-title fs-5 text-center mt-3 fw-bold">
											Jonathan Siddharth
										</div>

										<div className="fs-6 text-center">
											Chief Executive Officer
										</div>

										<div className="text-center mb-3">
											<small style={{opacity: '0.7'}}>
												Prior: CEO, Rover (acquired)
											</small>
										</div>

										<div className="text-primary text-center my-5">
											View bio
										</div>
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card shadow-sm border-0 rounded-3">
									<div className="card-body">
										<div className="text-center">
											<img className="rounded-circle" src="./assets/images/company/Vijay_Turing_Company_f0b92f6981.webp" style={{width: '100px', height: '100px'}} />
										</div>

										<div className="card-title fs-5 text-center mt-3 fw-bold">
											Vijay Krishnan
										</div>

										<div className="fs-6 text-center">
											Co-Founder & CTO
										</div>

										<div className="text-center mb-3">
											<small style={{opacity: '0.7'}}>
												Prior: CEO, Rover (acquired)
											</small>
										</div>

										<div className="text-primary text-center my-5">
											View bio
										</div>
									</div>
								</div>
							</div>

							<div className="col ">
								<div className="card shadow-sm border-0 rounded-3">
									<div className="card-body">
										<div className="text-center">
											<img className="rounded-circle" src="./assets/images/company/Prakash_Turing_Company_f80706371a.webp" style={{width: '100px', height: '100px'}} />
										</div>

										<div className="card-title fs-5 text-center mt-3 fw-bold">
											Prakash Gupta
										</div>

										<div className="fs-6 text-center">
											Chief Revenue Officer
										</div>

										<div className="text-center mb-3">
											<small style={{opacity: '0.7'}}>
												Prior: CEO, Rover (acquired)
											</small>
										</div>

										<div className="text-primary text-center my-5">
											View bio
										</div>
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card shadow-sm border-0 rounded-3">
									<div className="card-body">
										<div className="text-center">
											<img className="rounded-circle" src="./assets/images/company/Zan_Turing_Company_6aaa8e7df7.webp" style={{width: '100px', height: '100px'}} />
										</div>

										<div className="card-title fs-5 text-center mt-3 fw-bold">
											Zan Doan
										</div>

										<div className="fs-6 text-center">
											SVP of Engineering
										</div>

										<div className="text-center mb-3">
											<small style={{opacity: '0.7'}}>
												Prior: CEO, Rover (acquired)
											</small>
										</div>

										<div className="text-primary text-center my-5">
											View bio
										</div>
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card shadow-sm border-0 rounded-3">
									<div className="card-body">
										<div className="text-center">
											<img className="rounded-circle" src="./assets/images/company/leader_cathleen_nilson_26522f250f.webp" style={{width: '100px', height: '100px'}} />
										</div>

										<div className="card-title fs-5 text-center mt-3 fw-bold">
											Cathleen Nilson
										</div>

										<div className="fs-6 text-center">
											VP of Finance
										</div>

										<div className="text-center mb-3">
											<small style={{opacity: '0.7'}}>
												Prior: CEO, Rover (acquired)
											</small>
										</div>

										<div className="text-primary text-center my-5">
											View bio
										</div>
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card shadow-sm border-0 rounded-3">
									<div className="card-body">
										<div className="text-center">
											<img className="rounded-circle" src="./assets/images/company/Deepak_Tiwari_Turing_Company_addcd7ad84.webp" style={{width: '100px', height: '100px'}} />
										</div>

										<div className="card-title fs-5 text-center mt-3 fw-bold">
											Deepak Tiwari
										</div>

										<div className="fs-6 text-center">
											VP of Product
										</div>

										<div className="text-center mb-3">
											<small style={{opacity: '0.7'}}>
												Prior: CEO, Rover (acquired)
											</small>
										</div>

										<div className="text-primary text-center my-5">
											View bio
										</div>
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card shadow-sm border-0 rounded-3">
									<div className="card-body">
										<div className="text-center">
											<img className="rounded-circle" src="./assets/images/company/Eric_Turing_Company_ac1d6775b3.webp" style={{width: '100px', height: '100px'}} />
										</div>

										<div className="card-title fs-5 text-center mt-3 fw-bold">
											Eric Kolovson
										</div>

										<div className="fs-6 text-center">
											VP of People Ops & Business Development
										</div>

										<div className="text-center mb-3">
											<small style={{opacity: '0.7'}}>
												Prior: CEO, Rover (acquired)
											</small>
										</div>

										<div className="text-primary text-center my-5">
											View bio
										</div>
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card shadow-sm border-0 rounded-3">
									<div className="card-body">
										<div className="text-center">
											<img className="rounded-circle" src="./assets/images/company/Sudarshan_sivaraman_turing_company_b576974441.webp" style={{width: '100px', height: '100px'}} />
										</div>

										<div className="card-title fs-5 text-center mt-3 fw-bold">
											Sudarshan Sivaraman
										</div>

										<div className="fs-6 text-center">
											SVP of Engineering
										</div>

										<div className="text-center mb-3">
											<small style={{opacity: '0.7'}}>
												Prior: CEO, Rover (acquired)
											</small>
										</div>

										<div className="text-primary text-center my-5">
											View bio
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="investors bg-light mt-4 py-5">
					<div className="container py-5">
						<div className="row row-cols-7">
							<div className="col-12 text-center">
								<div className="fs-2 fw-bold ">
									Our investors
								</div>

								<div className="mb-5 fs-6 mt-5">
									We are backed by prominent investors such as WestBridge Capital, Foundation Capital, Founders Fund (investors in Facebook, Tesla, <br/> Asana), Altair Capital, Mindset Ventures, Frontier Ventures, Gaingels, Facebook’s first CTO (Adam D’Angelo), and illustrious executives <br/> from Google, Amazon, and Twitter.
								</div>
							</div>
						</div>

						<div className="container">
							<div className="row g-3 px-md-5 justify-content-center">
								<div>
									<div className="col-md-3 col-sm-12">
										<img className="img-fluid px-5"src="./assets/images/company/investors/Foundation Capital.webp" />
									</div>

									<div className="col-md-3 col-sm-12">
										<img className="img-fluid px-5" src="./assets/images/company/investors/Westbridge.webp" />
									</div>

									<div className="col-md-3 col-sm-12">
										<img className="img-fluid px-5" src="./assets/images/company/investors/Altair.webp" />
									</div>

									<div className="col-md-3 col-sm-12">
										<img className="img-fluid px-5" src="./assets/images/company/investors/Mindset.webp" />
									</div>

									<div className="col-md-3 col-sm-12">
										<img className="img-fluid px-5" src="./assets/images/company/investors/frontier-ventures-logo.webp" />
									</div>

									<div className="col-md-3 col-sm-12">
										<img className="img-fluid px-5" src="./assets/images/company/investors/Gaingels.webp" />
									</div>

									<div className="col-md-3 col-sm-12">
										<img className="img-fluid px-5" src="./assets/images/company/investors/Chapter One.webp" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="board">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="fs-1 fw-bold mt-5">
									Turing advisory board
								</div>

								<div className="fs-5 mt-3">
									Current members of Turing's advisory board include Ashu Garg, GP at Foundation Capital, GM at Microsoft; Sumir Chadha, MD at WestBridge, Investor in Cognizant, GlobalLogic; Adam Angelo, CEO, Quora, and Facebook’s first CTO; Beerud Sheth, Co-Founder, and CEO, Gupshup and Founder of Upwork; Gokul Rajaram, Advisor, and Board member DoorDash, Coinbase, and Pinterest; Cyan Bannister, Founder, Bannister Capital; Manik Gupta, ex-CPO for Uber and angel investor. The advisory board provides strategic advice and counsel to Turing’s management team.
								</div>
							</div>
						</div>

						<div className="row row-cols-7 py-5">
							<div className="col">
								<div className="card border-0 p-3">
									<div className="mt-3 text-center">
										<img className="rounded-circle mb-2" src="./assets/images/company/advisor_ashu_garg_3dc381379e.webp" style={{width: '80px', height: '80px'}} />
									</div>

									<div className="fw-bold text-center fs-4">
										Ashu Garg
									</div>

									<div className="text-center mb-5"  style={{color: '#888'}}>
										GP at <br/> Foundation <br/> Capital, GM at<br/> Microsoft
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card border-0 p-3">
									<div className="mt-3 text-center">
										<img className="rounded-circle mb-2" src="./assets/images/company/sumir.png" style={{width: '80px', height: '80px'}} />
									</div>

									<div className="fw-bold text-center fs-4">
										Sumir Chadha
									</div>

									<div className="text-center mb-5"  style={{color: '#888'}}>
										MD at <br/> WestBridge,<br/> Investor in <br/> Cognizant,GlobalLogic
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card border-0 p-3">
									<div className="mt-3 text-center">
										<img className="rounded-circle mb-2" src="./assets/images/company/advisor_adam_dangelo_7346d9fafd.webp" style={{width: '80px', height: '80px'}} />
									</div>

									<div className="fw-bold text-center fs-4">
										Adam <br/> D'Angelo
									</div>

									<div className="text-center mb-5"  style={{color: '#888'}}>
										CEO of Quora, <br/>Facebook’s <br/>first CTO
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card border-0 p-3">
									<div className="mt-3 text-center">
										<img className="rounded-circle mb-2" src="./assets/images/company/advisor_beerudsheth_b9dee860c9.webp" style={{width: '80px', height: '80px'}} />
									</div>

									<div className="fw-bold text-center fs-4">
										Beerud Sheth
									</div>

									<div className="text-center mb-5"  style={{color: '#888'}}>
										Founder, <br/> Upwork, Co- <br/> Founder & <br/> CEO, Gupshup
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card border-0 p-3">
									<div className="mt-3 text-center">
										<img className="rounded-circle mb-2" src="./assets/images/company/advisor_gokul_rajaram_c114c4455c.webp" style={{width: '80px', height: '80px'}} />
									</div>

									<div className="fw-bold text-center fs-4">
										Gokul Rajaram
									</div>

									<div className="text-center mb-5"  style={{color: '#888'}}>
										Advisor, Board <br/> Member of DoorDash,<br/> Coin base, <br/> and Pinterest
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card border-0 p-3">
									<div className="mt-3 text-center">
										<img className="rounded-circle mb-2" src="./assets/images/company/advisor_cyan_banister_089fdcaace.webp" style={{width: '80px', height: '80px'}} />
									</div>

									<div className="fw-bold text-center fs-4">
										Cyan <br/> Banister
									</div>

									<div className="text-center mb-5"  style={{color: '#888'}}>
										Founder, <br/> Bannister <br/>Capital

									</div>
								</div>
							</div>

							<div className="col">
								<div className="card border-0 p-3">
									<div className="mt-3 text-center">
										<img className="rounded-circle mb-2" src="./assets/images/company/advisor_manik_gupta_3859973fde.webp" style={{width: '80px', height: '80px'}} />
									</div>

									<div className="fw-bold text-center fs-4">
										Manik Gupta
									</div>

									<div className="text-center mb-5"  style={{color: '#888'}}>
										Former Chief <br/> Product <br/> Officer at Uber
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="idea bg-light py-5">
					<div className="container">
						<div className="row">
							<div className="col-md-7 col-sm-12">
								<div className="fs-2 fw-bold mt-5">
									The idea behind Turing
								</div>

								<div className="fs-6 mt-5">
									<span className="fs-5 fw-bold text-primary">We now live in a remote-first world.</span> Today, almost every tech company is a remote company, thanks to the enormous benefits that fully remote teams offer. Companies that have adapted to the remote work shift are now thriving and have a significant recruiting edge.
								</div>

								<div className="fs-6 mt-4">
									When companies go remote, they get access to a <span className="text-primary">planetary pool of engineers </span> versus recruiting from a small pool of developers who live near their headquarters. They are not only able to hire higher-quality talent but also retain them for a more extended period.
								</div>

								<div className="fs-6 mt-3">
									But <span className="text-primary">becoming a remote-first company isn’t that easy.</span>
								</div>

								<div className="fs-5 mt-3">
									Companies going for remote teams usually struggle with three things.
								</div>

								<div className="fs-6 mt-3">
									First, although it’s easy to source average developers, it’s tough to find Silicon Valley-caliber developers.
								</div>

								<div className="fs-6 mt-3">
									Second, it’s hard to evaluate and vet remote talent to figure out the best candidate. Organizations have a minimal idea about remote developers' fundamental skills and qualifications through a traditional CV. It doesn’t tel...
								</div>

								<div className="text-primary mt-5">
									Read More
								</div>
							</div>

							<div className="col-md-5 col-sm-12">
								<div className="mt-5 rounded-circle">
									<img className="img-fluid" src="./assets/images/company/Turing_Company_Story_41b7c04c65.webp" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="timeline py-5">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="fs-2 fw-bold mt-5">
									The Turing timeline
								</div>

								<div className="timeline-track mt-5">
									<div className="mb-5">
										<div className="fs-2 fw-bold position-relative">
											2018
											<span className="timeline-box" style={{ backgroundColor: '#41BFAD' }}></span>
										</div>

										<div className="d-flex align-items-center">
											<div className="fs-6 me-3" style={{color: '#888'}}>
												March
											</div>

											<div className="fs-5">
												Turing makes its debut.
											</div>
										</div>
									</div>

									<div className="mb-5">
										<div className="fs-2 fw-bold position-relative">
											2019
											<span className="timeline-box"style={{ backgroundColor: '#3BD3E6' }}></span>
										</div>

										<div className="d-flex align-items-center">
											<div className="fs-6 me-3" style={{color: '#888'}}>
												August
											</div>

											<div className="fs-5">
												Turing goes to General Availability.
											</div>
										</div>
									</div>

									<div className="mb-5">
										<div className="fs-2 fw-bold mt-5 position-relative">
											2020
											<span className="timeline-box"style={{ backgroundColor: '#56A8F7' }}></span>
										</div>

										<div className="d-flex align-items-center mt-4">
											<div className="fs-6 me-3" style={{color: '#888'}}>
												May
											</div>

											<div className="fs-5">
												The number of developer signups to Turing reaches 250k.
											</div>
										</div>

										<div className="d-flex align-items-center mt-4">
											<div className="fs-6 me-3" style={{color: '#888'}}>
												August

											</div>

											<div className="fs-5">
												Turing raises $14M in seed funding.
											</div>
										</div>

										<div className="d-flex align-items-center mt-4">
											<div className="fs-6 me-3" style={{color: '#888'}}>
												December
											</div>

											<div className="fs-5">
												Turing raises $32M in Series B led by WestBridge Capital.
											</div>
										</div>
									</div>

									<div className="mb-5">
										<div className="fs-2 fw-bold mt-5 position-relative">
											2021
											<span className="timeline-box"style={{ backgroundColor: '#2E6EDF' }}></span>
										</div>

										<div className="d-flex align-items-center mt-4">
											<div className="fs-6 me-3" style={{color: '#888'}}>
												March
											</div>

											<div className="fs-5">
												Turing named to Fast Company's annual list of the World's Most Innovative Companies for 2021.
											</div>
										</div>

										<div className="d-flex align-items-center mt-4">
											<div className="fs-6 me-3" style={{color: '#888'}}>
												March

											</div>

											<div className="fs-5">
												Turing Named one of America's best startup employers for 2021 by Forbes.
											</div>
										</div>

										<div className="d-flex align-items-center mt-4">
											<div className="fs-6 me-3" style={{color: '#888'}}>
												June
											</div>

											<div className="fs-5">
												The number of developer signups to Turing reaches 500k.
											</div>
										</div>

										<div className="d-flex align-items-center mt-4">
											<div className="fs-6 me-3" style={{color: '#888'}}>
												October
											</div>

											<div className="fs-5">
												The number of developer signups to Turing reaches 1 million.
											</div>
										</div>

										<div className="d-flex align-items-center mt-4">
											<div className="fs-6 me-3" style={{color: '#888'}}>
												December
											</div>

											<div className="fs-5">
												Turing becomes a Unicorn, raises over $140 million.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="news bg-light py-5">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="fs-2 fw-bold">
									Turing in the news
								</div>
							</div>
						</div>

						<div className="row py-5">
							<div className="col-md-4 col-sm-12 mt-4">
								<div className="card border-0">
									<div className="card-body">
										<div>
											<img className="rounded-3" src="./assets/images/company/Fastcompany_Article_Turing_company_54f4f0c848.webp" style={{width: '350px', height: '180px'}} />
										</div>

										<div className="mt-3" style={{color: '#888'}}>
											FAST COMPANY
										</div>

										<div className="fs-5 fw-bold mt-3">
											Turing Named to Fast Company’s Annual <br/> List of the World’s Most Innovative Companies for 2021
										</div>

										<div className="fs-6 mt-3">
											These 10 Most Innovative Companies offered workplace solutions that <br/> helped businesses continue operations during the most disruptive year in modern times.
										</div>

										<div className="fs-6 fw-bold text-primary">
											Read more
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4  col-sm-12 mt-4">
								<div className="card border-0">
									<div className="card-body">
										<div className="rounded-3">
											<img className="rounded-3" src="./assets/images/company/techcrunch_article_7cea1cc912.webp" style={{width: '350px', height: '180px'}} />
										</div>

										<div className="mt-3"  style={{color: '#888'}}>
											TECHCRUNCH
										</div>

										<div className="fs-5 fw-bold mt-3">
											Turing Books $87M at a $1.1B Valuation to Help Source, Hire and Manage Engineers Remotely
										</div>

										<div className="fs-6 mt-3">
											Turing — which uses AI to source, evaluate, hire, onboard, and then manage engineers remotely (including the HR and compliance aspects) in a bigger platform that it calls the “Talent Cloud” — has raised $87 million,
										</div>

										<div className="fs-6 fw-bold text-primary">
											Read more
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12 mt-4">
								<div className="card border-0">
									<div className="card-body">
										<div className="rounded-3">
											<img className="rounded-3" src="./assets/images/company/Forbes_Article_Turing_Company_4392847f92.webp" style={{width: '350px', height: '180px'}} />
										</div>

										<div className="mt-3" style={{color: '#888'}}>
											FORBES
										</div>

										<div className="fs-5 fw-bold mt-3">
											Turing Named One of America’s <br/> Best Startup Employers for 2021 by Forbes
										</div>

										<div className="fs-6 mt-3">
											The list was compiled by evaluating 2,500 American businesses with at least <br/> 50 employees on three criteria: employer reputation, <br/> employee satisfaction and growth.
										</div>

										<div className="fs-6 fw-bold text-primary">
											Read more
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="blog mt-5">
					<div className="container">
						<div className="row">
							<div className="col-md-4 col-sm-12">
								<div className="card border-0">
									<div className="card-body">
										<div className="p-5 text-center rounded-3" style={{background: 'transparent linear-gradient(90deg,#56a8f7,#6c7bd4) 0 0 no-repeat padding-box'}}>
											<img src="./assets/images/hire1/hire/campaign.svg" />
										</div>

										<div className="fs-5 fw-bold mt-3">
											Press
										</div>

										<div className="fs-6">
											What's up with Turing?
											Get the latest news about us here.
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12">
								<div className="card border-0">
									<div className="card-body">
										<div className="p-5 text-center rounded-3" style={{background: 'transparent linear-gradient(90deg,#41bfad,#3bd3e6) 0 0 no-repeat padding-box'}}>
											<img src="./assets/images/hire1/hire/blog.svg" />
										</div>

										<div className="fs-5 fw-bold mt-3">
											Blog
										</div>

										<div className="fs-6">
											Know more about remote work.<br/>
											Checkout our blog here.
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-12">
								<div className="card border-0">
									<div className="card-body">
										<div className="p-5 text-center rounded-3" style={{background: 'transparent linear-gradient(90deg,#a1dc65,#66cc80) 0 0 no-repeat padding-box'}}>
											<img src="./assets/images/hire1/hire/contact.svg" />
										</div>

										<div className="fs-5 fw-bold mt-3">
											Career
										</div>

										<div className="fs-6">
											xplore exciting opportunities and work<br/>
											with the best minds from Silicon Valley.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="news-latter py-5 mt-5">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12 text-center">
								<div className="fw-bold text-white fs-1 mb-5">
									Join Turing to unleash the world's<br/>untapped human potential
								</div>

								<div className="fw-bold justify-content-between">
									<button className="btn btn-light btn-lg px-4 mb-3 w-sm-100">Hire Developers</button>
									<small className="text-white d-inline-block px-3 mb-3 w-sm-100">OR</small>
									<button className="btn btn-outline-light btn-lg px-4 mb-3 w-sm-100">Apply for jobs</button>
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
export default Company;

