import React from "react";

export default function Header() {
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
      <a
        className="nav-link"
        // activeClassName="active-nav-link"
        href={navLinkData.path}
        key={index}
        title={navLinkData.path}
      >
        <span className="nav-link-details">{navLinkData.label}</span>
        <i className={navLinkData.iconName} style={{ fontSize: "22px" }}></i>
      </a>
    );
  });

  return (
    <header>
      <nav className="toolbar">{NavBarLinksRender}</nav>
    </header>
  );
}
