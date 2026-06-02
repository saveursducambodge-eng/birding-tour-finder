import SpeciesLandingPage from "@/components/SpeciesLandingPage";

const PrekToalPage = () => (
  <SpeciesLandingPage
    slug="prek-toal"
    title="Prek Toal Bird Sanctuary | Tonle Sap Birding Tours | PEARAING"
    metaDescription="Prek Toal is Southeast Asia's most important waterbird colony on Tonle Sap Lake. Book guided Prek Toal bird sanctuary tours from Siem Reap with PEARAING Birding Trails."
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
        body: "Most visitors join a guided day tour from Siem Reap. PEARAING departs around 05:00 to reach the colony at first light, when activity is at its peak. The trip includes the boat transfer, sanctuary permits, the colony visit with a local ranger-guide and lunch in the floating village.",
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
        body: "Visitor permits and guide fees fund colony protection, ranger salaries and community livelihoods in the floating villages. PEARAING works exclusively with local boatmen and uses small groups to minimise disturbance.",
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