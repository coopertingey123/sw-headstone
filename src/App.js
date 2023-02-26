import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./navbar";
import Footer from "./footer";

function App() {
  const [discount, setDiscount] = useState(0);
  const [numOfKitchens, setNumOfKitchens] = useState(0);
  const [kitchensTotal, setKitchensTotal] = useState(0);
  const [numOfBathrooms, setNumOfBathrooms] = useState(0);
  const [bathroomsTotal, setBathroomsTotal] = useState(0);
  const [numOfBedrooms, setNumOfBedrooms] = useState(0);
  const [bedroomsTotal, setBedroomsTotal] = useState(0);
  const [laundry, setLaundry] = useState(false);
  const [laundryTotal, setlaundryTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setKitchensTotal(numOfKitchens * 70);
    setBathroomsTotal(numOfBathrooms * 40);
    setBedroomsTotal(numOfBedrooms * 30);
    setlaundryTotal(laundry ? 50 : 0);
    setDiscount(
      (kitchensTotal + bathroomsTotal + bedroomsTotal + laundryTotal) * 0.15
    );
    setTotalPrice(
      kitchensTotal + bathroomsTotal + bedroomsTotal + laundryTotal - discount
    );
  }, [
    numOfKitchens,
    numOfBathrooms,
    numOfBedrooms,
    setKitchensTotal,
    setBathroomsTotal,
    setBedroomsTotal,
    setDiscount,
    kitchensTotal,
    bathroomsTotal,
    bedroomsTotal,
    setTotalPrice,
    discount,
    laundry,
    laundryTotal,
  ]);

  return (
    <body>
      <Navbar />
      <section class="hero-section" style={{ background: "#BAC0FF" }}>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-7 pt-5 mb-5 align-self-center">
              <div class="promo pe-md-3 pe-lg-5">
                <h1 class="headline mb-3">North Shore Cleaning</h1>
                <div class="subheadline mb-4">
                  We provide reliable, friendly, and cost-efficient service to{" "}
                  <b>homes</b>, <b>office buildings</b> and{" "}
                  <b>short-term rentals</b> on the North Shore of Oahu, HI.
                </div>

                <div class="cta-holder row gx-md-3 gy-3 gy-md-0">
                  <div class="col-12 col-md-auto">
                    <a
                      class="btn btn-primary w-100"
                      target="_blank"
                      href="mailto:cooper.tingey@gmail.com"
                      rel="noreferrer"
                    >
                      Contact North Shore Cleaning
                    </a>
                  </div>
                </div>

                <div class="hero-quotes mt-5">
                  <div
                    id="quotes-carousel"
                    class="quotes-carousel carousel slide carousel-fade mb-5"
                    data-bs-ride="carousel"
                    data-bs-interval="8000"
                  >
                    <ol class="carousel-indicators">
                      <li
                        data-bs-target="#quotes-carousel"
                        data-bs-slide-to="0"
                        class="active"
                      ></li>
                      <li
                        data-bs-target="#quotes-carousel"
                        data-bs-slide-to="1"
                      ></li>
                      <li
                        data-bs-target="#quotes-carousel"
                        data-bs-slide-to="2"
                      ></li>
                    </ol>

                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <blockquote class="quote p-4 theme-bg-light">
                          "Excellent service! Great communication and service
                          was amazing for the price. Best cleaning prices on the
                          North Shore!"
                        </blockquote>
                        <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                          <div class="col source-info text-center text-md-start">
                            <div class="source-name">George Chun</div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <blockquote class="quote p-4 theme-bg-light">
                          "I've been looking for a service like this for a
                          while, since I live out of town. Cheaper than average,
                          and they did an amazing job!"
                        </blockquote>
                        <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                          <div class="col source-info text-center text-md-start">
                            <div class="source-name">John Wright</div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <blockquote class="quote p-4 theme-bg-light">
                          "Awesome company. Very kind all the way through the
                          process. 10/10!"
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
                <img
                  class="img-fluid book-cover"
                  src="https://cdn.decoist.com/wp-content/uploads/2020/03/Getting-ready-to-clean-your-home-in-the-time-of-a-global-pandemic-50769.jpg"
                  alt="grave"
                />
                <div class="text-center">
                  <a href="#reviews-section">
                    <button class="theme-link scrollto btn btn-primary">
                      See all reviews
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="benefits-section"
        class="benefits-section theme-bg-light-gradient"
      >
        <div class="container py-5">
          <h2 class="section-heading text-center mb-3">
            What is included in a North Shore Cleaning service?
          </h2>
          <div class="section-intro single-col-max mx-auto text-center mb-1">
            We clean homes, short-term rentals, and office buildings in the
            North Shore, Oahu area. We will visit your home, clean the area
            according to your request, and send you before and after photos of
            the service. <br />
            <div class="link-to-details py-1">
              <Link to="/about">
                <button class="theme-link scrollto btn btn-primary" style={{padding: "5px 15px"}}>
                  Click Here
                </button>
              </Link>{" "}
              to see cleaning details
            </div>
            <img src="https://images.unsplash.com/photo-1545251142-f32339076e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="pounders beach"/>
          </div>
          <div class="row text-center">
            <div class="item col-12 col-md-6 col-lg-4">
              <div class="item-inner p-3 p-lg-4">
                <div class="item-header mb-3">
                  <div class="item-icon">
                    <i class="fas fa-laptop-code"></i>
                  </div>
                  <h3 class="item-heading">Simple</h3>
                </div>
                <div class="item-desc">
                  Send us an email or text message and get your home cleaned
                  fast.
                </div>
              </div>
            </div>
            <div class="item col-12 col-md-6 col-lg-4">
              <div class="item-inner p-3 p-lg-4">
                <div class="item-header mb-3">
                  <div class="item-icon">
                    <i class="fab fa-js-square"></i>
                  </div>
                  <h3 class="item-heading">Reliable</h3>
                </div>
                <div class="item-desc">
                  We are looking to provide quality services. No hidden fees and
                  complete transparency. You receive direct communication with
                  the individual who cleans your home, along with a cleaning
                  manager to understand your expectations.
                </div>
              </div>
            </div>
            <div class="item col-12 col-md-6 col-lg-4">
              <div class="item-inner p-3 p-lg-4">
                <div class="item-header mb-3">
                  <div class="item-icon">
                    <i class="fab fa-rocketchat"></i>
                  </div>
                  <h3 class="item-heading">Positive Feedback</h3>
                </div>
                <div class="item-desc">
                  Customers love our service. See reviews below to see just how
                  good of a job we do. We are a new company looking to get our
                  name out to the public.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="content-section"
        class="content-section"
        style={{ background: "#BAC0FF", padding: "40px 0px" }}
      >
        <div class="container">
          <h2 class="section-heading text-center">Price Calculator</h2>
          <p class="text-center mb-3">
            <i>This is the calculator we use to quote your home</i>
          </p>
          <div class="row">
            <div class="col-md-6">
              <img
                class="img-fluid"
                src="https://cleaningwithacause.com/wp-content/uploads/2020/09/Canton-Georgia-Cleaning-Service-Company.jpg"
                alt="device"
              />
            </div>
            <div class="col-md-6 mb-5 calc-container">
              <div className="row" style={{ width: "100%" }}>
                <div className="col-4">
                  <div className="calc-row">Kitchen</div>
                  <div className="calc-row">Bathroom</div>
                  <div className="calc-row">Bedroom</div>
                  <div className="calc-row">Laundry</div>
                  <div className="calc-row">Photos</div>
                  <div className="calc-row">Discount</div>
                  <div className="calc-row total">Total Price</div>
                </div>
                <div className="col-4">
                  <div className="calc-row">$70.00</div>
                  <div className="calc-row">$40.00</div>
                  <div className="calc-row">$30.00</div>
                  <div className="calc-row">$50.00</div>
                  <div className="calc-row">Free</div>
                  <div className="calc-row">15% OFF</div>
                </div>
                <div className="col-4">
                  <div className="calc-row">
                    <select
                      type="text"
                      onChange={(e) => setNumOfKitchens(e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="calc-row">
                    <select
                      type="text"
                      onChange={(e) => setNumOfBathrooms(e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="calc-row">
                    <select
                      type="text"
                      onChange={(e) => setNumOfBedrooms(e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </div>
                  <div className="calc-row">
                    <select
                      style={{ textIndent: "20%" }}
                      type="text"
                      onChange={(e) => setLaundry(e.target.value)}
                    >
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                    </select>
                  </div>
                  <div className="calc-row">$0.00</div>
                  <div className="calc-row text-center">- ${discount}</div>
                  <div className="calc-row text-center total">
                    ${totalPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews-section" class="reviews-section pt-5 pb-3">
        <div class="container reviews-container">
          <h2 class="section-heading text-center">Service Reviews</h2>
          <p class="section-intro text-center single-col-max mx-auto mb-3">
            <i>See what our customers are saying.</i>{" "}
          </p>
          <div class="row justify-content-center">
            <div class="item col-12 col-lg-4 p-3 mb-4">
              <div class="item-inner theme-bg-light rounded p-4">
                <blockquote class="quote">
                  "Excellent service! Great communication and service was
                  amazing for the price. Best cleaning prices on the North
                  Shore!"
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
                  "I've been looking for a service like this for a while, since
                  I live out of town. Cheaper than average, and they did an
                  amazing job!"
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
                  "Awesome company. Very kind all the way through the process.
                  10/10!"
                </blockquote>
                <div class="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                  <div class="col source-info text-center text-md-start">
                    <div class="source-name">Stephanie Wright</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </body>
  );
}

export default App;
