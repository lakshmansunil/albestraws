import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const partners = [
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Peddle Digitals", logo: "https://peddledigitals.com/assets_web/assets/images/logo2.png" },
  { name: "Main Tech", logo: "https://maintech.com/wp-content/uploads/2024/08/Maintech-Remade-logo.webp" },
  { name: "Collabera", logo: "https://logos-download.com/wp-content/uploads/2020/06/Collabera_Logo.png" },
  { name: "HCL", logo: "https://1000logos.net/wp-content/uploads/2023/03/HCL-logo.png" },
  // { name: "PMO Desk", logo: "http://pmodesk.com/assest/images/logo.png" },
  { name: "Phase Zero", logo: "https://cdn.prod.website-files.com/64b71a2082e0c534d8ada255/64b80f0e1bdd403bc5baf5a0_PZ_VECTOR.svg" }
];

const Partners = () => {
  return (
    <div className="bg-gray-100 py-12" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8" data-aos="fade-down">Our Partners</h2>
        <div className="flex flex-nowrap overflow-x-auto pb-4 gap-8 justify-center items-center px-4">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0" data-aos="zoom-in">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-40 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
