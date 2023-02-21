import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/fontawesome-free-solid'

function App() {

  return (
    <body>    
        <section class="hero-section" style={{background: "#BAC0FF"}}>
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-7 pt-5 mb-5 align-self-center">
                <div class="promo pe-md-3 pe-lg-5">
                  <h1 class="headline mb-3">
                    North Shore Cleaning 
                  </h1>
                  <div class="subheadline mb-4">
                    We provide reliable, friendly, and cost-efficient service to <b>homes</b>, <b>office buildings</b> and <b>short-term rentals</b> on the North Shore of Oahu, HI.
                  </div>
                  
                  <div class="cta-holder row gx-md-3 gy-3 gy-md-0">
                    <div class="col-12 col-md-auto">
                        <a class="btn btn-primary w-100" target="_blank" href="mailto:cooper.tingey@gmail.com" rel="noreferrer">Contact North Shore Cleaning</a>
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
                              "Excellent service! Easy communication and service was great. Best price on the North Shore!"     
                            </blockquote>
                            <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                              <div class="col source-info text-center text-md-start">
                                <div class="source-name">Dennis Tingey</div>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <blockquote class="quote p-4 theme-bg-light">
                              "I've been looking for a service like this for a while, since I live out of town. Cheaper than average, and they did an amazing job!"    
                            </blockquote>
                            <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                              <div class="col source-info text-center text-md-start">
                                <div class="source-name">Jimmy John</div>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <blockquote class="quote p-4 theme-bg-light">
                              "Awesome company. Very kind all the way through the process."     
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
                  <img class="img-fluid book-cover" src="https://cdn.decoist.com/wp-content/uploads/2020/03/Getting-ready-to-clean-your-home-in-the-time-of-a-global-pandemic-50769.jpg" alt="grave" />
                <div class="text-center"><a href="#reviews-section"><button class="theme-link scrollto btn btn-primary">See all reviews</button></a></div>
              </div>
            </div>
            </div>
          </div>
        </section>
        
        <section id="benefits-section" class="benefits-section theme-bg-light-gradient py-5">
          <div class="container py-5">
            <h2 class="section-heading text-center mb-3">What Will You Get From This Service?</h2>
            <div class="section-intro single-col-max mx-auto text-center mb-5">We clean homes, short-term rentals, and office buildings in the North Shore, Oahu area. We will visit your home, clean the area according to your request, and send you before and after photos of the service. <br/></div>
            <div class="row text-center">
              <div class="item col-12 col-md-6 col-lg-4">
                <div class="item-inner p-3 p-lg-4">
                  <div class="item-header mb-3">
                    <div class="item-icon"><i class="fas fa-laptop-code"></i></div>
                    <h3 class="item-heading">Simple</h3>
                  </div>
                  <div class="item-desc">
                    Send us an email or text message and get your home cleaned within a week of contact
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
                    We are looking to provide quality services. No hidden fees and complete transparency. You receive direct communication with the individual who cleans your home.
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
                    Customers love our service. See reviews below to see just how good of a job we do. We are a new company looking to get our name out to the public
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="content-section" class="content-section" style={{background: "#BAC0FF", padding: "40px 0px"}}>
          <div class="container">
            <div class="single-col-max mx-auto">
            <h2 class="section-heading text-center mb-5">What's Included</h2>
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="figure-holder mb-5">
                    <img class="img-fluid" src="https://cleaningwithacause.com/wp-content/uploads/2020/09/Canton-Georgia-Cleaning-Service-Company.jpg" alt="device" />
                  </div>
                </div>
                <div class="col-12 col-md-6 mb-5">
                  <div class="key-points mb-4 text-center">
                    <ul class="key-points-list list-unstyled mb-4 mx-auto d-inline-block text-start">
                      <li>Click here to see what is included in our services!</li>
                      <li><FontAwesomeIcon icon={faCheckSquare}/>One-time, weekly, or monthly service, Whatever is convenient for you!</li>
                      <li><FontAwesomeIcon icon={faCheckSquare}/>Before and After photos directly to your email</li>
                      <li><FontAwesomeIcon icon={faCheckSquare}/>Vacuum, mop, </li>
                      <li><FontAwesomeIcon icon={faCheckSquare}/>Disinfect the home </li>
                    </ul>
                    <div class="text-center"><a class="btn btn-primary" target="_blank" href="mailto:cooper.tingey@gmail.com" rel="noreferrer">Contact North Shore Cleaning!</a></div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </section>
        
        <section id="reviews-section" class="reviews-section pt-5 pb-3">
          <div class="container">
            <h2 class="section-heading text-center">Service Reviews</h2>
            <div class="section-intro text-center single-col-max mx-auto mb-3">See what our customers are saying. </div>
            <div class="row justify-content-center">
              <div class="item col-12 col-lg-4 p-3 mb-4">
                <div class="item-inner theme-bg-light rounded p-4">
                  <blockquote class="quote">
                    "Excellent service! Easy communication and service was great. Best price on the North Shore!"     
                    </blockquote>
                    <div class="source row gx-md-3 gy-3 gy-md-0">
                      <div class="col source-info text-center text-md-start">
                        <div class="source-name">Jerry Nielsen</div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="item col-12 col-lg-4 p-3 mb-4">
                <div class="item-inner theme-bg-light rounded p-4">
                  <blockquote class="quote">
                  "I've been looking for a service like this for a while, since I live out of town. Cheaper than average, and they did an amazing job!"    
                    </blockquote>		        
                    <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                      <div class="col source-info text-center text-md-start">
                        <div class="source-name">Louise Jones</div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="item col-12 col-lg-4 p-3 mb-4">
                <div class="item-inner theme-bg-light rounded p-4">
                  <blockquote class="quote">
                  "Awesome company. Very kind all the way through the process."     
                    </blockquote>
                    <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                      <div class="col source-info text-center text-md-start">
                        <div class="source-name">Stephanie Wright</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
                <a class="btn btn-primary" target="_blank" href="mailto:cooper.tingey@gmail.com" rel="noreferrer">Contact North Shore Cleaning</a>
            </div>
          </div>
        </section>
    
        <footer class="footer">
          <div class="footer-bottom text-center py-3">
              <p>
                <b>Oahu, HI (North Shore area)</b><br/>
                Email: <a href="mailto:cooper.tingey@gmail.com" target="_blank" rel="noreferrer">cooper.tingey@gmail.com</a><br/>
                Phone: <a href="tel:4802662083" target="_blank" rel="noreferrer">(480) 266-2083</a>
              </p>
          </div>
        </footer>
    </body>
    
    
  );
}

export default App;
