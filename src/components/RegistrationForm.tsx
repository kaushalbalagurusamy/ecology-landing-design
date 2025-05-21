
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Link } from "lucide-react";

const RegistrationForm: React.FC = () => {
  const { toast } = useToast();
  
  const handleRegisterClick = () => {
    // Open Google Form in a new tab - Replace with your actual Google Form URL
    window.open("https://forms.gle/YourGoogleFormURL", "_blank", "noopener,noreferrer");
    
    toast({
      title: "Opening registration form",
      description: "You'll receive a confirmation email with your registration ID after submitting the form.",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3">Registration Options (Testing Phase)</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
            <p className="text-sm text-yellow-800">
              🔍 This is a test registration system using Google Forms. 
              Your submission will be processed for free during this testing phase.
              After submitting, you'll receive an email confirmation with your registration ID.
            </p>
          </div>
          
          <div className="mb-6">
            <Label className="text-base font-medium mb-2 block">Location</Label>
            <RadioGroup defaultValue="massachusetts">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="massachusetts" id="massachusetts" />
                  <Label htmlFor="massachusetts" className="font-normal">Five Fields Common Land, Lexington, Massachusetts (June 22, 10am-4pm EST)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="minnesota" id="minnesota" />
                  <Label htmlFor="minnesota" className="font-normal">Afternro, 510 West College Street, Duluth, Minnesota 55811 (June 22, 10am-4pm CST)</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <Label className="text-base font-medium mb-2 block">Attendance Type</Label>
          <RadioGroup defaultValue="in-person">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in-person" id="in-person" />
                <Label htmlFor="in-person" className="font-normal">In-Person (Testing - Free)</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dietaryNeeds">Dietary Restrictions or Allergies</Label>
          <Textarea 
            id="dietaryNeeds"
            placeholder="Please list any food allergies or dietary restrictions so we can accommodate your needs"
            disabled
          />
          <p className="text-sm text-muted-foreground">This information will be collected in the registration form.</p>
        </div>
        
        <div className="bg-accent-50 p-4 rounded-md">
          <h4 className="font-medium mb-2">Test Registration Information</h4>
          <ul className="text-sm space-y-2">
            <li>• Registration is free during this testing phase</li>
            <li>• You'll need to bring weather-appropriate clothing (rain gear, layers, etc.)</li>
            <li>• You'll receive a confirmation email with your registration ID</li>
            <li>• Your dietary needs & allergies will be recorded</li>
            <li>• Location preference (Massachusetts or Minnesota) will be recorded</li>
            <li>• This is for testing purposes only - pricing will be updated later</li>
          </ul>
        </div>
        
        <Button 
          onClick={handleRegisterClick} 
          className="w-full mt-4 bg-primary-500 hover:bg-primary-600 flex items-center justify-center"
        >
          Continue to Test Registration <Link className="ml-1" size={16} />
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          Test registration is processed through Google Forms.<br />
          You'll receive a confirmation email after submitting the form.
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
