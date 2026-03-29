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
          </div>
        </section>
      </div>
    </div>
  );
};

export default TempleToursPage;
