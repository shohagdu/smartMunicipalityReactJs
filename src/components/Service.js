import ServiceShape from "../assets/images/services-shape.png";
export default function Service(){
    return (
        <>
            <section class="services-area pt-100 pb-70">
			<div class="container">
				<div class="section-title">
					<h2>পৌরসভার সেবাসমূহ </h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eveniet quod mollitia asperiores ullam dolor corporis. vero nemo consectetur</p>
				</div>

				<div class="row justify-content-center">
					<div class="col-lg-4 col-md-6">
						<div class="single-services-box">
							<span class="flaticon-group"></span>

							<h3>
								<a href="services-details.html">
									নাগরিক সেবা
								</a>
							</h3>

							<p> সকল প্রকার নাগরিক ও অন্যান্য সেবাসমূহ , আবেদন করার মাধ্যমে সনদ নিতে পারবে । </p>

							<a href="services-details.html" class="read-more">
								Learn more
								<i class="ri-arrow-right-s-line"></i>
							</a>

							<div class="services-shape">
								<img data-cfsrc={ServiceShape} alt="" style={{display:'none', visibility:'hidden'}} /><img src={ServiceShape} alt="" />
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6">
						<div class="single-services-box">
							<span class="flaticon-buildings"></span>

							<h3>
								<a href="services-details.html">
									লাইসেন্স সেবা
								</a>
							</h3>

							<p> ট্রেড লাইসেন্স ও প্রিমিসেস লাইসেন্স আবেদন করে সনদ পাওয়া যাবে । </p>

							<a href="services-details.html" class="read-more">
								Learn more
								<i class="ri-arrow-right-s-line"></i>
							</a>

							<div class="services-shape">
								<img data-cfsrc={ServiceShape} alt="" style={{display:'none', visibility:'hidden'}} /><img src={ServiceShape} alt="" />
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6">
						<div class="single-services-box">
							<span class="flaticon-government"></span>

							<h3>
								<a href="services-details.html">
								ওয়ারিশ সেবা
								</a>
							</h3>

							<p> ওয়ারিশ ও পারিবারিক সনদ আবেদন করে এখন নেয়া সম্ভব ।</p>

							<a href="services-details.html" class="read-more">
								Learn more
								<i class="ri-arrow-right-s-line"></i>
							</a>

							<div class="services-shape">
								<img data-cfsrc={ServiceShape} alt="" style={{display:'none', visibility:'hidden'}} /><img src={ServiceShape} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
}