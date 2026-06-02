import SpeciesLandingPage from "@/components/SpeciesLandingPage";

const MekongWagtailPage = () => (
  <SpeciesLandingPage
    slug="mekong-wagtail"
    title="Mekong Wagtail Cambodia | Kratie & Stung Treng Birding | Pearaing Conservation Tours"
    metaDescription="See the Mekong Wagtail, a Cambodia-Laos endemic, on the Mekong river around Kratie and Stung Treng. Guided river birding tours with Pearaing Conservation Tours."
    h1="Mekong Wagtail — A True Mekong River Endemic"
    intro="The Mekong Wagtail (Motacilla samveasnae) is restricted to the rocky channels of the Mekong river in Cambodia, Laos, Thailand and a small corner of Vietnam. Cambodia is the easiest country in which to see it, particularly on the river between Kratie and Stung Treng."
    whereToSee="Mekong river channels and rocky islets between Kratie, Sambor and Stung Treng. Best observed by boat at low water."
    bestTime="December to May, when low water exposes the rocky bars the species depends on. Also a peak season for Irrawaddy Dolphin."
    sections={[
      {
        heading: "About the Mekong Wagtail",
        body: "A slim, long-tailed wagtail with a distinctive black breast-band and bold white face pattern. Only described to science in 2001, its global range is essentially the middle Mekong system, making it a key target species for visiting birders.",
      },
      {
        heading: "Where to see the Mekong Wagtail in Cambodia",
        body: "The Mekong upstream of Kratie holds the most accessible population. Local boatmen know the rocky channels where pairs hold territory; the same trip usually delivers Green Peafowl, River Lapwing, River Tern and Irrawaddy Dolphin.",
      },
      {
        heading: "Best time for a Mekong Wagtail tour",
        body: "The dry season (December–May) exposes the channels and bars the species needs. By July–August the river is too high and birds disperse.",
      },
      {
        heading: "Tours that include the Mekong Wagtail",
        body: "The Mekong river extension and 10–15 day grand birding tours include a dedicated boat morning targeting Mekong Wagtail, dolphins and river specialities.",
      },
      {
        heading: "Conservation",
        body: "Hydropower development and sand mining are the main threats. Responsible river tourism helps demonstrate the economic value of keeping the channels and islets intact.",
      },
    ]}
    relatedTour={{ label: "See the Mekong river tour", href: "/tours" }}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Mekong Wagtail in Cambodia",
      about: "Mekong Wagtail (Motacilla samveasnae)",
      author: { "@type": "Organization", name: "Pearaing Conservation Tours" },
      mainEntityOfPage: "https://pearaing.com/mekong-wagtail",
    }}
  />
);

export default MekongWagtailPage;