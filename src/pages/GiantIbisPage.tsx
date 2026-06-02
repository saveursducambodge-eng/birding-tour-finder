import SpeciesLandingPage from "@/components/SpeciesLandingPage";

const GiantIbisPage = () => (
  <SpeciesLandingPage
    slug="giant-ibis"
    title="Giant Ibis Cambodia | Where to See Cambodia's National Bird | Pearaing Conservation Tours"
    metaDescription="See the critically endangered Giant Ibis in Cambodia. Russey Treb & Northern Plains birding tours led by Pearaing Conservation Tours's local guides — the best chance to spot Cambodia's national bird."
    h1="Giant Ibis in Cambodia — Where to See Thaumatibis gigantea"
    intro="The Giant Ibis (Thaumatibis gigantea) is Cambodia's national bird and one of the rarest large waterbirds on Earth. Fewer than 200 mature individuals remain, almost all of them in the dry deciduous dipterocarp forests of northern Cambodia. Pearaing Conservation Tours specialises in guided tours to its last remaining strongholds."
    whereToSee="Russey Treb (formerly Tmatboey) and surrounding waterholes in the Northern Plains, Preah Vihear Province. Birds are reliably observed at roosting trees at dawn and dusk."
    bestTime="November to early May (dry season). Birds gather at the few remaining waterholes, making sightings far more predictable."
    sections={[
      {
        heading: "About the Giant Ibis",
        body: "Standing over a metre tall with a wingspan close to 1.5 m, the Giant Ibis is the largest ibis species in the world. Adults are dark grey-brown with a bare, wrinkled head, a long downcurved bill and pale bands across the wings. It is listed as Critically Endangered on the IUCN Red List, mainly due to habitat loss, drainage of seasonal pools and hunting. Cambodia is now the only country with a viable breeding population.",
      },
      {
        heading: "Where to see the Giant Ibis in Cambodia",
        body: "The most reliable site is Russey Treb, a community-based ecotourism village inside the Kulen Promtep Wildlife Sanctuary. Birds use a small number of known roost trees and seasonal waterholes (trapeangs), where local guides can position visitors at dawn for high-probability sightings. Other sites include the Western Siem Pang area and parts of the Northern Plains Landscape.",
      },
      {
        heading: "Best time to see the Giant Ibis",
        body: "Plan a visit between November and early May. Late in the dry season (March–April) is particularly good — surface water disappears across the wider forest, so birds concentrate at known waterholes. Outside the dry season the forest floods, birds disperse, and sightings become much harder.",
      },
      {
        heading: "Birding tours that target the Giant Ibis",
        body: "Pearaing Conservation Tours's 3-day Russey Treb tour is purpose-built for Giant Ibis and White-shouldered Ibis. Longer 5–10 day Cambodia birding itineraries combine Russey Treb with Bengal Florican grasslands, Prek Toal and the dry forests of Preah Vihear for a full Northern Plains experience.",
      },
      {
        heading: "How your visit supports conservation",
        body: "All visitor fees are split between local guides, the community fund and direct conservation costs — including nest protection, water-hole maintenance and anti-poaching patrols. Tourism revenue is one of the strongest reasons local communities continue to protect Giant Ibis habitat.",
      },
    ]}
    relatedTour={{ label: "See the Giant Ibis tour", href: "/tours" }}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Giant Ibis in Cambodia — Where to See Thaumatibis gigantea",
      about: "Giant Ibis (Thaumatibis gigantea)",
      author: { "@type": "Organization", name: "Pearaing Conservation Tours" },
      mainEntityOfPage: "https://pearaing.com/giant-ibis",
    }}
  />
);

export default GiantIbisPage;
