
import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink } from "lucide-react";

const RegistrationForm: React.FC = () => {
  const { toast } = useToast();
  
  const handleRegisterClick = () => {
    // Open Google Form in a new tab
    window.open("https://forms.gle/oaWpuNjTXKKXe9Br8", "_blank", "noopener,noreferrer");
    
    toast({
      title: "Opening registration form",
      description: "You'll be redirected to our Google Form registration page.",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3">Registration Options</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
            <p className="text-sm text-yellow-800">
              🔍 Register for our workshop by completing the form linked below. 
              You can choose between our Massachusetts or Minnesota locations.
            </p>
          </div>
          
          <div className="bg-accent-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Workshop Information</h4>
            <ul className="text-sm space-y-2">
              <li>• Five Fields Common Land, Lexington, Massachusetts (June 22, 10am-4pm EST)</li>
              <li>• Aftenro, 510 West College Street, Duluth, Minnesota 55811 (Date TBD, 10am-4pm CST)</li>
              <li>• You'll need to bring weather-appropriate clothing (rain gear, layers, etc.)</li>
              <li>• Please note any dietary needs or allergies in the registration form</li>
            </ul>
          </div>
        </div>
        
        <Button 
          onClick={handleRegisterClick} 
          className="w-full mt-4 bg-primary-500 hover:bg-primary-600 flex items-center justify-center"
        >
          Register Now <ExternalLink className="ml-1" size={16} />
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          Registration is processed through Google Forms.
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
