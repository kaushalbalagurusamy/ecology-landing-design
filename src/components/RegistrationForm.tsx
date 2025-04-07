
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { ArrowUpRight } from "lucide-react";

const RegistrationForm: React.FC = () => {
  const { toast } = useToast();

  const handleRegisterClick = () => {
    // Open TicketSpice in a new tab
    window.open("https://ticketspice.com/rct-workshop", "_blank", "noopener,noreferrer");
    
    toast({
      title: "Redirecting to secure registration",
      description: "You're being redirected to our ticketing partner to complete your registration.",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3">Registration Options</h3>
          <RadioGroup defaultValue="in-person">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in-person" id="in-person" />
                <Label htmlFor="in-person" className="font-normal">In-Person ($895)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="virtual" id="virtual" />
                <Label htmlFor="virtual" className="font-normal">Virtual ($495)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student" className="font-normal">Student Rate ($395)</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dietaryNeeds">
            Dietary Restrictions or Allergies
            <span className="ml-1 text-sm text-muted-foreground">(We'll collect this during checkout)</span>
          </Label>
          <Textarea 
            id="dietaryNeeds"
            placeholder="Please list any food allergies or dietary restrictions so we can accommodate your needs"
            disabled
          />
          <p className="text-sm text-muted-foreground">This information will be collected during the checkout process.</p>
        </div>
        
        <div className="bg-accent-50 p-4 rounded-md">
          <h4 className="font-medium mb-2">Important Registration Information</h4>
          <ul className="text-sm space-y-2">
            <li>• 50% deposit required to secure your spot</li>
            <li>• Early bird pricing ends April 30, 2025</li>
            <li>• Cancellations before June 1, 2025 receive a full refund minus a $50 processing fee</li>
            <li>• Dietary needs & allergies will be accommodated</li>
          </ul>
        </div>
        
        <Button 
          onClick={handleRegisterClick} 
          className="w-full mt-4 bg-primary-500 hover:bg-primary-600 flex items-center justify-center"
        >
          Continue to Registration <ArrowUpRight className="ml-1" size={16} />
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          Registration is processed securely through TicketSpice.<br />
          You'll be able to select your payment option and provide additional information.
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
