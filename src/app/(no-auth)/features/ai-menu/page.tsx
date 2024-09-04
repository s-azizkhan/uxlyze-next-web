import React from "react";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Link from "next/link";
import {
  IconArrowLeft,
  IconRobot,
  IconUpload,
  IconDeviceMobile,
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

export default function AIPoweredMenuPage() {
  const faqContent = {
    title: "Frequently Asked Questions",
    description: "Get quick answers to common questions about AI Menu.",
    faqs: [
      {
        question: "How accurate is the AI in reading my menu?",
        answer:
          "Our AI is highly accurate, with a success rate of over 98% in correctly identifying menu items, prices, and descriptions.",
      },
      {
        question: "Can I customize the digital menu after AI conversion?",
        answer:
          "Absolutely! You'll have full control to edit, customize, and style your digital menu after the AI conversion process.",
      },
      {
        question: "Is my menu data secure?",
        answer:
          "Yes, we take data security seriously. All uploaded menus and generated digital versions are encrypted and stored securely.",
      },
      {
        question: "How long does the AI conversion process take?",
        answer:
          "The conversion process is quick, typically taking less than 5 minutes for a standard menu.",
      },
    ],
  };

  const howItWorkContent = [
    {
      step: "Upload",
      description: "Take a clear photo of your current menu",
    },
    {
      step: "Analyze",
      description: "Our AI processes and digitizes your menu content",
    },
    {
      step: "Review",
      description: "Make any necessary adjustments to ensure accuracy",
    },
    {
      step: "Publish",
      description: "Your new digital menu goes live instantly",
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
              <BreadcrumbPage>AI-Powered Menu</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <HeaderSection
          label="AI-Powered Menu"
          title="Transform Your Menu with AI"
          subtitle="Effortlessly create a digital menu using our advanced AI technology"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <FeatureItem
              icon={<IconUpload className="w-8 h-8 text-blue-500" />}
              title="Easy Upload"
              description="Simply upload a picture of your existing menu to get started."
            />
            <FeatureItem
              icon={<MagicWand01Icon className="w-8 h-8 text-purple-500" />}
              title="AI-Powered Conversion"
              description="Our AI instantly converts your menu into a digital format, preserving your style and layout."
            />
            <FeatureItem
              icon={<IconDeviceMobile className="w-8 h-8 text-green-500" />}
              title="Mobile-Friendly"
              description="Your new digital menu is optimized for all devices, ensuring a great customer experience."
            />
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://illustrations.popsy.co/violet/package-delivery.svg"
              alt="AI Menu Demo"
              objectFit="cover"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to revolutionize your menu?
          </h3>
          <Button size="lg" className="rounded-xl">
            Try AI Menu Generator Now
            <IconRobot className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary/10 to-purple-600/10 p-10 rounded-3xl shadow-xl">
          <h3 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent flex items-center justify-center">
            How It Works
            <FaThinkPeaks className="size-8 ml-3 text-purple-600" />
          </h3>
          <ol className="space-y-8">
            {howItWorkContent.map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-6 bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center font-bold text-2xl  text-white dark:text-black">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-2">
                    {item.step}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-200 text-lg">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <FaqSection faqSectionContent={faqContent} />
      </div>
    </MaxWidthWrapper>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start p-6 bg-background rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="flex-shrink-0 mr-6">
        <div className="p-3 bg-background shadow-sm rounded-full">{icon}</div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
