"use client";
import { motion } from "framer-motion";
import { IconLoader } from "@tabler/icons-react";

export default function PendingStatusReportCard({
  status,
}: {
  status: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100"
    >
      <div className="flex items-center mb-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mr-4"
        >
          <IconLoader className="w-8 h-8 text-blue-500" />
        </motion.div>
        <h2 className="text-2xl font-bold text-gray-800">
          Unleashing Digital Magic!
        </h2>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {
          "Hold onto your pixels! Our AI wizards are conjuring up insights faster than you can say 'SEO'. In just 5-10 seconds (perfect for a quick dance break), we'll reveal the secrets hiding in your website. Ready to see if your site is more Hogwarts or Mordor?"
        }
      </p>
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-2">Current Spell:</p>
        <span className="font-semibold text-blue-600 text-lg animate-pulse">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </motion.div>
  );
}
