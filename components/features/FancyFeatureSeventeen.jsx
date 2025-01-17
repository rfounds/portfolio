import React from "react";
import Image from "next/image";
const FeaturesContent = [
  {
    img: "94",
    title: "Responsive Design",
    desc: `Every website I create is optimized for all devices—from desktops to smartphones. Your site 
            will look great and perform seamlessly everywhere.`,
  },
  {
    img: "97",
    title: "Speedy Delivery",
    desc: `I understand the importance of timely delivery. I work efficiently to ensure your website is completed within your desired timeframe without compromising quality.

`,
  },
  {
    img: "98",
    title: "For Small Businesses",
    desc: `I understand the unique needs of small businesses. I build websites that not only look professional but also drive results, helping you reach your audience and grow your brand.`,
  },
];
const FancyFeatureSeventeen = () => {
  return (
    <>
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="block-meta">
            <div className="icon d-flex align-items-end">
              <Image width={28} height={28} src={`/images/icon/${val.img}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.desc}</p>
          </div>
        </div>
        // .block-meta
      ))}
    </>
  );
};

export default FancyFeatureSeventeen;
