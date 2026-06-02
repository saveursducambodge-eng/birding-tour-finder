import SpeciesLandingPage from "@/components/SpeciesLandingPage";

const BengalFloricanPage = () => (
  <SpeciesLandingPage
    slug="bengal-florican"
    title="Bengal Florican Cambodia | Tonle Sap Grassland Birding | PEARAING"
    metaDescription="See the critically endangered Bengal Florican on Cambodia's Tonle Sap floodplain grasslands. Expert-guided birding tours from Siem Reap with PEARAING Birding Trails."
    h1="Bengal Florican — Cambodia's Last Grassland Bustard"
    intro="The Bengal Florican (Houbaropsis bengalensis) is one of the world's rarest bustards. Cambodia's Tonle Sap floodplain holds the largest remaining global population, and the grasslands north of Stoung and Kampong Thom are the most accessible place on Earth to see displaying males."
    whereToSee="The Bengal Florican Conservation Area on the seasonally flooded grasslands north of Tonle Sap (Kampong Thom and Siem Reap provinces). Visited as an early-morning detour from Siem Reap or as a stop on Russey Treb / Northern Plains tours."
    bestTime="Mid-February to early May, when adult males perform their dramatic black-and-white display flights above the grass at dawn and dusk."
    sections={[
      {
        heading: "About the Bengal Florican",
        body: "A medium-sized bustard, the male Bengal Florican is unmistakable in display: jet-black body, brilliant white wings, leaping vertically above the grass before parachuting down. Females are cryptic, sandy-brown and easily overlooked. The species is Critically Endangered, with fewer than 1,000 mature birds left worldwide. The Tonle Sap floodplain is its global stronghold.",
      },
      {
        heading: "Where to see the Bengal Florican in Cambodia",
        body: "The Bengal Florican Conservation Areas (BFCAs) on the north side of the Tonle Sap protect the species' core breeding habitat. PEARAING's local guides know the active display sites year to year and position visitors at first light for the best chance of seeing males in display flight, along with Sarus Crane, Manchurian Reed Warbler, Asian Golden Weaver and a long list of grassland specialists.",
      },
      {
        heading: "Best time for a Bengal Florican tour",
        body: "Display season runs roughly February to early May. Outside that window birds are still present but extremely difficult to see. Visit early — leaving Siem Reap around 04:30 — to be on the grassland for the dawn display.",
      },
      {
        heading: "Tours that include the Bengal Florican",
        body: "Pearaing Conservation Tours runs dedicated half-day and full-day Bengal Florican trips from Siem Reap, and includes the grassland as the opening morning of its 3-day Russey Treb / Giant Ibis tour. The site also features in 7- to 15-day Cambodia birding grand tours.",
      },
      {
        heading: "Conservation context",
        body: "Rice intensification and dry-season ploughing are the main threats to Bengal Florican habitat. Community-based conservation agreements pay local farmers to keep traditional grassland management. Tour revenue contributes directly to those agreements.",
      },
    ]}
    relatedTour={{ label: "Book a Bengal Florican tour", href: "/tours" }}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Bengal Florican in Cambodia",
      about: "Bengal Florican (Houbaropsis bengalensis)",
      author: { "@type": "Organization", name: "PEARAING Birding Trails" },
      mainEntityOfPage: "https://pearaing.com/bengal-florican",
    }}
  />
);

export default BengalFloricanPage;