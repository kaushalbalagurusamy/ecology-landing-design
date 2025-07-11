
import React from "react";
import { Leaf, Users, HeartHandshake, Shield, Recycle } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  definition?: string;
  citation?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, definition, citation }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border border-accent-200 transition-all duration-300 hover:shadow-lg">
    <div className="bg-primary-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    {definition && (
      <div className="mb-3">
        <p className="text-muted-foreground">
          <i>{definition}</i> {citation && <span>{citation}</span>}.
        </p>
      </div>
    )}
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
            This unique workshop bridges Relational Cultural Theory's focus on growth-fostering relationships with the profound insights of relational ecology, creating a holistic framework for healing both human communities and the natural world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FeatureCard 
            icon={<HeartHandshake className="h-8 w-8 text-primary-500" />}
            title="Relational-Cultural Theory" 
            definition="A model of psychological development emphasizing that human growth and wellbeing depend on forming mutually empathic, authentic, and growth-fostering connections"
            citation="(Jordan, 2008)"
            description="Explore how RCT can be applied to ecological awareness and understanding, creating pathways for authentic connections and mutual empathy."
          />
          <FeatureCard 
            icon={<Leaf className="h-8 w-8 text-primary-500" />}
            title="Relational Ecology" 
            definition="An approach that recognizes the inherent interconnectedness and interdependence between humans and all living systems, emphasizing relationship as the foundation of ecological health"
            citation="(Banks, 2025)"
            description="Discover how relational ecology connects to relational and ecological movement, transforming our relationship with nature and each other."
          />
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-primary-500" />}
            title="Resiliency" 
            definition="The capacity of individuals, communities, and ecosystems to maintain core functions and adapt to change while retaining their essential identity and relationships"
            citation="(Banks, 2025)"
            description="Learn how Relational-Cultural Theory can inform and strengthen resiliency initiatives in both human communities and natural systems."
          />
          <FeatureCard 
            icon={<Recycle className="h-8 w-8 text-primary-500" />}
            title="Sustainability" 
            definition="The practice of meeting present needs while ensuring future generations can thrive, through balanced relationships between ecological, social, and economic systems"
            citation="(Banks, 2025)"
            description="Understand how RCT principles can inform sustainability initiatives and create lasting positive impacts across interconnected systems."
          />
        </div>

        {/* Citations section directly under the four definitions */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h4 className="font-medium mb-3">Citations</h4>
          <p className="text-muted-foreground">
            Jordan, J. V. (2008). Recent Developments in Relational-Cultural Theory. <em>Women & Therapy, 31</em>(2–4), 1–4. https://doi.org/10.1080/02703140802145540
          </p>
        </div>

        <div className="bg-accent-100 rounded-xl p-8 md:p-12">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="space-y-2">
                <img 
                  src="/lovable-uploads/9869df99-007b-41cb-b0e2-807a1f3a9b10.png" 
                  alt="Five Fields Pond in Lexington, Massachusetts" 
                  className="rounded-lg w-full h-80 object-cover"
                />
                <p className="text-xs text-muted-foreground italic text-center">
                  Five Fields Pond, Lexington, Massachusetts. Photo: Jayme Banks, 2023.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="heading-md mb-4">Why This Workshop Matters</h3>
              <p className="mb-4">
                In a world experiencing both social disconnection and ecological crisis, we need frameworks that heal the perceived separation between humans and the natural world. This workshop provides both theory and practice for those seeking to foster deeper connections.
              </p>
              <p>
                Whether you work as a local leader, educator, or community organizer, understanding the parallels between human relationships and ecological systems offers powerful tools for transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
