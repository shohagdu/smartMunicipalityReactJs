export default function Footer(){
    return (
        <>
            <footer className="footer-area pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget single-bg">
							<a href="index.html" className="logo">
								<img data-cfsrc="%PUBLIC_URL%/assets/images/white-logo.png" alt="Image" style={{display:'none',visibility:'hidden'}} /><noscript><img src="assets/images/white-logo.png" alt="Image" /></noscript>
							</a>

							<p>পৌরসভা</p> 

							<ul className="social-icon">
								<li>
									<a href="https://www.facebook.com/" target="_blank">
										<i className="ri-facebook-fill"></i>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/" target="_blank">
										<i className="ri-instagram-line"></i>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/" target="_blank">
										<i className="ri-twitter-fill"></i>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/" target="_blank">
										<i className="ri-linkedin-box-fill"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget">
							<h3>ঠিকানা </h3>

							<ul className="address">
								<li>
									<i className="ri-map-pin-fill"></i>
									2976 Sunrise road las vegas, <br/> NV 89108
								</li>
								<li>
									<i className="ri-mail-open-fill"></i>
									<a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#620b0c040d22150b090b0c4c010d0f"><span className="__cf_email__" data-cfemail="4f262129200f3826242621612c2022">[email&#160;protected]</span></a>
								</li>
								<li className="location">
									<i className="ri-phone-fill"></i>
									<a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget">
							<h3> গুরুত্বপূর্ন লিংক </h3>

							<ul className="import-link">
								<li>
									<a href="government-services.html">পাসপোর্টের আবেদন ফরম</a>
								</li>
								<li>
									<a href="terms-conditions.html">অনলাইন জন্ম/মৃত্যু নিবন্ধন</a>
								</li>
								<li>
									<a href="privacy-policy.html">ভিসা যাচাই</a>
								</li>
								<li>
									<a href="accessibility.html">ই-স্বাস্থ্য সেবা</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget newsletter">
							<h3>Newsletter</h3>
							<p>Sign up for our weekly council's newsletter</p>

							<form className="newsletter-form" data-toggle="validator">
								<input type="email" className="form-control" placeholder="hello@step.com" name="EMAIL" required  />
	
								<button className="subscribe" type="submit">
									Subscribe
									<i className="ri-arrow-right-line"></i>
								</button>
	
								<div id="validator-newsletter" className="form-result"></div>
							</form>	
						</div>
					</div>
				</div>
			</div>

			<div className="shape footer-shape-1">
				<img data-cfsrc="%PUBLIC_URL%/assets/images/footer-shape-1.png" alt="Image" style={{display:'none',visibility:'hidden'}} /><noscript><img src="assets/images/footer-shape-1.png" alt="Image" /></noscript>
			</div>

			<div className="shape footer-shape-2">
				<img data-cfsrc="%PUBLIC_URL%/assets/images/footer-shape-2.png" alt="Image" style={{display:'none', visibility:'hidden'}} /><noscript><img src="assets/images/footer-shape-2.png" alt="Image" /></noscript>
			</div>
		</footer>
        </>
    );
}