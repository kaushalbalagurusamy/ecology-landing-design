import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WorkshopDetails from "@/components/WorkshopDetails";
import SpeakerCard from "@/components/SpeakerCard";
import RegistrationForm from "@/components/RegistrationForm";
import BirdPhotography from "@/components/BirdPhotography";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index: React.FC = () => {
  const hostsData = [
    {
      name: "Jayme Banks, B.A.",
      title: "Workshop Facilitator",
      bio: "Jayme Banks is a recent graduate of the University of Pennsylvania, where she graduated with Honors in Psychology. She worked as a Clinical Research Coordinator for 3 years at the Massachusetts General Hospital and Beth Israel Deaconess Medical Center in the Neurology Department, specializing in research on meditation and brain health using electroencephalography (EEG). She is currently pursuing a Masters degree from Unity Environmental University in Environmental Studies and Sustainability, and she is developing this workshop alongside her collaborator, Connie Gunderson, for her senior year Capstone project. Jayme will be hosting the Lexington, Massachusetts location.",
      imageUrls: ["/lovable-uploads/f1583f19-60a0-4fc3-adcb-4fac8de24933.png", "/lovable-uploads/f8f37717-119b-4e75-9e8a-60678055dcc0.png"]
    },
    {
      name: "Connie Gunderson, PhD, LISW",
      title: "RCT Ecology Curriculum Developer",
      bio: "Dr. Connie Gunderson is a leader in the Relational-Cultural Theory world and community, and has developed the RCT Ecology curriculum, which extends the values and principles of relational-cultural theory to include the natural world. She is also the developer of the RCT Certification program, which offers training and certification for clinicians and therapists interested in applying the RCT model of human growth and development. She is affiliated with the College of St. Scholastica in Minnesota. Connie will be hosting the Minnesota location workshop. She will be joined by her three dogs, HokusPokus, Billie, and Joey, who will help facilitate the workshop as support animals.",
      imageUrls: ["/lovable-uploads/b63e7e57-00b7-4893-8542-e70dfdcfb811.png", "/lovable-uploads/1744195c-5093-45f6-9709-d3600a6e16d7.png"]
    }
  ];

  return (
    <div className="min-h-screen bg-cream-500">
      <Navbar />
      <Hero />
      <AboutSection />
      
      {/* Workshop Hosts Section */}
      <section id="hosts" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">Meet Your Hosts</h2>
            <p className="text-lg text-muted-foreground">
              This transformative workshop is led by two pioneering practitioners who have dedicated their careers to exploring the intersection of human relationships and ecological consciousness.
            </p>
          </div>

          <div className="space-y-8">
            {hostsData.map((host, index) => (
              <SpeakerCard 
                key={index}
                name={host.name}
                title={host.title}
                bio={host.bio}
                imageUrls={host.imageUrls}
                isHost={true}
              />
            ))}
          </div>
        </div>
      </section>
      
      <WorkshopDetails />

      {/* Registration Section */}
      <section id="register" className="section-padding bg-gradient-to-b from-white to-accent-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">Secure Your Spot</h2>
            <p className="text-lg text-muted-foreground">
              Registration is limited to ensure an optimal learning experience. Choose from our Massachusetts or Minnesota locations.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-full">
                <h3 className="heading-md mb-4">What's Included</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block bg-primary-500 rounded-full p-1 mr-2 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>A full day of immersive workshop experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary-500 rounded-full p-1 mr-2 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>All workshop materials and handouts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary-500 rounded-full p-1 mr-2 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Organic, locally-sourced lunch and refreshments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary-500 rounded-full p-1 mr-2 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Workshop completion acknowledgment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary-500 rounded-full p-1 mr-2 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Access to workshop materials online</span>
                  </li>
                </ul>
                
                <Separator className="my-8" />
                
                <div className="space-y-4">
                  <p className="font-medium">Have questions before registering?</p>
                  <p className="text-sm text-muted-foreground">
                    Contact us at <a href="mailto:jaymeb@sas.upenn.edu" className="text-primary-500 hover:underline">jaymeb@sas.upenn.edu</a> or call <a href="tel:+16179669096" className="text-primary-500 hover:underline">(617) 966-9096</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bird Photography Section */}
      <BirdPhotography />

      <Footer />
    </div>
  );
};

export default Index;
