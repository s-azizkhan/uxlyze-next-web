"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import MaxWidthWrapper from "../shared/max-width-wrapper";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { APP_NAME } from "@/config/app.config";
import TitleTopBadge from "../shared/title-top-badge";

const defaultFaqSectionContent = {
  faqs: [
    {
      question: `What is ${APP_NAME}?`,
      answer: `${APP_NAME} is an AI-powered platform that automates UI/UX evaluation and design comparison between Figma files and live websites. It streamlines the design process, enhances collaboration, and provides actionable insights for designers and developers.`,
    },
    {
      question: `How does ${APP_NAME} compare Figma designs to live websites?`,
      answer: `${APP_NAME} uses advanced AI algorithms to analyze both your Figma designs and live websites. It compares elements such as layout, color schemes, typography, and interactive components, providing a detailed report of similarities, differences, and potential improvements.`,
    },
    {
      question: `Can ${APP_NAME} integrate with my existing workflow?`,
      answer: `Absolutely! ${APP_NAME} offers easy integration options, including a Figma plugin and API access. This allows you to seamlessly incorporate our platform into your current design and development processes without disrupting your workflow.`,
    },
    {
      question: `What kind of customization options does ${APP_NAME} offer?`,
      answer: `${APP_NAME} provides extensive customization options. You can tailor analysis parameters, create custom report templates, and set specific evaluation criteria based on your project requirements. This flexibility ensures that ${APP_NAME} adapts to your unique needs and design standards.`,
    },
    {
      question: `How does ${APP_NAME} help improve my design process?`,
      answer: `${APP_NAME} accelerates your design process by automating comparisons, providing instant feedback, and highlighting areas for improvement. This leads to faster iterations, better consistency between designs and implementations, and ultimately, a superior user experience for your products.`,
    },
    {
      question: `Is ${APP_NAME} suitable for both small teams and large enterprises?`,
      answer: `Yes, ${APP_NAME} is designed to scale with your needs. Whether you're a small startup or a large enterprise, our platform offers plans and features that cater to teams of all sizes. From individual designers to large, distributed teams, ${APP_NAME} enhances collaboration and efficiency.`,
    },
  ],
  title: "Frequently Asked Questions",
  description: `Discover how ${APP_NAME} can revolutionize your UI/UX workflow with automated design evaluation and comparison. Get answers to common questions about our platform's features, integration, and benefits.`,
};

export default function FaqSection({
  faqSectionContent = defaultFaqSectionContent,
}: {
  faqSectionContent?: typeof defaultFaqSectionContent;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <MaxWidthWrapper>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <TitleTopBadge title="FAQ" />
            <h2 className="text-pretty text-4xl font-bold lg:text-6xl mb-4">
              {faqSectionContent.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {faqSectionContent.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {faqSectionContent.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-indigo-100 dark:border-indigo-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    <AccordionTrigger className="hover:bg-indigo-50 dark:hover:bg-indigo-900/50 px-6 py-4 text-left">
                      <div className="flex items-center">
                        <QuestionMarkCircledIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0" />
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-white dark:bg-gray-800">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </MaxWidthWrapper>
  );
}
