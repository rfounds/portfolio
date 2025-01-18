import React from "react";
import Image from "next/image";
const featuresContent = [
  {
    bgColor: "#F7EDFF",
    icon: "166",
    title: "Custom Development",
    descriptions:
      "I design and build websites from the ground up, ensuring they align perfectly with your brand and business goals. Your site will be unique, professional, and tailored to your audience.",
    link: "#",
    dealyAnimation: "",
  },
  {
    bgColor: "#D8FFF1",
    icon: "167",
    title: "E-Commerce",
    descriptions:
      "Whether you’re launching a new online store or upgrading your existing one, I’ll create a seamless shopping experience with secure payment systems and easy-to-manage tools.",
    link: "#",
    dealyAnimation: "100",
  },
  {
    bgColor: "#FFF4F2",
    icon: "186",
    title: "SEO Optimization",
    descriptions:
      "I build websites with search engine optimization in mind, helping your business rank higher on Google and attract more organic traffic.",
    link: "#",
    dealyAnimation: "",
  },
  {
    bgColor: "#FFEBDB",
    icon: "169",
    title: "Continued Maintenance",
    descriptions:
      "Keep your website running smoothly and securely with regular updates, backups, and troubleshooting support.",
    link: "#",
    dealyAnimation: "100",
  },
];

const FancyFeatureThirtyTwo = () => {
  return (
    <div className="row">
      {featuresContent.map((item, i) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.dealyAnimation}
          key={i}
        >
          <div className="block-style-thirtyTwo d-flex">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: item.bgColor }}
            >
              <Image width={24} height={24} style={{objectFit:'contain'}}      src={`/images/icon/${item.icon}.svg`} alt="icon" />
            </div>
            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyTwo;
