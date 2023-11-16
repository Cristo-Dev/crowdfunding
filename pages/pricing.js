import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Pricing = () => {
  return (
    <Layout>
      <PageBanner pageName="Pricing" />
      <section className="pricing-section section-gap-two primary-soft-bg">
        <div className="container">
          <div className="row pricing-boxes justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="pricing-box mb-30">
                <h6 className="plan-name">Basic Plan</h6>
                <div className="price">
                  <span className="currency">$</span>
                  <span>29.67</span>
                </div>
                <span className="plan-subtitle">
                  Suitable For Any IT Solutions
                </span>
                <ul className="plan-feature">
                  <li>
                    <i className="fas fa-check" /> Resposive Design
                  </li>
                  <li>
                    <i className="fas fa-check" /> Unlimited Entities
                  </li>
                  <li className="hidden-feature">
                    <i className="fas fa-check" /> Premium Quality Support
                  </li>
                  <li className="hidden-feature">
                    <i className="fas fa-check" /> Hosted In The Cloud
                  </li>
                </ul>
                <a href="#" className="pricing-btn">
                  Select Plan <i className="fas fa-arrow-right" />
                </a>
                <div className="plan-shape">
                  <img src="assets/img/pricing-shape.png" alt="shape" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="pricing-box featured-plan mb-30">
                <h6 className="plan-name">popular Plan</h6>
                <div className="price">
                  <span className="currency">$</span>
                  <span>35.92</span>
                </div>
                <span className="plan-subtitle">
                  Suitable For Any IT Solutions
                </span>
                <ul className="plan-feature">
                  <li>
                    <i className="fas fa-check" /> Resposive Design
                  </li>
                  <li>
                    <i className="fas fa-check" /> Unlimited Entities
                  </li>
                  <li>
                    <i className="fas fa-check" /> Premium Quality Support
                  </li>
                  <li className="hidden-feature">
                    <i className="fas fa-check" /> Hosted In The Cloud
                  </li>
                </ul>
                <a href="#" className="pricing-btn">
                  Select Plan <i className="fas fa-arrow-right" />
                </a>
                <div className="plan-shape">
                  <img src="assets/img/pricing-shape.png" alt="shape" />
                </div>
                <span className="plan-tag">Save 45%</span>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="pricing-box mb-30">
                <h6 className="plan-name">premium Plan</h6>
                <div className="price">
                  <span className="currency">$</span>
                  <span>85.39</span>
                </div>
                <span className="plan-subtitle">
                  Suitable For Any IT Solutions
                </span>
                <ul className="plan-feature">
                  <li>
                    <i className="fas fa-check" /> Resposive Design
                  </li>
                  <li>
                    <i className="fas fa-check" /> Unlimited Entities
                  </li>
                  <li>
                    <i className="fas fa-check" /> Premium Quality Support
                  </li>
                  <li>
                    <i className="fas fa-check" /> Hosted In The Cloud
                  </li>
                </ul>
                <a href="#" className="pricing-btn">
                  Select Plan <i className="fas fa-arrow-right" />
                </a>
                <div className="plan-shape">
                  <img src="assets/img/pricing-shape.png" alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Pricing Area End ======*/}
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
            <div className="col-lg-4 col-md-6 col-sm-9 col-11">
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
            <div className="col-lg-4 col-md-6 col-sm-9 col-11">
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
            <div className="col-lg-4 col-md-6 col-sm-9 col-11">
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
    </Layout>
  );
};

export default Pricing;
