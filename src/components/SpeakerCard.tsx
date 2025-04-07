
import React from "react";

interface SpeakerCardProps {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, title, bio, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-primary-500 font-medium mb-3">{title}</p>
        <p className="text-muted-foreground">{bio}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
