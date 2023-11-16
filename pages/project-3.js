import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Project3 = () => {
  return (
    <Layout>
      <PageBanner pageName="Latest Project" />
      <section className="project-section section-gap-extra-bottom primary-soft-bg">
        <div className="container">
          <div className="row project-items project-style-three justify-content-center">
            <div className="col-lg-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-01.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Video &amp; Movies</Link>
                  </div>
                  <div className="content-top">
                    <div className="author">
                      <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Kodak PIXPRO Friendly Zoom FZ53-RD 1605MP Digital Camera
                        with 5X Optical Zoom
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
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-03.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Education</Link>
                  </div>
                  <div className="content-top">
                    <div className="author">
                      <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Kodak PIXPRO Friendly Zoom FZ53-RD 1605MP Digital Camera
                        with 5X Optical Zoom
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">81%</span>
                    </div>
                    <div className="stats-bar" data-value={81}>
                      <div className="bar-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-04.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Gaming</Link>
                  </div>
                  <div className="content-top">
                    <div className="author">
                      <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Kodak PIXPRO Friendly Zoom FZ53-RD 1605MP Digital Camera
                        with 5X Optical Zoom
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">90%</span>
                    </div>
                    <div className="stats-bar" data-value={90}>
                      <div className="bar-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-02.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Technology</Link>
                  </div>
                  <div className="content-top">
                    <div className="author">
                      <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Kodak PIXPRO Friendly Zoom FZ53-RD 1605MP Digital Camera
                        with 5X Optical Zoom
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">75%</span>
                    </div>
                    <div className="stats-bar" data-value={75}>
                      <div className="bar-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-01.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Gaming</Link>
                  </div>
                  <div className="content-top">
                    <div className="author">
                      <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Kodak PIXPRO Friendly Zoom FZ53-RD 1605MP Digital Camera
                        with 5X Optical Zoom
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
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-06.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Covid - 19</Link>
                  </div>
                  <div className="content-top">
                    <div className="author">
                      <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Kodak PIXPRO Friendly Zoom FZ53-RD 1605MP Digital Camera
                        with 5X Optical Zoom
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">81%</span>
                    </div>
                    <div className="stats-bar" data-value={81}>
                      <div className="bar-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-04.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Business</Link>
                  </div>
                  <div className="content-top">
                    <div className="author">
                      <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Kodak PIXPRO Friendly Zoom FZ53-RD 1605MP Digital Camera
                        with 5X Optical Zoom
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">90%</span>
                    </div>
                    <div className="stats-bar" data-value={90}>
                      <div className="bar-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-02.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Technology</Link>
                  </div>
                  <div className="content-top">
                    <div className="author">
                      <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                      <Link href="/project-details">James W. Barrows</Link>
                    </div>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </span>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Kodak PIXPRO Friendly Zoom FZ53-RD 1605MP Digital Camera
                        with 5X Optical Zoom
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">75%</span>
                    </div>
                    <div className="stats-bar" data-value={75}>
                      <div className="bar-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="view-more-btn text-center mt-40">
                <Link href="/project-details">
                  <a className="main-btn bordered-btn">
                    View More Project <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project3;
