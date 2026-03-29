import Navigation from "@/components/Navigation";

const TempleToursPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Temple Tours
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore Cambodia's magnificent temples and cultural heritage sites
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-muted-foreground text-center text-lg">
              Welcome to Siem Reap!
            </p>
            <p className="text-muted-foreground text-center text-lg mt-6">
              Siem Reap is widely known as the gateway to the majestic Angkor Wat, one of the most iconic and sought-after destinations not only in Cambodia but across Southeast Asia. Rich in history, culture, and local charm, Siem Reap offers an unforgettable experience for every traveler. Whether you're here to explore the ancient temples of Angkor or simply soak up the vibrant local atmosphere, Siem Reap has something truly special to offer.
            </p>
          </div>
        </section>

        {/* Angkor Wat One Day Tour */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              One Day Tour to Angkor Wat
            </h2>
            <div className="bg-card rounded-xl shadow-md overflow-hidden">
              {/* Photo placeholder */}
              <div className="w-full h-64 md:h-80 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground italic">Photo coming soon</p>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground text-lg text-center italic">
                  Tour details coming soon. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TempleToursPage;
