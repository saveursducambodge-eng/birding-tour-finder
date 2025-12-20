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
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">Pearaing Birding Trail</h2>
                  <div className="prose prose-sm sm:prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                    <p> Pearaing is named after a large natural dam that was historically believed to have served as a cooling pond for elephants. In 2015, the site was officially registered and recognized as an ecotourism destination under the name Pearaing Biodiversity Conservation Center (PBCC). Located in Sangkat Chreav, Krong Siem Reap—approximately 13 kilometers from the city center and 2 kilometers north of Tonle Sap Lake—Pearaing is one of the closest and most impressive birdwatching sites near Siem Reap. The area is easily accessible by bicycle, remork (tuk-tuk), van, car, or bus. Sangkat Chreav has been recognized by the Commune Chief as one of the safest and greenest areas in the province. With around 85% of local villagers earning their livelihoods from farming crops and vegetables, visitors are treated to scenic rural landscapes that contrast beautifully with temples and urban settings. Through the dedication, commitment, and conservation efforts of local villagers, authorities, and Buddhist monks—along with support from relevant government departments, the provincial governor, and the Cambodian government—Pearaing has developed into a strong and responsible ecotourism site in the region. Currently, 69 community members actively care for the area, dedicating their time, energy, and resources to ensure that birds, fish, and flooded forests are safe and well protected. A visit to PBCC not only offers a rich and immersive nature experience but also directly supports the local community and its conservation efforts.  


Eco-Tourism 
we have established sustainably funded ecotourism projects managed by local communities across Cambodia. These initiatives aim to create alternative livelihoods for people living within protected areas, helping reduce dependence on activities that harm wildlife and forests. By linking community development with conservation, these projects support a "no hunting, no deforestation" policy and promote long-term protection of Cambodia's unique biodiversity.</p>
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