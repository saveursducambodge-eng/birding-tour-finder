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
                <img src={conservationBird} alt="Endangered bird species in Cambodia grassland" className="w-full rounded-2xl shadow-float object-cover" />
                <img src={conservationEcotour} alt="Eco-tourism boat tour with local guides and visitors" className="w-full rounded-2xl shadow-float object-cover" />
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
                    Responsible Tourism: Promoting Local Livelihoods
                  </h2>
                  <div className="prose prose-sm sm:prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                    <p>

The Pearaing Birding Trails, we believe that protecting nature goes hand in hand with supporting the people who live closest to it. Our birdwatching and ecotourism programs are designed to create sustainable income opportunities for local communities while preserving Cambodia's unique wildlife.</p>
                    <p>
                      By staying in community lodges, hiring local guides, and purchasing locally made products, our guests directly contribute to improving rural livelihoods. Together, we ensure that conservation benefits everyone — empowering communities, protecting endangered species, and fostering a future where people and nature thrive side by side.
                    </p>
                  </div>
                </div>
                
                <div>
                  
                  <div className="prose prose-sm sm:prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                    <p>       


. Eco-Tourism  we have established sustainably funded ecotourism projects managed by local communities across Cambodia. These initiatives aim to create alternative livelihoods for people living within protected areas, helping reduce dependence on activities that harm wildlife and forests. By linking community development with conservation, these projects support a "no hunting, no deforestation" policy and promote long-term protection of Cambodia's unique biodiversity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default ConservationPage;