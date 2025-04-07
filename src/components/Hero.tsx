
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-cream-500 to-accent-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-accent-300 text-primary-700 rounded-full text-sm font-medium mb-6">
            July 15, 2025 • In-Person & Virtual
          </span>
          
          <h1 className="heading-xl mb-6">
            <span className="block text-primary-500">Interconnected Empathy:</span>
            <span className="block">An Experiential Journey into</span>
            <span className="block">Deep Ecology & Mutualism</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto">
            Explore how all beings—human and non-human—are interconnected through this transformative one-day workshop for therapists, educators, and change-makers.
          </p>
          
          <p className="text-primary-600 font-medium mb-8 max-w-2xl mx-auto">
            Hosted by Dr. Jayme Banks & Dr. Connie Gunderson
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600">
              <a href="#register">Register Now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-500 text-primary-500">
              <a href="#details">Learn More</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="h-10 w-10 text-primary-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
