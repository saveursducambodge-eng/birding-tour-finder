import SpeciesLandingPage from "@/components/SpeciesLandingPage";

const BirdingSiemReapPage = () => (
  <SpeciesLandingPage
    slug="birding-siem-reap"
    title="Bird Watching Siem Reap | Angkor & Tonle Sap Birding Tours | Pearaing Conservation Tours"
    metaDescription="Bird watching tours from Siem Reap — Angkor temple birding, Prek Toal waterbirds, Bengal Florican grasslands and Northern Plains specialities. Local expert guides."
    h1="Bird Watching in Siem Reap — Cambodia's Best Birding Base"
    intro="Siem Reap is the perfect base for birding in Cambodia. Within a few hours' drive you can be inside the Angkor temple forests, on Tonle Sap Lake at Prek Toal, on the Bengal Florican grasslands, or heading north for Giant Ibis at Russey Treb. Pearaing Conservation Tours runs half-day, full-day and multi-day birding tours from Siem Reap with local expert guides."
    whereToSee="Angkor Archaeological Park (forest birds and temple specialities), Prek Toal Bird Sanctuary (waterbirds), Ang Trapeang Thmor (Sarus Crane), Bengal Florican Conservation Areas, Kompong Khleang and Kampong Phluk (floating-village birding) and the Northern Plains."
    bestTime="November to April is the main birding season. December–February for waterbirds and cranes; February–April for Bengal Florican display and dry-forest concentrations."
    sections={[
      {
        heading: "Why bird from Siem Reap",
        body: "Few birding bases on Earth offer this much variety in one direction from town: lowland evergreen forest at Angkor, the world's largest waterbird colony at Prek Toal, the last grassland bustards at the Tonle Sap edge, and the dry deciduous dipterocarp forests of the Northern Plains with Giant Ibis, White-shouldered Ibis and Green Peafowl.",
      },
      {
        heading: "Half-day and full-day tours from Siem Reap",
        body: "Half-day Angkor temple birding pairs Hainan Blue Flycatcher, Alexandrine Parakeet and Stork-billed Kingfisher with the temples themselves. Full-day options include Prek Toal, Ang Trapeang Thmor for Sarus Crane, and Bengal Florican grasslands.",
      },
      {
        heading: "Multi-day birding from Siem Reap",
        body: "Three- to five-day extensions reach Russey Treb (Giant Ibis), Western Siem Pang and Preah Vihear. Longer 10–15 day grand tours add the Mekong river for Mekong Wagtail and Mondulkiri / Keo Seima for Green Peafowl and Yellow-cheeked Gibbon.",
      },
      {
        heading: "What to bring",
        body: "Binoculars (8× or 10×), neutral-coloured clothing, sun protection and water. Pearaing Conservation Tours supplies a spotting scope, transport, permits and an experienced local guide on every tour.",
      },
      {
        heading: "Booking and pricing",
        body: "Tours run as small private groups. Get in touch for tailored quotes — pricing depends on tour length, number of birders and accommodation level.",
      },
    ]}
    relatedTour={{ label: "See all birding tours", href: "/tours" }}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: "Bird Watching Tours from Siem Reap",
      description:
        "Half-day, full-day and multi-day bird watching tours from Siem Reap, Cambodia, covering Angkor, Tonle Sap, Bengal Florican grasslands and the Northern Plains.",
      provider: {
        "@type": "Organization",
        name: "Pearaing Conservation Tours",
      },
      url: "https://pearaing.com/birding-siem-reap",
    }}
  />
);

export default BirdingSiemReapPage;