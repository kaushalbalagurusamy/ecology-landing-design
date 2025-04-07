
import React from "react";
import { Calendar, Clock, MapPin, Users, Globe, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ScheduleItemProps {
  time: string;
  title: string;
  description: string;
  day: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, title, description, day }) => (
  <div className="p-4 border-l-2 border-primary-300 ml-4 relative">
    <div className="absolute w-3 h-3 bg-primary-500 rounded-full -left-[7px] top-6"></div>
    <span className="text-sm font-medium text-muted-foreground">{day} • {time}</span>
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
          <p className="text-lg text-muted-foreground">
            Join us for three transformative days of learning, connection, and practice at the intersection of relational and ecological wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-cream-500 p-8 rounded-lg">
            <h3 className="heading-md mb-6">Essential Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Dates</h4>
                  <p className="text-muted-foreground">July 15-17, 2025 (Tuesday-Thursday)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Times</h4>
                  <p className="text-muted-foreground">9:00 AM - 5:00 PM Daily (EST)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-muted-foreground">Harmony Retreat Center</p>
                  <p className="text-muted-foreground">123 Forest Road, Burlington, VT</p>
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
                  <p className="text-muted-foreground">Therapists, Counselors, Educators, Community Leaders, and anyone interested in relational growth and ecological connection</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-primary-500 mt-0.5" />
                <div>
                  <h4 className="font-bold">Certification</h4>
                  <p className="text-muted-foreground">18 Continuing Education Credits available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="heading-md mb-6">Workshop Highlights</h3>
            
            <div className="space-y-4">
              <ScheduleItem 
                day="Day 1"
                time="9:00 AM - 12:00 PM" 
                title="Foundations of Relational Cultural Theory" 
                description="Explore core concepts of connection, disconnection, and growth-fostering relationships in human development."
              />
              
              <ScheduleItem 
                day="Day 1"
                time="1:30 PM - 4:30 PM" 
                title="Introduction to Deep Ecology" 
                description="Understand the philosophical foundations of deep ecology and our interconnection with natural systems."
              />
              
              <Separator className="my-4" />
              
              <ScheduleItem 
                day="Day 2"
                time="9:00 AM - 12:00 PM" 
                title="Ecological Self & Relational Identity" 
                description="Explore how our sense of self expands through both human and more-than-human relationships."
              />
              
              <ScheduleItem 
                day="Day 2"
                time="1:30 PM - 4:30 PM" 
                title="Experiential Nature Connection" 
                description="Engage in guided outdoor practices that foster deeper awareness of ecological relationships."
              />
              
              <Separator className="my-4" />
              
              <ScheduleItem 
                day="Day 3"
                time="9:00 AM - 12:00 PM" 
                title="Integration & Clinical Applications" 
                description="Learn practical approaches for bringing relational and ecological awareness into therapeutic settings."
              />
              
              <ScheduleItem 
                day="Day 3"
                time="1:30 PM - 4:30 PM" 
                title="Community Building & Action" 
                description="Develop plans for implementing workshop insights in your professional context and community."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
