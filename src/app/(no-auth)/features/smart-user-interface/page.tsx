import React from "react";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Link from "next/link";
import {
  IconArrowLeft,
  IconEaseInOut,
  IconDeviceMobile,
  IconBrain,
  IconRocket,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import Image from "next/image";
import { MagicWand01Icon } from "hugeicons-react";
import FaqSection from "@/components/section/faq-section";
import { FaThinkPeaks } from "react-icons/fa";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function SmartUserInterfacePage() {
  const faqContent = {
    title: "Frequently Asked Questions",
    description:
      "Get quick answers to common questions about our Smart User Interface.",
    faqs: [
      {
        question: "How does the Smart User Interface benefit my business?",
        answer:
          "Our Smart UI enhances customer engagement, increases conversion rates, and improves overall user satisfaction by providing a personalized, intuitive experience tailored to each user's preferences and behaviors.",
      },
      {
        question: "Is it difficult to implement the Smart User Interface?",
        answer:
          "Not at all! Our team provides full support for seamless integration. We handle the technical aspects, allowing you to focus on your core business while reaping the benefits of advanced AI-driven UI optimization.",
      },
      {
        question: "Can I see a demo before committing?",
        answer:
          "Absolutely! We offer a free 14-day trial that allows you to experience the full capabilities of our Smart UI. You can see firsthand how it adapts to your users and improves their experience.",
      },
      {
        question: "How does pricing work for the Smart User Interface?",
        answer:
          "We offer flexible pricing plans based on your business size and needs. Our packages start from as low as $99/month for small businesses, with custom enterprise solutions available. Contact our sales team for a personalized quote.",
      },
    ],
  };

  const benefitsContent = [
    {
      title: "Boost Engagement",
      description: "Increase user interaction and time spent on your platform",
      icon: <IconEaseInOut className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Increase Conversions",
      description: "Optimize user journeys to improve conversion rates",
      icon: <IconRocket className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Personalize at Scale",
      description: "Deliver tailored experiences to each individual user",
      icon: <MagicWand01Icon className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Cross-Device Optimization",
      description: "Ensure seamless experiences across all devices",
      icon: <IconDeviceMobile className="w-8 h-8 text-orange-500" />,
    },
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
              <BreadcrumbPage>Smart User Interface</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <HeaderSection
          label="Smart User Interface"
          title="Revolutionize Your Customer Experience with AI"
          subtitle="Harness the power of adaptive design to skyrocket engagement and conversions"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              Transform Your Digital Presence
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              In today's competitive digital landscape, providing a superior
              user experience is crucial. Our Smart User Interface leverages
              cutting-edge AI to create a dynamic, personalized experience that
              adapts to each user's preferences and behaviors in real-time.
            </p>
            <Button size="lg" className="rounded-xl">
              Start Free Trial
              <IconRocket className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://illustrations.popsy.co/violet/surreal-flying-bulbs.svg"
              alt="Smart User Interface Demo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary/10 to-purple-600/10 p-10 rounded-3xl shadow-xl">
          <h3 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent flex items-center justify-center">
            Key Benefits
            <FaThinkPeaks className="size-8 ml-3 text-purple-600" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitsContent.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            Ready to elevate your user experience?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of businesses already benefiting from our Smart UI
            technology.
          </p>
          <Button size="lg" className="rounded-xl">
            Get Started Now
            <IconBrain className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <FaqSection faqSectionContent={faqContent} />

        <div className="mt-20 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-10 rounded-3xl shadow-xl text-center">
          <h3 className="text-3xl font-bold mb-6">Still have questions?</h3>
          <p className="text-xl mb-8">
            Our team of experts is here to help you make the most of our Smart
            User Interface.
          </p>
          <Button variant="outline" size="lg" className="rounded-xl">
            Contact Sales
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
