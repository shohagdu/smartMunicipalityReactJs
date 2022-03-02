
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <>
            <div className="desktop-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="index.html">
                                <img data-cfsrc="assets/images/logo.png" alt="logo" style={{display:'none', visibility:'hidden'}} /><noscript><img src="assets/images/logo.png" alt="logo" /></noscript>
								&nbsp; &nbsp; ডিজিটাল পৌরসভা 
                            </a>

                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
									<li className="nav-item">
										<Link to={"/"} className="nav-link active">  প্রথম পাতা </Link>
									</li>
									<li className="nav-item">
										<a href="#" className="nav-link ">
											পৌরসভা তথ্য 
											<i className="ri-arrow-down-s-line"></i>
										</a>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
												<a href="index.html" className="nav-link active"> পৌরসভার সংক্ষিপ্ত বিবরন </a>
											</li>
                                            <li className="nav-item">
												<a href="index-2.html" className="nav-link"> পৌরসভার সাংগঠনিক </a>
											</li>
                                            <li className="nav-item">
												<a href="index-3.html" className="nav-link">পৌরসভার কর্মকর্তা ও কর্মচারী </a>
											</li>
                                        </ul>
									</li>

									<li className="nav-item">
										<a href="#" className="nav-link">
											আবেদন করুন  
											<i className="ri-arrow-down-s-line"></i>
										</a>

                                        <ul className="dropdown-menu">
											<li className="nav-item">
												<Link to={"citizen" }className="nav-link">নাগরিক আবেদন </Link>
											</li>
                                            <li className="nav-item">
												<Link to={"tradelicense"} className="nav-link">ট্রেড লাইসেন্স আবেদন</Link>
											</li>
											
                                            <li className="nav-item">
												<Link to={"warish"} className="nav-link"> ওয়ারিশ  সনদের আবেদন </Link>
											</li>
                                            <li className="nav-item">
												<a href="warish.html" className="nav-link">পারিবারিক সনদের আবেদন</a>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<a href="#" className="nav-link">
											অন্যান্য আবেদন  
											<i className="ri-arrow-down-s-line"></i>
										</a>

                                        <ul className="dropdown-menu">
											<li className="nav-item">
												<a href="citizen.html" className="nav-link">চারিত্রিক সনদের আবেদন </a>
											</li>
                                            <li className="nav-item">
												<a href="citizen.html" className="nav-link">অবিবাহিত সনদের আবেদন</a>
											</li>
											
                                            <li className="nav-item">
												<a href="citizen.html" className="nav-link">বিবাহিত  সনদের আবেদন</a>
											</li>
                                            <li className="nav-item">
												<a href="died.html" className="nav-link">মৃত্যু সনদের আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="roadkhonon.html" className="nav-link">রাস্তা খননের অনুমতির আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="holding_namjari.html" className="nav-link">হোল্ডিং নামজারির আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="animals.html" className="nav-link">পোষা প্রাণীর লাইসেন্সের আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="land.html" className="nav-link">ভূমি ব্যবহার ছাড়পত্রের আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="building.html" className="nav-link">ইমারত নির্মাণ আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="citizen.html" className="nav-link">ভোটার আইডি স্থানান্তর  সনদের আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="holding.html" className="nav-link">নতুন হোল্ডিং আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="onapotti.html" className="nav-link">অনাপত্তি পত্র আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="citizen.html" className="nav-link">ভোটার আইডি স্থানান্তর  সনদের আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="citizen.html" className="nav-link">ভূমিহিন সনদের আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="citizen.html" className="nav-link">নদী ভাঙন সনদের আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="citizen.html" className="nav-link">একই নামের প্রত্যয়ন  আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="citizen.html" className="nav-link">অনুমতি পত্রের  আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="citizen.html" className="nav-link">বার্ষিক আয়ের প্রত্যয়ন আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="citizen.html" className="nav-link">প্রকৃত বাকঁ ও শ্রবন প্রতিবন্ধী আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="citizen.html" className="nav-link">সনাতন ধর্ম অবলম্বী সনদের আবেদন</a>
											</li>
											<li className="nav-item">
												<a href="citizen.html" className="nav-link"> প্রত্যয়ন পত্রের  আবেদন</a>
											</li>
										</ul>
									</li>
									
									<li className="nav-item">
										<a href="contact.html" className="nav-link">যাচাই করুন</a>
									</li>
                                    <li className="nav-item">
										<a href="contact.html" className="nav-link">যোগাযোগ</a>
									</li>
                                </ul>
                            </div>
                        </nav>
                    </div>
				</div>
        </>
    );
}