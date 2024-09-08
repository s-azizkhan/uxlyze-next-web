"use client";
import { SparklesIcon } from "hugeicons-react";
import {
  IconAdjustmentsBolt,
  IconEye,
  IconPuzzle,
  IconBrandFigma,
  IconRobot,
  IconBrain,
  IconEaseInOut,
  IconDeviceAnalytics,
  IconRocket,
  IconBulb,
  IconZoomCheck,
  IconBuildingBridge,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import TitleTopBadge from "../shared/title-top-badge";

const featureContent = [
  {
    icon: <IconBuildingBridge className="w-8 h-8 text-blue-500" />,
    title: "Bridge Design & Reality",
    description:
      "Seamlessly compare Figma designs with live websites for pixel-perfect implementation.",
  },
  {
    icon: <IconRocket className="w-8 h-8 text-red-500" />,
    title: "Streamline Workflow",
    description:
      "Automate UI/UX tests and audits to accelerate your development process.",
  },
  {
    icon: <IconBulb className="w-8 h-8 text-yellow-500" />,
    title: "AI-Powered Insights",
    description:
      "Get instant, actionable insights to improve your designs and user experience.",
  },
  {
    icon: <IconZoomCheck className="w-8 h-8 text-green-500" />,
    title: "Effortless Comparison",
    description:
      "Easily spot discrepancies between designs and live sites with visual diff tools.",
  },
];
const featureSectionContent = {
  features: featureContent,
  heading: {
    badge: "Next-Gen Features",
    title: "AI-Powered Design Tools",
    subtitle: "Enhance Your Workflow",
  },
  description:
    "Our AI-powered platform simplifies UI/UX evaluation. Compare designs, get instant insights, and streamline your workflow to deliver better user experiences.",
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10 py-16"
    >
      {featureSectionContent.features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </motion.div>
  );
};

const Feature = ({
  title,
  description,
  href,
  icon,
  index,
}: {
  title: string;
  description: string;
  href?: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <Link href={href || "#"}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          scale: 1.05,
          rotate: [0, 1, -1, 0],
          transition: { duration: 0.3 },
        }}
        className={cn(
          "flex flex-col p-6 rounded-xl bg-white/10 dark:bg-neutral-800/10 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer",
          "transform hover:-translate-y-2 hover:bg-white/20 dark:hover:bg-neutral-800/20 border border-black/15 dark:border-white/15"
        )}
      >
        <motion.div
          className="mb-4 text-primary dark:text-primary-light transition-colors duration-300 group-hover:text-secondary"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {icon}
        </motion.div>
        <motion.h3
          className="text-2xl font-bold mb-2 text-black dark:text-white group-hover:text-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-lg text-gray-900 dark:text-gray-50 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-4 flex items-center text-primary dark:text-primary-light text-opacity-80 group-hover:text-opacity-100 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          <span className="text-sm font-semibold">Explore</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <IconRocket className="w-4 h-4 ml-2" />
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default function FeatureSection() {
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
        id="feature-section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-3"
          >
            <TitleTopBadge title={featureSectionContent.heading.badge} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block mb-2"
              >
                {featureSectionContent.heading.title}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-flex items-center flex-wrap justify-center"
              >
                {featureSectionContent.heading.subtitle}
                <SparklesIcon className="w-10 h-10 ml-2 text-secondary animate-pulse" />
              </motion.span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              {featureSectionContent.description}
            </motion.p>
          </motion.div>
          <Features />
        </div>
      </motion.section>
    </MaxWidthWrapper>
  );
}
