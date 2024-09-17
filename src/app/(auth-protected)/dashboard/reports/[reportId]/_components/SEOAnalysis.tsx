import { useState } from "react";
import { motion } from "framer-motion";
import { IconSeo, IconBrandTwitter, IconWorld, IconDeviceMobile } from "@tabler/icons-react";
import { ISEO } from "@/types/analysis-result";

export default function SEOAnalysis({ seo }: { seo: ISEO }) {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: IconWorld },
    { id: "og", label: "Open Graph", icon: IconWorld },
    { id: "twitter", label: "Twitter", icon: IconBrandTwitter },
    { id: "preview", label: "Preview", icon: IconDeviceMobile },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="space-y-4">
            <SEOField label="Description" value={seo.description} />
            <SEOField label="Viewport" value={seo.viewport} />
          </div>
        );
      case "og":
        return (
          <div className="space-y-4">
            <SEOField label="Title" value={seo["og:title"]} />
            <SEOField label="Description" value={seo["og:description"]} />
            <SEOField label="Image" value={seo["og:image"]} />
            <SEOField label="Type" value={seo["og:type"]} />
          </div>
        );
      case "twitter":
        return (
          <div className="space-y-4">
            <SEOField label="Card" value={seo["twitter:card"]} />
            <SEOField label="Title" value={seo["twitter:title"]} />
            <SEOField label="Description" value={seo["twitter:description"]} />
            <SEOField label="Image" value={seo["twitter:image"]} />
          </div>
        );
      case "preview":
        return (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md max-w-md mx-auto">
            <div className="mb-2 text-blue-600 dark:text-blue-400 font-medium">{seo["og:title"]}</div>
            <div className="text-green-700 dark:text-green-500 text-sm mb-1">https://yourwebsite.com/page</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">{seo.description}</div>
          </div>
        );
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
    >
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <IconSeo className="w-8 h-8 mr-3 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">SEO Analysis</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">{renderContent()}</div>
    </motion.section>
  );
}

function SEOField({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
      <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{label}</div>
      <p className="text-sm text-gray-800 dark:text-gray-200">{value}</p>
    </div>
  );
}