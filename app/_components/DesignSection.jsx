import Image from "next/image";

const DesignSection = () => {
    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                    Discover more for design.
                </h2>

                {/* Content Card */}
                <div className="mt-8 flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <Image
                            src="/assets/girl.webp" // Replace with actual image URL
                            alt="Design Illustration"
                            width={500}
                            height={350}
                            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2 p-6 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Take your designs to the next level.
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Create gorgeous vector graphics for everything from book
                            illustrations to typography to product packaging with Adobe
                            Illustrator.
                        </p>

                        {/* CTA Button */}
                        <button className="mt-5 px-6 py-3 text-white font-semibold bg-black rounded-lg hover:bg-gray-800 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignSection;
