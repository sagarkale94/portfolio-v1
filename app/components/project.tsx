import Image from "next/image";
import React from "react";

export default function Project(props: any) {
  return (
    <div className="container-fluid">
      {props.isEven ? (
        <section className="row even">
          <div className="col-md-8 col-xs-12">
            <div>
              <h1>{props.projectTitle}</h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-xs-12 project-technology-col">
                <h3>Frontend</h3>
                <span>{props.frontendTech}</span>
              </div>
              {props.backendTech.length > 0 ? (
                <div className="col-md-6 col-xs-12 project-technology-col">
                  <h3>Backend</h3>
                  <span>{props.backendTech}</span>
                </div>
              ) : null}
            </div>
            <div className="project-functionality">
              <h3>Functionality</h3>
              <span>{props.description}</span>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 img-container">
            <Image
              data-aos="fade-left"
              data-aos-duration="1000"
              src={props.img}
              alt="_dms"
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
              alt="_dms"
            />
          </div>
          <div className="col-md-8 col-xs-12">
            <div>
              <h1>{props.projectTitle}</h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-xs-12 project-technology-col">
                <h3>Frontend</h3>
                <span>{props.frontendTech}</span>
              </div>
              {props.backendTech.length > 0 ? (
                <div className="col-md-6 col-xs-12 project-technology-col">
                  <h3>Backend</h3>
                  <span>{props.backendTech}</span>
                </div>
              ) : null}
            </div>
            <div className="project-functionality">
              <h3>Functionality</h3>
              <span>{props.description}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
