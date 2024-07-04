import React from "react";

export default function Title(props: any) {
  const navBarLinksData = [
    {
      path: "#home",
      label: "Home",
      iconName: "fa fa-home",
    },
    {
      path: "#about",
      label: "About",
      iconName: "fa fa-user",
    },
    {
      path: "#portfolio",
      label: "Portfolio",
      iconName: "fa fa-briefcase",
    },
    {
      path: "#contact",
      label: "Contact",
      iconName: "fa fa-envelope-open",
    },
  ];

  const NavBarLinksRender = navBarLinksData.map((navLinkData, index) => {
    return (
      <div className="drawer-navlink" key={index}>
        <a
          className="nav-link"
          // activeClassName="active-nav-link"
          href={navLinkData.path}
        >
          <span className="nav-link-details">{navLinkData.label}</span>
          <i className={navLinkData.iconName} style={{ fontSize: "22px" }}></i>
        </a>
        <p>{navLinkData.label}</p>
      </div>
    );
  });
  return (
    <div className="title-container">
      {/* <div
        id="mySidenav"
        className="sidenav"
        style={{ width: sideNavWidth }}
      >
        <i
          className="fa fa-close closebtn"
          onClick={() => setSideNavWidth("0%")}
        ></i>
        {NavBarLinksRender}
      </div> */}
      {/* <i className="fa fa-bars ic-hamberger"></i> */}
      <h2>
        {props.splitedTitlePart1}
        <span>{props.splitedTitlePart2}</span>
      </h2>
      <span className="title-bg">{props.bgTitle}</span>
    </div>
  );
}
