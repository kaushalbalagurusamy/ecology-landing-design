
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const BirdPhotography: React.FC = () => {
  // Using the uploaded bird photos with proper locations and species names
  const birdPhotos = [
    {
      id: 1,
      src: "/lovable-uploads/00fa7101-1999-44ae-becf-6db71ab85b94.png",
      location: "Five Fields, Lexington, MA",
      year: "2023",
      title: "Mourning Dove"
    },
    {
      id: 2,
      src: "/lovable-uploads/23b506a4-221a-4a24-a8b3-2ce3a4249812.png",
      location: "Five Fields, Lexington, MA",
      year: "2023",
      title: "Mourning Dove"
    },
    {
      id: 3,
      src: "/lovable-uploads/efca8acd-10f4-4382-a0eb-6b0976832440.png",
      location: "Five Fields, Lexington, MA",
      year: "2023",
      title: "Northern Cardinal"
    },
    {
      id: 4,
      src: "/lovable-uploads/e9c0e106-16f9-4fcf-a88f-98ce4e2a82d8.png",
      location: "Five Fields, Lexington, MA",
      year: "2023",
      title: "American Robin"
    },
    {
      id: 5,
      src: "/lovable-uploads/df7ba847-190c-4ea0-adf0-a6192ee500d0.png",
      location: "Five Fields, Lexington, MA",
      year: "2023",
      title: "Blue Jay"
    },
    {
      id: 6,
      src: "/lovable-uploads/41958124-5d8d-4bdb-b850-4b4d5e803885.png",
      location: "Five Fields, Lexington, MA",
      year: "2023",
      title: "Mourning Dove"
    },
    {
      id: 7,
      src: "/lovable-uploads/8e0d743b-58f5-44da-a897-ae980a6031fa.png",
      location: "Five Fields, Lexington, MA",
      year: "2023",
      title: "Red-bellied Woodpecker"
    },
    {
      id: 8,
      src: "/lovable-uploads/ee62ec04-18e6-4afe-a3c4-ade6e2d71e6d.png",
      location: "Florida",
      year: "2025",
      title: "Wild Turkey"
    },
    {
      id: 9,
      src: "/lovable-uploads/a8259caf-bc66-4719-ae4c-29f8cd2d6235.png",
      location: "Lake Tahoe",
      year: "2022",
      title: "Red-tailed Hawk"
    }
  ];

  const locationGroups = {
    "All Locations": birdPhotos,
    "Five Fields, MA": birdPhotos.filter(photo => photo.location.includes("Five Fields")),
    "Berkeley, CA": birdPhotos.filter(photo => photo.location.includes("Berkeley")),
    "Lake Tahoe": birdPhotos.filter(photo => photo.location.includes("Lake Tahoe")),
    "Florida": birdPhotos.filter(photo => photo.location.includes("Florida"))
  };

  return (
    <section id="bird-photography" className="section-padding bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-6">Bird Photography</h2>
          <p className="text-lg text-muted-foreground">
            A collection of bird photographs taken by Jayme Banks between 2022-2025. These images were captured in various locations including Five Fields in Lexington, Massachusetts, Berkeley, California, and during trips to Lake Tahoe and Florida.
          </p>
        </div>

        <Tabs defaultValue="All Locations" className="w-full mb-8">
          <TabsList className="mx-auto flex justify-center mb-6">
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
                        {photo.location} | {photo.year}
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
            Bird photography offers a unique window into the interconnectedness that Relational-Cultural Theory explores. Through capturing these moments, Jayme has documented the rich diversity of avian life across different ecosystems.
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
