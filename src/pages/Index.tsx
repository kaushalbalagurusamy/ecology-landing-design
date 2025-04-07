
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WorkshopDetails from "@/components/WorkshopDetails";
import SpeakerCard from "@/components/SpeakerCard";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index: React.FC = () => {
  const hostsData = [
    {
      name: "Jayme Banks, Ph.D.",
      title: "Relational Cultural Theory Specialist",
      bio: "Dr. Jayme Banks is a leading voice in Relational Cultural Theory, with over 15 years of experience integrating RCT into clinical practice, education, and community development. Her research focuses on the healing potential of authentic connection across diverse cultural contexts.",
      imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Connie Gunderson, Ph.D.",
      title: "Deep Ecology Practitioner & Educator",
      bio: "Dr. Connie Gunderson has devoted her career to exploring the intersection of environmental ethics, ecological consciousness, and social justice. Her innovative work bridges theoretical frameworks with practical applications for healing both human communities and the natural world.",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
                imageSrc={host.imageSrc}
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
              Registration is limited to ensure an optimal learning experience. Early bird pricing ends April 30th.
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
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-primary-500 rounded-full p-1 mr-2 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>6 Continuing Education Credits</span>
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
                    Contact us at <a href="mailto:info@rctworkshop.com" className="text-primary-500 hover:underline">info@rctworkshop.com</a> or call <a href="tel:+18025550123" className="text-primary-500 hover:underline">(802) 555-0123</a>
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

      <Footer />
    </div>
  );
};

export default Index;
