import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import chamnanGuidePortrait from "@/assets/chamnan-guide-portrait.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 lg:mb-8">
                  About Us
                </h1>
                
                <div className="prose prose-sm sm:prose prose-lg max-w-none text-muted-foreground space-y-4 sm:space-y-6">
                  <p>
                    Hello friends, My name is Chamnan. I am an official English-speaking guide certified by the Cambodian Ministry of Tourism. I have been working as both a Bird Guide and Temple Guide for over 11 years. I have 5 years of experience as a bird guide with Sam Veasna Conservation Tours and 3 years with the Cambodia Bird Guide Association. Currently, I work as a freelance guide in Cambodia.
                  </p>
                  
                  <p>
                    I have extensive experience organizing tours across Cambodia, including Bird Watching Tours and Temple Tours that highlight the country's rich wildlife, support conservation efforts, and promote our cultural heritage.
                  </p>
                  
                  <p>
                    Our country is home to some of the world's rarest and most endangered birds, including the Giant Ibis, White-shouldered Ibis, Bengal Florican, and Greater Adjutant. These magnificent species face increasing threats from habitat loss and climate change. By joining a birdwatching tour, you're not only experiencing the excitement of discovering these incredible birds — you're also contributing to their protection and supporting the conservation of Cambodia's unique natural heritage.
                  </p>
                  
                  <p className="font-medium text-primary">
                    At Cambodia Bird Watching Tours, every journey supports both people and wildlife. Join us, and help ensure that these rare species and their habitats continue to thrive for years to come.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-8">
                  <Link to="/tours">
                    <Button size="lg" variant="nature">
                      View Our Tours
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src={chamnanGuidePortrait}
                    alt="Chamnan - Professional Cambodia birding guide"
                    className="w-full max-w-sm lg:max-w-md mx-auto rounded-2xl shadow-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;