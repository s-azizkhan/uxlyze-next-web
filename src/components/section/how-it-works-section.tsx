"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
      "Seamlessly connect/import designs from Figma, and enter live/dev/staging website URLs.",
    href: "/how-it-works/connect-figma",
  },
  {
    icon: <IconSparkles className="w-8 h-8 text-purple-500" />,
    title: "AI Analysis",
    description:
      "Our advanced AI evaluates UI/UX elements, providing comprehensive insights in minutes.",
    href: "/how-it-works/analysis",
  },
  {
    icon: <ChartBarLineIcon className="w-8 h-8 text-green-500" />,
    title: "Detailed Reports",
    description:
      "Receive customizable reports focusing on your specific design needs and goals.",
    href: "/how-it-works/customize",
  },
  {
    icon: <IconDeviceLaptop className="w-8 h-8 text-orange-500" />,
    title: "Implement & Iterate",
    description:
      "Apply AI-generated insights to improve designs and easily re-evaluate for continuous enhancement.",
    href: "/how-it-works/implement",
  },
];

const Steps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 py-4 mx-auto"
    >
      {howItWorksContent.map((step, index) => (
        <Step key={step.title} {...step} index={index} />
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
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <Link href={href} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-col p-6 bg-background rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute top-0 left-0 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-tl-xl rounded-br-xl px-3 py-1">
          Step {index + 1}
        </div>
        <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110 mt-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        {/* TODO: Add this back in */}
        <div className="mt-auto flex items-center text-primary font-medium hidden">
          <span>Learn more</span>
          <ArrowRight01Icon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </motion.div>
    </Link>
  );
};

export default function HowItWorksSection() {
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
                Effortless UI/UX Evaluation
                <SparklesIcon className="w-10 h-10 ml-2 text-purple-600 animate-pulse" />
              </motion.span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your design process with our AI-powered platform.
              Compare Figma designs to live websites, gain valuable insights,
              and improve your UI/UX in minutes.
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
              <h3 className="text-2xl font-bold mb-4">
                Ready to elevate your designs?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Join thousands of designers who've transformed their workflow
                with our AI-powered platform.
              </p>
            </div>
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-xl bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              Start Your Free 7-Day Trial
              <Rocket01Icon className="w-6 h-6 ml-2" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required. Cancel anytime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-20 bg-background rounded-xl p-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4">
                  Why choose {APP_NAME}?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <IconChartPie2 className="w-5 h-5 mr-2 text-green-500" />
                    <span>Increase design efficiency by up to 40%</span>
                  </li>
                  <li className="flex items-center">
                    <LightbulbIcon className="w-5 h-5 mr-2 text-yellow-500" />
                    <span>Generate innovative UI/UX ideas</span>
                  </li>
                  <li className="flex items-center">
                    <IconAi className="w-5 h-5 mr-2 text-blue-500" />
                    <span>Leverage cutting-edge AI technology</span>
                  </li>
                </ul>
              </div>
              <Image
                src="https://illustrations.popsy.co/violet/engineer.svg"
                alt="Platform showcase"
                width={400}
                height={300}
                className="rounded-lg shadow-lg bg-white"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </MaxWidthWrapper>
  );
}
