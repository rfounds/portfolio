import React from "react";
import Link from "next/link";

const socialContent = [
  {
    icon: "fab fa-github",
    link: "https://www.github.com/rfounds",
  },
  {
    icon: "fab fa-twitter",
    link: "https://twitter.com/rfoundsdev", 
  },
  {
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/rfounds",
  },
];

const CopyRightThree = () => {
  return (
    <div className="row">
      <div className="col-lg-4 order-lg-1 mb-20">
        <ul
          className="
              d-flex
              justify-content-center justify-content-lg-start
              footer-nav
            "
        >
          <li>
            <Link href="/">Privacy & Terms.</Link>
          </li>
          <li>
            <Link href="#contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 order-lg-3 mb-20">
        <ul
          className=" d-flex
              justify-content-center justify-content-lg-end
              social-icon"
        >
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
        {/* End .social-icon */}
      </div>
      <div className="col-lg-4 order-lg-2 mb-20">
        <p className="copyright text-center">
          Copyright @{new Date().getFullYear()}{" "}
          Robert Founds
        </p>
      </div>
    </div>
  );
};

export default CopyRightThree;
