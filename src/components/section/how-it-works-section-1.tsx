"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import {
  IconUpload,
  IconBrush,
  IconRocket,
  IconAi,
  IconChartBar,
  IconDeviceLaptop,
  IconChartPie2,
  IconSparkles,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight01Icon,
  ChartBarLineIcon,
  FigmaIcon,
  MagicWand01Icon,
  Rocket01Icon,
  SparklesIcon,
} from "hugeicons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LightbulbIcon } from "lucide-react";
import { APP_NAME } from "@/config/app.config";
import TitleTopBadge from "../shared/title-top-badge";

const howItWorksContent = [
  {
    icon: <FigmaIcon className="w-8 h-8 text-blue-500" />,
    title: "Connect Figma",
    description:
      "Seamlessly integrate designs from Figma and sync with live/dev/staging URLs in real-time.",
    // href: "/how-it-works/connect-figma",
    image: "/images/connect-figma.png",
  },
  {
    icon: <IconSparkles className="w-8 h-8 text-purple-500" />,
    title: "AI Analysis",
    description:
      "Our advanced AI performs deep learning analysis on UI/UX elements, delivering instant insights.",
    // href: "/how-it-works/analysis",
    image: "/images/ai-analysis.webp",
  },
  {
    icon: <ChartBarLineIcon className="w-8 h-8 text-green-500" />,
    title: "Interactive Reports",
    description:
      "Explore dynamic, 3D visualizations of your design metrics and receive AI-powered recommendations.",
    // href: "/how-it-works/customize",
    image: "/images/detailed-reports.webp",
  },
  {
    icon: <IconDeviceLaptop className="w-8 h-8 text-orange-500" />,
    title: "Implement & Evolve",
    description:
      "Apply AI suggestions with one-click implementation and watch your designs evolve in real-time.",
    // href: "/how-it-works/implement",
    image: "/images/implement-iterate.png",
  },
];

const Steps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 py-4 mx-auto"
    >
      {howItWorksContent.map((step, index) => (
        <Step
          key={step.title}
          {...step}
          index={index}
          isHovered={hoveredIndex === index}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </motion.div>
  );
};

const Step = ({
  title,
  description,
  href,
  icon,
  index,
  image,
  isHovered,
  onHover,
  onLeave,
}: {
  title: string;
  description: string;
  href?: string;
  icon: React.ReactNode;
  index: number;
  image: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <Link href={href || "#"} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-col p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden border border-white/20"
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-0 left-0 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-tl-xl rounded-br-xl px-3 py-1 z-10">
          Step {index + 1}
        </div>
        <motion.div
          className="mb-4 text-4xl transition-all duration-300 group-hover:scale-110 mt-6 z-10"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 z-10">
          {title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 z-10">
          {description}
        </p>
        <div className="mt-auto flex items-center text-primary font-medium z-10">
          <span>Explore</span>
          <ArrowRight01Icon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0.1, scale: 1.1 }}
          animate={{
            opacity: isHovered ? 0.2 : 0.1,
            scale: isHovered ? 1 : 1.1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            className="filter backdrop-blur-sm w-full h-full"
            width={1000}
            height={1000}
          />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default function HowItWorksSection() {
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
        id="how-it-works-section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <TitleTopBadge title="Revolutionize Your Design Process" />
            <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-gray-900 dark:text-white mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block mb-2"
              >
                How It Works
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-flex items-center flex-wrap justify-center"
              >
                Next-Gen UI/UX Evaluation
                <SparklesIcon className="w-10 h-10 ml-2 text-purple-600 animate-pulse" />
              </motion.span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Revolutionize your design workflow with our AI-powered platform.
              Seamlessly compare Figma designs to live websites, gain real-time
              insights, and elevate your UI/UX in seconds.
            </motion.p>
          </motion.div>

          <Steps />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-14 text-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Ready to revolutionize your designs?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {
                  "Join the design revolution with thousands of forward-thinking creators using our AI-powered platform."
                }
              </p>
            </div>
            <Button>
              Launch Your Free 7-Day Trial
              <Rocket01Icon className="w-6 h-6 ml-2 animate-pulse" />
            </Button>
            <p className="mt-4 text-sm text-gray-400">
              No credit card required. Upgrade or cancel anytime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-20 relative overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src="https://illustrations.popsy.co/violet/engineer.svg"
              alt="Platform showcase"
              objectFit="cover"
              className="absolute inset-0 filter blur-sm w-full h-full"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-purple-600/80 backdrop-blur-sm"></div>
            <div className="relative z-10 p-8">
              <h3 className="text-3xl font-bold mb-6 text-white text-center">
                Why choose{" "}
                <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-600">
                  {APP_NAME}
                </span>
                ?
              </h3>
              <ul className="space-y-4 max-w-xl mx-auto">
                <li className="flex items-center bg-white/10 rounded-lg p-4 transition-all duration-300 hover:bg-white/20">
                  <IconChartPie2 className="w-8 h-8 mr-4 text-green-400" />
                  <span className="text-lg text-white">
                    Boost design efficiency by up to 200%
                  </span>
                </li>
                <li className="flex items-center bg-white/10 rounded-lg p-4 transition-all duration-300 hover:bg-white/20">
                  <LightbulbIcon className="w-8 h-8 mr-4 text-yellow-400" />
                  <span className="text-lg text-white">
                    Generate groundbreaking UI/UX concepts
                  </span>
                </li>
                <li className="flex items-center bg-white/10 rounded-lg p-4 transition-all duration-300 hover:bg-white/20">
                  <IconAi className="w-8 h-8 mr-4 text-blue-400" />
                  <span className="text-lg text-white">
                    Harness next-gen AI and machine learning
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </MaxWidthWrapper>
  );
}
