import Link from "next/dist/client/link";
import { useState } from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { teamSlider } from "../src/sliderProps";

const About = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner pageName="About Us" />
      <section className="about-section-three section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-10">
              <div className="about-text mb-lg-50">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> About us
                    <span className="heading-shadow-text">About Us</span>
                  </span>
                  <h2 className="title">
                    We Help How To Improve Product Marketing
                  </h2>
                </div>
                <p>
                  Sedut perspiciatis unde omnis iste natus voluptatem accusan
                  tium dolore dantiumy totam rem apeam, eaque ipsa quaventore
                  veritatis quasi architecto beatae.
                </p>
                <ul className="check-list mt-30">
                  <li className="wow fadeInUp" data-wow-delay="0s">
                    <h5 className="title">Highest Success Rates</h5>
                    <p>Quis autem vel eum iure reprehenderit quin</p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="title">Raise Funds With Crowdfunding</h5>
                    <p>Voluptate esse quam nihil molestiae consequatur</p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.2s">
                    <h5 className="title">Millions in Funding</h5>
                    <p>Accusan tium dolore dantiumy totam apeam</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="about-gallery wow fadeInRight">
                <div className="img-one">
                  <img src="assets/img/about/about-gallery-1.jpg" alt="Image" />
                </div>
                <div className="img-two wow fadeInUp">
                  <img src="assets/img/about/about-gallery-2.jpg" alt="Image" />
                </div>
                <div className="pattern">
                  <img
                    src="assets/img/about/about-gallery-pattern.png"
                    alt="Pattern"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Section End ======*/}
      {/*====== Feature Section Start ======*/}
      <section className="feature-section primary-soft-bg section-gap">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> What We Do
              <span className="heading-shadow-text">Features</span>
            </span>
            <h2 className="title">Why choose us</h2>
          </div>
          <div className="row icon-boxes justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-debit-card" />
                </div>
                <h5 className="title">Fast &amp; Easy Payouts</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
                <Link href="/project-details">
                  <a className="link">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <span className="box-index">01</span>
                <div className="box-img">
                  <img src="assets/img/icon-box-bg.jpg" alt="image" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-payment" />
                </div>
                <h5 className="title">Global Payment Processing</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
                <Link href="/project-details">
                  <a className="link">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <span className="box-index">02</span>
                <div className="box-img">
                  <img src="assets/img/icon-box-bg.jpg" alt="image" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-wallet-1" />
                </div>
                <h5 className="title">Many Payment Options</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
                <Link href="/project-details">
                  <a className="link">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <span className="box-index">03</span>
                <div className="box-img">
                  <img src="assets/img/icon-box-bg.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Feature Section End ======*/}
      {/*====== Team section Start ======*/}
      <section className="team-slider-area">
        <div className="container mb-20">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="common-heading mb-40">
                <span className="tagline">
                  <i className="fas fa-plus" /> Exclusive team
                  <span className="heading-shadow-text">Members</span>
                </span>
                <h2 className="title">Meet Professional Team</h2>
              </div>
            </div>
            <div className="col-auto">
              <Link href="/contact">
                <a className="main-btn mb-40">
                  Join Our Team <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid fluid-extra-padding">
          <Slider {...teamSlider} className="row team-members team-slider">
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/01.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">
                      <a>Allen J. Thompson</a>
                    </Link>
                  </h5>
                  <span className="title">CEO &amp; Founder</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/02.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Steven E. Wagner</Link>
                  </h5>
                  <span className="title">Jonior Manager</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/03.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Dwayne C. Dawson</Link>
                  </h5>
                  <span className="title">Digital Marketer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/04.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Steven B. Rangel</Link>
                  </h5>
                  <span className="title">Web Developer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/05.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Richard R. Barnes</Link>
                  </h5>
                  <span className="title">Web Developer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/06.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">James P. Gutierrez</Link>
                  </h5>
                  <span className="title">Sr Manager</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/07.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Tony C. Anderson</Link>
                  </h5>
                  <span className="title">Senior Developer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/08.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Stan H. Woodruff</Link>
                  </h5>
                  <span className="title">Apps Developer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/09.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Ronald T. Kessler</Link>
                  </h5>
                  <span className="title">Web Designer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== Team section End ======*/}
      {/*====== Counter With Image Text Block Start ======*/}
      <section className="counter-with-video">
        <div className="video-area">
          <div className="container">
            <div className="funden-video">
              <img src="assets/img/video/03.jpg" alt="Image" />
              <a
                href="#"
                className="video-popup"
                onClick={() => setVideo(true)}
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div className="counter-boxes-area secondary-bg">
          <div className="container">
            <div className="row counter-boxes justify-content-lg-between justify-content-center">
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-crowdfunding" />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <Counter end={3598} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">We’ve Project Complate</h6>
                    <p>
                      Sed ut perspiciatis unde <br /> menste natus error
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-ecological" />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <Counter end={9634} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Trusted Global Partners</h6>
                    <p>
                      Quis autem veleucmure <br /> reprehenderit quein
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-badges" />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <Counter end={8565} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Global Awards Winning</h6>
                    <p>
                      Sed ut perspiciatis unde <br /> menste natus error
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-support" />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <Counter end={4756} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">24/7 Active Volunteer</h6>
                    <p>
                      Quis autem veleucmure <br /> reprehenderit quein
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Counter With Image Text Block End ======*/}
      {/*====== Testimonials Start ======*/}
      <section className="testimonials-section section-gap">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Clients Feedback
              <span className="heading-shadow-text">Testimonials</span>
            </span>
            <h2 className="title">{`What People's Say`}</h2>
          </div>
          <div className="row justify-content-center testimonial-boxes square-shape-two">
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Joseph A. Anthony</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Howard A. Guest</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Howard A. Guest</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/04.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Joseph A. Anthony</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/05.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Howard A. Guest</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/06.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Howard A. Guest</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Testimonials End ======*/}
      {/*====== Partners Section With CTA Start ======*/}
      <section className="partners-section">
        <div className="container">
          <div className="partners-logos partners-section-padding section-border-top">
            <div className="row partners-logos-two">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/01.png" alt="Image" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/02.png" alt="Image" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/03.png" alt="Image" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/04.png" alt="Image" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/05.png" alt="Image" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/06.png" alt="Image" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/07.png" alt="Image" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/08.png" alt="Image" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
