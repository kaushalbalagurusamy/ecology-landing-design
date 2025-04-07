
import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  
  // Contact information to be copied
  const contactInfo = `
Email: jaymeb@sas.upenn.edu
Phone: (617) 966-9096
Address: 123 Forest Road, Burlington, VT 05401
  `;
  
  const handleCopyContactInfo = () => {
    navigator.clipboard.writeText(contactInfo.trim())
      .then(() => {
        toast({
          title: "Contact information copied",
          description: "The contact details have been copied to your clipboard.",
        });
      })
      .catch(() => {
        toast({
          title: "Failed to copy",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      });
  };

  return (
    <footer className="bg-primary-600 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">RCT: Deep Ecology Workshop</h3>
            <p className="text-primary-100">
              Bridging human connections and ecological awareness for a more balanced and sustainable future.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-accent-300 transition-colors">About the Workshop</a>
              </li>
              <li>
                <a href="#details" className="hover:text-accent-300 transition-colors">Workshop Details</a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-accent-300 transition-colors">Our Speakers</a>
              </li>
              <li>
                <a href="#register" className="hover:text-accent-300 transition-colors">Registration</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources & Contact</h3>
            <ul className="space-y-3 mb-5">
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Relational Cultural Theory</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Deep Ecology Resources</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Recommended Books</a>
              </li>
            </ul>

            <div className="mb-3">
              <p className="text-sm"><MapPin size={16} className="inline mr-2" /> 123 Forest Road, Burlington, VT 05401</p>
            </div>
            
            <Button 
              variant="secondary" 
              onClick={handleCopyContactInfo}
              className="flex items-center gap-2 bg-secondary text-white hover:bg-secondary/80"
            >
              <Copy size={16} />
              <span>Click to Copy Contact Details</span>
            </Button>
            <p className="text-xs mt-2 text-primary-200">Email and phone will be copied to your clipboard</p>
          </div>
        </div>
        
        <div className="border-t border-primary-500 pt-6 mt-8 text-center">
          <p className="text-primary-200">
            © {currentYear} RCT: Deep Ecology Workshop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
