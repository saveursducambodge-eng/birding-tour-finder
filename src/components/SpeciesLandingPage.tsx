import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Binoculars, MapPin, Calendar, Leaf } from "lucide-react";

export interface SpeciesSection {
  heading: string;
  body: string;
}

export interface SpeciesFaq {
  question: string;
  answer: string;
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
  faqs?: SpeciesFaq[];
  relatedTour: { label: string; href: string };
  jsonLd?: Record<string, unknown>;
  heroImage?: { url: string; alt: string };
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
  faqs = [],
  relatedTour,
  jsonLd,
  heroImage,
}: SpeciesLandingProps) => {
  const canonical = `https://pearaing.com/${slug}`;
  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;
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
        {faqJsonLd && (
          <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        )}
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <section className={`relative h-[60vh] min-h-[420px] flex items-center overflow-hidden ${heroImage ? "" : "bg-gradient-hero"}`}>
            {heroImage && (
              <img
                src={heroImage.url}
                alt={heroImage.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-nature-forest/85 via-nature-forest/45 to-transparent" />
            <div className="relative z-10 container mx-auto px-4 sm:px-8">
              <div className="max-w-2xl text-primary-foreground">
                <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-nature-gold mb-4 animate-fade-in">
                  {h1}
                </h1>
                <p className="text-base sm:text-lg leading-relaxed">{intro}</p>
              </div>
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

          {faqs.length > 0 && (
            <section className="py-12 px-4 bg-muted/20">
              <div className="container mx-auto max-w-3xl">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-primary mb-8 text-center">
                  Frequently asked questions
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq) => (
                    <article key={faq.question} className="rounded-2xl border bg-card p-6">
                      <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

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