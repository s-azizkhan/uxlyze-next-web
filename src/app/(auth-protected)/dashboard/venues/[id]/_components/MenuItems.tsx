"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { IconCategory } from "@tabler/icons-react";

import GenerateMenuSection from "./GenerateMenuSection";
import {
  Edit02Icon,
  Leaf01Icon,
  PlusSignIcon,
  ShopSignIcon,
  ToolsIcon,
  ViewIcon,
} from "hugeicons-react";
import Link from "next/link";

export default function MenuItems({ venueId }: { venueId: string }) {
  const menuItems: any[] = [
    {
      id: 1,
      name: "Grilled Salmon",
      price: 18.99,
      description: "Fresh salmon fillet grilled to perfection",
      category: "Main Course",
      tags: ["Grilled", "Salmon", "Healthy"],
      image: "/images/placeholder.svg",
      isFeatured: true,
      isAvailable: false,
      isVegetarian: true,
    },
    {
      id: 2,
      name: "Vegetarian Pasta",
      price: 14.99,
      description: "Penne pasta with mixed vegetables in a creamy sauce",
      category: "Main Course",
      tags: ["Vegetarian", "Pasta", "Creamy"],
      image: "/images/placeholder.svg",
      isFeatured: false,
      isAvailable: true,
      isVegetarian: false,
    },
    // Add more menu items as needed
  ];
  return (
    <>
      <div className="flex items-center justify-between mb-6 lg:flex-row flex-col">
        <h2 className="text-3xl font-semibold text-primary">Menu Items</h2>
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <Link href={`/dashboard/venues/${venueId}/categories`}>
            <Button variant="secondary">
              <ToolsIcon className="mr-2 h-4 w-4" /> Manage Categories
            </Button>
          </Link>

          <Button className="bg-primary hover:bg-primary-dark transition-colors">
            <PlusSignIcon className="mr-2 h-4 w-4" /> Add Menu Item
          </Button>
        </div>
      </div>
      {menuItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative"
            >
              <CardContent className="p-0">
                {item.image ? (
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      layout="fill"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <CardTitle className="absolute bottom-4 left-4 text-white text-xl font-bold">
                      <span className="flex items-center">
                        <ShopSignIcon className="mr-2 h-5 w-5" />
                        {item.name}
                      </span>
                    </CardTitle>
                  </div>
                ) : (
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <CardTitle className="text-xl font-bold text-gray-500">
                      <span className="flex items-center">
                        <ShopSignIcon className="mr-2 h-6 w-6" />
                        {item.name}
                      </span>
                    </CardTitle>
                  </div>
                )}
                <div className="p-4">
                  <div className="flex flex-wrap items-center mb-3">
                    <Badge variant="secondary" className="mr-2 mb-1">
                      {item.category}
                    </Badge>
                    {item.tags &&
                      item.tags.map((tag: string, index: number) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="mr-1 mb-1 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4 h-10">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="text-lg bg-primary/10 text-primary font-bold px-3 py-1"
                    >
                      ${item.price.toFixed(2)}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      {item.isVegetarian && (
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 text-xs"
                        >
                          <Leaf01Icon className="mr-2 h-4 w-4" />
                          Vegetarian
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-primary hover:text-white hover:bg-primary transition-colors flex-grow group"
                    >
                      <Edit02Icon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 hover:text-white hover:bg-red-500 transition-colors flex-grow group"
                    >
                      <IconTrash className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
              <div className="absolute top-2 right-2 opacity-85 lg:opacity-50 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full p-2 bg-white/80 hover:bg-white"
                  title="Quick view"
                >
                  <ViewIcon className="h-4 w-4 text-primary" />
                </Button>
              </div>
              <div className="absolute top-2 left-2 flex items-center space-x-2">
                {item.isFeatured && (
                  <Badge variant="secondary" className="text-xs">
                    Featured
                  </Badge>
                )}
                {!item.isAvailable && (
                  <Badge variant={"destructive"} className="text-xs">
                    {item.isAvailable ? "Available" : "Not Available"}
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <GenerateMenuSection />
      )}
    </>
  );
}
