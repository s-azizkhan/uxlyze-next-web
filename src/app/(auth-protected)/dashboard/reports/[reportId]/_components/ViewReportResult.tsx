"use client";

import { Button } from "@/components/ui/button";
import { Download, Edit2 } from "lucide-react";
import { IAnalysisResult } from "@/types/analysis-result";
import NavigationAnalysis from "./NavigationAnalysis";
import SEOAnalysis from "./SEOAnalysis";
import ColorUsageAnalysis from "./ColorUsageAnalysis";
import FontUsageAnalysis from "./FontUsageAnalysis";
import ScreenshotGallery from "./ScreenshotGallery";
import IssuesAndSuggestions from "./IssuesAndSuggestions";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyMetricsCard from "./KeyMetricsCard";

const report: IAnalysisResult = {
  Title: "UI/UX Analysis Report for logicwind.com",
  URL: "https://logicwind.com",
  Navigation: {
    externalLinksCount: 11,
    internalLinksCount: 11,
    linkStructure: {
      externalLinks: [
        {
          absoluteLink: "https://www.loopmoney.com/",
          href: "https://www.loopmoney.com/",
          isAbsolute: true,
          isInternal: false,
          text: "Loop",
        },
        {
          absoluteLink: "https://www.theelefant.com/",
          href: "https://www.theelefant.com/",
          isAbsolute: true,
          isInternal: false,
          text: "the Elefant",
        },
        {
          absoluteLink: "https://syncsignature.com/",
          href: "https://syncsignature.com/",
          isAbsolute: true,
          isInternal: false,
          text: "SyncSignature",
        },
        {
          absoluteLink: "https://cardzap.me/",
          href: "https://cardzap.me/",
          isAbsolute: true,
          isInternal: false,
          text: "Cardzap",
        },
        {
          absoluteLink: "https://www.digiqc.com/",
          href: "https://www.digiqc.com/",
          isAbsolute: true,
          isInternal: false,
          text: "digiQC",
        },
        {
          absoluteLink: "https://counselvise.com/",
          href: "https://counselvise.com/",
          isAbsolute: true,
          isInternal: false,
          text: "Counselvise",
        },
        {
          absoluteLink: "https://in.linkedin.com/company/logicwind",
          href: "https://in.linkedin.com/company/logicwind",
          isAbsolute: true,
          isInternal: false,
          text: "",
        },
        {
          absoluteLink:
            "https://x.com/i/flow/login?redirect_after_login=%2Flogicwind",
          href: "https://x.com/i/flow/login?redirect_after_login=%2Flogicwind",
          isAbsolute: true,
          isInternal: false,
          text: "",
        },
        {
          absoluteLink: "https://www.instagram.com/logicwind/",
          href: "https://www.instagram.com/logicwind/",
          isAbsolute: true,
          isInternal: false,
          text: "",
        },
        {
          absoluteLink: "https://www.facebook.com/logicwindhq/",
          href: "https://www.facebook.com/logicwindhq/",
          isAbsolute: true,
          isInternal: false,
          text: "",
        },
        {
          absoluteLink: "https://blog.logicwind.com/",
          href: "https://blog.logicwind.com/",
          isAbsolute: true,
          isInternal: false,
          text: "Blogs",
        },
      ],
      internalLinks: [
        {
          absoluteLink: "https://www.logicwind.com/book-call",
          href: "/book-call",
          isAbsolute: false,
          isInternal: true,
          text: "Work with us",
        },
        {
          absoluteLink: "https://www.logicwind.com/",
          href: "/",
          isAbsolute: false,
          isInternal: true,
          text: "",
        },
        {
          absoluteLink: "https://www.logicwind.com/#",
          href: "#",
          isAbsolute: false,
          isInternal: true,
          text: "Tools",
        },
        {
          absoluteLink: "https://www.logicwind.com/book-call",
          href: "/book-call",
          isAbsolute: false,
          isInternal: true,
          text: "Work with us",
        },
        {
          absoluteLink: "https://www.logicwind.com/book-call",
          href: "/book-call",
          isAbsolute: false,
          isInternal: true,
          text: "Book a call",
        },
        {
          absoluteLink: "https://www.logicwind.com/",
          href: "/",
          isAbsolute: false,
          isInternal: true,
          text: "",
        },
        {
          absoluteLink: "https://www.logicwind.com/",
          href: "/",
          isAbsolute: false,
          isInternal: true,
          text: "Home",
        },
        {
          absoluteLink: "https://www.logicwind.com/service",
          href: "/service",
          isAbsolute: false,
          isInternal: true,
          text: "Services",
        },
        {
          absoluteLink: "https://www.logicwind.com/about-us",
          href: "/about-us",
          isAbsolute: false,
          isInternal: true,
          text: "About Us",
        },
        {
          absoluteLink: "https://www.logicwind.com/#",
          href: "#",
          isAbsolute: false,
          isInternal: true,
          text: "Resources",
        },
        {
          absoluteLink: "https://www.logicwind.com/#",
          href: "#",
          isAbsolute: false,
          isInternal: true,
          text: "Tools",
        },
      ],
    },
    linksWithTargetBlank: 11,
    linksWithoutHref: 3,
    navElementCount: 12,
    totalLinks: 22,
  },
  MobileFriendly: true,
  Readability: "Low (few paragraphs (12))",
  Screenshots: {
    Desktop: "",
    Mobile: "",
    Navigation: "",
  },
  ColorUsage: {
    colors: [
      "rgb(0, 0, 0)",
      "rgb(51, 51, 51)",
      "rgb(255, 255, 255)",
      "rgba(63, 30, 29, 0.08)",
      "rgb(215, 204, 204)",
      "rgb(240, 79, 75)",
      "rgb(0, 0, 238)",
      "rgb(31, 46, 66)",
      "rgba(63, 30, 29, 0.3)",
      "rgb(249, 243, 243)",
      "rgb(242, 230, 230)",
      "rgb(197, 187, 187)",
      "rgb(232, 228, 228)",
      "rgba(63, 30, 29, 0.12)",
      "rgb(242, 245, 248)",
      "rgb(202, 207, 216)",
      "rgb(49, 152, 255)",
      "rgb(31, 46, 66) rgb(31, 46, 66) rgba(255, 255, 255, 0.1)",
    ],
    totalColors: 18,
  },
  FontUsage: {
    fontSizeDistribution: {
      h1: {
        "64px": 1,
      },
      h2: {
        "40px": 4,
        "48px": 1,
      },
      p: {
        "18px": 12,
      },
    },
    fontsUsed: {
      "Poppins, sans-serif": {
        h1: [
          {
            count: 1,
            fontSize: "64px",
            text: "Let’s make your product development journey straight forward and engaging.",
          },
        ],
        h2: [
          {
            count: 1,
            fontSize: "40px",
            text: "Does technology confuse you more than it convinces you?",
          },
          {
            count: 1,
            fontSize: "40px",
            text: "We’ll do your product design, development, and maintenance so you can stay focused on growth.",
          },
          {
            count: 1,
            fontSize: "40px",
            text: "What our clients say",
          },
          {
            count: 1,
            fontSize: "40px",
            text: "FAQ’s",
          },
          {
            count: 1,
            fontSize: "48px",
            text: "Get started with an intro call",
          },
        ],
        p: [
          {
            count: 1,
            fontSize: "18px",
            text: "We can help you turn your idea into a reality, starting from the initial concept.",
          },
          {
            count: 2,
            fontSize: "18px",
            text: "It is not possible to build everything, but we prioritize the most impactful features to create a su",
          },
          {
            count: 1,
            fontSize: "18px",
            text: "We can enhance and support your existing product.",
          },
          {
            count: 1,
            fontSize: "18px",
            text: "Yes, we can work together. Don’t leave your job yet; we’ll help you develop your idea alongside your",
          },
          {
            count: 1,
            fontSize: "18px",
            text: "This is bound to happen, but we are problem solvers who thrive on such challenges.",
          },
          {
            count: 1,
            fontSize: "18px",
            text: "Yes, we have experience in building AI products.",
          },
          {
            count: 1,
            fontSize: "18px",
            text: "We will guide you through the process of building your own team after the MVP phase.",
          },
          {
            count: 1,
            fontSize: "18px",
            text: "We provide continued support and maintenance even after the product development phase.",
          },
          {
            count: 1,
            fontSize: "18px",
            text: "You own the IP, but there could be instances where we use third-party tools, such as message service",
          },
          {
            count: 1,
            fontSize: "18px",
            text: "While we strive for your success, it cannot be guaranteed as it depends on various factors.",
          },
          {
            count: 1,
            fontSize: "18px",
            text: "We ensure high-value deliverables, making our services cost-effective rather than expensive.",
          },
        ],
      },
    },
    totalFonts: 1,
  },
  SEO: {
    description:
      "Logicwind is the professional web and mobile app development company building reliable solutions for the businesses and startups. Connect with us now to Know More",
    "og:description":
      "Logicwind is the professional web and mobile app development company building reliable solutions for the businesses and startups. Connect with us now to Know More",
    "og:image":
      "https://cdn.prod.website-files.com/60530d64d0c48cbd53eb4a84/66a0e1976ba123fd39e1047e_Frame%2015970.png",
    "og:title": "Web and Mobile App Development Company in India - Logicwind",
    "og:type": "website",
    "twitter:card": "summary_large_image",
    "twitter:description":
      "Logicwind is the professional web and mobile app development company building reliable solutions for the businesses and startups. Connect with us now to Know More",
    "twitter:image":
      "https://cdn.prod.website-files.com/60530d64d0c48cbd53eb4a84/66a0e1976ba123fd39e1047e_Frame%2015970.png",
    "twitter:title":
      "Web and Mobile App Development Company in India - Logicwind",
    viewport: "width=device-width, initial-scale=1",
  },
  AiAnalysis: {
    total_score: 6.75,
    website_category: "Corporate",
    website_category_score: 8,
    color_scheme: {
      primary_colors: ["#ffffff", " #f5f5f5"],
      secondary_colors: ["#e0e0e0"],
      accent_colors: ["#ff0000", " #000000"],
    },
    usability: {
      score: 7,
      issues: [
        {
          description:
            "The homepage lacks a clear visual hierarchy to guide users through the content. It might benefit from a more structured layout and distinct visual cues to emphasize key sections.",
          location: "Homepage",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Enhance the visual hierarchy on the homepage by using larger font sizes, bolding, or color variations to highlight important headings and call-to-actions. Employ visual cues like dividers or spacing to separate content sections and create a more organized flow.",
          expected_impact: "Improved clarity and navigation for users.",
        },
      ],
    },
    visual_design: {
      score: 7,
      issues: [
        {
          description:
            "The website's color scheme is simple and clean, but it could benefit from a more dynamic use of color to highlight specific elements and create visual interest.",
          location: "Homepage",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Explore strategic use of color to highlight key elements like headings, call-to-actions, and important information. Consider incorporating subtle gradients or color overlays to add depth and visual appeal.",
          expected_impact: "Increased visual interest and user engagement.",
        },
      ],
    },
    typography: {
      score: 7,
      issues: [
        {
          description:
            "The website utilizes a consistent font family, but the font size might be slightly small in some sections, affecting readability, especially on smaller screens.",
          location: "Throughout the website",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Increase the font size slightly in areas where text appears small or cramped. Conduct responsiveness testing on various devices to ensure optimal readability across all screen sizes.",
          expected_impact: "Improved readability and visual comfort for users.",
        },
      ],
    },
    cta_design: {
      score: 7,
      issues: [
        {
          description:
            "The 'Work with us' button on the homepage is visually prominent but may benefit from a more action-oriented design, such as a stronger color contrast.",
          location: "Homepage",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Enhance the 'Work with us' button on the homepage with a more vibrant or contrasting color scheme. Explore different button styles, like rounded edges or a slight hover effect, to make it more visually engaging.",
          expected_impact: "Increased click-through rate and user engagement.",
        },
      ],
    },
    navigation: {
      score: 6,
      issues: [
        {
          description:
            "The navigation menu is not immediately visible on the homepage, requiring users to scroll down to find it.",
          location: "Homepage",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Make the navigation menu readily accessible on the homepage, possibly by incorporating a fixed header or a top-level navigation bar for improved discoverability.",
          expected_impact:
            "Enhanced user experience and navigation efficiency.",
        },
      ],
    },
    accessibility: {
      score: 6,
      issues: [
        {
          description:
            "The color contrast between some text and background elements may not meet WCAG guidelines, potentially affecting users with visual impairments.",
          location: "Throughout the website",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Review all text and background combinations to ensure sufficient color contrast, especially for important elements like call-to-actions and headings. Consider using a contrast checker tool for assistance.",
          expected_impact:
            "Improved accessibility for users with visual impairments.",
        },
      ],
    },
    user_flow: {
      score: 6,
      issues: [
        {
          description:
            "The website's content flow is somewhat linear, potentially missing opportunities for a more engaging and interactive user journey. For example, a clear path to explore the services offered is not immediately evident.",
          location: "Homepage",
          impact: "",
        },
      ],
      suggestions: [
        {
          description:
            "Consider adding visual breadcrumbs or interactive elements to guide users through the website's services and key features. Incorporate more engaging visuals or animations to break up the text-heavy sections and enhance the user experience.",
          expected_impact: "More engaging and interactive user experience.",
        },
      ],
    },
    interactivity: {
      score: 7,
      issues: [],
      suggestions: [
        {
          description:
            "Consider adding subtle hover effects to buttons and links to provide visual feedback and enhance the interactive experience.",
          expected_impact: "Improved user experience and engagement.",
        },
      ],
    },
  },
};

export default function ViewReportResult() {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 sm:px-6 lg:px-8"
      >
        <header className="mb-8 bg-gradient-to-r to-veronica-600 from-indigo-600 p-6 sm:p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-10"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center relative z-10">
            <div className="mb-6 sm:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl sm:text-5xl font-extrabold mb-2 sm:mb-4"
              >
                {report.Title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-purple-100 text-lg sm:text-xl"
              >
                {report.URL}
              </motion.p>

              {/* TODO: Add download and edit report buttons */}
              {/* <div className="hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex space-x-4"
                >
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-indigo-100 transition-colors"
                  >
                    <Download className="mr-2 h-5 w-5" /> Download Report
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-indigo-600 transition-colors"
                  >
                    <Edit2 className="mr-2 h-5 w-5" /> Edit Report
                  </Button>
                </motion.div>
              </div> */}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 mb-2 sm:mb-4">
                <CircularProgressbar
                  value={report.AiAnalysis.total_score * 10}
                  text={`${report.AiAnalysis.total_score.toFixed(1)}`}
                  styles={buildStyles({
                    textSize: "24px",
                    pathColor: `rgba(255, 255, 255, ${
                      report.AiAnalysis.total_score / 10
                    })`,
                    textColor: "#ffffff",
                    trailColor: "rgba(255, 255, 255, 0.2)",
                  })}
                />
              </div>
              <span className="text-base sm:text-lg font-semibold">
                Overall Score
              </span>
              <span className="text-xs sm:text-sm mt-1 sm:mt-2 px-2 sm:px-3 py-1 bg-white/20 rounded-full">
                {report.AiAnalysis.website_category}
              </span>
            </motion.div>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          <KeyMetricsCard
            title="Mobile & Readability"
            data={{
              MobileFriendly: report.MobileFriendly,
              Readability: report.Readability,
            }}
          />
          <KeyMetricsCard
            title="Color Scheme"
            data={report.AiAnalysis.color_scheme}
            type="color"
          />
          <KeyMetricsCard
            title="Navigation Overview"
            data={{
              TotalLinks: report.Navigation.totalLinks,
              NavElements: report.Navigation.navElementCount,
              InternalLinks: report.Navigation.internalLinksCount,
              ExternalLinks: report.Navigation.externalLinksCount,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-8"
        >
          <IssuesAndSuggestions analysis={report.AiAnalysis} />
          <NavigationAnalysis navigation={report.Navigation} />
          <SEOAnalysis seo={report.SEO} />
          <ColorUsageAnalysis colorUsage={report.ColorUsage} />
          <FontUsageAnalysis fontUsage={report.FontUsage} />
          <ScreenshotGallery screenshots={report.Screenshots} />
        </motion.div>
      </motion.div>
    </div>
  );
}
