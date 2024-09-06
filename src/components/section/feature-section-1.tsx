"use client";
import { motion, useInView } from "framer-motion";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import {
  IconRocket,
  IconBulb,
  IconZoomCheck,
  IconBuildingBridge,
} from "@tabler/icons-react";
import { useRef } from "react";

const featureContent = [
  {
    icon: <IconBuildingBridge className="w-8 h-8" />,
    title: "Bridge Design & Reality",
    description:
      "Seamlessly compare Figma designs with live websites for pixel-perfect implementation.",
  },
  {
    icon: <IconRocket className="w-8 h-8" />,
    title: "Streamline Workflow",
    description:
      "Automate UI/UX tests and audits to accelerate your development process.",
  },
  {
    icon: <IconBulb className="w-8 h-8" />,
    title: "AI-Powered Insights",
    description:
      "Get instant, actionable insights to improve your designs and user experience.",
  },
  {
    icon: <IconZoomCheck className="w-8 h-8" />,
    title: "Effortless Comparison",
    description:
      "Easily spot discrepancies between designs and live sites with visual diff tools.",
  },
];

export default function FeatureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <MaxWidthWrapper>
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Bridging the Gap Between{" "}
            <span className="text-primary">Design & Reality</span>
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
          >
            Effortlessly compare designs, run tests, and get AI-powered insights
            to perfect your UI/UX.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            {featureContent.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </MaxWidthWrapper>
  );
}

function FeatureCard({ icon, title, description, index, inView }: any) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.4 + index * 0.1,
        }}
        className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full inline-block mb-6"
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
