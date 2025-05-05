
import React from "react";
import { Calendar, Clock, MapPin, Users, Globe, Award, Leaf, BookOpen, Palette, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ScheduleItemProps {
  time: string;
  title: string;
  description: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, title, description }) => (
  <div className="p-4 border-l-2 border-primary-300 ml-4 relative">
    <div className="absolute w-3 h-3 bg-primary-500 rounded-full -left-[7px] top-6"></div>
    <span className="text-sm font-medium text-muted-foreground">{time}</span>
    <h4 className="text-lg font-bold mt-1">{title}</h4>
    <p className="text-muted-foreground mt-1">{description}</p>
  </div>
);

const WorkshopDetails: React.FC = () => {
  return (
    <section id="details" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">Workshop Details</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Join us for a transformative day of learning, connection, and practice at the intersection of relational and ecological wisdom.
          </p>
          <h3 className="text-xl font-bold text-primary-500 mb-2">Relational Ecology, Sustainability, and Resiliency Through the Lens of Relational-Cultural Theory</h3>
          <p className="text-muted-foreground">
            Exploring how all beings—human and non-human—are interconnected through embodied, sensory, and shared experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-cream-500 p-8 rounded-lg">
            <h3 className="heading-md mb-6">Essential Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Date</h4>
                  <p className="text-muted-foreground">June 22, 2025 (Sunday)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Time</h4>
                  <p className="text-muted-foreground">Massachusetts: 10:00 AM - 4:00 PM (EST)</p>
                  <p className="text-muted-foreground">Minnesota: 9:00 AM - 3:00 PM (CST)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Locations</h4>
                  <p className="font-medium text-foreground mt-1">Massachusetts Location:</p>
                  <p className="text-muted-foreground">Lexington Community Center</p>
                  <p className="text-muted-foreground mb-2">Lexington, MA</p>
                  
                  <p className="font-medium text-foreground">Minnesota Location:</p>
                  <p className="text-muted-foreground">Duluth/Cotton Nature Center</p>
                  <p className="text-muted-foreground">Duluth/Cotton, MN</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Globe className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Virtual Option</h4>
                  <p className="text-muted-foreground">Live streaming available with interactive elements</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Who Should Attend</h4>
                  <p className="text-muted-foreground">Local Leaders, Educators, Community Organizers, and anyone interested in relational growth and ecological connection</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Certification</h4>
                  <p className="text-muted-foreground">6 Continuing Education Credits available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="heading-md mb-6">Workshop Highlights</h3>
            
            <div className="flex items-center gap-3 mb-5">
              <Leaf className="h-5 w-5 text-primary-500" />
              <h4 className="font-bold text-lg">Forest Bathing & Sensory Immersion</h4>
            </div>
            <p className="text-muted-foreground mb-6 pl-8">
              Experience guided forest bathing and sensory ecology exercises, fostering a deep, personal connection with the natural environment.
            </p>
            
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="h-5 w-5 text-primary-500" />
              <h4 className="font-bold text-lg">Storytelling & Relational Reflection</h4>
            </div>
            <p className="text-muted-foreground mb-6 pl-8">
              Share personal experiences in storytelling circles that highlight connections with nature and create visual expressions of your ecological relationships.
            </p>
            
            <div className="flex items-center gap-3 mb-5">
              <Palette className="h-5 w-5 text-primary-500" />
              <h4 className="font-bold text-lg">Hands-On Land Stewardship</h4>
            </div>
            <p className="text-muted-foreground mb-6 pl-8">
              Engage in interactive land projects like planting native species or creating pollinator gardens, while discussing how caring for land mirrors caring for one another.
            </p>
            
            <div className="flex items-center gap-3 mb-5">
              <Heart className="h-5 w-5 text-primary-500" />
              <h4 className="font-bold text-lg">Community Building & Action</h4>
            </div>
            <p className="text-muted-foreground pl-8">
              Create personal action plans and participate in a commitment ritual that symbolizes our collective pledge to foster mutual care for the earth and each other.
            </p>
          </div>
        </div>
        
        <div className="bg-accent-50 p-8 rounded-lg mb-16">
          <h3 className="heading-md text-center mb-8">Workshop Schedule</h3>
          
          <div className="space-y-2">
            <ScheduleItem 
              time="9:00 AM - 9:30 AM" 
              title="Opening Circle & Intention Setting" 
              description="Begin with an interactive welcome where each participant shares their personal connection to nature, followed by setting intentions for the day."
            />
            
            <ScheduleItem 
              time="9:30 AM - 10:30 AM" 
              title="Forest Bathing & Sensory Immersion" 
              description="Take a slow, mindful walk through nature with guided prompts to notice subtle sounds, textures, and smells—drawing on indigenous ecological knowledge."
            />
            
            <Separator className="my-4" />
            
            <ScheduleItem 
              time="10:45 AM - 12:00 PM" 
              title="Storytelling & Relational Reflection" 
              description="Share personal experiences in small groups and create visual 'life maps' that highlight the relationships—both human and ecological—that have shaped your journey."
            />
            
            <ScheduleItem 
              time="12:00 PM - 1:00 PM" 
              title="Sustainable Lunch & Informal Connection" 
              description="Enjoy a locally sourced, sustainable meal served outdoors when possible, with communal tables to encourage conversation."
            />
            
            <Separator className="my-4" />
            
            <ScheduleItem 
              time="1:00 PM - 2:30 PM" 
              title="Hands-On Land Stewardship" 
              description="Engage in activities such as planting native species or creating a small pollinator garden, while discussing how caring for the land mirrors caring for one another."
            />
            
            <ScheduleItem 
              time="2:45 PM - 4:00 PM" 
              title="Sensory Ecology Workshop & Eco-Art Expression" 
              description="Experience a silent nature walk focused on deeper sensory observation, followed by creating art that transforms your observations into creative expressions."
            />
            
            <Separator className="my-4" />
            
            <ScheduleItem 
              time="4:00 PM - 4:45 PM" 
              title="Community Storytelling & the H.O.M.E. Narrative" 
              description="Interview each other in pairs or small groups, capturing stories about personal encounters with environmental change and mutual care."
            />
            
            <ScheduleItem 
              time="4:45 PM - 5:00 PM" 
              title="Commitment Ritual & Closing Circle" 
              description="Create personal action plans and participate in a ritual sharing where each person contributes to a collective display symbolizing our shared commitment."
            />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary-100 to-accent-100 p-8 rounded-lg">
          <h3 className="heading-md text-center mb-6">Workshop Outcomes</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-primary-700 mb-3">Embodied Connection</h4>
              <p>Participants leave with a richer, sensory-based understanding of their bond with the environment and with each other.</p>
            </div>
            
            <div className="bg-white/80 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-primary-700 mb-3">Collective Narrative</h4>
              <p>Through storytelling and creative expression, a shared narrative of ecological and relational interdependence is formed.</p>
            </div>
            
            <div className="bg-white/80 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-primary-700 mb-3">Actionable Commitments</h4>
              <p>The commitment ritual ensures that insights translate into tangible, ongoing practices that support ecological stewardship and mutual care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
