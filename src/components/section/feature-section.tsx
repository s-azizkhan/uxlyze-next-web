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
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import TitleTopBadge from "../shared/title-top-badge";

const featureSectionContent = {
  features: [
    {
      title: "AI-Powered Insights",
      description:
        "Harness cutting-edge AI to instantly analyze UI/UX elements and generate actionable insights.",
      href: "/features/ai-analysis",
      icon: <IconRobot className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Seamless Figma Sync",
      description:
        "Effortlessly compare Figma designs with live websites for pixel-perfect implementation.",
      href: "/features/figma-integration",
      icon: <IconBrandFigma className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Real-time Visual Diff",
      description:
        "See design discrepancies in real-time for lightning-fast iterations and improvements.",
      href: "/features/real-time-comparison",
      icon: <IconEye className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Tailored Reports",
      description:
        "Generate custom reports focused on the metrics that matter most to your project's success.",
      href: "/features/customizable-reports",
      icon: <IconAdjustmentsBolt className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Frictionless Integration",
      description:
        "Integrate seamlessly into your workflow with our intuitive API and robust documentation.",
      href: "/features/easy-integration",
      icon: <IconPuzzle className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Adaptive AI Learning",
      description:
        "Our AI evolves with your design patterns, delivering increasingly precise feedback over time.",
      href: "/features/adaptive-analysis",
      icon: <IconBrain className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "Accessibility Guardian",
      description:
        "Ensure inclusive design with automated WCAG compliance checks and recommendations.",
      href: "/features/accessibility-checker",
      icon: <IconEaseInOut className="w-8 h-8 text-teal-500" />,
    },
    {
      title: "Trend Forecasting",
      description:
        "Stay ahead with AI-driven insights into emerging UI/UX trends and industry best practices.",
      href: "/features/trend-analysis",
      icon: <IconDeviceAnalytics className="w-8 h-8 text-pink-500" />,
    },
  ],
  heading: {
    badge: "Next-Gen UX Analysis",
    title: "Supercharge Your Design Workflow",
    subtitle: "with AI-Powered Precision",
  },
  description:
    "Experience the future of UI/UX evaluation. Our AI-driven platform automates design comparisons, delivers instant insights, and streamlines your entire workflow. Elevate your design process and consistently deliver exceptional user experiences.",
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 py-16"
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
          className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-800 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
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
  const isInView = useInView(ref, { once: false });

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
              className="text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
