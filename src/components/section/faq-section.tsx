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

const defaultFaqSectionContent = {
  faqs: [
    {
      question: `What is ${APP_NAME}?`,
      answer: `${APP_NAME} is an AI-powered restaurant management system that streamlines menu creation, order processing, and customer feedback analysis.`,
    },
    {
      question: `How does ${APP_NAME} benefit my restaurant?`,
      answer: `${APP_NAME} enhances operational efficiency, improves customer satisfaction, and provides data-driven insights to optimize your menu and service.`,
    },
    {
      question: `Is ${APP_NAME} suitable for all types of restaurants, bars, and cafes?`,
      answer: `Yes, ${APP_NAME} is designed to cater to various restaurant sizes and types, from small cafes to large multi-location chains.`,
    },
    {
      question: `How easy is it to implement ${APP_NAME} in my restaurant?`,
      answer: `${APP_NAME} offers a user-friendly setup process with dedicated support to ensure a smooth integration into your existing operations.`,
    },
  ],
  title: "Frequently Asked Questions",
  description: `Get quick answers to common questions about ${APP_NAME} and discover how it can revolutionize your restaurant operations.`,
};

export default function FaqSection({
  faqSectionContent = defaultFaqSectionContent,
}: {
  faqSectionContent?: typeof defaultFaqSectionContent;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <MaxWidthWrapper>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="py-24"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <span className="py-1.5 px-5 bg-indigo-100 dark:bg-indigo-900 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-300 inline-block mb-4 transition-all duration-300 hover:bg-indigo-200 dark:hover:bg-indigo-800 shadow-sm">
              FAQ
            </span>
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
