import SpeciesLandingPage from "@/components/SpeciesLandingPage";

const WhiteShoulderedIbisPage = () => (
  <SpeciesLandingPage
    slug="white-shouldered-ibis"
    title="White-shouldered Ibis Cambodia | Northern Plains Birding | Pearaing Conservation Tours"
    metaDescription="Track the critically endangered White-shouldered Ibis at Russey Treb and Western Siem Pang. Guided dry-forest birding tours with Pearaing Conservation Tours."
    h1="White-shouldered Ibis — Cambodia's Forgotten Forest Ibis"
    intro="The White-shouldered Ibis (Pseudibis davisoni) is one of the world's rarest waterbirds. Cambodia's northern dry forests hold over 80% of the global population, making it one of the most important countries on Earth for the species."
    whereToSee="Russey Treb (Kulen Promtep Wildlife Sanctuary), Western Siem Pang and seasonal waterholes across the Northern Plains, Preah Vihear and Stung Treng provinces."
    bestTime="November to May. Birds concentrate at the few remaining trapeangs (waterholes) during the dry season, making sightings reliable."
    sections={[
      {
        heading: "About the White-shouldered Ibis",
        body: "A large, dark ibis with a pale collar, white wing-shoulders visible in flight and a piercing yellow-red eye. It is Critically Endangered, with fewer than 1,000 mature birds left. Unlike most ibises it favours dry deciduous dipterocarp forest and seasonal pools rather than open wetlands.",
      },
      {
        heading: "Where to see the White-shouldered Ibis",
        body: "The most accessible site is Russey Treb, where local guides know active roost trees and waterholes. The Western Siem Pang Important Bird Area holds the largest population but requires more time to reach. Both sites combine well with Giant Ibis.",
      },
      {
        heading: "Best time to visit",
        body: "Late dry season (February–April) concentrates birds at shrinking waterholes. Tours start before dawn to be in position when ibises fly in to drink.",
      },
      {
        heading: "Tours that include the White-shouldered Ibis",
        body: "Pearaing Conservation Tours's 3-day Russey Treb tour targets both Giant Ibis and White-shouldered Ibis. Longer Northern Plains itineraries add Western Siem Pang for higher counts and additional dry-forest specialities.",
      },
      {
        heading: "Conservation",
        body: "Loss of trapeangs and dry forest is the main threat. Visitor fees fund waterhole maintenance, nest protection and community conservation agreements that keep traditional forest use intact.",
      },
    ]}
    relatedTour={{ label: "See the Northern Plains tour", href: "/tours" }}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "White-shouldered Ibis in Cambodia",
      about: "White-shouldered Ibis (Pseudibis davisoni)",
      author: { "@type": "Organization", name: "Pearaing Conservation Tours" },
      mainEntityOfPage: "https://pearaing.com/white-shouldered-ibis",
    }}
  />
);

export default WhiteShoulderedIbisPage;