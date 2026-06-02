import SpeciesLandingPage from "@/components/SpeciesLandingPage";

const GreenPeafowlPage = () => (
  <SpeciesLandingPage
    slug="green-peafowl"
    title="Green Peafowl Cambodia | Mekong & Mondulkiri Birding | Pearaing Conservation Tours"
    metaDescription="See the endangered Green Peafowl in Cambodia's Mekong riverine forests and Mondulkiri dry forests. Guided birding tours with Pearaing Conservation Tours."
    h1="Green Peafowl in Cambodia — Asia's Wild Peacock"
    intro="The Green Peafowl (Pavo muticus) is the world's most spectacular wild pheasant — taller, slimmer and far rarer than the familiar Indian Peafowl. Cambodia is one of the last places on Earth where wild populations can be seen reliably along the Mekong and in the eastern dry forests."
    whereToSee="Mekong riverine forests around Kratie and Stung Treng, the Western Siem Pang area, and the dry deciduous forests of Mondulkiri and Keo Seima."
    bestTime="January to April, during the dry season and male display peak. Dawn calls give away roost trees on Mekong sandbar islands."
    sections={[
      {
        heading: "About the Green Peafowl",
        body: "Males carry an iridescent green-bronze train up to 1.6 m long and a tall fan-shaped crest. Unlike Indian Peafowl, both sexes look similar from a distance. The species is Endangered globally, lost from most of mainland Southeast Asia but still hanging on in Cambodia and parts of Myanmar.",
      },
      {
        heading: "Where to see the Green Peafowl in Cambodia",
        body: "The Mekong riverine forest between Kratie and Stung Treng holds one of the largest remaining populations. Birds roost on forested sandbar islands and call at dawn. In the east, Keo Seima Wildlife Sanctuary offers dry-forest sightings together with Black-shanked Douc and Yellow-cheeked Gibbon.",
      },
      {
        heading: "Best time for a Green Peafowl tour",
        body: "Dry season (January–April) is best — males call most intensely and water levels expose sandbars used as display arenas. Wet-season visits are possible but birds are dispersed and harder to find.",
      },
      {
        heading: "Tours that target the Green Peafowl",
        body: "Pearaing Conservation Tours's Mekong birding extension and Mondulkiri / Keo Seima itineraries both target Green Peafowl, often combined with Irrawaddy Dolphin and Mekong Wagtail on the river.",
      },
      {
        heading: "Conservation",
        body: "Hunting for feathers and meat is the main threat. Tour fees support community ranger patrols on the Mekong islands and in Keo Seima.",
      },
    ]}
    relatedTour={{ label: "See Mekong & Mondulkiri tours", href: "/tours" }}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Green Peafowl in Cambodia",
      about: "Green Peafowl (Pavo muticus)",
      author: { "@type": "Organization", name: "Pearaing Conservation Tours" },
      mainEntityOfPage: "https://pearaing.com/green-peafowl",
    }}
  />
);

export default GreenPeafowlPage;