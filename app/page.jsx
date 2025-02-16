import React from "react";

import HeaderLandingWebsiteBuilder from "@/components/header/landing/HeaderLandingWebsiteBuilder";
import HeroBannerTwelve from "@/components/hero-banner/HeroBannerTwelve";
import CounterSix from "@/components/counter/CounterSix";
import FooterSeven from "@/components/footer/FooterSeven";
import CopyRightThree from "@/components/footer/CopyRightThree";
import FancyFeatureSeventeen from "@/components/features/FancyFeatureSeventeen";
import FancyTextBlock29 from "@/components/fancy-text-block/FancyTextBlock29";
import TestimonialSeven from "@/components/testimonial/TestimonialSeven";
import CallToActionSeven from "@/components/call-to-action/CallToActionSeven";
import FancyFeatureThirtyTwo from "@/components/features/FancyFeatureThirtyTwo";
import Image from "next/image";
import dynamic from "next/dynamic";
const Scrollspy = dynamic(() => import('@/components/scrollpy/Scrollphy'), {
  ssr: false,

})
export const metadata = {
  title: 'rfounds.dev',
  description: `Web Development For Small Businesses and Personal Portfolios`,
}

export default function Home() {
  return (
    <div className="main-page-wrapper p0 font-gordita">

      {/* End Page SEO Content */}

      <HeaderLandingWebsiteBuilder />
      {/* End Header for website builder landing */}
      {/* 	=============================================
        Theme Hero Banner
        ==============================================  */}
      <Scrollspy>
        <div id="home"></div>
        <HeroBannerTwelve />

        {/* =============================================
        Counter Style Three
        ==============================================  */}
        {/* <div className="counter-style-three lg-container mt-130"> */}
        {/*   <div className="container"> */}
        {/*     <div className="bottom-border"> */}
        {/*       <CounterSix /> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}
        {/* <!-- /.counter-style-three --> */}

        {/* =====================================================
            Fancy Feature Seventeen
        ===================================================== */}
        <div
          className="fancy-feature-seventeen lg-container pt-150 md-pt-90"
          id="whyme"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <div className="title-style-thirteen text-center mb-130 md-mb-90">
                  <div className="upper-title">Why choose me?</div>
                  <h2>
                    {" "}
                    Crafted solutions, designed for&nbsp;
                    <span>
                      impact
                      <Image width="391" height="36"
                        src="/images/shape/line-shape-14.svg"
                        alt="line shape"
                      />
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}

          <div className="container">
            <div className="bottom-border pb-50">
              <div className="row">
                <FancyFeatureSeventeen />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.fancy-feature-seventeen --> */}

        {/* =============================================
            Fancy Feature Twenty Nine
        ==============================================  */}


        {/* =============================================
            Fancy Feature Thirty
        ==============================================  */}
        <div className="my-5 " id="features"></div>
        <div className="fancy-feature-thirty mt-180 md-mt-100" >
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-9 m-auto">
                <div className="title-style-thirteen text-center mb-80 md-mb-60">
                  <div className="upper-title" >My Features</div>
                  <h2>
                    {" "}
                    Services that deliver
                    <span>
                      &nbsp;results{" "}
                      <Image width="391" height="36"
                        src="/images/shape/line-shape-14.svg"
                        alt="line shape"
                      />
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <FancyFeatureThirtyTwo />
            </div>
            <Image width="150" height="168"
              src="/images/shape/237.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <Image width="150" height="150"
              src="/images/shape/238.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/* <!-- /.wrapper --> */}
        </div>
        {/* <!-- /.fancy-feature-thirty --> */}

        {/* =====================================================
            Client Feedback Slider Six
        ===================================================== */}
        <div id="contact" className="mb-150"></div>
        <div className="client-feedback-slider-six mt-150 md-mt-100" id="feedback">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 m-auto">
                <div className="title-style-thirteen text-center mb-80 md-mb-60">
                  <div className="upper-title">Let's Connect</div>
                  <h2>Get in Touch</h2>
                  <p className="mt-3 text-muted">I'll get back to you within 24-48 hours</p>
                </div>
                
                <form action={`https://formsubmit.co/157a36ab13fa075be65ae5a74974b588`} method="POST" className="theme-form-style-three">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-4">
                        <label htmlFor="name" className="mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          placeholder="Your name"
                          className="form-control rounded-lg" 
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-4">
                        <label htmlFor="email" className="mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          placeholder="email@example.com"
                          className="form-control rounded-lg"
                          required 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="message" className="mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      className="form-control rounded-lg"
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  {/* Hidden honeypot field to prevent spam */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  
                  {/* Disable captcha */}
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="text-center">
                    <button type="submit" className="theme-btn-twelve hover-transform">
                      Send Message
                      <i className="fas fa-paper-plane ms-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <CallToActionSeven />
        {/* End call to acion seven */}

        {/* =====================================================
        Footer Style Seven
        ===================================================== */}
      </Scrollspy>
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
}

