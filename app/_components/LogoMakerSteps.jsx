"use client";

import Image from "next/image";

const LogoMakerSteps = () => {
    return (
        <section className="relative bg-[url('/assets/dashed-line.png')] bg-cover bg-center bg-no-repeat py-28 px-6 text-center">
            {/* Overlay for better contrast */}
            {/* <div className="absolute inset-0 bg-white/80"></div> */}

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    How to  {" "}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        Make a Logo
                    </span>
                    {" "}in 3 Simple Steps
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Choose a template you like, customize it, and download your logo.
                    Create the perfect logo in a snap with the best free logo maker.
                </p>

                {/* Steps Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/assets/select.png"
                                alt="Template Icon"
                                width={120}
                                height={120}
                            />
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-gray-900">
                            Select a logo template
                        </h3>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/assets/customize.png"
                                alt="Customize Icon"
                                width={120}
                                height={120}
                            />
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-gray-900">
                            Customize the design
                        </h3>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/assets/download.png"
                                alt="Download Icon"
                                width={120}
                                height={120}
                            />
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-gray-900">
                            Download your logo
                        </h3>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default LogoMakerSteps;
