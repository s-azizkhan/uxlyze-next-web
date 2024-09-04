"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  ArrowRight01Icon,
  SparklesIcon,
  RocketIcon,
  Layout01Icon,
} from "hugeicons-react";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { motion, useInView } from "framer-motion";
import { APP_NAME } from "@/config/app.config";
import TitleTopBadge from "../shared/title-top-badge";

const pricingSectionContent = {
  title: "Elevate Your Design Process with",
  titleHighlight: "AI-Powered UX Analysis",
  description: `Choose the perfect plan to revolutionize your UI/UX workflow. Start your 14-day free trial of ${APP_NAME} today - no credit card required.`,
  plans: [
    {
      name: "Starter",
      description: "For individuals and small teams",
      icon: <Layout01Icon className="size-8 inline-flex text-indigo-600" />,
      features: [
        "Basic UI/UX evaluation",
        "Figma to website comparison",
        "5 projects per month",
        "Email support",
      ],
    },
    {
      name: "Pro",
      isPopular: true,
      description: "Ideal for growing design teams",
      icon: <SparklesIcon className="size-8 inline-flex text-indigo-600" />,
      features: [
        "Advanced AI-powered analysis",
        "Unlimited Figma comparisons",
        "Custom report generation",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      icon: <RocketIcon className="size-8 inline-flex text-indigo-600" />,
      features: [
        "Full-scale UX optimization",
        "API access for integrations",
        "Dedicated account manager",
        "Custom AI model training",
      ],
    },
  ],
  footer:
    "All plans include a 14-day free trial. Upgrade, downgrade, or cancel anytime.",
};

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const getPricing = (planIndex: number) => {
    const prices = [
      { monthly: 29, yearly: 24 },
      { monthly: 79, yearly: 64 },
      { monthly: 199, yearly: 159 },
    ];
    const price = isYearly
      ? prices[planIndex].yearly
      : prices[planIndex].monthly;
    const originalPrice = isYearly
      ? prices[planIndex].monthly
      : Math.ceil(prices[planIndex].monthly * 1.25);
    const annualPrice = price * 12;
    return {
      price: `$${price}`,
      originalPrice: `$${originalPrice}`,
      billingPeriod: `$${annualPrice} annually`,
    };
  };

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
            className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center"
          >
            <TitleTopBadge title="Pricing" />

            <h2 className="text-pretty text-4xl font-bold lg:text-6xl ">
              {pricingSectionContent.title}{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-flex items-center flex-wrap justify-center">
                {pricingSectionContent.titleHighlight}
                <SparklesIcon className="size-8 inline-flex text-purple-600 animate-pulse" />
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 lg:text-xl max-w-2xl">
              {pricingSectionContent.description}
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center gap-3 text-lg bg-background py-2 px-4 rounded-xl shadow-md"
            >
              <span
                className={`transition-colors duration-200 ${
                  !isYearly
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                Monthly
              </span>
              <Switch
                onCheckedChange={() => setIsYearly(!isYearly)}
                checked={isYearly}
                className="data-[state=checked]:bg-purple-600 dark:bg-white"
              />
              <span
                className={`transition-colors duration-200 ${
                  isYearly
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                Yearly
              </span>
            </motion.div>
            <div className="flex flex-col items-stretch gap-8 lg:flex-row">
              {pricingSectionContent.plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`flex w-full lg:w-1/3 flex-col justify-between text-left transition-all duration-300 hover:shadow-xl ${
                    plan.name === "Pro"
                      ? "border-2 border-purple-600 shadow-lg"
                      : ""
                  }`}
                >
                  <CardHeader className="relative">
                    {plan.isPopular && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                        Most Popular
                      </div>
                    )}
                    <CardTitle className="text-2xl font-bold flex items-center gap-2 mb-2">
                      {plan.icon}
                      {plan.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        {getPricing(index).price}
                      </span>
                      <span className="text-muted-foreground ml-1">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed {getPricing(index).billingPeriod}
                    </p>
                    <p className="text-sm text-purple-600 font-semibold mt-2">
                      Save {isYearly ? "20%" : "0%"} with annual billing
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Separator className="my-6" />
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <CircleCheck className="size-5 text-purple-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto pt-6">
                    <Button
                      className={`w-full transition-all duration-300 ${
                        plan.isPopular
                          ? "bg-purple-600 hover:bg-purple-700 text-white"
                          : "bg-white hover:bg-purple-50 text-purple-600 border border-purple-600"
                      }`}
                    >
                      {plan.isPopular ? "Get Started" : "Start Free Trial"}
                      <ArrowRight01Icon className="ml-2 size-5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm text-muted-foreground mt-8"
            >
              {pricingSectionContent.footer}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </MaxWidthWrapper>
  );
};

export default PricingSection;
