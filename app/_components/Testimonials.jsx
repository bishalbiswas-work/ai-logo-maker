import Image from "next/image";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
    const testimonials = [
        {
            title: "Branding Game-Changer",
            date: "Jan 4, 2023",
            description:
                "With competition growing, a strong brand identity is a must. This AI Logo Maker makes designing a professional logo easy and fast—it’s like having a branding expert at your fingertips!",
            author: "David Pogue",
            rating: 5,
        },
        {
            title: "Effortless Logo Creation",
            date: "Feb 10, 2023",
            description:
                "This tool simplifies logo design, saving time and effort while delivering top-tier results. A must-have for any business looking to stand out.",
            author: "Anna Smith",
            rating: 5,
        },
        {
            title: "Boost Your Brand Instantly",
            date: "Mar 15, 2023",
            description:
                "Exceptional features that make logo design seamless, creative, and efficient. A total game-changer for businesses of all sizes.",
            author: "Michael Lee",
            rating: 5,
        },
    ];

    return (
        <section className="py-28 px-6">
            <div className="max-w-5xl mx-auto text-center">
                {/* Header Section */}
                <div className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
                    What People Are Saying
                </div>

                <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    Trusted By{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        Entrepreneurs
                    </span>{" "}
                    And
                    <br />
                    Leading{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        Global Brands
                    </span>
                </h2>
                <p className="mt-3 text-gray-600">
                    Join thousands of businesses using our AI Logo Maker to design professional logos effortlessly.
                </p>
            </div>

            {/* Marquee for Infinite Scrolling Testimonials with Padding */}
            <div className="mt-12 px-6 py-8">
                <Marquee speed={40} gradient={false} pauseOnHover>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 h-[300px] w-[350px] flex flex-col mx-5 mb-6"
                        >
                            {/* Title and Date */}
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {testimonial.title}
                                </h3>
                                <span className="text-sm text-gray-400">{testimonial.date}</span>
                            </div>

                            {/* Description */}
                            <p className="mt-3 text-gray-600 flex-grow">{testimonial.description}</p>

                            {/* Author & Rating - Stuck to Bottom */}
                            <div className="mt-auto flex items-center justify-between pt-5">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-gray-900">
                                        {testimonial.author}
                                    </span>
                                </div>

                                {/* Star Rating */}
                                <div className="flex">
                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                        <span key={starIndex}>
                                            {starIndex < testimonial.rating ? (
                                                <span className="text-yellow-400 text-lg">★</span>
                                            ) : (
                                                <span className="text-gray-300 text-lg">★</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Testimonials;
