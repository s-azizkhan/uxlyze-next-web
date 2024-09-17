"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Layers, Rocket } from "lucide-react";
import Image from "next/image";
import { APP_NAME } from "@/config/app.config";
import TitleTopBadge from "../shared/title-top-badge";
import { ConnectIcon, Rocket01Icon } from "hugeicons-react";
import Link from "next/link";

const steps = [
  {
    icon: <ConnectIcon className="w-8 h-8 text-blue-500" />,
    title: "Connect",
    description: "Link your Figma designs or live sites in seconds.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Analyze",
    description: "Our AI instantly compares and provides deep insights.",
  },
  {
    icon: <Rocket01Icon className="w-8 h-8 text-green-500" />,
    title: "Optimize",
    description: "Implement AI-powered suggestions to elevate your UI/UX.",
  },
];

export default function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <MaxWidthWrapper>
      <section className="lg:py-20 py-10 overflow-hidden" id="how-it-works">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <TitleTopBadge title="How this sh*t works?" />

          <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Bridging Design & Reality
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Effortlessly compare Figma designs to live sites. Get instant
            insights, automate audits, and elevate your UI/UX with AI-powered
            analysis.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-3xl blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-background rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative p-6 rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredStep === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <div className="text-primary mb-4">{step.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-primary to-purple-600 p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 dark:text-black">
                  <h3 className="text-3xl font-bold mb-2">
                    Ready to transform your workflow?
                  </h3>
                  <p className="text-lg opacity-90">
                    Join thousands of designers using {APP_NAME}.
                  </p>
                </div>
                <Link href="/register">
                  <Button size="lg" className="group rounded-xl">
                    Join now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">See the magic in action</h3>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[500px]">
            <Image
              src="/images/demo-dashboard.png"
              alt="Platform demo"
              width={1200}
              height={675}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent flex items-end justify-center p-8">
              <Button size="lg" variant="default" className="group rounded-xl">
                Watch Demo (Coming Soon)
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </MaxWidthWrapper>
  );
}
