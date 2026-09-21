import SpeciesLandingPage from "@/components/SpeciesLandingPage";
import prekToalHero from "@/assets/prek-toal-hero.jpg.asset.json";

const PrekToalPage = () => (
  <SpeciesLandingPage
    slug="prek-toal"
    heroImage={{ url: prekToalHero.url, alt: "Cormorants perched above Painted Storks and egrets at Prek Toal waterbird colony, Tonle Sap Lake" }}
    title="Prek Toal Bird Sanctuary | Tonle Sap Birding Tours | Pearaing Birding Trails"
    metaDescription="Take a Prek Toal bird sanctuary tour from Siem Reap to Tonle Sap's waterbird colony. See Spot-billed Pelican, Milky Stork and adjutants with local guides."
    h1="Prek Toal Bird Sanctuary — Tonle Sap's Great Waterbird Colony"
    intro="Prek Toal is the largest breeding colony of large waterbirds in mainland Southeast Asia. Set in the flooded forest at the north-western edge of Tonle Sap Lake, it is the most reliable place in the region to see Spot-billed Pelican, Milky Stork, Greater Adjutant, Asian Openbill and Oriental Darter at nest scale."
    whereToSee="Prek Toal Core Area, Tonle Sap Biosphere Reserve. Accessed by boat from Chong Kneas or Phnom Krom near Siem Reap — typically 90–120 minutes by motorboat."
    bestTime="December to April. Water levels drop, fish concentrate, and breeding colonies are at their most active. January–February is peak photography season."
    sections={[
      {
        heading: "About Prek Toal Bird Sanctuary",
        body: "Prek Toal sits inside the Tonle Sap Biosphere Reserve, a UNESCO-listed wetland of global importance. The flooded forest provides nesting platforms for thousands of large waterbirds, including the globally threatened Greater Adjutant, Lesser Adjutant, Spot-billed Pelican and Milky Stork. Visits are made with local community boatmen and birding guides, climbing observation towers built among the colony.",
      },
      {
        heading: "How to visit Prek Toal",
        body: "Most visitors join a guided day tour from Siem Reap. Pearaing Birding Trails departs around 05:00 to reach the colony at first light, when activity is at its peak. The trip includes the boat transfer, sanctuary permits, the colony visit with a local ranger-guide and lunch in the floating village.",
      },
      {
        heading: "Birds you can expect at Prek Toal",
        body: "Spot-billed Pelican, Milky Stork, Painted Stork, Asian Openbill, Greater & Lesser Adjutant, Oriental Darter, Black-headed Ibis, Grey-headed Fish Eagle, Mekong Wagtail and many heron and egret species. The flooded forest also supports kingfishers, bee-eaters and waterbird-eating raptors.",
      },
      {
        heading: "Best time for a Prek Toal tour",
        body: "December to April is the recommended window. From May onwards rising water disperses the colonies and access becomes limited. Early-morning departures are essential — the colony is quiet by mid-morning.",
      },
      {
        heading: "Supporting Tonle Sap conservation",
        body: "Visitor permits and guide fees fund colony protection, ranger salaries and community livelihoods in the floating villages. Pearaing Birding Trails works exclusively with local boatmen and uses small groups to minimise disturbance.",
      },
    ]}
    faqs={[
      {
        question: "How do I get to Prek Toal from Siem Reap?",
        answer: "Most tours leave Siem Reap around 05:00, transfer to the boat landing near Chong Kneas or Phnom Krom, then continue by motorboat for approximately 90–120 minutes depending on water levels.",
      },
      {
        question: "What birds is Prek Toal famous for?",
        answer: "Prek Toal is known for large breeding colonies of Spot-billed Pelican, Milky Stork, Painted Stork, Greater Adjutant, Lesser Adjutant, Asian Openbill and Oriental Darter.",
      },
      {
        question: "When should I visit Prek Toal Bird Sanctuary?",
        answer: "December to April is the main season, with January and February often providing the most active colonies and best photography conditions.",
      },
    ]}
    relatedTour={{ label: "See the Prek Toal day tour", href: "/tours" }}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Prek Toal Bird Sanctuary",
      description:
        "Largest breeding colony of large waterbirds in mainland Southeast Asia, on Tonle Sap Lake, Cambodia.",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Battambang",
        addressCountry: "KH",
      },
      url: "https://pearaing.com/prek-toal",
    }}
  />
);

export default PrekToalPage;
