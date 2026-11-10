import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { featuredTourDetails, selectedEnquiryTour, tourEnquiryUrl } from "./featured-tour-details";

describe("unchanged per-person tour prices", () => {
  test("Half-Day Pearaing costs $144", () => {
    assert.equal(featuredTourDetails.find(tour => tour.title === "Half-Day Birding at Pearaing")?.pricePerPerson, 144);
  });
  test("Bengal Florican costs $255", () => {
    assert.equal(featuredTourDetails.find(tour => tour.title === "Bengal Florican Grassland Birding")?.pricePerPerson, 255);
  });
  test("Prek Toal costs $240", () => {
    assert.equal(featuredTourDetails.find(tour => tour.title === "Prek Toal Waterbird Sanctuary")?.pricePerPerson, 240);
  });
});

test("each tour enquiry preserves its selected tour", () => {
  const titles = featuredTourDetails.map(tour => tour.title);
  for (const title of titles) {
    const url = new URL(tourEnquiryUrl(title), "https://pearaing.com");
    assert.equal(selectedEnquiryTour(url.searchParams, titles), title);
    assert.equal(url.hash, "#tour-enquiry");
  }
});

test("unknown enquiries do not add an invented tour", () => {
  assert.equal(selectedEnquiryTour(new URLSearchParams({ tour: "Unknown Tour" }), featuredTourDetails.map(tour => tour.title)), "");
});