import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Location01Icon } from "hugeicons-react";

interface IVenueDetails {
  id: string;
  name: string;
  type: string;
  address: string;
  description: string;
  image: string;
}

export default function VenueDetailsCard({ venue }: { venue: IVenueDetails }) {
  return (
    <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <Image
              src={venue.image}
              alt={venue.name}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48 hover:opacity-90 transition-opacity"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2 flex items-center">
              {venue.name}
              <Badge className="ml-2 bg-primary text-white">{venue.type}</Badge>
            </h2>
            <p className="text-gray-600 mb-4 flex items-center">
              <Location01Icon className="mr-2 h-4 w-4" />
              {venue.address}
            </p>
            <p className="text-gray-700">{venue.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
