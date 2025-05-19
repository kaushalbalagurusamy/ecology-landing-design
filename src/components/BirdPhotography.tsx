
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const BirdPhotography: React.FC = () => {
  // Updated bird photos collection with corrected locations and without years
  const birdPhotos = [
    {
      id: 1,
      src: "/lovable-uploads/00fa7101-1999-44ae-becf-6db71ab85b94.png",
      location: "Five Fields, Lexington, MA",
      title: "Mourning Dove"
    },
    {
      id: 2,
      src: "/lovable-uploads/23b506a4-221a-4a24-a8b3-2ce3a4249812.png",
      location: "Five Fields, Lexington, MA",
      title: "Mourning Dove"
    },
    {
      id: 3,
      src: "/lovable-uploads/efca8acd-10f4-4382-a0eb-6b0976832440.png",
      location: "Five Fields, Lexington, MA",
      title: "Northern Cardinal"
    },
    {
      id: 4,
      src: "/lovable-uploads/e9c0e106-16f9-4fcf-a88f-98ce4e2a82d8.png",
      location: "Five Fields, Lexington, MA",
      title: "American Robin"
    },
    {
      id: 5,
      src: "/lovable-uploads/df7ba847-190c-4ea0-adf0-a6192ee500d0.png",
      location: "Five Fields, Lexington, MA",
      title: "Blue Jay"
    },
    {
      id: 6,
      src: "/lovable-uploads/41958124-5d8d-4bdb-b850-4b4d5e803885.png",
      location: "Five Fields, Lexington, MA",
      title: "Mourning Dove"
    },
    {
      id: 7,
      src: "/lovable-uploads/8e0d743b-58f5-44da-a897-ae980a6031fa.png",
      location: "Five Fields, Lexington, MA",
      title: "Red-bellied Woodpecker"
    },
    {
      id: 8,
      src: "/lovable-uploads/ee62ec04-18e6-4afe-a3c4-ade6e2d71e6d.png",
      location: "Five Fields, Lexington, MA",
      title: "Wild Turkey"
    },
    {
      id: 9,
      src: "/lovable-uploads/a8259caf-bc66-4719-ae4c-29f8cd2d6235.png",
      location: "Five Fields, Lexington, MA",
      title: "Red-tailed Hawk"
    },
    // Adding new images
    {
      id: 10,
      src: "/lovable-uploads/c9ba626c-772d-4ee5-a0c4-8b18daba0a57.png",
      location: "Monhegan Island, Maine",
      title: "Seagull"
    },
    {
      id: 11,
      src: "/lovable-uploads/e703ccde-e5e6-4ea9-b195-e85ff751df64.png",
      location: "Monhegan Island, Maine",
      title: "Pheasant"
    },
    {
      id: 12,
      src: "/lovable-uploads/48641650-8732-4571-a17b-9453734457b5.png",
      location: "Fresh Pond, Cambridge, MA",
      title: "Mute Swan"
    },
    {
      id: 13,
      src: "/lovable-uploads/5045e1b6-37cc-4856-8672-fdbcde79ddfc.png",
      location: "Andover, MA",
      title: "Ring-necked Duck"
    },
    {
      id: 14,
      src: "/lovable-uploads/b583ddec-12a0-4243-8bc5-0461b4b47c3a.png",
      location: "Andover, MA",
      title: "Hooded Merganser"
    },
    {
      id: 15,
      src: "/lovable-uploads/c85b627b-3272-444f-a979-f70b22312d28.png",
      location: "Wakodahatchee Wetlands, Delray Beach, Florida",
      title: "Anhinga"
    },
    {
      id: 16,
      src: "/lovable-uploads/7ef47c5d-1b40-4c3e-9f24-95208da24920.png",
      location: "Wakodahatchee Wetlands, Delray Beach, Florida",
      title: "Wood Stork"
    },
    {
      id: 17,
      src: "/lovable-uploads/68be49b9-b3cb-40e1-9aea-e2309ce5e48d.png",
      location: "Wakodahatchee Wetlands, Delray Beach, Florida",
      title: "Great Egret"
    },
    {
      id: 18,
      src: "/lovable-uploads/2f350aff-a328-45db-a318-033824452323.png",
      location: "Wakodahatchee Wetlands, Delray Beach, Florida",
      title: "Wood Stork - Close-up"
    },
    {
      id: 19,
      src: "/lovable-uploads/9c6462bf-4035-40e4-a6b8-71ce56cc7bf7.png",
      location: "Wakodahatchee Wetlands, Delray Beach, Florida",
      title: "Great Egret"
    }
  ];

  // Group photos by location
  const locationGroups = {
    "All Locations": birdPhotos,
    "Five Fields, MA": birdPhotos.filter(photo => photo.location.includes("Five Fields")),
    "Monhegan Island, ME": birdPhotos.filter(photo => photo.location.includes("Monhegan Island")),
    "Cambridge, MA": birdPhotos.filter(photo => photo.location.includes("Cambridge")),
    "Andover, MA": birdPhotos.filter(photo => photo.location.includes("Andover")),
    "Delray Beach, FL": birdPhotos.filter(photo => photo.location.includes("Wakodahatchee"))
  };

  return (
    <section id="bird-photography" className="section-padding bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-6">Bird Photography</h2>
          <p className="text-lg text-muted-foreground">
            A collection of avian photographs captured during my time living in Berkeley, California and Lexington, Massachusetts, 
            as well as during travels to various destinations across New England and Florida. These images represent moments 
            of connection with the natural world across diverse ecosystems.
          </p>
        </div>

        <Tabs defaultValue="All Locations" className="w-full mb-8">
          <TabsList className="mx-auto flex justify-center mb-6 flex-wrap">
            {Object.keys(locationGroups).map((location) => (
              <TabsTrigger key={location} value={location}>
                {location}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(locationGroups).map(([location, photos]) => (
            <TabsContent key={location} value={location}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo) => (
                  <Card key={photo.id} className="overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={photo.src} 
                        alt={photo.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{photo.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {photo.location}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="bg-white/80 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-primary-700">About These Photographs</h3>
          <p className="mb-3">
            Bird photography offers a unique window into the interconnectedness that Relational-Cultural Theory explores. Through capturing these moments across my homes in Massachusetts and California, and during travels to Maine and Florida, I've documented the rich diversity of avian life across different ecosystems.
          </p>
          <p>
            These images serve as visual reminders of the relationships we cultivate with the natural world and the importance of ecological mindfulness in our daily lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BirdPhotography;
