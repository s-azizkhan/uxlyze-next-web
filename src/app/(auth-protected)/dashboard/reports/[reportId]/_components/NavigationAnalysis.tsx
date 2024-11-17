import { Card, CardContent } from "@/components/ui/card";
import { ILink, INavigationAnalysis } from "@/types/analysis-result";
import { ExternalLink, Link } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function NavigationAnalysis({
  navigation,
}: {
  navigation: INavigationAnalysis;
}) {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Navigation Analysis</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="internal">
            <AccordionTrigger className="text-lg font-semibold">
              Internal Links ({navigation.internalLinksCount})
            </AccordionTrigger>
            <AccordionContent>
              <LinkList
                links={navigation.linkStructure.internalLinks}
                isInternal
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="external">
            <AccordionTrigger className="text-lg font-semibold">
              External Links ({navigation.externalLinksCount})
            </AccordionTrigger>
            <AccordionContent>
              <LinkList links={navigation.linkStructure.externalLinks} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

function LinkList({
  links,
  isInternal = false,
}: {
  links: ILink[];
  isInternal?: boolean;
}) {
  return (
    <ul className="space-y-3 mt-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.absoluteLink}
            target={isInternal ? "_self" : "_blank"}
            rel={isInternal ? "" : "noopener noreferrer"}
            className="flex items-center p-3 rounded-lg transition-colors bg-gray-50 hover:bg-gray-100"
          >
            {isInternal ? (
              <Link className="w-5 h-5 mr-3 flex-shrink-0 text-blue-600" />
            ) : (
              <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0 text-green-600" />
            )}
            <span className="text-sm font-medium break-all text-gray-800">
              {link.text || link.href}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
