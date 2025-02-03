import React from "react";
import FooterSeven from "@/components/footer/FooterSeven";
import HeaderLandingWebsiteBuilder from "@/components/header/landing/HeaderLandingWebsiteBuilder";
import CopyRightThree from "@/components/footer/CopyRightThree";

export const metadata = {
  title: 'Privacy Policy || Your Site Name',
  description: 'Privacy Policy page describing how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <HeaderLandingWebsiteBuilder />

      <div className="fancy-feature-twentyOne position-relative bg-white">
        <div style={{ paddingTop: '120px' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 m-auto">
                <div className="title-style-thirteen text-center mb-45">
                  <h2 className="font-gilroy-bold color-dark">Privacy Policy</h2>
                  <p className="text-dark mt-3">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="privacy-content color-dark">
                  <div className="mb-5">
                    <h3 className="font-gilroy-bold color-dark mb-3">1. Information We Collect</h3>
                    <p>We collect information you provide directly to us, including when you create an account, make a purchase, or contact us for support. This may include:</p>
                    <ul className="list-style-none pl-0">
                      <li className="mb-2 d-flex align-items-center">
                        <span className="dot-style mr-2"></span>
                        <span>Name and contact information</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="dot-style mr-2"></span>
                        <span>Account credentials</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="dot-style mr-2"></span>
                        <span>Payment information</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="dot-style mr-2"></span>
                        <span>Communication preferences</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-gilroy-bold color-dark mb-3">2. How We Use Your Information</h3>
                    <p>We use the collected information for various purposes:</p>
                    <ul className="list-style-none pl-0">
                      <li className="mb-2 d-flex align-items-center">
                        <span className="dot-style mr-2"></span>
                        <span>Provide, maintain, and improve our services</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="dot-style mr-2"></span>
                        <span>Process transactions and send related information</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="dot-style mr-2"></span>
                        <span>Send technical notices and support messages</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="dot-style mr-2"></span>
                        <span>Respond to your comments and questions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-gilroy-bold color-dark mb-3">3. Data Protection</h3>
                    <p>We implement appropriate technical and organizational measures to maintain the security of your personal information, including:</p>
                    <ul className="list-style-none pl-0">
                      <li className="mb-2 d-flex align-items-center">
                        <span className="dot-style mr-2"></span>
                        <span>Encryption of data in transit and at rest</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="dot-style mr-2"></span>
                        <span>Regular security assessments</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="dot-style mr-2"></span>
                        <span>Access controls and authentication measures</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-gilroy-bold color-dark mb-3">4. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                    <div className="contact-info mt-4">
                      <p className="mb-2">Email: privacy@yourcompany.com</p>
                      <p className="mb-2">Phone: (555) 123-4567</p>
                      <p>Address: Your Company Address</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="theme-footer-seven mt-130 md-mt-100">
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
      </footer>
    </div>
  );
} 