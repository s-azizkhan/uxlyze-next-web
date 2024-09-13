import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { IconSeo } from "@tabler/icons-react";
import { ISEO } from "@/types/analysis-result";

export default function SEOAnalysis({ seo }: { seo: ISEO }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center mb-6">
            <IconSeo className="w-8 h-8 mr-3 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              SEO Analysis
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(seo).map(([key, value], index) => (
              <AccordionItem key={key} value={`item-${index}`}>
                <AccordionTrigger className="text-left py-4 px-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-3">
                      {key}
                    </Badge>
                    <span className="text-sm text-gray-600 dark:text-gray-300 truncate max-w-[150px] sm:max-w-[300px]">
                      {value}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 py-3 text-sm text-gray-700 dark:text-gray-300">
                  {value}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </motion.section>
  );
}
