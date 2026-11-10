export const featuredTourDetails = [
  {
    title: "Half-Day Birding at Pearaing",
    description: "Discover the rich wetland birdlife of Pearaing Biodiversity Conservation Center, located just 20 minutes from Siem Reap. Enjoy a rewarding birdwatching experience with opportunities to observe more than 50 wetland bird species.",
    duration: "Half day",
    pricePerPerson: 144,
  },
  {
    title: "Bengal Florican Grassland Birding",
    description: "Explore Cambodia's seasonal grasslands in search of the critically endangered Bengal Florican. Discover this unique habitat and observe other fascinating grassland bird species with experienced local birding guides.",
    duration: "Half day",
    pricePerPerson: 255,
  },
  {
    title: "Prek Toal Waterbird Sanctuary",
    description: "Explore the spectacular waterbird colonies of Prek Toal, one of Southeast Asia's most important waterbird sanctuaries. Look for Greater Adjutants, Milky Storks, and many other remarkable waterbird species.",
    duration: "Full day",
    pricePerPerson: 240,
  },
];

export function tourEnquiryUrl(title: string) {
  return `/contact?${new URLSearchParams({ tour: title }).toString()}#tour-enquiry`;
}

export function selectedEnquiryTour(params: URLSearchParams, availableTours: string[]) {
  const selected = params.get("tour");
  return selected && availableTours.includes(selected) ? selected : "";
}