
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface SpeakerCardProps {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  isHost?: boolean;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ 
  name, 
  title, 
  bio, 
  imageSrc,
  isHost = false
}) => {
  return (
    <Card className={`overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${isHost ? 'border-primary-500 border-2' : ''}`}>
      <div className="flex flex-col md:flex-row">
        <div className={`${isHost ? 'md:w-2/5' : 'h-64'} overflow-hidden`}>
          <img 
            src={imageSrc} 
            alt={name} 
            className={`w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 ${isHost ? 'md:h-full' : ''}`}
          />
        </div>
        <div className={`p-6 ${isHost ? 'md:w-3/5' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            {isHost && (
              <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                Workshop Host
              </span>
            )}
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
          <p className="text-primary-500 font-medium mb-3">{title}</p>
          <p className="text-muted-foreground">{bio}</p>
        </div>
      </div>
    </Card>
  );
};

export default SpeakerCard;
