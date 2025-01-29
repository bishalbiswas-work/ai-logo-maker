import Image from "next/image";

const BrandIdentitySection = () => {
    return (
        <section className="relative bg-[url('/background-pattern.svg')] bg-cover bg-center bg-no-repeat py-24 px-6">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center pb-4">
                    <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900">
                        Strengthen and Elevate        {" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                            Your Brand
                        </span>
                        {" "}<br /> with a Stunning Logo!
                    </h2>
                </div>

                {/* Section 1 */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Floating Images */}
                    <div className="relative md:w-1/2 flex justify-center">
                        <div className="absolute top-[-20px] left-[-30px] rounded-lg">
                            <Image src="/assets/logo/logo-1-1.png" alt="Logo Design 1" width={180} height={120} />
                        </div>
                        <div className="relative rounded-lg">
                            <Image src="/assets/logo/logo-1-2.png" alt="Main Logo" width={250} height={250} />
                        </div>
                        <div className="absolute bottom-[-30px] right-[-0px]  rounded-full">
                            <Image src="/assets/logo/logo-1-3.png" alt="Logo Design 3" width={150} height={150} />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6 border-l-4 border-gradient pl-6">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Reinforce your brand identity
                        </h2>
                        <p className="text-gray-600">
                            Just as people have identities, so do brands. That is what sets them apart from rivals
                            and emphasizes their uniqueness. You can solidify your brand identity in the minds of
                            customers by creating a professional logo.
                        </p>
                        <button className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-lg hover:opacity-90 transition duration-300">
                            Create your logo
                        </button>
                    </div>
                </div>
                <div className="py-1"></div>
                {/* Section 2 (Reversed Layout) */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                    {/* Floating Images */}
                    <div className="relative md:w-1/2 flex justify-center">
                        <div className="absolute top-[-20px] right-[-10px] rounded-lg">
                            <Image src="/assets/logo/logo-2-1.png" alt="Logo Design 4" width={180} height={120} />
                        </div>
                        <div className="relative rounded-lg">
                            <Image src="/assets/logo/logo-2-2.png" alt="Main Logo" width={250} height={250} />
                        </div>
                        <div className="absolute bottom-[-30px] left-[-10px] rounded-lg">
                            <Image src="/assets/logo/logo-2-3.png" alt="Logo Design 6" width={150} height={150} />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6 border-l-4 border-gradient pl-6">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Make your brand recognizable
                        </h2>
                        <p className="text-gray-600">
                            You can have great products or services in the market. But if your customers cannot
                            memorize your brand, they might not buy from you again. Raising brand awareness is key.
                        </p>
                        <button className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-lg hover:opacity-90 transition duration-300">
                            Create your logo
                        </button>
                    </div>
                </div>
                <div className="py-1"></div>
                {/* Section 3 - Stand Out from the Competition */}
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Floating Images */}
                    <div className="relative md:w-1/2 flex justify-center">
                        {/* Back Layer Image */}
                        <div className="absolute top-[-20px] left-[-0px] rounded-lg scale-95">
                            <Image src="/assets/logo/logo-3-1.png" alt="Logo 13" width={150} height={100} />
                        </div>
                        {/* Main Logo */}
                        <div className="relative rounded-lg z-10">
                            <Image src="/assets/logo/logo-3-2.png" alt="Main Logo" width={220} height={220} />
                        </div>
                        {/* Front Layer Image (Overlapping) */}
                        <div className="absolute bottom-[-40px] right-[-10px] rounded-lg scale-90">
                            <Image src="/assets/logo/logo-3-3.png" alt="Logo 15" width={180} height={120} />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6 border-l-[4px] border-gradient pl-6">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Make a solid first impression
                        </h2>
                        <p className="text-gray-600">
                            First impressions can make or break a deal. Make sure people’s first encounters
                            with your brand are positive, and half of your job is done. Wondering how to
                            leave a favorable impression? Your logo is part of the answer.
                        </p>
                        <p className="text-gray-600">
                            A great logo sparks customer interest and invites engagement.
                        </p>
                        <button className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-lg hover:opacity-90 transition duration-300">
                            Create your logo
                        </button>
                    </div>

                </div>
                <div className="py-1"></div>


                {/* Section 4 - Build Customer Trust */}
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6 border-l-[4px] border-gradient pl-6">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Stand out from the competition
                        </h2>
                        <p className="text-gray-600">
                            A professionally designed logo differentiates you from competitors. It highlights
                            your unique approach to solving customers’ needs. A logo should instantly show
                            what makes your brand special.
                        </p>
                        <p className="text-gray-600">
                            Use unique styles, colors, and fonts to create a strong brand identity.
                        </p>
                        <button className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-lg hover:opacity-90 transition duration-300">
                            Create your logo
                        </button>
                    </div>

                    {/* Floating Images */}
                    <div className="relative md:w-1/2 flex justify-center">
                        <div className="absolute top-[-40px] left-[-20px] rounded-lg scale-90">
                            <Image src="/assets/logo/logo-4-1.png" alt="Logo 7" width={180} height={120} />
                        </div>
                        <div className="relative rounded-lg z-10">
                            <Image src="/assets/logo/logo-4-2.png" alt="Main Logo" width={220} height={220} />
                        </div>
                        <div className="absolute bottom-[-40px] right-[-0px] rounded-lg scale-90">
                            <Image src="/assets/logo/logo-4-3.png" alt="Logo 9" width={150} height={150} />
                        </div>
                    </div>
                </div>
                <div className="py-2"></div>

                {/* Section 5 - Build Customer Trust */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">

                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6 border-l-[4px] border-gradient pl-6">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Build customer trust
                        </h2>
                        <p className="text-gray-600">
                            A well-designed logo shows that you take your brand seriously. It plays a crucial
                            role in earning customer trust before they even interact with your products.
                        </p>
                        <p className="text-gray-600">
                            For small businesses, a professional logo is a cost-effective way to boost brand
                            credibility.
                        </p>
                        <button className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-lg hover:opacity-90 transition duration-300">
                            Create your logo
                        </button>
                    </div>

                    {/* Floating Images */}
                    <div className="relative md:w-1/2 flex justify-center">
                        <div className="absolute top-[-40px] right-[-10px] rounded-lg scale-90">
                            <Image src="/assets/logo/logo-5-1.png" alt="Logo 10" width={200} height={140} />
                        </div>
                        <div className="relative rounded-lg z-10">
                            <Image src="/assets/logo/logo-5-2.png" alt="Main Logo" width={250} height={250} />
                        </div>
                        <div className="absolute bottom-[-20px] left-[-0px] rounded-lg scale-90">
                            <Image src="/assets/logo/logo-5-3.png" alt="Logo 12" width={180} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandIdentitySection;
