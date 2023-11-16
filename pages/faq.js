import Link from "next/dist/client/link";
import { Accordion, Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Faq = () => {
  return (
    <Layout>
      <PageBanner pageName="FAQ" />
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <Tab.Container defaultActiveKey="general">
                <div className="faq-accordion-tab">
                  <div className="tab-nav-area text-center">
                    <Nav className="nav nav-tabs" id="faqTab" role="tablist">
                      <Nav.Item>
                        <Nav.Link eventKey="general">General</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="speakers">Speakers</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="pricing">Pricing</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="support">Support</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="history">History</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="customers">Customers</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="general">
                      <Accordion
                        className="accordion"
                        eventKey="accordionFaqOne"
                      >
                        <div className="accordion-item">
                          <Accordion.Toggle
                            as="h5"
                            eventKey="accordionFaqOne"
                            className="accordion-title"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordionFaqOne">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-2"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-2"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-3"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-3"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-4"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-4"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-5"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-5"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-6"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-6"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-7"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-7"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-8"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-8"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-9"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-9"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-10"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-10"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="speakers">
                      <Accordion
                        className="accordion"
                        defaultActiveKey="accordion-2-1"
                      >
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-2-1"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-2-1"
                            data-parent="#accordionFaqTwo"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-2-2"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-2-2"
                            data-parent="#accordionFaqTwo"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-2-3"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-2-3"
                            data-parent="#accordionFaqTwo"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-2-4"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-2-4"
                            data-parent="#accordionFaqTwo"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-2-5"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-2-5"
                            data-parent="#accordionFaqTwo"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-2-6"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-2-6"
                            data-parent="#accordionFaqTwo"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-2-7"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-2-7"
                            data-parent="#accordionFaqTwo"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-2-8"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-2-8"
                            data-parent="#accordionFaqTwo"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-2-9"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-2-9"
                            data-parent="#accordionFaqTwo"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-2-10"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-2-10"
                            data-parent="#accordionFaqTwo"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pricing">
                      <Accordion className="accordion" eventKey="accordion-3-1">
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-1"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-1">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-2"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-2">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-3"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-3">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-4"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-4">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-5"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-5">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-6"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-6">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="support">
                      <Accordion
                        className="accordion"
                        defaultActiveKey="accordion-4-1"
                      >
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-1"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-1">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-2"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-2">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-3"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-3">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-4"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-4">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-5"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-5">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-6"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-6">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-7"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-7">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-8"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-8">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-9"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-9">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-10"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-10">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="history">
                      <Accordion
                        className="accordion"
                        defaultActiveKey="accordion-5-1"
                      >
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-1"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-1">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-2"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-2">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-3"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-3">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-4"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-4">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-5"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-5">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-6"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-6">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-7"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-7">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="customers">
                      <Accordion
                        className="accordion"
                        defaultActiveKey="accordion-6-1"
                      >
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-1"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-1">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-2"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-2">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-3"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-3">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-4"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-4">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-5"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-5">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-6"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-6">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-7"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-7">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
      {/*====== FAQ Area End ======*/}
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
                <Link href="/project-1">
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
                <Link href="/project-2">
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
                <Link href="/project-1">
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
    </Layout>
  );
};

export default Faq;
