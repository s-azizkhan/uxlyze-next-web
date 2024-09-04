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
  Building01Icon,
  Coffee01Icon,
  Rocket01Icon,
  SparklesIcon,
} from "hugeicons-react";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { motion, useInView } from "framer-motion";

const pricingSectionContent = {
  title: "Upgrade Your Restaurant with",
  titleHighlight: "AI",
  description:
    "Choose the perfect plan to revolutionize your restaurant operations. Start your 30-day free trial today - no credit card required.",
  plans: [
    {
      name: "Starter",
      description: "Perfect for small cafes",
      icon: <Coffee01Icon className="size-8 inline-flex text-indigo-600" />,
      features: [
        "Basic AI menu suggestions",
        "Simple order management",
        "Customer feedback collection",
        "Email support",
      ],
    },
    {
      name: "Growth",
      isPopular: true,
      description: "Ideal for growing restaurants",
      icon: <Rocket01Icon className="size-8 inline-flex text-indigo-600" />,
      features: [
        "Advanced AI menu optimization",
        "Real-time order tracking",
        "Detailed customer insights",
        "24/7 priority support",
      ],
    },
    {
      name: "Enterprise",
      description: "For multi-location chains",
      icon: <Building01Icon className="size-8 inline-flex text-indigo-600" />,
      features: [
        "Custom AI solutions",
        "Multi-location management",
        "Advanced analytics & reporting",
        "Dedicated account manager",
      ],
    },
  ],
  footer:
    "All plans include a 30-day money-back guarantee and a free 30-day trial. Upgrade, downgrade, or cancel anytime.",
};

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const getPricing = (planIndex: number) => {
    const prices = [
      { monthly: 15, yearly: 12 },
      { monthly: 35, yearly: 28 },
      { monthly: 70, yearly: 56 },
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
            <span className="px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full dark:text-indigo-200 dark:bg-indigo-800">
              Pricing Plans
            </span>
            <h2 className="text-pretty text-4xl font-bold lg:text-6xl ">
              {pricingSectionContent.title}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                {pricingSectionContent.titleHighlight}
                <SparklesIcon className="size-8 inline-flex text-indigo-600 animate-pulse" />
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
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                Monthly
              </span>
              <Switch
                onCheckedChange={() => setIsYearly(!isYearly)}
                checked={isYearly}
                className="data-[state=checked]:bg-indigo-600 dark:bg-white"
              />
              <span
                className={`transition-colors duration-200 ${
                  isYearly
                    ? "text-indigo-600 font-semibold"
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
                    plan.name === "Growth"
                      ? "border-2 border-indigo-600 shadow-lg"
                      : ""
                  }`}
                >
                  <CardHeader className="relative">
                    {plan.isPopular && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
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
                    <p className="text-sm text-indigo-600 font-semibold mt-2">
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
                          <CircleCheck className="size-5 text-indigo-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto pt-6">
                    <Button
                      className={`w-full transition-all duration-300 ${
                        plan.isPopular
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                          : "bg-white hover:bg-indigo-50 text-indigo-600 border border-indigo-600"
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
