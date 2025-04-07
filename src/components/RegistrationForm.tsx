
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const RegistrationForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    attendanceType: "in-person",
    dietaryNeeds: "",
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, attendanceType: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.profession || !formData.agreeToTerms) {
      toast({
        title: "Please complete all required fields",
        description: "All fields marked with * are required.",
        variant: "destructive"
      });
      return;
    }
    
    // This would normally connect to your backend API
    console.log("Form submitted:", formData);
    
    toast({
      title: "Registration submitted!",
      description: "Check your email for confirmation details.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      profession: "",
      attendanceType: "in-person",
      dietaryNeeds: "",
      agreeToTerms: false
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input 
              id="firstName" 
              name="firstName" 
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input 
              id="lastName" 
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name" 
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com" 
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="profession">
              Profession <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.profession} 
              onValueChange={(value) => handleSelectChange("profession", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your profession" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="therapist">Therapist/Counselor</SelectItem>
                <SelectItem value="educator">Educator</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="community_leader">Community Leader</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-4 md:col-span-2">
            <Label>
              How will you attend? <span className="text-destructive">*</span>
            </Label>
            <RadioGroup value={formData.attendanceType} onValueChange={handleRadioChange}>
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
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="dietaryNeeds">Dietary Restrictions or Needs</Label>
            <Input 
              id="dietaryNeeds" 
              name="dietaryNeeds" 
              value={formData.dietaryNeeds}
              onChange={handleChange}
              placeholder="Please list any dietary restrictions or needs" 
            />
          </div>
          
          <div className="md:col-span-2 flex items-start space-x-2 pt-4">
            <Checkbox 
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="agreeToTerms" className="font-normal text-muted-foreground">
              I agree to the terms and conditions, including the cancellation policy. I understand that a 50% deposit is required to secure my spot. <span className="text-destructive">*</span>
            </Label>
          </div>
        </div>
        
        <Button type="submit" className="w-full mt-8 bg-primary-500 hover:bg-primary-600">
          Register Now
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
