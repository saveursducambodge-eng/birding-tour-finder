import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import samnangGuidePortrait from "@/assets/samnang-guide-portrait.jpg";
import sekiGuidePortrait from "@/assets/seki-guide-portrait.jpg";
import ladongGuidePortrait from "@/assets/ladong-guide-portrait.jpg";
interface Guide {
  name: string;
  surname: string;
  role: string;
  image: string;
  description: string[];
}
const guides: Guide[] = [{
  name: "Sok Samnang",
  surname: "Samnang",
  role: "Guide",
  image: samnangGuidePortrait,
  description: ["Hello friends, my name is Sok Samnang. I am an official English-speaking guide certified by the Cambodian Ministry of Tourism. I have been working as both a Bird Guide and Temple Guide for over 11 years, including 10 years guiding for Pearaing Biodiversity Conservation Center and 8 years of temple tours. Currently, I work as a freelance guide in Cambodia.", "I have extensive experience organizing tours across Cambodia, including Bird Watching Tours and Temple Tours that highlight the country's rich wildlife, support conservation efforts, and promote our cultural heritage.", "Our country is home to some of the world's rarest and most endangered birds, including the Giant Ibis, White-shouldered Ibis, Bengal Florican, and Greater Adjutant. These magnificent species face increasing threats from habitat loss and climate change. By joining a birdwatching tour, you're not only experiencing the excitement of discovering these incredible birds — you're also contributing to their protection and supporting the conservation of Cambodia's unique natural heritage.", "At Pearaing Conservation Tours, every journey supports both people and wildlife. Join us, and help ensure that these rare species and their habitats continue to thrive for years to come."]
}, {
  name: "So Seki",
  surname: "Seki",
  role: "Guide",
  image: sekiGuidePortrait,
  description: ["Hello, my name is So Seki, and I'm an English-speaking guide. I have been working as a bird guide for over 12 years, with 4 years guiding for tour companies and research groups. Currently, I work as a freelance guide in Cambodia.", "I have extensive experience organizing tours across Cambodia, including bird watching tours that highlight the country's rich wildlife, support conservation efforts, and promote our cultural heritage.", "Our country is home to some of the world's rarest and most endangered birds including Giant Ibis, White-shouldered Ibis, Bengal Florican, and Greater Adjutant. These magnificent species face increasing threats from habitat loss and climate change. By joining a bird-watching tour, you are not only experiencing the excitement of discovering these incredible birds — you are also contributing to their protection and supporting the conservation of Cambodia's unique natural heritage.", "At Pearaing Conservation Tours, every journey supports both people and wildlife. Join us and help ensure that these rare species and their habitats continue to thrive for years to come."]
}, {
  name: "Phanith Phut",
  surname: "Phut",
  role: "Guide",
  image: ladongGuidePortrait,
  description: ["Hello, my name is Phanith Phut. I am an English-speaking bird guide with over 8 years of experience. I spent four years working as a bird guide with tour companies and research groups, and I currently work as a freelance guide in Cambodia.", "I have extensive experience organizing tours across Cambodia, including bird-watching tours that highlight the country's rich wildlife, support conservation efforts, and promote our cultural heritage. Cambodia is home to some of the world's rarest and most endangered birds, including the Giant Ibis, White-shouldered Ibis, Bengal Florican, and Greater Adjutant. These magnificent species face increasing threats from habitat loss and climate change.", "By joining a bird-watching tour, you not only experience the excitement of discovering these incredible birds, but you also contribute to their protection and support the conservation of Cambodia's unique natural heritage.", "At Pearaing Conservation Tours, every bird-watching journey supports both people and wildlife. Join us and help ensure that these rare species and their habitats continue to thrive for years to come."]

}];
const AboutPage = () => {
  return <>
      <Helmet>
        <title>About Our Guides | Pearaing Conservation Tours Cambodia</title>
        <meta name="description" content="Meet our certified bird and temple guides with over a decade of experience. Officially registered with the Cambodian Ministry of Tourism." />
        <link rel="canonical" href="https://pearaing.com/about" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="mb-20 lg:mb-32 text-center">
            <h1 className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-primary mb-6 tracking-tight">
              Meet Our Guides
            </h1>
            <div className="w-24 h-px bg-nature-forest/40 mx-auto mb-8" />
            <p className="max-w-xl mx-auto text-nature-forest/80 text-base sm:text-lg leading-relaxed">
              Connecting you with the rhythms of Cambodia's wild places through the eyes of local experts.
            </p>
          </header>

          {/* Guide Profiles — Framed overlap */}
          <div className="space-y-32 lg:space-y-48">
            {guides.map((guide, index) => {
              const portraitLeft = index % 2 === 0;
              const accentBorder = ["border-primary", "border-nature-forest-light", "border-nature-forest"][index] ?? "border-primary";
              const cornerFrameColor = ["border-nature-forest-light/40", "border-nature-forest/40", "border-primary/40"][index] ?? "border-primary/30";
              const portraitTint = ["bg-nature-forest-light/15", "bg-nature-forest/10", "bg-primary/10"][index] ?? "bg-primary/10";

              return (
                <section
                  key={guide.name}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center"
                >
                  {/* Portrait column */}
                  <div
                    className={`lg:col-span-7 relative group ${
                      portraitLeft ? "lg:order-1" : "lg:order-2 flex lg:justify-end"
                    }`}
                  >
                    <div className={`aspect-[4/5] w-full overflow-hidden relative z-10 ${portraitTint}`}>
                      <img
                        src={guide.image}
                        alt={`${guide.name} — ${guide.role}, PEARAING Birding Trails`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Decorative corner frame */}
                    <div
                      className={`hidden lg:block absolute w-48 h-48 border ${cornerFrameColor} z-0 ${
                        portraitLeft ? "-bottom-8 -left-8" : "-top-8 -right-8"
                      }`}
                    />

                    {/* Large faded surname watermark */}
                    <h2
                      aria-hidden="true"
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 font-serif font-bold text-7xl xl:text-9xl text-primary/10 select-none z-0 whitespace-nowrap uppercase tracking-tight ${
                        portraitLeft ? "-right-12" : "-left-12"
                      }`}
                    >
                      {guide.surname}
                    </h2>
                  </div>

                  {/* Content card — overlaps portrait */}
                  <div
                    className={`lg:col-span-5 relative z-20 ${
                      portraitLeft ? "lg:order-2 lg:-ml-12" : "lg:order-1 lg:-mr-12"
                    }`}
                  >
                    <div
                      className={`bg-background p-8 lg:p-12 shadow-nature border-l-4 ${accentBorder} ${
                        portraitLeft ? "" : "lg:border-l-0 lg:border-r-4 lg:text-right"
                      }`}
                    >
                      <span className="block text-xs uppercase tracking-[0.4em] text-nature-forest font-bold mb-4">
                        {guide.role}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl text-primary font-semibold mb-6">
                        {guide.name}
                      </h3>
                      <div className="space-y-4 text-base leading-relaxed text-foreground/80 font-light">
                        {guide.description.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* CTA footer */}
          <div className="mt-24 lg:mt-32 pt-12 border-t border-nature-forest/15 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/tours">
              <Button size="lg" variant="nature" className="uppercase tracking-widest text-xs px-10">
                View Our Tours
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="uppercase tracking-widest text-xs px-10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div></>;
};
export default AboutPage;