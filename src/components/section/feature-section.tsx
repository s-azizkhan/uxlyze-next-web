"use client";
import { SparklesIcon } from "hugeicons-react";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconRobot,
  IconBrain,
  IconChartInfographic,
  IconDeviceAnalytics,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const featureSectionContent = {
  features: [
    {
      title: "AI-Powered Menu",
      description:
        "Generate a menu for your restaurant with AI by just uploading a picture of your menu.",
      href: "/features/ai-menu",
      icon: <IconRobot />,
    },
    {
      title: "Smart User Interface",
      description:
        "Enhance customer experience with our AI-driven, adaptive menu design that learns from user interactions.",
      href: "/features/smart-user-interface",
      icon: <IconEaseInOut />,
    },
    {
      title: "Dynamic Pricing",
      description:
        "Utilize AI algorithms to optimize pricing strategies based on demand, inventory, and market trends.",
      href: "/features/dynamic-pricing",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "AI-Enhanced Performance",
      description:
        "Ensure smooth operations with our AI-powered platform that predicts and prevents potential issues.",
      href: "/features/ai-enhanced-performance",
      icon: <IconCloud />,
    },
    {
      title: "Intelligent Multi-Location Management",
      description:
        "Leverage AI to effortlessly manage multiple restaurant locations with automated insights and decision support.",
      href: "#",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "AI-Assisted Customer Support",
      description:
        "Get intelligent assistance with our AI-powered support system that learns and improves over time.",
      href: "#",
      icon: <IconHelp />,
    },
    {
      title: "AI-Driven Customization",
      description:
        "Tailor your digital menu using AI that adapts to your restaurant's unique style and customer preferences.",
      href: "#",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Continuous AI Learning",
      description:
        "Benefit from an AI system that continuously learns and evolves, keeping your menu system at the cutting edge.",
      href: "#",
      icon: <IconBrain />,
    },
    {
      title: "Predictive Analytics",
      description:
        "Harness the power of AI to forecast trends, optimize inventory, and make data-driven decisions.",
      href: "#",
      icon: <IconChartInfographic />,
    },
    {
      title: "AI-Powered Insights",
      description:
        "Gain deep insights into your operations with AI-driven analytics and visualizations.",
      href: "#",
      icon: <IconDeviceAnalytics />,
    },
  ],
  heading: {
    badge: "AI-Powered Features",
    title: "The Future of Hospitality is Here",
    subtitle: "with Advanced AI",
  },
  description:
    "Discover how our AI-powered management system can transform your business. Enjoy enhanced efficiency, improved customer satisfaction, and unparalleled insights into your operations, all driven by cutting-edge artificial intelligence.",
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 mx-auto"
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn(
          "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 4 || index === 8) &&
            "lg:border-l dark:border-neutral-800",
          index < 8 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {index < 8 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        {index >= 8 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#8730DA] transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
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
        className="py-14"
        id="feature-section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center lg:mb-5"
          >
            <span className="py-1.5 px-5 bg-indigo-100 dark:bg-indigo-900 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-300 text-center inline-block mb-4 transition-all duration-300 hover:bg-indigo-200 dark:hover:bg-indigo-800">
              {featureSectionContent.heading.badge}
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6 sm:mb-8">
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
                <SparklesIcon className="size-6 sm:size-7 ml-2 text-purple-600 animate-pulse" />
              </motion.span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
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
