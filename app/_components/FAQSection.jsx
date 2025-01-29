"use client";

import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = () => {
    const faqs = [
        {
            question: "How do you create a logo with Logoiprum?",
            answer:
                "1. Start by selecting a logo template from the wide range of options available.\n\n2. After selecting your template, customize the design by adjusting the colors, fonts, layout, and icons to suit your brand’s identity.\n\n3. Once you are satisfied with the look of your logo, you can download the final version in the desired quality.",
        },
        {
            question: "Is the Logo Maker an online tool or a software program?",
            answer:
                "Renderforest's Logo Maker is an online tool, which means you can create and edit logos directly from your web browser without installing any software.",
        },
        {
            question: "Is Logoiprum Logo Maker free to use?",
            answer:
                "Yes, you can create and edit logos for free. However, some premium features and higher resolution downloads may require a paid plan.",
        },
    ];

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Left Side Title - Always Centered */}
                <div className="md:w-1/2 flex justify-center items-center text-center">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight ">
                            Got Questions? <br /> We’ve Got <br /> Answers!
                        </h2>
                    </div>
                </div>

                {/* Right Side - FAQ Section Using MUI Accordion */}
                <div className="md:w-1/2 space-y-4">
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                            className="shadow-none "
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="text-lg font-semibold text-gray-900"
                            >
                                {faq.question}
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="text-gray-600 whitespace-pre-line">
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
