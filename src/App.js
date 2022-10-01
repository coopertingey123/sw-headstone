import './App.scss';

function App() {
  return (
    <body>    
        {/* <header class="header">	    
            <div class="branding">
                <div class="container-fluid position-relative py-3">
                    <div class="logo-wrapper">
                      <div class="site-logo"><a class="navbar-brand" href="index.html"><span class="logo-text">SW Headstone Restoration</span></a></div>    
                    </div>
                </div>
            </div>
        </header> */}
        
        <section class="hero-section" style={{background: "#FFDFCA"}}>
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-7 pt-5 mb-5 align-self-center">
                <div class="promo pe-md-3 pe-lg-5">
                  <h1 class="headline mb-3">
                    SouthWest <br/>Headstone Restoration 
                  </h1>
                  <div class="subheadline mb-4">
                    An Arizona company dedicated to headstone maintenance, repair and restoration
                  </div>
                  
                  <div class="cta-holder row gx-md-3 gy-3 gy-md-0">
                    <div class="col-12 col-md-auto">
                        <a class="btn btn-primary w-100" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devbook-free-bootstrap-5-book-ebook-landing-page-template-for-developers/">Contact SW Headstone Restoration</a>
                    </div>
                  </div>
                  
                  <div class="hero-quotes mt-5">
                    <div id="quotes-carousel" class="quotes-carousel carousel slide carousel-fade mb-5" data-bs-ride="carousel" data-bs-interval="8000">
                      <ol class="carousel-indicators">
                        <li data-bs-target="#quotes-carousel" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#quotes-carousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#quotes-carousel" data-bs-slide-to="2"></li>
                      </ol>
                    
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                            <blockquote class="quote p-4 theme-bg-light">
                              "Excellent service! Easy communication and service was provided as advertised"     
                            </blockquote>
                            <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                              <div class="col source-info text-center text-md-start">
                                <div class="source-name">Dennis Tingey</div>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <blockquote class="quote p-4 theme-bg-light">
                              "I've been looking for a service like this for a while, since I live out of town. They did an amazing job!"    
                            </blockquote>
                            <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                              <div class="col source-info text-center text-md-start">
                                <div class="source-name">Jimmy John</div>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <blockquote class="quote p-4 theme-bg-light">
                              "Awesome company. Easy communication and smooth sailing service"     
                            </blockquote>
                            <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                              <div class="col source-info text-center text-md-start">
                                <div class="source-name">Tom Jones</div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5 mb-5 align-self-center">
                <div class="book-cover-holder">
                  <img class="img-fluid book-cover" src="https://i.ytimg.com/vi/MVkNaJHtxvc/maxresdefault.jpg" alt="grave" />
                <div class="text-center"><button class="theme-link scrollto btn btn-primary" href="#reviews-section">See all reviews</button></div>
              </div>
            </div>
            </div>
          </div>
        </section>
        
        <section id="benefits-section" class="benefits-section theme-bg-light-gradient py-5">
          <div class="container py-5">
            <h2 class="section-heading text-center mb-3">What Will You Get From This Service?</h2>
            <div class="section-intro single-col-max mx-auto text-center mb-5">We clean and offer maintenance to gravestones in the Phoenix area. Depending on your headstone location, we will visit your gravesite, clean the headstone, and send you before and after photos of the service. </div>
            <div class="row text-center">
              <div class="item col-12 col-md-6 col-lg-4">
                <div class="item-inner p-3 p-lg-4">
                  <div class="item-header mb-3">
                    <div class="item-icon"><i class="fas fa-laptop-code"></i></div>
                    <h3 class="item-heading">Simple</h3>
                  </div>
                  <div class="item-desc">
                    Send us an email or text message and get your headstone cleaned within a week of contact
                  </div>
                </div>
              </div>
              <div class="item col-12 col-md-6 col-lg-4">
                <div class="item-inner p-3 p-lg-4">
                  <div class="item-header mb-3">
                    <div class="item-icon"><i class="fab fa-js-square"></i></div>
                    <h3 class="item-heading">Reliable</h3>
                  </div>
                  <div class="item-desc">
                    We are looking to provide quality services
                  </div>
                </div>
              </div>
              <div class="item col-12 col-md-6 col-lg-4">
                <div class="item-inner p-3 p-lg-4">
                  <div class="item-header mb-3">
                    <div class="item-icon"><i class="fab fa-rocketchat"></i></div>
                    <h3 class="item-heading">Positive Feedback</h3>
                  </div>
                  <div class="item-desc">
                    Customers love our service. See reviews below
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="content-section" class="content-section" style={{background: "#FFDFCA", padding: "40px 0px"}}>
          <div class="container">
            <div class="single-col-max mx-auto">
            <h2 class="section-heading text-center mb-5">What's Included</h2>
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="figure-holder mb-5">
                    <img class="img-fluid" src="https://www.gannett-cdn.com/presto/2021/08/05/NSTT/ed3911c3-1f97-4af0-ad43-39d4ce5e8ac2-Loving_Touch_Grave_Site_Care_2.jpg" alt="device" />
                  </div>
                </div>
                <div class="col-12 col-md-6 mb-5">
                  <div class="key-points mb-4 text-center">
                    <ul class="key-points-list list-unstyled mb-4 mx-auto d-inline-block text-start">
                      <li><i class="fas fa-check-circle me-2"></i>One-time OR monthly service</li>
                      <li><i class="fas fa-check-circle me-2"></i>Small flowers</li>
                      <li><i class="fas fa-check-circle me-2"></i>Dirt Removal </li>
                      <li><i class="fas fa-check-circle me-2"></i>Shrub trimming</li>
                      <li><i class="fas fa-check-circle me-2"></i>Service Guarentee</li>
                    </ul>
                    <div class="text-center"><a class="btn btn-primary" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devbook-free-bootstrap-5-book-ebook-landing-page-template-for-developers/">Contact SW Headstone!</a></div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </section>
        
        <section id="reviews-section" class="reviews-section py-5">
          <div class="container">
            <h2 class="section-heading text-center">Service Reviews</h2>
            <div class="section-intro text-center single-col-max mx-auto mb-5">See what our customers are saying. </div>
            <div class="row justify-content-center">
              <div class="item col-12 col-lg-4 p-3 mb-4">
                <div class="item-inner theme-bg-light rounded p-4">
                  <blockquote class="quote">
                      "Excellent service! Easy communication and service was provided as advertised"     
                    </blockquote>
                    <div class="source row gx-md-3 gy-3 gy-md-0">
                      <div class="col source-info text-center text-md-start">
                        <div class="source-name">Dennis Tingey</div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="item col-12 col-lg-4 p-3 mb-4">
                <div class="item-inner theme-bg-light rounded p-4">
                  <blockquote class="quote">
                      "I've been looking for a service like this for a while, since I live out of town. They did an amazing job!"    
                    </blockquote>		        
                    <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                      <div class="col source-info text-center text-md-start">
                        <div class="source-name">Jimmy John</div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="item col-12 col-lg-4 p-3 mb-4">
                <div class="item-inner theme-bg-light rounded p-4">
                  <blockquote class="quote">
                      "Awesome company. Easy communication and smooth sailing service"     
                    </blockquote>
                    <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                      <div class="col source-info text-center text-md-start">
                        <div class="source-name">Tom Jones</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
                <a class="btn btn-primary" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devbook-free-bootstrap-5-book-ebook-landing-page-template-for-developers/">Contact SW Restoration</a>
            </div>
          </div>
        </section>
    
        <footer class="footer">
          <div class="footer-bottom text-center py-5">
              {/* <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :)  */}
                <small class="copyright">Designed with <span class="sr-only">love</span><i class="fas fa-heart" style={{color: "#fb866a"}}></i> by <a class="theme-link" href="http://themes.3rdwavemedia.com" target="_blank" rel="noreferrer">Xiaoying Riley</a> for developers</small>
          </div>
        </footer>
    </body>
    
    
  );
}

export default App;
