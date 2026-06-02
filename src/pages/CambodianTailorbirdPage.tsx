import SpeciesLandingPage from "@/components/SpeciesLandingPage";

const CambodianTailorbirdPage = () => (
  <SpeciesLandingPage
    slug="cambodian-tailorbird"
    title="Cambodian Tailorbird | Phnom Penh Endemic Birding | Pearaing Conservation Tours"
    metaDescription="See Cambodia's only endemic bird — the Cambodian Tailorbird — in the scrub around Phnom Penh. Guided half-day endemic birding tours with Pearaing Conservation Tours."
    h1="Cambodian Tailorbird — The Country's Only Endemic Bird"
    intro="The Cambodian Tailorbird (Orthotomus chaktomuk) was only described to science in 2013. It is Cambodia's sole endemic bird species, restricted to dense scrub on the floodplain around Phnom Penh — making it a must-see target for any visiting birder."
    whereToSee="Dense humid scrub on the floodplains around Phnom Penh, in particular sites in Kandal and along the Tonle Sap / Mekong confluence."
    bestTime="Year-round. Birds are resident and territorial; early morning is most productive."
    sections={[
      {
        heading: "About the Cambodian Tailorbird",
        body: "A small warbler-like bird with a rufous cap, white throat and grey-olive body. Best located by its loud, repetitive call from the heart of dense scrub. It went undetected by science despite living next to one of Southeast Asia's largest cities — a reminder of how much remains to be learned about Cambodia's birdlife.",
      },
      {
        heading: "Where to see the Cambodian Tailorbird",
        body: "Pearaing Conservation Tours's local guides work a small set of reliable sites in the scrub belt around Phnom Penh. Half a morning is usually enough, often combined with Asian Golden Weaver and other floodplain specialities.",
      },
      {
        heading: "Best time for a Cambodian Tailorbird tour",
        body: "Any time of year. Sightings are most reliable shortly after dawn before traffic noise rises and before the day heats up.",
      },
      {
        heading: "Tours that include the Cambodian Tailorbird",
        body: "Available as a half-day tour from Phnom Penh, or as a stop on grand 10–15 day birding itineraries that combine Phnom Penh with Mekong river birding and Mondulkiri.",
      },
      {
        heading: "Conservation",
        body: "The species' tiny range is under heavy pressure from urban expansion. Tourism revenue is a direct argument for keeping remaining scrub patches intact rather than clearing them for development.",
      },
    ]}
    relatedTour={{ label: "Book a Cambodian Tailorbird tour", href: "/tours" }}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Cambodian Tailorbird — Cambodia's only endemic bird",
      about: "Cambodian Tailorbird (Orthotomus chaktomuk)",
      author: { "@type": "Organization", name: "Pearaing Conservation Tours" },
      mainEntityOfPage: "https://pearaing.com/cambodian-tailorbird",
    }}
  />
);

export default CambodianTailorbirdPage;