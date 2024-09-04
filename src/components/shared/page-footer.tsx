"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  FaApple,
  FaDiscord,
  FaGooglePlay,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { APP_NAME } from "@/config/app.config";

const footerContent = {
  tagline: "Extend your hospitality like never before.",
  sections: [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "#" },
        { name: "Pricing", href: "/pricing" },
        { name: "Features", href: "/features" },
        { name: "Integrations", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Team", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help", href: "#" },
        { name: "Sales", href: "#" },
        { name: "Advertise", href: "#" },
      ],
    },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  socialIcons: [FaDiscord, FaRedditAlien, FaTwitter, FaTelegramPlane],
};

export default function PageFooter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <div className="container">
        <footer className="bg-background rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  {APP_NAME}
                </span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 md:flex-row md:items-center"
            >
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                {footerContent.tagline}
              </p>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="inline-flex rounded-lg bg-primary p-3 justify-center items-center transition-transform hover:scale-105"
                >
                  <FaApple className="size-7 text-white dark:text-black" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex rounded-lg bg-primary p-3 justify-center items-center transition-transform hover:scale-105"
                >
                  <FaGooglePlay className="size-7 text-white dark:text-black" />
                </Link>
              </div>
            </motion.div>
          </div>
          <Separator className="my-10" />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {footerContent.sections.map((section, sectionIdx) => (
              <motion.div
                key={sectionIdx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * sectionIdx }}
              >
                <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-gray-200">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium transition-colors hover:text-primary"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-gray-200">
                Legal
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                {footerContent.legal.map((item, idx) => (
                  <li
                    key={idx}
                    className="font-medium transition-colors hover:text-primary"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <h3 className="mb-4 mt-8 text-lg font-bold text-gray-800 dark:text-gray-200">
                Social
              </h3>
              <ul className="flex space-x-4 text-gray-600 dark:text-gray-400 items-center">
                {footerContent.socialIcons.map((Icon, idx) => (
                  <li
                    key={idx}
                    className="transition-transform hover:scale-110"
                  >
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <Icon className="size-6" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <Separator className="my-10" />
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </footer>
      </div>
    </motion.section>
  );
}
