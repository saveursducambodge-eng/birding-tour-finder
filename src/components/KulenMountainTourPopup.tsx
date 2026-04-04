import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Clock, Camera, Sun, Footprints, AlertTriangle, CheckCircle, XCircle, MessageCircle, Info } from "lucide-react";

interface KulenMountainTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const KulenMountainTourPopup = ({ isOpen, onClose }: KulenMountainTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-primary">
                Full Day to Kulen Mountain Waterfall and History
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 space-y-6">
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Itinerary
                </h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  This morning at 8:00 AM, depart from your hotel for Phnom Kulen, regarded as the birthplace of the Khmer Empire, located approximately 65 kilometers from Siem Reap. The drive to the base of Phnom Kulen takes around one hour, passing through beautiful countryside. From there, continue for another 35 minutes to reach the summit.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  At the top of the mountain, visit the 16th-century Buddhist monastery, Preah Ang Thom. This sacred site is historically significant, as it was here that King Jayavarman II declared independence from Java in 802 AD.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  A short climb up a stone staircase leads to a 17-meter-long reclining Buddha, offering panoramic views across the surrounding countryside. Around the temple, monks and worshippers burn incense and leave offerings of fruit. You will also explore nearby jungle paths, where traditional Khmer healers can sometimes be seen practicing their craft and selling Buddhist items.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Next, take a short drive to the famous Kbal Spean, also known as the "River of 1,000 Lingas." Walk along the river and into the shallow water to view hundreds of lingas carved into the sandstone riverbed. It is believed that King Jayavarman II bathed in these sacred waters, considering them holy.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Continue following the river downstream to a beautiful two-tier waterfall, where you will stop for lunch and have the opportunity to swim.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  In the early afternoon, begin your return journey to Siem Reap, arriving back at your hotel in mid-afternoon.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify font-medium">
                  This tour is ideal for travelers who enjoy nature and want to add variety to their temple visits. It is especially suitable for families, as there is plenty to see and do.
                </p>
              </div>

              <Separator />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Includes
                  </h3>
                  <ul className="space-y-1.5 text-muted-foreground text-sm">
                    {[
                      "Experienced English-speaking tour guide",
                      "Complimentary bottled water and a refreshing cool towel",
                      "Travel in a comfortable, air-conditioned vehicle",
                      "Phnom Kulen entrance fee",
                      "Convenient hotel pickup and drop-off",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Excludes
                  </h3>
                  <ul className="space-y-1.5 text-muted-foreground text-sm">
                    {[
                      "Meals",
                      "Kulen Ticket US$20",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Important Information
                </h3>
                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  {[
                    "Tour ends between 3:30 PM and 4:30 PM",
                    "Lunch is available at a local Khmer restaurant (at your own expense)",
                    "Dress code: Swimwear recommended for the waterfall",
                    "Comfortable walking shoes are recommended",
                    "We recommend leaving valuables such as passports, airline tickets, and most cash at your hotel for safekeeping",
                    "This tour is not wheelchair accessible",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Footprints className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Essential Items to Bring */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Footprints className="w-5 h-5 text-primary" />
                  Essential Items to Bring
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-600" /> Required
                    </h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      {["Flashlight or phone light", "Kulen pass (US$20)", "Modest clothing (shoulders & knees covered)", "Comfortable walking shoes"].map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-green-600 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-1">
                      <Sun className="w-4 h-4 text-amber-500" /> Recommended
                    </h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      {["Camera with extra batteries", "Small backpack", "Cash for breakfast", "Sun protection (hat, sunscreen)"].map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-1">
                      <XCircle className="w-4 h-4 text-red-500" /> Leave at Hotel
                    </h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      {["Passport (bring a copy)", "Airline tickets", "Excess cash", "Valuable jewelry"].map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-red-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Additional Information */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Additional Information
                </h3>
                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  {[
                    "Pickup time: 8 AM (exact time confirmed one day before)",
                    "Tour ends: 3:30 PM",
                    "Breakfast: If your hotel includes breakfast, request a takeaway box, or stop at a local restaurant",
                    "Dress code: Casual, but respectful (covered shoulders and knees required inside temples)",
                    "Comfortable walking shoes are strongly recommended",
                    "For safety, leave valuables at your hotel and bring only what you need",
                    "This tour is not wheelchair accessible",
                    "Children under 8 years old are not permitted",
                    "Maximum group size: 2–15 travelers in an air-conditioned vehicle",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Info className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Weather */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-primary" />
                  Weather
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.
                </p>
              </div>

              <Separator />

              {/* Food */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  Food
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.
                </p>
              </div>

              <Separator />

              {/* Terms & Conditions */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  Terms & Conditions
                </h3>
                <p className="text-muted-foreground text-sm font-semibold mb-2">Journey Cambodia's Terms & Conditions</p>
                <p className="text-muted-foreground text-sm font-semibold mb-1">Cancellation Policy:</p>
                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  {[
                    "Cancellations within 24 hours or no-shows are non-refundable",
                    "Amendments must be made at least 24 hours in advance",
                    "Refunds will be processed within 5–10 business days",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div className="text-center space-y-3">
                <p className="text-primary font-semibold text-xl">$150 for two people</p>
                <a
                  href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Kulen%20Mountain%20Waterfall%20and%20History%20Tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default KulenMountainTourPopup;
