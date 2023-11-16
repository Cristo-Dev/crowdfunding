import Link from "next/dist/client/link";
import { useState } from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { imageTextBlockSlider } from "../src/sliderProps";

const Index2 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout transparentHeader topSecondaryBg>
      {video && <VideoPopup close={setVideo} />}
      <section className="hero-area-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-11">
              <div className="hero-text">
                <h1 className="title wow fadeInLeft" data-wow-delay="0.2s">
                  SYHM 525O VR Box Smart Phone VR Box
                </h1>
                <p className="wow fadeInLeft" data-wow-delay="0.3s">
                  Sedut perspiciatis unde omnis iste natus voluptatem
                  accusantium dolore dantiumy totam rem apeam eaque ipsa
                </p>
                <ul className="hero-btn">
                  <li className="wow fadeInUp" data-wow-delay="0.4s">
                    <Link href="/project-2">
                      <a className="main-btn">
                        Explore Projects <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.5s">
                    <a
                      href="#"
                      className="video-btn"
                      onClick={() => setVideo(true)}
                    >
                      <i className="fas fa-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-8 col-sm-10 mx-auto wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <div className="hero-img text-lg-right">
                <img src="assets/img/hero/hero-two-img.png" alt="Img" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="hero-line-one">
            <img src="assets/img/hero/hero-line-3.png" alt="Line" />
          </div>
          <div className="hero-line-two">
            <img src="assets/img/hero/hero-line-2.png" alt="Line" />
          </div>
          <div className="dot-one" />
          <div className="dot-two" />
        </div>
      </section>
      {/*====== Hero Area End ======*/}
      {/*====== About Section Start ======*/}
      <section className="about-section-two">
        <div className="about-form-area">
          <div className="container">
            <div className="about-donation-form">
              <div className="donation-heading">
                <h3 className="title">Rise Your Hand</h3>
                <span className="shadow-text">Support</span>
              </div>
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <div className="form-wrap">
                  <ul className="donation-amount">
                    <li>$5</li>
                    <li>$50</li>
                    <li>$180</li>
                    <li>$500</li>
                    <li>$1000</li>
                  </ul>
                  <button type="submit" className="main-btn btn-white">
                    Donate Now <i className="far fa-arrow-right" />
                  </button>
                </div>
              </form>
            </div>
            <div className="about-video wow fadeInDown" data-wow-delay="0.2s">
              <a href="#" className="video-btn" onClick={() => setVideo(true)}>
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div className="about-text-area">
          <div className="container">
            <div className="row align-items-end justify-content-xl-start">
              <div className="col-xl-5 col-lg-7 col-md-8 order-xl-2">
                <div className="about-text">
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
                    <li>
                      <h5 className="title">Highest Success Rates</h5>
                      <p>Quis autem vel eum iure reprehenderit quin</p>
                    </li>
                    <li>
                      <h5 className="title">Raise Funds With Crowdfunding</h5>
                      <p>Voluptate esse quam nihil molestiae consequatur</p>
                    </li>
                    <li>
                      <h5 className="title">Millions in Funding</h5>
                      <p>Accusan tium dolore dantiumy totam apeam</p>
                    </li>
                  </ul>
                  <Link href="/about">
                    <a className="main-btn btn-dark mt-40">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 order-xl-1 wow fadeInUp">
                <div className="about-curved-img">
                  <img src="assets/img/about/man-with-laptop.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape">
          <img src="assets/img/about/about-shape.png" alt="Shape" />
        </div>
      </section>
      {/*====== About Section End ======*/}
      {/*====== Project Section Start ======*/}
      <section className="project-section project-section-two">
        <div className="container fluid-extra-padding">
          <div className="common-heading text-center color-version-white mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Popular Projects
              <span className="heading-shadow-text">Our Projects</span>
            </span>
            <h2 className="title">Explore Our Projects</h2>
          </div>
          <div className="row justify-content-center project-items project-style-one">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mt-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-01.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Video &amp; Movies</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                    <Link href="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Best Romantic &amp; Action English Movie Release in
                        2022.
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">79%</span>
                    </div>
                    <div className="stats-bar" data-value={79}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mt-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-02.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Educations</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                    <Link href="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>Needs Close Up Students Class Room In University</a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">87%</span>
                    </div>
                    <div className="stats-bar" data-value={87}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mt-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-03.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Technology</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                    <Link href="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Original Shinecon VR Pro Virtual Reality 3D Glasses
                        VRBOX
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">85%</span>
                    </div>
                    <div className="stats-bar" data-value={85}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mt-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-04.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Clothes</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                    <Link href="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Fundraising For The People And Causes You Care About
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">83%</span>
                    </div>
                    <div className="stats-bar" data-value={83}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mt-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-05.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Covid -19</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                    <Link href="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        COVID-19 Vaccine Have Already Begun Introduced Countries
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">93%</span>
                    </div>
                    <div className="stats-bar" data-value={93}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mt-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-06.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Business</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                    <Link href="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Mobile First Is Just Not Goodies Enough Meet Journey
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">70%</span>
                    </div>
                    <div className="stats-bar" data-value={70}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Project Section End ======*/}
      {/*====== Feature Section Start ======*/}
      <section className="feature-section feature-section-one section-gap">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-8 col-sm-10">
              <div className="feature-content mb-md-50">
                <div className="common-heading mb-45">
                  <span className="tagline">
                    <i className="fas fa-plus" /> What we do
                    <span className="heading-shadow-text">Features</span>
                  </span>
                  <h2 className="title">Why Choose us</h2>
                </div>
                {/* Fancy Icon List */}
                <div className="fancy-icon-list">
                  <div className="fancy-list-item">
                    <div className="icon">
                      <i className="flaticon-debit-card" />
                    </div>
                    <div className="content">
                      <h4 className="title">Fast &amp; Easy Payouts</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusan doloremque
                      </p>
                    </div>
                  </div>
                  <div className="fancy-list-item">
                    <div className="icon">
                      <i className="flaticon-payment" />
                    </div>
                    <div className="content">
                      <h4 className="title">Global Payment Processing</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusan doloremque
                      </p>
                    </div>
                  </div>
                  <div className="fancy-list-item">
                    <div className="icon">
                      <i className="flaticon-wallet-1" />
                    </div>
                    <div className="content">
                      <h4 className="title">Many Payment Options</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusan doloremque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="funden-video with-video-shape">
                <img src="assets/img/video/02.jpg" alt="Image" />
                <a
                  href="#"
                  className="video-popup"
                  onClick={() => setVideo(true)}
                >
                  <i className="fas fa-play" />
                </a>
                <img
                  src="assets/img/video/video-shape.png"
                  alt="Image"
                  className="video-shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Feature Section End ======*/}
      {/*====== Counter With Image Text Block Start ======*/}
      <section className="counter-with-image-text-block">
        <div className="image-text-block-area">
          <div className="container">
            <Slider
              {...imageTextBlockSlider}
              className="image-text-block-slider"
            >
              <div className="single-slider">
                <div className="image-text-block text-block-one">
                  <div className="block-img">
                    <img src="assets/img/text-block/01.jpg" alt="Image" />
                  </div>
                  <div className="block-content">
                    <div className="common-heading mb-40">
                      <span className="tagline">
                        <i className="fas fa-plus" /> top Funding stories
                        <span className="heading-shadow-text">Top Stories</span>
                      </span>
                      <h2 className="title">Meet William &amp; Michael</h2>
                    </div>
                    <p className="mb-30">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo enim
                      ipsam voluptatem
                    </p>
                    <p className="italic-text">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized
                    </p>
                    <Link href="/company-overview">
                      <a className="main-btn bordered-btn mt-40">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-slider">
                <div className="image-text-block text-block-one">
                  <div className="block-img">
                    <img src="assets/img/text-block/01.jpg" alt="Image" />
                  </div>
                  <div className="block-content">
                    <div className="common-heading mb-40">
                      <span className="tagline">
                        <i className="fas fa-plus" /> top Funding stories
                        <span className="heading-shadow-text">Top Stories</span>
                      </span>
                      <h2 className="title">Meet William &amp; Michael</h2>
                    </div>
                    <p className="mb-30">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo enim
                      ipsam voluptatem
                    </p>
                    <p className="italic-text">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized
                    </p>
                    <Link href="/company-overview">
                      <a className="main-btn bordered-btn mt-40">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="counter-boxes-area primary-soft-bg">
          <div className="container">
            <div className="row counter-boxes justify-content-lg-between justify-content-center">
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-crowdfunding" />
                  </div>
                  <div className="content">
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
                  <div className="content">
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
                  <div className="content">
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
                  <div className="content">
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
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="common-heading text-center mb-30">
                <span className="tagline">
                  <i className="fas fa-plus" /> clients Feedback
                  <span className="heading-shadow-text">Testimonials</span>
                </span>
                <h2 className="title">{`What People's Say`}</h2>
              </div>
              <div className="testimonial-boxes">
                <div
                  className="testimonial-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/07.png" alt="Thumb" />
                  </div>
                  <div>
                    <p className="testimonial-desc">
                      {`"Sed perspiciat unde omnis iste natus error voluptatem
                      accusantium dolorem audantium totam aperiam eaque quae
                      abillo inventore veritatis Quis autem vel eum iure
                      reprehenderit qui in ea voluptate"`}
                    </p>
                    <div className="author-info">
                      <h5 className="name">Howard A. Guest</h5>
                      <p className="position">Web Developer</p>
                    </div>
                  </div>
                  <div className="rating-wrap">
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
                <div
                  className="testimonial-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/08.png" alt="Thumb" />
                  </div>
                  <div>
                    <p className="testimonial-desc">
                      {`"On the other hands denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee"`}
                    </p>
                    <div className="author-info">
                      <h5 className="name">Randall S. Rosenow</h5>
                      <p className="position">CEO &amp; Founder</p>
                    </div>
                  </div>
                  <div className="rating-wrap">
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
                <div
                  className="testimonial-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/09.png" alt="Thumb" />
                  </div>
                  <div>
                    <p className="testimonial-desc">
                      {`"At vero eoset accusamus et iusto odio dignissimos ducimus
                      blandit praesentium voluptatum deleniti atque corrupti
                      quos dolores et quastiy molestias excepturi sint occaecati
                      cupiditate"`}
                    </p>
                    <div className="author-info">
                      <h5 className="name">Christopher D. Greer</h5>
                      <p className="position">Senior Manager</p>
                    </div>
                  </div>
                  <div className="rating-wrap">
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
        </div>
      </section>
      {/*====== Testimonials End ======*/}
      {/*====== Partners Section With CTA Start ======*/}
      <section className="partners-with-cta">
        <div className="cta-boxes">
          <div className="container">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div
                  className="cta-box cta-primary-overly"
                  style={{ backgroundImage: "url(assets/img/cta/02.jpg)" }}
                >
                  <h2 className="cta-title">Start Fundraising?</h2>
                  <p>
                    Quis autem vel eum iure reprehenderit quien voluptate velit
                    esse quam nihil molestiae consequatur illum dolorem
                  </p>
                  <Link href="/events">
                    <a className="main-btn btn-white">
                      Start a Funden <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div
                  className="cta-box mt-40"
                  style={{ backgroundImage: "url(assets/img/cta/03.jpg)" }}
                >
                  <h2 className="cta-title">Start Fundraising?</h2>
                  <p>
                    Quis autem vel eum iure reprehenderit quien voluptate velit
                    esse quam nihil molestiae consequatur illum dolorem
                  </p>
                  <Link href="/events">
                    <a className="main-btn">
                      Start a Funden <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partners-logos">
          <div className="container">
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
      {/*====== Partners Section With CTA End ======*/}
      {/*====== Latest News Start ======*/}
      <section className="latest-blog-section section-gap-extra-bottom">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Latest News &amp; Blog
              <span className="heading-shadow-text">News Blog</span>
            </span>
            <h2 className="title">Get Every Single Update</h2>
          </div>
          <div className="row justify-content-center latest-blog-posts style-two">
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/01.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>Standing Out From Crowds mproving Mobile Experience</a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/02.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>
                        Five Rules Of App Localization China Money Dating And
                        App Store
                      </a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/03.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>How To Use Underlined Text Improve User Experience</a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Latest News End ======*/}
      {/*====== Footer Start ======*/}
    </Layout>
  );
};

export default Index2;
