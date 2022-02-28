import NavBar from "./NavBar";
export default function Header(){
    return(
        <>
            <header className="header-area">
			<div className="top-header">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<ul className="header-left-content">
								<li>
									<a href="">
										<i className="ri-mail-open-fill"></i>
										<span> info@digitalup.com  </span>
									</a>
								</li>
							</ul>
						</div>

						<div className="col-lg-6 col-md-6">
							<div className="header-right-content">
								<ul className="my-account">
									<li>
										<a href="#" className="dropdown-control">
											<i className="ri-user-line"></i> 
											My account
											<i className="ri-arrow-down-s-line"></i>
										</a>

										<ul className="my-account-link">
											<li>
												<a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
													Log In
												</a>
											</li>
											<li>
												<a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop-2">
													Register
												</a>
											</li>
										</ul>
									</li>
								</ul>

								<div className="languages-switcher">
									<i className="ri-global-line"></i>
									<select>
										<option value="1">English</option>	
										<option value="2">العربيّة</option>
										<option value="3">Deutsch</option>
										<option value="4">Português</option>
										<option value="5">简体中文</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="navbar-area">
                <div className="mobile-responsive-nav">
                    <div className="container">
                        <div className="mobile-responsive-menu">
                            <div className="logo">
                                <a href="index.html">
									<script type="text/javascript" style={{display:'none'}}>

</script>
<script type="text/javascript" src="assets/js/mirage2.min.js"></script>
<img data-cfsrc="assets/images/logo.png" alt="logo" style={{display:'none',visibility:'hidden'}} /><noscript><img src="assets/images/logo.png" alt="logo" /></noscript>
								</a>
                            </div>
                        </div>
                    </div>
                </div>

                <NavBar />
				
				<div className="others-option-for-responsive">
					<div className="container">
						<div className="dot-menu">
							<div className="inner">
								<div className="circle circle-one"></div>
								<div className="circle circle-two"></div>
								<div className="circle circle-three"></div>
							</div>
						</div>
						
						<div className="container">
							<div className="option-inner">
								<div className="others-option justify-content-center d-flex align-items-center">
									<ul>
										<li>
											<div className="option-item">
												<i className="search-btn ri-search-line"></i>
												<i className="close-btn ri-close-line"></i>
												
												<div className="search-overlay search-popup">
													<div className='search-box'>
														<form className="search-form">
															<input className="search-input" name="search" placeholder="Search" type="text" />
			
															<button className="search-button" type="submit">
																<i className="ri-search-line"></i>
															</button>
														</form>
													</div>
												</div>
											</div>
										</li>
										<li>
											<a href="tel:+1-(514)-312-5678" className="call">
												<i className="ri-phone-fill"></i>
												+1 (514) 312-5678
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
		</header>
        </>
    );
}