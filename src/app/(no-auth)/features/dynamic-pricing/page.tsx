import React from "react";
import {
  IconCurrencyDollar,
  IconChartBar,
  IconRocket,
  IconBuildingStore,
} from "@tabler/icons-react";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Link from "next/link";
import { HeaderSection } from "@/components/shared/header-section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function DynamicPricingPage() {
  const features = [
    {
      icon: <IconCurrencyDollar className="h-6 w-6 text-primary" />,
      title: "Intelligent Pricing",
      description:
        "Our AI analyzes market trends, competitor prices, and demand patterns in real-time.",
    },
    {
      icon: <IconChartBar className="h-6 w-6 text-primary" />,
      title: "Maximize Revenue",
      description:
        "Automatically adjust prices to capture more value during peak demand periods.",
    },
    {
      icon: <IconRocket className="h-6 w-6 text-primary" />,
      title: "Stay Competitive",
      description:
        "Keep your prices optimized against competitors without constant manual adjustments.",
    },
  ];

  const benefits = [
    "Increase revenue by up to 25%",
    "Reduce manual pricing efforts by 90%",
    "Improve customer satisfaction with fair, market-driven pricing",
    "Adapt to market changes in real-time",
    "Gain valuable insights into pricing trends and customer behavior",
  ];

  return (
    <MaxWidthWrapper>
      <div className="py-20">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/features">Features</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dynamic Pricing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <HeaderSection
          label="Dynamic Pricing"
          title="Revolutionize Your Pricing Strategy with AI"
          subtitle="Boost profits and stay ahead of the competition with our cutting-edge dynamic pricing solution"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Harness the Power of AI-Driven Pricing
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Our dynamic pricing solution uses advanced AI algorithms to
              optimize your pricing strategy in real-time. Say goodbye to
              guesswork and hello to data-driven decisions that maximize your
              revenue.
            </p>
            <Button size="lg" className="rounded-xl">
              Start Your Free Trial
              <IconRocket className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-3 text-sm text-gray-500">
              No credit card required
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://illustrations.popsy.co/violet/discount-tag.svg"
              alt="Dynamic Pricing Illustration"
              objectFit="cover"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose Our Dynamic Pricing Solution?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary/10 to-purple-600/10 p-6 lg:p-12 rounded-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-background p-4 rounded-lg shadow hover:shadow-xl hover:scale-105"
              >
                <svg
                  className="h-6 w-6 text-green-500 mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Ready to Optimize Your Pricing?
          </h2>
          <Button size="lg" className="rounded-xl">
            Get Started Now
            <IconCurrencyDollar className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Join thousands of businesses already benefiting from our AI-powered
            pricing solution.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="bg-gray-200 dark:bg-gray-700 h-16 w-32 rounded-lg flex items-center justify-center"
              >
                <IconBuildingStore className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
