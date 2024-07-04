import styles from "./page.module.css";
import BgImg from "../public/bg.png";
import Pic from "../public/pic.jpg";

import angular from "../public/skill/angular.png";
import material from "../public/skill/material.png";
import typescript from "../public/skill/typescript.png";
import reactJS from "../public/skill/react.png";
import javascript from "../public/skill/javascript.png";
import styledComp from "../public/skill/styledComp.png";
import ngRX from "../public/skill/ngrx.svg";
import redux from "../public/skill/redux.svg";

import DMS from "../public/project/dms.png";
import SW from "../public/project/sw.png";
import Brigs from "../public/project/brigs.png";
import Fitke from "../public/project/fitke.png";
import Admission from "../public/project/adm.png";
import Ikshu from "../public/project/ikshu.png";
import Lagna from "../public/project/lagna.png";

import Image from "next/image";
import Title from "./components/title";
import Project from "./components/project";
import Header from "./components/header";

export default function Home() {
  const projectData = [
    {
      projectTitle: "StreetWorks Management Portal",
      frontendTech: "Angular 11 and Angular Material",
      backendTech: "",
      img: SW,
      description:
        "Street work management involves permit creation and request approvals. Also reinstatement request and start stop street works are complex process as a part of streetwork management. With the help of this portal complete process has been customized for UK based client to make it simplified.",
    },
    {
      projectTitle:
        "DMS : Data visualization and dashboard management web-based tool",
      frontendTech: "Angular 9 and Angular Material",
      backendTech: "",
      img: DMS,
      description:
        "DMS allow admins to create the dashboard and configure the dashboard using available custom 30 different charts with dedicated api and position charts as it best suits. Admin then can allow the dashboard to menus assigned to user roles he has created. Whith the help of configuration done by admins, users can login and observe the assigned dashboard to its roles. Best supported features are drill-down charts and hence dashbord also slide-show of dashboard charts, slide-show dashboard chart, export dashboards as pdf, autorefresh supported dashboards, dark theme support for complete tool, multilingual support, intranet as well as cloud deployment support andmany more",
    },
    {
      projectTitle:
        "Brigs-Nucleus : Organization asset management web-based tool",
      frontendTech: "Angular 8 and Angular Material",
      backendTech: "",
      img: Brigs,
      description:
        "Brigs-Nucleus allows admins to make the assets entry and maintain the asset by allowing to create checklist for asset, create asset checklist questions and collect the answers regularly after specified time. With the help of Brigs-Nucleus, to maintain the asset related document will become easy.",
    },
    {
      projectTitle: "Fitke - Table tennis tournament superadmin portal",
      frontendTech: "Angular 7 and Angular Material",
      backendTech: "",
      img: Fitke,
      description:
        "The system is developed to provide platform for table tennis players where they can participate in the table tennis tournament as per their preferences based on venue, participation fee and tournament type. After online payment and participation player can see his tournament matches, participant and can rate after completion of tournament. Super admin, admin and scorekeeper manage the tournaments through their respective login.",
    },
    {
      projectTitle:
        "Admission Matters - School enquiry and admission parent portal",
      frontendTech: "Angular 7 and Angular Material",
      backendTech: "",
      img: Admission,
      description:
        "The system is developed to provide a direct communication platform between school staff and parents, regarding the admission process of the child. Involved features like designing the enquiry form by the school staff dynamically as per their requirement, filling up the enquiry form as well as admission form by the parents, adding/updating the child remarks by the school staff depending on the criteria set by the school after the child's as well as parent's interview, etc.",
    },
    {
      projectTitle: "Ikshu Homes - Society management admin portal",
      frontendTech: "Angular 6 and Angular Material",
      backendTech: "",
      img: Ikshu,
      description:
        "The system is developed to provide social platform for apartment complex residents, a communication platform for owner and residents of apartment complexes to converse with neighbours. Involved features like notices, events, conversations, complaints, visitors, real-time notifications etc.",
    },
    {
      projectTitle: "Lagnamantra - Matrimony user portal",
      frontendTech: "Angular 6 and Angular Material",
      backendTech: "",
      img: Lagna,
      description:
        "The system is developed where user can do registration for free and create/update profile, search profiles with filter, send/accept interest, firebase real time chat with accepted interest profile and choose the payment plans",
    },
  ];

  const projectsToRender = projectData.map((project, index) => {
    return (
      <Project
        key={index}
        projectTitle={project.projectTitle}
        frontendTech={project.frontendTech}
        backendTech={project.backendTech}
        img={project.img}
        description={project.description}
        isEven={index % 2 === 0}
      />
    );
  });

  return (
    <main
      className={styles.main}
      style={{
        backgroundImage: `url(${BgImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundAttachment: "scroll",
      }}
    >
      <Header />
      <section id="home" className={styles.homeMainContainer}>
        {/* <Title bgTitle="" splitedTitlePart1="" splitedTitlePart2="" /> */}
        <Image
          src={Pic}
          alt="sagar kale pic"
          width={300}
          className={styles.appImg}
        />
        <div className={styles.homeMessage}>
          <span className={styles.homeMessageSpan}>Hi i am,</span>
          <h1 className={styles.homeMessageH}>Sagar Kale</h1>
          <p className={styles.homeMessageP}>
            I build things for web <span>&#127760;</span>
          </p>
          <p className={styles.homeMessageP1}>
            I am a Pune based software developer & passionate for javascript and
            javascript based frameworks.
          </p>
          <a className="btn-more-about-me" href="#about">
            MORE ABOUT ME
          </a>
        </div>
      </section>
      <section id="about" className={styles.appSection}>
        <div data-aos="fade-right" className="page-container">
          <Title
            bgTitle="resume"
            splitedTitlePart1="about "
            splitedTitlePart2="me"
          />
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12 personal-info">
                <h3>PERSONAL INFO</h3>
                <div className="row">
                  <span className="col-md-6 col-xs-12">
                    <h4>Name</h4>
                    <div>Sagar Kale</div>
                  </span>
                  <span className="col-md-6 col-xs-12">
                    <h4>Email</h4>
                    <div>sagarkale94@gmail.com</div>
                  </span>
                </div>
                <div className="row">
                  <span className="col-md-6 col-xs-12">
                    <h4>Address</h4>
                    <div>Pune, Maharashtra India</div>
                  </span>
                  <span className="col-md-6 col-xs-12">
                    <h4>Age</h4>
                    <div>28</div>
                  </span>
                </div>
                <div className="row">
                  <span className="col-md-6 col-xs-12">
                    <h4>Nationality</h4>
                    <div>Indian</div>
                  </span>
                </div>
                <div>
                  <h4>Languages</h4>
                  <div>English, Hindi, Marathi</div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="row">
                  <span className="col-md-5 col-xs-12 score-card">
                    <div className="score-key">4+</div>
                    <div className="score-value">YEARS OF EXPERIENCE</div>
                  </span>
                  <span className="col-md-5 offset-md-1 col-xs-12 score-card">
                    <div className="score-key">7+</div>
                    <div className="score-value">PROJECTS</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="custom-hr"></div>
            <div className="section-skills">
              <h3>MY SKILLS</h3>
              <div className="row mt-5">
                <div className="col-md-4 col-xs-12 skill-item">
                  <Image src={angular} alt="skill" width={50} />
                  <p>Angular</p>
                </div>
                <div className="col-md-4 col-xs-12 skill-item">
                  <Image src={material} alt="skill" width={50} />
                  <p>Angular Material</p>
                </div>
                <div className="col-md-4 col-xs-12 skill-item">
                  <Image src={ngRX} alt="skill" width={50} />
                  <p>NgRX</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-xs-12 skill-item">
                  <Image src={reactJS} alt="skill" width={50} />
                  <p>React JS</p>
                </div>
                <div className="col-md-4 col-xs-12 skill-item">
                  <Image src={styledComp} alt="skill" width={50} />
                  <p>Styled Component</p>
                </div>
                <div className="col-md-4 col-xs-12 skill-item">
                  <Image src={redux} alt="skill" width={50} />
                  <p>Redux</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-xs-12 skill-item">
                  <Image src={javascript} alt="skill" width={50} />
                  <p>Javascript</p>
                </div>
                <div className="col-md-4 col-xs-12 skill-item">
                  <Image src={typescript} alt="skill" width={50} />
                  <p>Type Script</p>
                </div>
              </div>
            </div>
            <div className="custom-hr"></div>
            <div className="section-exp-edu">
              <h3>EXPERIENCE AND EDUCATION</h3>
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <div className="ed-ex-item">
                    <span className="ic-ed-ex">
                      <i className="fa fa-briefcase"></i>
                    </span>
                    <span className="badge-year">2020 - Present</span>
                    <h5>SAGACITY SOFTWARES PVT. LTD.</h5>
                    <p>SOFTWARE ENGINEER</p>
                    <p>
                      Designing the system as per the customer requirements and
                      implementing the same effectively by working closely with
                      the backend, UI/UX and Testing team members throughout the
                      development cycle ensuring that the proposed design met
                      customer requirements.
                    </p>
                  </div>
                  <div className="ed-ex-item">
                    <span className="ic-ed-ex">
                      <i className="fa fa-briefcase"></i>
                    </span>
                    <span className="badge-year">2019 - 2020</span>
                    <h5>STACKMINT PVT. LTD.</h5>
                    <p>ANGULAR DEVELOPER</p>
                  </div>
                  <div className="ed-ex-item">
                    <span className="ic-ed-ex">
                      <i className="fa fa-briefcase"></i>
                    </span>
                    <span className="badge-year">2018 - 2019</span>
                    <h5>BITCODE TECHNOLOGY PVT. LTD.</h5>
                    <p>SOFTWARE ASSOCIATE</p>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="ed-ex-item">
                    <span className="ic-ed-ex">
                      <i className="fa fa-graduation-cap"></i>
                    </span>
                    <span className="badge-year">2017 - 2015</span>
                    <h5>MASTER OF ENGINEERING</h5>
                    <p>Completed master of engineering from pune university.</p>
                  </div>
                  <div className="ed-ex-item">
                    <span className="ic-ed-ex">
                      <i className="fa fa-graduation-cap"></i>
                    </span>
                    <span className="badge-year">2014 - 2011</span>
                    <h5>BACHELOR OF ENGINEERING</h5>
                    <p>
                      Completed bachelor of engineering from pune university.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="portfolio"
        className={`${styles.appSection} ${styles.appSectionNoPadding}`}
      >
        <div data-aos="fade-right" className="page-container">
          <Title
            bgTitle="works"
            splitedTitlePart1="my "
            splitedTitlePart2="portfolio"
          />
          <div className="sub-container">
            <div className="container">
              <div className="row top-20 justify-content-md-center">
                <div className="col-md-4 col-xs-12">
                  <div className="grid-item-outer">
                    <div
                      className="grid-item"
                      style={{ backgroundImage: `url(${SW.src})` }}
                    >
                      <div
                        className="overlay"
                        style={{ backgroundColor: "#e8b5008e" }}
                      >
                        <div className="text">
                          StreetWorks Management Portal
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row top-20">
                <div className="col-md-4 col-xs-12">
                  <div className="grid-item-outer">
                    <div
                      className="grid-item"
                      style={{ backgroundImage: `url(${DMS.src})` }}
                    >
                      <div
                        className="overlay"
                        style={{ backgroundColor: "#0073b08e" }}
                      >
                        <div className="text">TetraPak DMS</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <div className="grid-item-outer">
                    <div
                      className="grid-item"
                      style={{ backgroundImage: `url(${Brigs.src})` }}
                    >
                      <div
                        className="overlay"
                        style={{ backgroundColor: "#a801c18e" }}
                      >
                        <div className="text">Brigs Nucleus</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <div className="grid-item-outer">
                    <div
                      className="grid-item"
                      style={{ backgroundImage: `url(${Fitke.src})` }}
                    >
                      <div
                        className="overlay"
                        style={{ backgroundColor: "#055a9d8e" }}
                      >
                        <div className="text">Fitke</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row top-20">
                <div className="col-md-4 col-xs-12">
                  <div className="grid-item-outer">
                    <div
                      className="grid-item"
                      style={{
                        backgroundImage: `url(${Admission.src})`,
                      }}
                    >
                      <div
                        className="overlay"
                        style={{ backgroundColor: "#e8b5008e" }}
                      >
                        <div className="text">Admission Matters</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <div className="grid-item-outer">
                    <div
                      className="grid-item"
                      style={{ backgroundImage: `url(${Ikshu.src})` }}
                    >
                      <div
                        className="overlay"
                        style={{ backgroundColor: "#3fa0fc8e" }}
                      >
                        <div className="text">Ikshu Home</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <div className="grid-item-outer">
                    <div
                      className="grid-item"
                      style={{ backgroundImage: `url(${Lagna.src})` }}
                    >
                      <div
                        className="overlay"
                        style={{ backgroundColor: "#bf1a1a8e" }}
                      >
                        <div className="text">Lagnamantra</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {projectsToRender}
        </div>
      </section>
      <section id="contact" className={styles.appSection}>
        <div data-aos="fade-right" className="page-container">
          <Title
            bgTitle="contact"
            splitedTitlePart1="get in "
            splitedTitlePart2="touch"
          />
          <div className="container sub-container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <h3>HAPPY TO HELP ..!!</h3>
                <p>
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
                </p>
                <div className="contact-item">
                  <i className="fa fa-envelope-open ic-contacts-dark"></i>
                  <span className="contact-item-row">
                    <span className="contact-item-row-key">Email Me</span>
                    <span className="contact-item-row-val">
                      sagarkale94@gmail.com
                    </span>
                  </span>
                </div>
                <div className="contact-item">
                  <i className="fa fa-phone-square ic-contacts-dark1"></i>
                  <span className="contact-item-row">
                    <span className="contact-item-row-key">Call Me</span>
                    <span className="contact-item-row-val">+91-8551913973</span>
                  </span>
                </div>
                <div className="contact-social mt-5">
                  <span className="contact-social-item">
                    <a
                      href="https://www.linkedin.com/in/sagar-kale/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </span>
                  <span className="contact-social-item">
                    <a href="https://twitter.com/sagarkale94" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </span>
                  <span className="contact-social-item">
                    <a href="https://github.com/sagarkale94" target="_blank">
                      <i className="fa fa-github"></i>
                    </a>
                  </span>
                  <span className="contact-social-item">
                    <a
                      href="https://www.youtube.com/channel/UCwEAJo35LElFtV0XovucHzQ"
                      target="_blank"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="contact-input">
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name.."
                  />
                </div>
                <div className="contact-input">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email.."
                  />
                </div>
                <div className="contact-input">
                  <label htmlFor="message">Message</label>
                  <br />
                  <textarea id="message" placeholder="Enter your message.." />
                </div>
                <div className="btn-send-msg">SEND MESSAGE</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.appFooter}>
        <span>&copy; 2024 Your Website Name. All Rights Reserved.</span>
      </footer>
    </main>
  );
}
