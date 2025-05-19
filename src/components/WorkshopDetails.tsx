
import React from "react";
import { Calendar, Clock, MapPin, Users, Umbrella, Leaf, BookOpen, Palette, Heart } from "lucide-react";
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
                  <p className="text-muted-foreground">Five Fields Common Land</p>
                  <p className="text-muted-foreground mb-2">21 Barberry Road, Lexington, MA 02421</p>
                  
                  <p className="font-medium text-foreground">Minnesota Location:</p>
                  <p className="text-muted-foreground">Duluth/Cotton Nature Center</p>
                  <p className="text-muted-foreground">Duluth/Cotton, MN</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Umbrella className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Weather Preparedness</h4>
                  <p className="text-muted-foreground">Participants should come prepared with weather-appropriate clothing (raincoats, umbrellas, or layers). In case of rain, the workshop will continue outdoors. A small weather tent will be available for art-making and surveys. For extreme weather (thunder/lightning), we'll relocate to a nearby shelter until it's safe to resume.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Who Should Attend</h4>
                  <p className="text-muted-foreground">Local Leaders, Educators, Community Organizers, and anyone interested in relational growth and ecological connection</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="heading-md mb-6">Workshop Highlights</h3>
            
            <div className="flex items-center gap-3 mb-5">
              <Leaf className="h-5 w-5 text-primary-500" />
              <h4 className="font-bold text-lg">Elemental Exploration</h4>
            </div>
            <p className="text-muted-foreground mb-6 pl-8">
              Journey through five elements—air, water, earth, fire, and ether—with guided practices that foster deep connection to nature and community through the lens of Relational-Cultural Theory.
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
              <h4 className="font-bold text-lg">Creative Expression & Mindful Practice</h4>
            </div>
            <p className="text-muted-foreground mb-6 pl-8">
              Engage in breathwork, movement exercises, forest bathing, creative arts, and reflective practices that deepen your relationship with yourself, others, and the natural world.
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
              time="10:00 AM - 10:45 AM EST / 9:00 AM - 9:45 AM CST" 
              title="Opening Circle & Intention Setting" 
              description="Begin with a storytelling circle to foster connection, establish a relational baseline, and promote relational safety among participants."
            />
            
            <ScheduleItem 
              time="10:45 AM - 11:30 AM EST / 9:45 AM - 10:30 AM CST" 
              title="Air Element" 
              description="Engage in breathwork exercises and storytelling to connect with the air element and explore its relationship to our lives and communities."
            />
            
            <Separator className="my-4" />
            
            <ScheduleItem 
              time="11:30 AM - 12:15 PM EST / 10:30 AM - 11:15 AM CST" 
              title="Water Element" 
              description="Move towards a body of water for movement exercises including mirroring and paired walking that encourage flow states and connection."
            />
            
            <ScheduleItem 
              time="12:15 PM - 1:00 PM EST / 11:15 AM - 12:00 PM CST" 
              title="Lunch Break" 
              description="Enjoy a locally sourced, sustainable meal while connecting with fellow participants in an informal setting."
            />
            
            <Separator className="my-4" />
            
            <ScheduleItem 
              time="1:00 PM - 1:45 PM EST / 12:00 PM - 12:45 PM CST" 
              title="Earth Element" 
              description="Participate in a forest bathing walk coupled with grounding practices like barefoot walking to deepen your connection with the earth."
            />
            
            <ScheduleItem 
              time="1:45 PM - 2:30 PM EST / 12:45 PM - 1:30 PM CST" 
              title="Fire Element" 
              description="Gather around a bonfire (or candles if weather is not suitable) for creative expression through coloring, drawing, or other artistic activities."
            />
            
            <Separator className="my-4" />
            
            <ScheduleItem 
              time="2:30 PM - 2:45 PM EST / 1:30 PM - 1:45 PM CST" 
              title="Break" 
              description="A short break to refresh and prepare for the final element."
            />
            
            <ScheduleItem 
              time="2:45 PM - 3:30 PM EST / 1:45 PM - 2:30 PM CST" 
              title="Ether Element" 
              description="Engage in quiet reflection time with access to relevant books for inspiration and journaling, beginning with a reading from 'Into the Ether' by Kate Banks."
            />
            
            <ScheduleItem 
              time="3:30 PM - 4:00 PM EST / 2:30 PM - 3:00 PM CST" 
              title="Commitment Ritual & Closing Circle" 
              description="Create personal action plans, participate in a closing ritual, and complete the post-workshop survey to reflect on your experience."
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
              <p>Through creative expression and storytelling, participants develop both personal and group action plans for sustainability and resiliency in their lives and communities.</p>
            </div>
            
            <div className="bg-white/80 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-primary-700 mb-3">Actionable Commitments</h4>
              <p>The commitment ritual ensures that insights translate into tangible, ongoing practices that honor our reciprocal relationship with the natural world and foster mutual care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
