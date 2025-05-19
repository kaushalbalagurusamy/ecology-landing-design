
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const BirdPhotography: React.FC = () => {
  // Sample bird photos - replace with actual uploaded bird photos
  const birdPhotos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Five Fields, Lexington, MA",
      year: "2023",
      title: "Eastern Bluebird"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1591608971358-f93643d31f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Berkeley, California",
      year: "2024",
      title: "Ruby-throated Hummingbird"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Lake Tahoe",
      year: "2022",
      title: "Stellar's Jay"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Florida",
      year: "2025",
      title: "Roseate Spoonbill"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Five Fields, Lexington, MA",
      year: "2023",
      title: "Northern Cardinal"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1555167725-91b873c88a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Berkeley, California",
      year: "2024",
      title: "Great Blue Heron"
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
    <section id="bird-photography" className="section-padding bg-gradient-to-b from-accent-50 to-green-50">
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
