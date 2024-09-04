"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadIcon } from "lucide-react";
import { useState } from "react";
export default function GenerateMenuSection() {
  const [isGeneratingMenu, setIsGeneratingMenu] = useState(false);

  const handleGenerateMenu = async (formData: FormData) => {
    setIsGeneratingMenu(true);
    // Implement AI menu generation logic here
    // This is where you'd call your API to process the image and generate menu items
    console.log("Generating menu...", formData);
    setTimeout(() => {
      setIsGeneratingMenu(false);
      // Update menuItems state with generated items
    }, 2000);
  };
  return (
    <>
      <Card className="text-center py-12 border-dashed border-gray-300">
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">No menu items yet</h3>
          <p className="text-gray-600 mb-6">
            Generate a menu using AI or add items manually
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="rounded-xl"
                onClick={() => setIsGeneratingMenu(true)}
              >
                <UploadIcon className="mr-2 h-4 w-4" /> Generate Menu with AI
              </Button>
            </DialogTrigger>
            <DialogContent>
              <h2 className="text-2xl font-semibold mb-4">
                Generate Menu with AI
              </h2>
              <form action={handleGenerateMenu}>
                <div className="mb-4">
                  <Input
                    type="file"
                    accept="image/*"
                    name="menuImage"
                    required
                  />
                </div>
                <div className="mb-4">
                  <Textarea
                    placeholder="Enter any additional notes or instructions for the AI..."
                    name="notes"
                  />
                </div>
                <Button type="submit" disabled={isGeneratingMenu}>
                  {isGeneratingMenu ? "Generating..." : "Generate Menu"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </>
  );
}
