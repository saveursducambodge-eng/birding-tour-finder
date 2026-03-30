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

        {/* Handpicked Destinations */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Handpicked Destinations
            </h2>
            <p className="text-muted-foreground text-lg">
              Coming soon — our curated selection of Cambodia's most remarkable temple sites.
            </p>
          </div>
        </section>

        {/* Featured Tours */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Tours
            </h2>
            <p className="text-muted-foreground text-lg">
              Coming soon — explore our top temple tour experiences.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TempleToursPage;
