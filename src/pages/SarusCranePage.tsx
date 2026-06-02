import SpeciesLandingPage from "@/components/SpeciesLandingPage";

const SarusCranePage = () => (
  <SpeciesLandingPage
    slug="sarus-crane"
    title="Sarus Crane Cambodia | Ang Trapeang Thmor Birding | Pearaing Conservation Tours"
    metaDescription="See the Sarus Crane, the world's tallest flying bird, at Ang Trapeang Thmor and the Tonle Sap floodplain. Guided Sarus Crane birding tours from Siem Reap."
    h1="Sarus Crane in Cambodia — The World's Tallest Flying Bird"
    intro="The Eastern Sarus Crane (Antigone antigone sharpii) stands over 1.7 m tall and is one of Southeast Asia's most iconic waterbirds. Cambodia holds the largest remaining population, with key sites at Ang Trapeang Thmor and the Tonle Sap floodplain grasslands."
    whereToSee="Ang Trapeang Thmor Sarus Crane Reserve (Banteay Meanchey), the Bengal Florican Conservation Areas north of Tonle Sap, and seasonal wetlands in the Mekong Delta lowlands."
    bestTime="December to March, when birds gather at receding wetlands to feed. Dawn visits are best for activity and photography."
    sections={[
      {
        heading: "About the Sarus Crane",
        body: "Adults are tall, grey-bodied cranes with a bare red head and upper neck. Pairs mate for life and perform spectacular synchronised duets. The Eastern subspecies is classified as Vulnerable, with fewer than 1,000 birds remaining in the lower Mekong region — Cambodia is its global stronghold.",
      },
      {
        heading: "Where to see the Sarus Crane in Cambodia",
        body: "Ang Trapeang Thmor is the most reliable site, a former Khmer Rouge reservoir now managed as a community reserve. Birds gather to roost on the open water and feed on the surrounding rice and grassland margins. Outside the dry season, look on the Tonle Sap grasslands together with Bengal Florican.",
      },
      {
        heading: "Best time for a Sarus Crane tour",
        body: "December to March offers the highest counts and the best chance of seeing displaying pairs. By April–May birds disperse to scattered breeding sites in the northern plains.",
      },
      {
        heading: "Tours that target the Sarus Crane",
        body: "Pearaing Conservation Tours runs a dedicated full-day Sarus Crane tour from Siem Reap to Ang Trapeang Thmor, and includes the species in longer Tonle Sap and Northern Plains itineraries.",
      },
      {
        heading: "Conservation",
        body: "Sarus Cranes depend on traditional rice farming and undrained seasonal wetlands. Tour fees support the community-managed reserve at Ang Trapeang Thmor and ranger patrols across key breeding sites.",
      },
    ]}
    relatedTour={{ label: "Book a Sarus Crane tour", href: "/tours" }}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Sarus Crane in Cambodia",
      about: "Eastern Sarus Crane (Antigone antigone sharpii)",
      author: { "@type": "Organization", name: "Pearaing Conservation Tours" },
      mainEntityOfPage: "https://pearaing.com/sarus-crane",
    }}
  />
);

export default SarusCranePage;