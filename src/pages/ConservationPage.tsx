import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import conservationHero from "@/assets/conservation-hero.jpg.asset.json";
import communityPlantingImage from "@/assets/conservation-community-planting.jpg.asset.json";
import travelGivesBackImage from "@/assets/conservation-travel-gives-back.png.asset.json";
import { Leaf, Users, Bird, ShieldCheck } from "lucide-react";
import { Leaf, Users, Bird, ShieldCheck } from "lucide-react";

const ConservationPage = () => {
  return (
    <>
      <Helmet>
        <title>Bird Conservation & Community Support | Pearaing Conservation Tours</title>
        <meta name="description" content="How Pearaing Conservation Tours protects Cambodia's birds and supports the communities who live alongside them through responsible ecotourism." />
        <link rel="canonical" href="https://pearaing.com/conservation" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-16">
          {/* HERO */}
          <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${conservationHero.url})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/90" />
            <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-16 sm:pb-24">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-6">
                <Leaf className="w-4 h-4" /> Our Commitment
              </span>
              <h1 className="font-serif italic text-primary-foreground text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] max-w-5xl">
                Where birds thrive,<br />communities flourish.
              </h1>
              <p className="mt-8 max-w-2xl text-base sm:text-lg text-primary-foreground/85 leading-relaxed">
                Conservation in Cambodia begins with the people who share the forest. Every trail we walk
                supports the rangers, guides, and villages that keep these wild places wild.
              </p>
            </div>
          </section>

          {/* STATS BAND */}
          <section className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { n: "12+", l: "Protected sites supported" },
                { n: "40", l: "Local guides employed" },
                { n: "100%", l: "Community-run lodges" },
                { n: "0", l: "Tolerance for hunting" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif italic text-4xl sm:text-5xl md:text-6xl mb-2">{s.n}</div>
                  <div className="text-xs sm:text-sm uppercase tracking-widest text-primary-foreground/70">{s.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 1 */}
          <section className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className="min-h-[420px] lg:min-h-[640px] bg-cover bg-center"
                style={{ backgroundImage: `url(${communityPlantingImage.url})` }}
                role="img"
                aria-label="Community members and visitors planting trees together for conservation"
              />
              <div className="bg-secondary px-6 sm:px-12 lg:px-20 py-16 lg:py-28 flex items-center">
                <div className="max-w-xl">
                  <span className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-5 inline-block">01 — Livelihoods</span>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary leading-tight mb-6">
                    Responsible tourism that lifts local lives.
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5">
                    At Pearaing Conservation Tours, protecting nature goes hand in hand with supporting the people
                    who live closest to it. Our programs create steady income for villages bordering Cambodia's
                    last great forests and wetlands.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    By staying in community lodges, hiring local guides, and buying locally made goods, our
                    guests turn every visit into a vote for conservation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PULL QUOTE */}
          <section className="bg-background py-24 sm:py-32">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <Bird className="w-10 h-10 text-primary/60 mx-auto mb-8" />
              <blockquote className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.15]">
                “No hunting. No deforestation.<br />Just birds, forests, and the people who protect them.”
              </blockquote>
              <div className="mt-10 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Our community pact
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-primary text-primary-foreground px-6 sm:px-12 lg:px-20 py-16 lg:py-28 flex items-center lg:order-2">
                <div className="max-w-xl">
                  <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70 mb-5 inline-block">02 — Ecotourism</span>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                    Community-run projects, protected for generations.
                  </h2>
                  <p className="text-base sm:text-lg text-primary-foreground/85 leading-relaxed mb-5">
                    We help establish sustainably funded ecotourism projects managed by local communities across
                    Cambodia — offering alternatives to hunting and logging within protected areas.
                  </p>
                  <p className="text-base sm:text-lg text-primary-foreground/85 leading-relaxed">
                    When you travel with us, you are not only discovering amazing wildlife — you are helping
                    protect it.
                  </p>
                </div>
              </div>
              <div
                className="min-h-[420px] lg:min-h-[640px] bg-cover bg-center lg:order-1"
                style={{ backgroundImage: `url(/lovable-uploads/1e875d04-ec5d-4087-844f-2d46cee8614d.jpg)` }}
                role="img"
                aria-label="Endangered bird species in Cambodia grassland"
              />
            </div>
          </section>

          {/* VALUES BAND */}
          <section className="bg-secondary py-20 sm:py-28">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center mb-16">
                <span className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-4 inline-block">Why travel with us</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
                  A team rooted in Cambodia's wild places.
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Users, t: "Local Expertise", d: "Cambodian Guides with years of field experience across forests, wetlands, and grasslands." },
                  { icon: Bird, t: "Rare & Endangered", d: "We seek the Giant Ibis, Bengal Florican, Mekong Wagtail and other species few will ever see." },
                  { icon: ShieldCheck, t: "Responsible Travel", d: "Small groups, low impact, and partnerships with the communities who steward each site." },
                ].map(({ icon: Icon, t, d }) => (
                  <div key={t} className="bg-background p-8 rounded-sm border border-border hover:shadow-float transition-shadow">
                    <Icon className="w-8 h-8 text-primary mb-5" />
                    <h3 className="font-serif text-2xl text-primary mb-3">{t}</h3>
                    <p className="text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-24 sm:py-32 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${travelGivesBackImage.url})` }}
            />
            <div className="absolute inset-0 bg-primary/85" />
            <div className="relative container mx-auto px-6 text-center text-primary-foreground max-w-3xl">
              <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
                Travel that gives back.
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/85 mb-10 leading-relaxed">
                Join a small-group birding journey and become part of Cambodia's conservation story.
              </p>
              <a
                href="/contact"
                className="inline-block bg-background text-primary px-10 py-4 text-sm uppercase tracking-[0.25em] hover:bg-secondary transition-colors"
              >
                Plan Your Trip
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ConservationPage;