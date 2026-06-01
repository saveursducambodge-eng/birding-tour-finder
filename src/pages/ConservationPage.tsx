import Navigation from "@/components/Navigation";
import conservationImage from "@/assets/conservation-cambodia.jpg";
import conservationBird from "@/assets/conservation-bird.png";
import conservationEcotour from "@/assets/conservation-ecotour.png";
const ConservationPage = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${conservationImage})`
        }}>
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          
          <div className="relative z-10 container mx-auto text-center text-white px-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Bird Conservation and Community Support in Cambodia
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            {/* Responsible Tourism Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
              {/* Conservation Images */}
              <div className="space-y-6">
                <img alt="Endangered bird species in Cambodia grassland" className="w-full rounded-2xl shadow-float object-cover" src="/lovable-uploads/1e875d04-ec5d-4087-844f-2d46cee8614d.jpg" />
                <img alt="Eco-tourism boat tour with local guides and visitors" className="w-full rounded-2xl shadow-float object-cover" src="/lovable-uploads/0f6e4de3-1f73-40b6-9e51-f1868c109dbf.jpg" />
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
                    Responsible Tourism: Promoting Local Livelihoods
                  </h2>
                  <div className="prose prose-sm sm:prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                    <p className="text-justify">

The Pearaing Birding Trails, we believe that protecting nature goes hand in hand with supporting the people who live closest to it. Our birdwatching and ecotourism programs are designed to create sustainable income opportunities for local communities while preserving Cambodia's unique wildlife.</p>
                    <p className="text-justify">
                      By staying in community lodges, hiring local guides, and purchasing locally made products, our guests directly contribute to improving rural livelihoods. Together, we ensure that conservation benefits everyone — empowering communities, protecting endangered species, and fostering a future where people and nature thrive side by side.
                    </p>
                  </div>
                </div>
                
                <div>
                  
                  <div className="prose prose-sm sm:prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                    <p className="text-justify">Eco-Tourism  we have established sustainably funded ecotourism projects managed by local communities across Cambodia. These initiatives aim to create alternative livelihoods for people living within protected areas, helping reduce dependence on activities that harm wildlife and forests. By linking community development with conservation, these projects support a "no hunting, no deforestation" policy and promote long-term protection of Cambodia's unique biodiversity.


We believe that birdwatching tourism can play an important role in conservation. By working closely with local communities and conservation partners, our tours help support livelihoods and encourage the protection of important bird habitats.

When you travel with us, you are not only discovering amazing wildlife — you are also helping protect it.


                  </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Experts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Content */}
              <div className="space-y-6 lg:order-2">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
                    Birdwatching & Conservation in Cambodia
                  </h2>
                  <div className="prose prose-sm sm:prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                    <p className="text-justify">
                      ​We are a team of passionate local bird guides dedicated to sharing the beauty of Cambodia’s birdlife with visitors from around the world. With years of field experience across forests, wetlands, and grasslands, we specialize in leading authentic birdwatching tours to some of the country’s most important wildlife habitats.

Our work is based at the heart of Cambodia’s rich natural landscapes, where rare and endangered species still survive. From the flooded forests of Prek Toal to the remote Northern Plains, we guide guests to the best birding locations while promoting responsible and sustainable tourism.
                    </p>
                    <p className="text-justify">
                      ​Our Mission Our mission is simple: To provide high-quality birdwatching experiences,  To support wildlife conservation,  To create benefits for local communities,  To share knowledge about Cambodia’s natural heritage Every tour we lead helps raise awareness about protecting these natural areas. 
                    </p>
                    <p className="text-justify">
                      ​Why Travel With Us?

Experienced local bird guides

Deep knowledge of Cambodia’s birding sites

Focus on rare and endangered species

Friendly, flexible, and responsible service

Strong connection with local communities

We are committed to giving every guest a meaningful, educational, and memorable experience in the wild places of Cambodia.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Expert Guide Images */}
              <div className="space-y-6 lg:order-1">
                <img alt="Local expert bird guide with spotting scope in the field" className="w-full rounded-2xl shadow-float object-cover" src="/lovable-uploads/1e875d04-ec5d-4087-844f-2d46cee8614d.jpg" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default ConservationPage;