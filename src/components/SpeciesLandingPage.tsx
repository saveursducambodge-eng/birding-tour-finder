import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Binoculars, MapPin, Calendar, Leaf } from "lucide-react";

export interface SpeciesSection {
  heading: string;
  body: string;
}

export interface SpeciesLandingProps {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whereToSee: string;
  bestTime: string;
  sections: SpeciesSection[];
  relatedTour: { label: string; href: string };
  jsonLd?: Record<string, unknown>;
}

const SpeciesLandingPage = ({
  slug,
  title,
  metaDescription,
  h1,
  intro,
  whereToSee,
  bestTime,
  sections,
  relatedTour,
  jsonLd,
}: SpeciesLandingProps) => {
  const canonical = `https://pearaing.com/${slug}`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        {jsonLd && (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )}
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <section className="bg-gradient-nature py-16 sm:py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                {h1}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {intro}
              </p>
            </div>
          </section>

          <section className="py-12 px-4">
            <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border bg-card p-6">
                <MapPin className="w-6 h-6 text-nature-forest mb-3" />
                <h2 className="font-serif text-lg font-semibold mb-2">Where to see</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{whereToSee}</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <Calendar className="w-6 h-6 text-nature-forest mb-3" />
                <h2 className="font-serif text-lg font-semibold mb-2">Best time to visit</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{bestTime}</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <Leaf className="w-6 h-6 text-nature-forest mb-3" />
                <h2 className="font-serif text-lg font-semibold mb-2">Conservation</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every PEARAING tour directly supports community-based protection of these
                  habitats and the species that depend on them.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 px-4">
            <div className="container mx-auto max-w-3xl space-y-10">
              {sections.map((s) => (
                <article key={s.heading}>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-primary mb-4">
                    {s.heading}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                    {s.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-3xl text-center space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-primary">
                Ready to see it for yourself?
              </h2>
              <p className="text-muted-foreground">
                Join a small-group or private birding tour led by a local PEARAING guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to={relatedTour.href}>
                  <Button size="lg">
                    <Binoculars className="w-4 h-4 mr-2" />
                    {relatedTour.label}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Plan a private tour
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default SpeciesLandingPage;