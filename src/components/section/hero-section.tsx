import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight01Icon,
  ArrowRight02Icon,
  SparklesIcon,
  StarIcon,
} from "hugeicons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import WaitListForm from "../shared/wait-list-form";

const heroSectionContent = {
  // leftImage: "https://illustrations.popsy.co/violet/graphic-design.svg",
  // rightImage: "https://illustrations.popsy.co/violet/web-design.svg",
  leftImage: "",
  rightImage: "",
  linkUrl: "/register",
  linkText: "New: AI-Powered UX Analysis ✨",
  linkCta: "Try Now",
  title: "Bridging the Gap Between",
  subtitle: `Design & Reality`,
  description: `Effortlessly compare Figma designs or run standard UI/UX tests to live sites. Get instant insights, automate audits, and streamline your workflow with AI-powered analysis.`,
  buttonText: "See How It Works",
  rating: 4.8,
  testimonial: "from 500+ satisfied designers & developers",
  avatars: [
    {
      src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
      alt: "User avatar 1",
    },
    {
      src: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
      alt: "User avatar 2",
    },
    {
      src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
      alt: "User avatar 3",
    },
    {
      src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
      alt: "User avatar 4",
    },
    {
      src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
      alt: "User avatar 5",
    },
  ],
};

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex w-full items-center justify-center overflow-hidden py-10 lg:py-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        {heroSectionContent.leftImage && (
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <Image
              src={heroSectionContent.leftImage}
              alt="UX designer working"
              className="w-96 h-auto dark:hidden"
              loading="lazy"
              width={1000}
              height={1000}
            />
          </div>
        )}
        {heroSectionContent.rightImage && (
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <Image
              src={heroSectionContent.rightImage}
              alt="Web developer coding"
              className="w-96 h-auto dark:hidden"
              loading="lazy"
              width={1000}
              height={1000}
            />
          </div>
        )}
        {heroSectionContent.leftImage && (
          <div className="absolute left-0 top-0 lg:hidden">
            <Image
              src={heroSectionContent.leftImage}
              alt="UX designer working"
              className="w-32 h-auto opacity-70 dark:hidden"
              loading="lazy"
              width={1000}
              height={1000}
            />
          </div>
        )}
        {heroSectionContent.rightImage && (
          <div className="absolute right-0 bottom-0 lg:hidden">
            <Image
              src={heroSectionContent.rightImage}
              alt="Web developer coding"
              className="w-32 h-auto opacity-70 dark:hidden"
              loading="lazy"
              width={1000}
              height={1000}
            />
          </div>
        )}
      </motion.div>

      {heroSectionContent.rightImage && (
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="absolute right-0 bottom-0 lg:hidden"
        >
          <Image
            src={heroSectionContent.rightImage}
            alt="Web developer coding"
            className="w-32 h-auto opacity-70 dark:hidden"
            loading="lazy"
            width={1000}
            height={1000}
          />
        </motion.div>
      )}
      <section className="pb-14 lg:py-24" id="hero-section">
        <div className="container text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="z-10 mb-8 flex items-center justify-center"
          >
            <Link
              href={heroSectionContent.linkUrl}
              className="inline-flex mb-6"
            >
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E535AB_0%,#3245FF_50%,#E535AB_100%)]"></span>
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                  {heroSectionContent.linkText}
                  <ArrowRight02Icon className="ml-2 h-4 w-4" />
                </div>
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mx-auto flex max-w-screen-lg flex-col gap-4"
          >
            <h1 className="flex flex-col justify-center items-center text-center text-4xl sm:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-gray-50">
              {heroSectionContent.title}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-flex items-center text-3xl sm:text-4xl lg:text-6xl mt-1 lg:mt-3 tracking-wide">
                {heroSectionContent.subtitle}
                <SparklesIcon className="size-5 sm:size-7 ml-1 text-purple-600" />
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-xl leading-relaxed text-gray-900 dark:text-gray-50">
              {heroSectionContent.description}
            </p>
          </motion.div>

          <WaitListForm />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-3 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Link href="#how-it-works-section">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl w-full sm:w-auto"
              >
                {heroSectionContent.buttonText}
                <ArrowRight01Icon className="ml-2 size-4 sm:size-5" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mx-auto mt-12 sm:mt-16 flex w-fit flex-col items-center gap-6 sm:flex-row"
          >
            <span className="mx-4 inline-flex items-center -space-x-4">
              {heroSectionContent.avatars.map((avatar, index) => (
                <Avatar
                  key={index}
                  className="size-10 sm:size-14 border-2 border-white dark:border-gray-800"
                >
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                </Avatar>
              ))}
            </span>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className="size-4 sm:size-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-2 text-lg sm:text-xl font-bold">
                  {heroSectionContent.rating}
                </span>
              </div>
              <p className="text-base sm:text-lg font-medium text-muted-foreground">
                {heroSectionContent.testimonial}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
