import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBannerTwelve = () => {
  return (
    <div className="hero-banner-twelve lg-container " id="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
            <h1 className="tracking-wide hero-heading font-gordita" data-aos="fade-up">
              Robert Founds{" "}
              <br />
              <span style={{ color: "#FF006B" }}>Web</span>{" "}
              <span style={{ color: "#FF006B" }}>Developer</span>
            </h1>
            <p
              data-aos="fade-up"
              className="hero-sub-heading"
              data-aos-delay="100"
            >
              Your digital presence, perfected.
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link href="#contact" className="get-start-btn">
                Get Started now{" "}
                <i className="fa fa-angle-right ms-1" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="screen-holder" data-aos="fade-up">
          {/* <Image width={1320} height={750} style={{ height: 'fit-content' }} */}
          {/*   src="/images/porfolioExample1.png" */}
          {/*   alt="screen" */}
          {/*   className="img-meta" */}
          {/* /> */}
          {/* <Image width={290} height={242} style={{ height: 'fit-content' }} */}
          {/*   src="/images/porfolioExample2.png" */}
          {/*   alt="screen" */}
          {/*   className="shapes screen-one" */}
          {/* /> */}
          {/* <Image width={274} height={335} style={{ height: 'fit-content' }} */}
          {/*   src="/images/assets/screen_34.png" */}
          {/*   alt="screen" */}
          {/*   className="shapes screen-two" */}
          {/* /> */}
          <Image width="311" height="341"
            src="/images/shape/230.svg"
            alt="screen"
            className="shapes shape-one"
          />
          <Image width="170" height="170"
            src="/images/shape/231.svg"
            alt="screen"
            className="shapes shape-two"
          />
          {/* </div> <!-- /.screen-holder --> */}
        </div>
        <Image width="13" height="12"
          src="/images/shape/232.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image width="17" height="20"
          src="/images/shape/233.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image width="13" height="16"
          src="/images/shape/234.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image width="14" height="14"
          src="/images/shape/235.svg"
          alt="shape"
          className="shapes shape-six"
        />
        <Image width="36" height="30"
          src="/images/shape/236.svg"
          alt="shape"
          className="shapes shape-seven"
        />
        <Image width="13" height="12"
          src="/images/shape/232.svg"
          alt="shape"
          className="shapes shape-eight"
        />
      </div>
    </div>
    // /.hero-banner-twelve
  );
};

export default HeroBannerTwelve;
