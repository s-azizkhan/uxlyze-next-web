import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ListStartIcon, SparkleIcon, SparklesIcon } from "lucide-react";

interface UrlSelectorProps {
  urls: string[];
  onSubmit: (selectedUrl: string) => void;
  onStartOver: () => void;
  loading: boolean;
}

export default function UrlSelector({
  urls,
  onSubmit,
  loading,
  onStartOver,
}: UrlSelectorProps) {
  const [selectedUrl, setSelectedUrl] = useState(urls[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUrls = useMemo(() => {
    return urls.filter((url) =>
      url.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [urls, searchQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div>
        <Label
          htmlFor="url-search"
          className="text-sm sm:text-base font-medium"
        >
          Search URLs
        </Label>
        <Input
          id="url-search"
          type="text"
          placeholder="Filter URLs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-1 max-w-sm"
        />
      </div>
      <div>
        <Label className="text-sm sm:text-base font-medium">
          Select URL for report generation ({filteredUrls.length} URLs)
        </Label>
        <ScrollArea className="h-[200px] sm:h-[300px] mt-2 border rounded-md overflow-y-auto">
          <RadioGroup
            value={selectedUrl}
            onValueChange={setSelectedUrl}
            className="p-2 sm:p-4 space-y-2"
          >
            {filteredUrls.map((url) => (
              <div
                key={url}
                className="flex items-center space-x-2 cursor-pointer py-2 sm:py-1"
              >
                <RadioGroupItem value={url} id={url} className="border-2" />
                <Label
                  htmlFor={url}
                  className={`text-xs sm:text-sm truncate hover:text-clip cursor-pointer w-full ${
                    selectedUrl === url ? "text-violet-500" : ""
                  }`}
                >
                  {url}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </ScrollArea>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-center w-full">
        <Button
          type="button"
          variant="outline"
          onClick={onStartOver}
          className=" text-sm sm:text-base order-2 lg:order-1"
        >
          <ListStartIcon className="mr-2" />
          Start Over
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className=" text-sm sm:text-base mb-2 order-1 lg:order-2"
        >
          {loading ? "Generating Report..." : `Generate Report`}
          <SparklesIcon className="ml-2" />
        </Button>
      </div>
    </form>
  );
}
