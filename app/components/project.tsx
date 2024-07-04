import Image from "next/image";
import React from "react";

export default function Project(props: any) {
  return (
    <div className="container-fluid">
      {props.isEven ? (
        <section className="row even">
          <div className="col-md-8 col-xs-12">
            <div>
              <h3>{props.projectTitle}</h3>
            </div>
            <div className="row">
              <div className="col-md-6 col-xs-12 project-technology-col">
                <h4>Frontend</h4>
                <span>{props.frontendTech}</span>
              </div>
              {props.backendTech.length > 0 ? (
                <div className="col-md-6 col-xs-12 project-technology-col">
                  <h4>Backend</h4>
                  <span>{props.backendTech}</span>
                </div>
              ) : null}
            </div>
            <div className="project-functionality">
              <h4>Functionality</h4>
              <span>{props.description}</span>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 img-container">
            <Image
              data-aos="fade-left"
              data-aos-duration="1000"
              src={props.img}
              alt="Project"
              title="Project"
            />
          </div>
        </section>
      ) : (
        <section className="row odd">
          <div className="col-md-4 col-xs-12 img-container">
            <Image
              data-aos="fade-right"
              data-aos-duration="1000"
              src={props.img}
              alt="Project"
              title="Project"
            />
          </div>
          <div className="col-md-8 col-xs-12">
            <div>
              <h3>{props.projectTitle}</h3>
            </div>
            <div className="row">
              <div className="col-md-6 col-xs-12 project-technology-col">
                <h4>Frontend</h4>
                <span>{props.frontendTech}</span>
              </div>
              {props.backendTech.length > 0 ? (
                <div className="col-md-6 col-xs-12 project-technology-col">
                  <h4>Backend</h4>
                  <span>{props.backendTech}</span>
                </div>
              ) : null}
            </div>
            <div className="project-functionality">
              <h4>Functionality</h4>
              <span>{props.description}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
