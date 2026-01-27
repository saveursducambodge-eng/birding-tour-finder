import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import samnangGuidePortrait from "@/assets/samnang-guide-portrait.jpg";
import sekiGuidePortrait from "@/assets/seki-guide-portrait.jpg";
import ladongGuidePortrait from "@/assets/ladong-guide-portrait.jpg";
import chamnanGuidePortrait from "@/assets/chamnan-guide-portrait.jpg";
interface Guide {
  name: string;
  role: string;
  image: string;
  description: string[];
}
const guides: Guide[] = [{
  name: "Sok Samnang",
  role: "Lead Guide",
  image: samnangGuidePortrait,
  description: ["Hello friends, my name is Sok Samnang is Lead Guide. I am an official English-speaking guide certified by the Cambodian Ministry of Tourism. I have been working as both a Bird Guide and Temple Guide for over 11 years. I have 5 years of experience as a bird guide with Sam Veasna Conservation Tours and 3 years with the Cambodia Bird Guide Association. Currently, I work as a freelance guide in Cambodia.", "I have extensive experience organizing tours across Cambodia, including Bird Watching Tours and Temple Tours that highlight the country's rich wildlife, support conservation efforts, and promote our cultural heritage.", "Our country is home to some of the world's rarest and most endangered birds, including the Giant Ibis, White-shouldered Ibis, Bengal Florican, and Greater Adjutant. These magnificent species face increasing threats from habitat loss and climate change. By joining a birdwatching tour, you're not only experiencing the excitement of discovering these incredible birds — you're also contributing to their protection and supporting the conservation of Cambodia's unique natural heritage.", "At Cambodia Bird Watching Tours, every journey supports both people and wildlife. Join us, and help ensure that these rare species and their habitats continue to thrive for years to come."]
}, {
  name: "So Seki",
  role: "Senior Guide",
  image: sekiGuidePortrait,
  description: ["Hello my name is So Seki, I'm an English speaking guide. I have been working as a bird guide for over 12 years. I had 4 years of experience as a bird guide with tour companies and searching groups. Currently, I work as a freelance guide in Cambodia.", "I have extensive experiences organizing tours across Cambodia including bird watching tours that highlight the country's rich wildlife, support conservation efforts, and promote our cultural heritage.", "Our country is home to some of the world's rarest and most endangered birds including Giant Ibis, White-shouldered Ibis, Bengal Florican, and Greater Adjutant. These magnificent species face increasing threats from habitat loss and climate change. By joining a bird watching tour, you are not only experiencing the excitement of discovering these incredible birds — you are also contributing to their protection and supporting the conservation of Cambodia's unique natural heritage.", "At Cambodia Bird Watching Tours, every journey supports both people and wildlife. Join us and help ensure that these rare species and their habitats continue to thrive for years to come."]
}, {
  name: "So Seki",
  role: "Guide",
  image: ladongGuidePortrait,
  description: ["Hello, my name is So Seki. I am an English-speaking bird guide with over 12 years of experience. I spent four years working as a bird guide with tour companies and research groups, and I currently work as a freelance guide in Cambodia.", "I have extensive experience organizing tours across Cambodia, including bird-watching tours that highlight the country's rich wildlife, support conservation efforts, and promote our cultural heritage. Cambodia is home to some of the world's rarest and most endangered birds, including the Giant Ibis, White-shouldered Ibis, Bengal Florican, and Greater Adjutant. These magnificent species face increasing threats from habitat loss and climate change.", "By joining a bird-watching tour, you not only experience the excitement of discovering these incredible birds, but you also contribute to their protection and support the conservation of Cambodia's unique natural heritage.", "In Cambodia, every bird-watching journey supports both people and wildlife. Join us and help ensure that these rare species and their habitats continue to thrive for years to come."]
}, {
  name: "Chamnan",
  role: "Guide",
  image: chamnanGuidePortrait,
  description: ["Hello friends, my name is Chamnan. I am an official English-speaking guide certified by the Cambodian Ministry of Tourism. I have been working as both a Bird Guide and Temple Guide for over 11 years.", "I have 5 years of experience as a bird guide with Sam Veasna Conservation Tours and 3 years with the Cambodia Bird Guide Association. Currently, I work as a freelance guide in Cambodia.", "I have extensive experience organizing tours across Cambodia, including Bird Watching Tours and Temple Tours that highlight the country's rich wildlife, support conservation efforts, and promote our cultural heritage.", "Our country is home to some of the world's rarest and most endangered birds, including the Giant Ibis, White-shouldered Ibis, Bengal Florican, and Greater Adjutant. These magnificent species face increasing threats from habitat loss and climate change. By joining a birdwatching tour, you're not only experiencing the excitement of discovering these incredible birds — you're also contributing to their protection and supporting the conservation of Cambodia's unique natural heritage.", "At Cambodia Bird Watching Tours, every journey supports both people and wildlife. Join us, and help ensure that these rare species and their habitats continue to thrive for years to come."]
}];
const AboutPage = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                Meet Our Guides
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our experienced team of certified bird guides brings passion, expertise, and deep knowledge of Cambodia's wildlife to every tour.
              </p>
            </div>

            {/* Guides Grid */}
            <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
              {guides.map((guide, index) => <div key={guide.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative">
                      <img src={guide.image} alt={`${guide.name} - ${guide.role}`} className="w-full max-w-sm lg:max-w-md mx-auto rounded-2xl shadow-float object-cover aspect-[3/4]" />
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg">
                        <p className="font-semibold text-center">{guide.name}</p>
                        <p className="text-sm text-center opacity-90">{guide.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">
                      {guide.name}
                    </h2>
                    <p className="text-accent font-medium mb-4">{guide.role}</p>
                    
                    <div className="prose prose-sm sm:prose max-w-none text-muted-foreground space-y-4">
                      {guide.description.map((paragraph, pIndex) => <p key={pIndex} className="">
                          {paragraph}
                        </p>)}
                    </div>
                  </div>
                </div>)}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 lg:mt-20">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </section>
      </main>
    </div>;
};
export default AboutPage;