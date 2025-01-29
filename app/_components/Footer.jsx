import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container px-6 py-12 mx-auto">
                {/* Newsletter Section */}
                <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                    <h1 className="text-xl font-semibold tracking-tight md:mx-3 xl:text-2xl">
                        Subscribe to our newsletter to get updates.
                    </h1>

                    <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">

                        <Link
                            href="#"
                            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-lg gap-x-3 hover:opacity-90 transition duration-300"
                        >
                            <span>Sign Up Now</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>

                <hr className="my-6 border-gray-700 md:my-10" />

                {/* Footer Links */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Quick Links */}
                    <div>
                        <p className="font-semibold text-white">Quick Links</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link href="#" className="footer-link">Home</Link>
                            <Link href="#" className="footer-link">Who We Are</Link>
                            <Link href="#" className="footer-link">Our Philosophy</Link>
                        </div>
                    </div>

                    {/* Industries */}
                    <div>
                        <p className="font-semibold text-white">Industries</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link href="#" className="footer-link">Retail & E-Commerce</Link>
                            <Link href="#" className="footer-link">Information Technology</Link>
                            <Link href="#" className="footer-link">Finance & Insurance</Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <p className="font-semibold text-white">Services</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link href="#" className="footer-link">Translation</Link>
                            <Link href="#" className="footer-link">Proofreading & Editing</Link>
                            <Link href="#" className="footer-link">Content Creation</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="font-semibold text-white">Contact Us</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link href="#" className="footer-link">+880 768 473 4978</Link>
                            <Link href="#" className="footer-link">info@logoiprum.com</Link>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-700 md:my-10" />

                {/* Footer Bottom */}
                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <Link href="#">
                        <div className="px-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                            Logoipsum
                        </div>
                    </Link>
                    <p className="mt-4 text-sm text-gray-400 sm:mt-0">
                        © Copyright 2021. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
