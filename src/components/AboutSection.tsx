
import React from "react";
import { Leaf, Users, HeartHandshake } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border border-accent-200 transition-all duration-300 hover:shadow-lg">
    <div className="bg-primary-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-cream-500">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-6">Where Relational Connection Meets Ecological Wisdom</h2>
          <p className="text-lg text-muted-foreground">
            This unique workshop bridges Relational Cultural Theory's focus on growth-fostering relationships with the profound insights of Deep Ecology, creating a holistic framework for healing both human communities and the natural world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={<HeartHandshake className="h-8 w-8 text-primary-500" />}
            title="Relational Cultural Theory" 
            description="Explore how authentic connections and mutual empathy are central to psychological wellbeing and personal growth."
          />
          <FeatureCard 
            icon={<Leaf className="h-8 w-8 text-primary-500" />}
            title="Deep Ecology Principles" 
            description="Learn how ecological consciousness and understanding our place in the web of life transforms our relationship with nature."
          />
          <FeatureCard 
            icon={<Users className="h-8 w-8 text-primary-500" />}
            title="Integration & Practice" 
            description="Develop practical approaches for integrating relational awareness and ecological consciousness in therapeutic and educational settings."
          />
        </div>

        <div className="bg-accent-100 rounded-xl p-8 md:p-12">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Deer in nature representing deep ecology" 
                className="rounded-lg w-full h-80 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="heading-md mb-4">Why This Workshop Matters</h3>
              <p className="mb-4">
                In a world experiencing both social disconnection and ecological crisis, we need frameworks that heal the false separation between humans and the natural world. This workshop provides both theory and practice for those seeking to foster deeper connections.
              </p>
              <p>
                Whether you work as a therapist, educator, or community leader, understanding the parallels between human relationships and ecological systems offers powerful tools for transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
