import Link from "next/dist/client/link";
import PageBanner from "../../src/components/PageBanner";
import Layout from "../../src/layouts/Layout";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { firestoreGetProjectAction } from '../../src/utils/firebase';
import { DonateModal } from '../../src/components/DonateModal';
import { toast} from "react-hot-toast";
import { donateToProject } from '../../src/utils/projectActions';

// export async function getServerSideProps(context) {
//   const { projectId } = context.params;
//   const projectData = await firestoreGetProjectAction(projectId);

//   // Manually pick properties
//   const project = {
//       // Only include properties, not methods or circular references
//       name: projectData.name,
//       image: projectData.image,
//       description: projectData.description,
//       goal: projectData.goal,
//       creator:  projectData.creator,
//       current_amount:  projectData.current_amount,
//       startDate: new Date(projectData.startDate * 1000).toISOString(),
//       endDate: new Date(projectData.endDate * 1000).toISOString(),
//       // ...other properties you need
//   };

//   return { props: { project } };
// }

// const ProjectDetails = ({ project }) => {
const ProjectDetails = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const [project, setProject] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [donateModal, setDonateModal] = useState(false);
  const [donation, setDonation] = useState(0);
  const [sender, setSender] = useState('');
  const [selectedDonation, setSelectedDonation] = useState(null);
  // const handleSelectDonationAmount = (amount) => {
  //   setSelectedDonationAmount(amount);
  // };
  
   // Use useEffect to get data from sessionStorage on the client side
   useEffect(() => {
    // As sessionStorage is available on the client, we can safely access it here
    const address = sessionStorage.getItem("address");
    setSender(address);
  }, []);

  const handleDonationClick = async () => {
    if (selectedDonation === null) {
      toast.error("Please select a donation amount.");
      return;
    }
  
    console.log(`Attempting to donate: $${selectedDonation}`);
  
    try {
      // Log the current state before attempting to donate
      console.log('Sender:', sender);
      console.log('Project:', project);
      console.log('Donation amount:', selectedDonation);
  
      // Call the donateToProject function to attempt the actual donation
      await donateToProject(sender, project, selectedDonation);
  
      // Log success and show a toast message
      console.log(`Donation successful: $${selectedDonation}`);
      toast.success(`Donated $${selectedDonation} successfully!`);
  
      // Reset the selected donation amount
      setSelectedDonation(null);
    } catch (error) {
      // Log the error to the console and show an error toast
      console.error(`Donation failed: ${error.message}`);
      toast.error(`Donation failed: ${error.message}`);
    }
  };
  
  
  


  // useEffect(() => {
  //   console.log("Modal Open (in [projectId].js):", show);
  // }, [donateModal]);

// This will ensure `toggleDonateModal` doesn't change unless `setDonateModal` changes, 
  // which should only happen when the function is called.
  // const toggleDonateModal = useCallback(() => {
  //   setDonateModal(prevModal => !prevModal);
  // }, []);
  const toggleDonateModal = useCallback(() => {
    console.log("Toggling Donate Modal. Current state:", !donateModal); // Log the action of toggling
    setDonateModal(prev => !prev);
  }, [donateModal]);

  useEffect(() => {
    console.log('DonateModal state (in ProjectDetails.js):', donateModal);
  }, [donateModal]);
  

  useEffect(() => {
    // Wait until the router is ready before fetching project data
    if (!router.isReady) return;
  
    setLoading(true);
    firestoreGetProjectAction(router.query.projectId)
      .then((projectData) => {
        setProject(projectData);
        console.log("Project data:", projectData);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router.isReady, router.query.projectId]);
  

  if (isLoading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!project) {
    return <div>Loading...</div>; // Error or not found state
  }

  // Calculate the percent raised towards the goal
  const percentRaised = project.goal > 0 ? (project.current_amount / project.goal) * 100 : 0;

  // Calculate the days left using endDate
  const currentDate = new Date();
  const endDate = new Date(project.endDate * 1000); // Assuming endDate is a UNIX timestamp
  const timeDiff = endDate - currentDate;
  const daysLeft = timeDiff > 0 ? Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) : 0;

  const startDate = new Date(project.startDate * 1000); // Convert seconds to milliseconds
  const formattedStartDate = startDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const truncateCreator = (creator) => {
    if (creator.length <= 10) {
      return creator; // No need to truncate
    }
    return `${creator.substring(0, 5)}...${creator.substring(creator.length - 5)}`;
  };

  console.log("DonateModal state (in ProjectDetails.js):", donateModal);

  return (
    <Layout>
      <PageBanner pageName="Project Details" />
      <section className="project-details-area section-gap-extra-bottom">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="project-thumb mb-md-50">
                <img
                // src="assets/img/project/project-details.jpg"
                src={project.image}
                alt="Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-summery">
                <Link href="/project-1">
                  <a className="category">Headphone</a>
                </Link>
                <h3 className="project-title">
                  {project.name} {/* Use the title property from your project data */}
                </h3>
                <div className="meta">
                  <div className="author">
                    <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                    {/* <a href="#">James W. Barrows</a> */}
                    <a href="#">{truncateCreator(project.creator)}</a>
                  </div>
                  <a href="#" className="date">
                    <i className="far fa-calendar-alt" />
                    {/* 25 Feb 2021 */}
                    {formattedStartDate}
                  </a>
                </div>
                <div className="project-funding-info">
                  <div className="info-box">
                    {/* <span>$5036k</span> */}
                    <span>${project.current_amount.toLocaleString()}</span>
                    <span className="info-title">Pledged</span>
                  </div>
                  <div className="info-box">
                    <span>9</span>
                    <span className="info-title">Backers</span>
                  </div>
                  <div className="info-box">
                    <span>{daysLeft}</span>
                    <span className="info-title">Days Left</span>
                  </div>
                </div>
                <div className="project-raised clearfix">
                  <div className="d-flex align-items-center justify-content-between">
                    {/* <div className="raised-label">Raised of $59,689</div>
                    <div className="percent-raised">79%</div> */}
                    <div className="raised-label">Raised of ALGO {project.goal.toLocaleString()}</div>
                    <div className="percent-raised">{percentRaised.toFixed(2)}%</div>
                  </div>
                  <div className="stats-bar" data-value={percentRaised}>
                    {/* <div className="bar-line" /> */}
                    <div className="bar-line" style={{ width: `${percentRaised}%` }} />
                  </div>
                </div>
                <div className="project-form">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                  <ul className="donation-amount">
          {/* Set the selected donation amount when a button is clicked */}
          <li><button type="button" onClick={() => setSelectedDonation(5)}>$5</button></li>
          <li><button type="button" onClick={() => setSelectedDonation(50)}>$50</button></li>
          <li><button type="button" onClick={() => setSelectedDonation(180)}>$180</button></li>
          <li><button type="button" onClick={() => setSelectedDonation(500)}>$500</button></li>
          <li><button type="button" onClick={() => setSelectedDonation(1000)}>$1000</button></li>
        </ul>
                    {/* <button type="submit" className="main-btn">
                      Donate Now <i className="far fa-arrow-right" />
                    </button> */}
                    <button type="button" className="main-btn" onClick={handleDonationClick}>
                      Donate Now <i className="far fa-arrow-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="project-details-tab">
                <div className="tab-content" id="projectTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="description-content">
                          <h4 className="description-title">
                            Best Smart Headphone In 2021
                          </h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corp oris suscipit
                            laboriosam, nisi ut aliquid ex ea commodi
                            consequatur. Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit esse quam nihil molestiae
                            consequatur vel illume.
                          </p>
                          <img
                            className="mt-50 mb-50"
                            // src="assets/img/project/project-details-2.jpg"
                            src={project.image}
                            alt="Image"
                          />
                          <h4 className="description-title">
                            Why Donate Our Products
                          </h4>
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi temporadunt ut
                            labore et dolore magnam aliquam quaerat voluptate
                            enim ad minima veniam suscipit
                          </p>
                          <ul className="description-list">
                            <li>Standard Lorem Sum Passage Used</li>
                            <li>Build A Music Manager With Nuxt</li>
                            <li>A Foldable Web Actually Mean</li>
                            <li>Upcoming Web Design Conferences</li>
                          </ul>
                          <p>
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give you a complete account of the
                            system, and expound the actual teachings of the
                            great explorer of the truth, the master-builder of
                            human happiness. No one rejects, dislikes,
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="rewards-box mt-md-50">
                          <h4 className="title">Rewards</h4>
                          <img
                            // src="assets/img/project/project-rewards.jpg"
                            src={project.image}
                            alt="Image"
                            className="w-100"
                          />
                          <span className="rewards-count">
                            <span>$530</span> or More
                          </span>
                          <p>
                            But must explain to you how all this mistaken idea
                            of denouncing plasue and praising pain was born
                          </p>
                          <div className="delivery-date">
                            <span>25 Mar 20210</span>
                            Estimated Delivery
                          </div>
                          <ul className="rewards-info">
                            <li>
                              <i className="far fa-user-circle" />5 Backers
                            </li>
                            <li>
                              <i className="far fa-trophy-alt" />
                              29 Rewards Left
                            </li>
                          </ul>
                          <Link href="/events">
                            <a className="main-btn">
                              Select Rewards{" "}
                              <i className="far fa-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="update" role="tabpanel">
                    Update
                  </div>
                  <div
                    className="tab-pane fade"
                    id="bascker-list"
                    role="tabpanel"
                  >
                    Bascker List
                  </div>
                  <div className="tab-pane fade" id="reviews" role="tabpanel">
                    Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Include the DonateModal here and pass the necessary props */}
      <DonateModal
        show={donateModal}
        // onClose={toggleDonateModal}
        project={project}
        donation={donation}
        setDonation={setDonation}
        sender={sender}
      />
    </Layout>
  );
};

export default ProjectDetails;
