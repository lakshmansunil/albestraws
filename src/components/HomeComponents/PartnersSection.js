import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const partners = [
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png" },
  { name: "Alchemy", logo: "https://alchemytechsol.com/eng/etc/designs/epam-core/images/common/logo.png" },
  { name: "Collabera", logo: "https://logos-download.com/wp-content/uploads/2020/06/Collabera_Logo.png" },
  { name: "HCL", logo: "https://1000logos.net/wp-content/uploads/2023/03/HCL-logo.png" },
  { name: "Tech Mahindra", logo: "https://cdn.freelogovectors.net/wp-content/uploads/2018/06/Tech-Mahindra-Logo.png" }
];

const Partners = () => {
  return (
    <div className="bg-gray-100 py-12" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6" data-aos="fade-down">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center" data-aos="zoom-in">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto mb-2 object-contain"
              />
              {/* <p className="text-lg font-medium">{partner.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;