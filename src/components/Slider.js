import SliderImg1 from "../assets/images/slider/slider-img-1.jpg";
import SliderImg2 from "../assets/images/slider/slider-img-2.jpg";
import SliderImg3 from "../assets/images/slider/slider-img-3.jpg";
import SliderShape from "../assets/images/slider/slider-shape.png";

export default function Slider(){
    return (
        <>
      <section className="hero-slider-area">
      <div className="hero-slider owl-theme owl-carousel"  data-slider-id="1">
          <div className="hero-slider-item">
              <div className="d-table">
                  <div className="d-table-cell">
                      <div className="container-fluid">
                          <div className="row align-items-center">
                              <div className="col-lg-6">
                                  <div className="hero-slider-content pr-15">
                                      <span className="top-title">সাভার পৌরসভা ভবন </span>
                                      <h1> প্রধান পৌরসভা ভবন  </h1>
                                      <p>সাভার পৌরসভাকে  ডিজিটাল ও মডেল পৌরসভা হিসেবে গড়ে  তোলা । </p>
          
                                      <div className="slider-btn">
                                          <a href="about.html" className="default-btn">
                                              Learn more
                                          </a>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-6">
                                  <div className="slider-img pl-15">
                                      <img data-cfsrc={SliderImg1} alt="" style={{display:'none',visibility:'hidden'}} /><img src={SliderImg1} alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="slider-shape">
                  <img data-cfsrc={SliderShape} alt="" style={{display:'none',visibility:'hidden'}} /><img src={SliderShape} alt="" />
              </div>
          </div>

          <div className="hero-slider-item">
              <div className="d-table">
                  <div className="d-table-cell">
                      <div className="container-fluid">
                          <div className="row align-items-center">
                              <div className="col-lg-6">
                                  <div className="hero-slider-content pr-15">
                                      <span className="top-title">সাভার পৌরসভা গাড়ি </span>
                                      <h1>সাভার পৌরসভা গাড়ি সমাহার </h1>
                                      <p>পৌরসভার ট্র্যাক ,প্রাইভেট কার, জিপ সাবক্ষনিক জনগণের সেবা দিয়ে থাকে  </p>
          
                                      <div className="slider-btn">
                                          <a href="about.html" className="default-btn">
                                              Learn more
                                          </a>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-6">
                                  <div className="slider-img pl-15">
                                      <img data-cfsrc={SliderImg2} alt="" style={{display:'none', visibility:'hidden'}} /><img src={SliderImg2} alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="slider-shape">
                  <img data-cfsrc={SliderShape} alt="" style={{display:'none',visibility:'hidden'}} /><img src={SliderShape} alt="" />
              </div>
          </div>

          <div className="hero-slider-item">
              <div className="d-table">
                  <div className="d-table-cell">
                      <div className="container-fluid">
                          <div className="row align-items-center">
                              <div className="col-lg-6">
                                  <div className="hero-slider-content pr-15">
                                      <span className="top-title">পৌরসভা জনসেবা </span>
                                      <h1>পৌরসভা উন্নয়নমূলক  জনসেবা</h1>
                                      <p>আমাদের কাজকর্ম চলছে মেয়র মহদোয় গন মানুষের সাথে মিশে  জনসেবা </p>
          
                                      <div className="slider-btn">
                                          <a href="about.html" className="default-btn">
                                              Learn more
                                          </a>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-6">
                                  <div className="slider-img pl-15">
                                      <img data-cfsrc={SliderImg3} alt="" style={{display:'none', visibility:'hidden'}} /><img src={SliderImg3} alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="slider-shape">
                  <img data-cfsrc={SliderShape} alt="" style={{display:'none', visibility:'hidden'}} /><img src={SliderShape} alt="" />
              </div>
          </div>
      </div>
      
      <div className="thumbs-wrap">
          <div className="owl-thumbs hero-slider-thumb" data-slider-id="1">
              <div className="owl-thumb-item">
                  <span>1</span>
              </div>

              <div className="owl-thumb-item">
                  <span>2</span>
              </div>

              <div className="owl-thumb-item">
                  <span>3</span>
              </div>
          </div>
      </div>
  </section>
        </>
    );
}