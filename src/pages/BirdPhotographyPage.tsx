
import React from "react";
import Navbar from "@/components/Navbar";
import BirdPhotography from "@/components/BirdPhotography";
import Footer from "@/components/Footer";

const BirdPhotographyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-500">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <BirdPhotography />
      </div>
      <Footer />
    </div>
  );
};

export default BirdPhotographyPage;
