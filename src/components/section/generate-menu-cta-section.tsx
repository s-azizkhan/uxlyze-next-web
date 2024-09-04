import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { APP_NAME } from "@/config/app.config";
import { cn } from "@/lib/utils";

const CheckIcon = ({ className }: { className: string }) => (
  <svg
    className={cn("w-5 h-5 mr-2 text-green-500 dark:text-green-400", className)}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const uiUxEvaluationCtaContent = {
  title: `Revolutionize Your Design Process with ${APP_NAME}`,
  description: `Elevate your UI/UX workflow with our AI-powered evaluation platform. Compare Figma designs to live websites and get instant, actionable insights.`,
  features: [
    "AI-Powered UI/UX Analysis",
    "Figma to Website Comparison",
    "Easy Integration",
    "Customizable Reports",
  ],
  learnMoreLink: "/features",
  getStartedLink: "/register",
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function UiUxEvaluationCtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="pb-24" id="ui-ux-evaluation-cta-section" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex w-full flex-col gap-12 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 shadow-xl p-8 md:p-12 lg:flex-row lg:items-center lg:p-16 transition-all duration-300 hover:shadow-2xl"
        >
          <motion.div variants={itemVariants} className="flex-1 space-y-6">
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold md:text-4xl lg:text-5xl text-white"
            >
              {uiUxEvaluationCtaContent.title}
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-100 max-w-2xl"
            >
              {uiUxEvaluationCtaContent.description}
            </motion.p>
            <motion.ul
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              {uiUxEvaluationCtaContent.features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-white"
                >
                  <CheckIcon className="text-green-300 mr-2" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex shrink-0 flex-col gap-4 sm:flex-row"
          >
            <Link href={uiUxEvaluationCtaContent.learnMoreLink} passHref>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-lg py-3 px-6 bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 group"
              >
                Learn More
                <ExternalLink className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href={uiUxEvaluationCtaContent.getStartedLink} passHref>
              <Button className="w-full sm:w-auto text-lg py-3 px-6 rounded-xl transition-all duration-300 group">
                Get Started
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
