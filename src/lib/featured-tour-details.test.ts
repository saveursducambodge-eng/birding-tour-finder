import { describe, expect, test } from "bun:test";
import { featuredTourDetails, selectedEnquiryTour, tourEnquiryUrl } from "./featured-tour-details";

describe("unchanged per-person tour prices", () => {
  test("Half-Day Pearaing costs $144", () => {
    expect(featuredTourDetails.find(tour => tour.title === "Half-Day Birding at Pearaing")?.pricePerPerson).toBe(144);
  });
  test("Bengal Florican costs $255", () => {
    expect(featuredTourDetails.find(tour => tour.title === "Bengal Florican Grassland Birding")?.pricePerPerson).toBe(255);
  });
  test("Prek Toal costs $240", () => {
    expect(featuredTourDetails.find(tour => tour.title === "Prek Toal Waterbird Sanctuary")?.pricePerPerson).toBe(240);
  });
});

test("each tour enquiry preserves its selected tour", () => {
  const titles = featuredTourDetails.map(tour => tour.title);
  for (const title of titles) {
    const url = new URL(tourEnquiryUrl(title), "https://pearaing.com");
    expect(selectedEnquiryTour(url.searchParams, titles)).toBe(title);
    expect(url.hash).toBe("#tour-enquiry");
  }
});

test("unknown enquiries do not add an invented tour", () => {
  expect(selectedEnquiryTour(new URLSearchParams({ tour: "Unknown Tour" }), featuredTourDetails.map(tour => tour.title))).toBe("");
});