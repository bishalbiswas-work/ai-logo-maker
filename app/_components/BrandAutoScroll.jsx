"use client";

import Marquee from "react-fast-marquee";

const logos = [
    { src: "/assets/logo/logo-1-1.png", alt: "Airtable" },
    { src: "/assets/logo/logo-1-2.png", alt: "Airtable" },
    { src: "/assets/logo/logo-1-3.png", alt: "Airtable" },
    { src: "/assets/logo/logo-2-1.png", alt: "Airtable" },
    { src: "/assets/logo/logo-2-2.png", alt: "Airtable" },
    { src: "/assets/logo/logo-2-3.png", alt: "Airtable" },
    { src: "/assets/logo/logo-3-1.png", alt: "Airtable" },
    { src: "/assets/logo/logo-3-2.png", alt: "Airtable" },
    { src: "/assets/logo/logo-3-3.png", alt: "Airtable" },
    { src: "/assets/logo/logo-4-1.png", alt: "Airtable" },
    { src: "/assets/logo/logo-4-2.png", alt: "Airtable" },
    { src: "/assets/logo/logo-4-3.png", alt: "Airtable" },
    { src: "/assets/logo/logo-5-1.png", alt: "Airtable" },
    { src: "/assets/logo/logo-5-2.png", alt: "Airtable" },
    { src: "/assets/logo/logo-5-3.png", alt: "Airtable" },


];

export default function AutoScroll() {
    return (
        <div className="flex items-center w-full bg-white py-4 px-8 ">

            {/* Static Left Section */}
            {/* <div className="bg-orange-100 flex items-center whitespace-nowrap text-gray-600 text-sm rounded-lg font-medium px-4">
                <span>Trusted by Over</span>
                <span className="bg-orange-500 text-white text-sm px-2 py-1 mx-2 rounded-lg font-bold">
                    100+
                </span>
                <span>companies</span>
            </div> */}

            {/* Infinite Scrolling Logos */}
            <div className="w-full overflow-hidden">
                <Marquee speed={50} gradient={false} pauseOnHover>
                    {logos.map((logo, index) => (
                        <img key={index} src={logo.src} alt={logo.alt} className="h-28 w-auto mx-8" />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
