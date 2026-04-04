import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Users, Camera, Sun, Footprints, AlertTriangle, CheckCircle, XCircle, MessageCircle } from "lucide-react";

interface BanteaySreiTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BanteaySreiTourPopup = ({ isOpen, onClose }: BanteaySreiTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <div className="p-6 rounded-lg shadow-lg border">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-primary">
                Full Day to Banteay Srei and Grand Circuit Heritage Tour
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 space-y-6">
              {/* Intro */}
              <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed text-left">
                    Discover the finest masterpieces of Khmer art and architecture on this full-day journey through the Grand Circuit and the legendary Banteay Srei temple. This tour takes you beyond the usual Angkor highlights into a deeper exploration of Cambodia's ancient heritage.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-left">
                    From intricate pink sandstone carvings to jungle-wrapped ruins, this tour offers a perfect blend of history, culture, and stunning photo opportunities—all guided by a knowledgeable local expert.
                  </p>
              </div>

              <Separator />

              {/* What You'll Do */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  What You'll Do
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {[
                    "Visit Banteay Srei – the 'Citadel of Women' with the finest carvings in all of Angkor",
                    "Explore Preah Khan – a sprawling temple complex once home to a Buddhist university",
                    "Discover Neak Pean – a unique island temple surrounded by four pools",
                    "Visit Ta Som – a charming temple with a famous tree-entwined gateway",
                    "Explore East Mebon – an impressive temple built on an artificial island",
                    "Visit Pre Rup – a stunning temple offering panoramic views of the surrounding jungle",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sun className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-left">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Tour Schedule */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Tour Schedule
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {[
                    { time: "7:30 AM", desc: "Hotel pickup in Siem Reap" },
                    { time: "8:30 AM", desc: "Arrive at Banteay Srei – explore the intricate carvings" },
                    { time: "10:00 AM", desc: "Drive to the Grand Circuit" },
                    { time: "10:30 AM", desc: "Visit Preah Khan temple complex" },
                    { time: "11:30 AM", desc: "Explore Neak Pean island temple" },
                    { time: "12:00 PM", desc: "Lunch break at a local restaurant" },
                    { time: "1:00 PM", desc: "Visit Ta Som temple" },
                    { time: "2:00 PM", desc: "Explore East Mebon temple" },
                    { time: "3:00 PM", desc: "Visit Pre Rup temple – enjoy panoramic views" },
                    { time: "4:00 PM", desc: "Return to hotel" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-semibold text-primary min-w-[80px]">{item.time}</span>
                      <span>{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Includes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    What's Included
                  </h3>
                  <ul className="space-y-1.5 text-muted-foreground text-sm">
                    {[
                      "Air-conditioned vehicle transport",
                      "English-speaking guide",
                      "Cold water and towels",
                      "Hotel pickup and drop-off",
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
                    What's Not Included
                  </h3>
                  <ul className="space-y-1.5 text-muted-foreground text-sm">
                    {[
                      "Angkor Pass (temple entrance fee)",
                      "Meals and drinks",
                      "Tips and gratuities",
                      "Personal expenses",
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

              {/* Good to Know */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Good to Know
                </h3>
                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  {[
                    "Dress code: Casual, but respectful (covered shoulders and knees required inside temples)",
                    "Comfortable walking shoes are strongly recommended",
                    "For safety, leave valuables at your hotel and bring only what you need",
                    "This tour is not wheelchair accessible",
                    "Children under 8 years old are not permitted",
                    "Maximum group size: 2–15 travelers in an air-conditioned vehicle",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Footprints className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Essential Items */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Footprints className="w-5 h-5 text-primary" />
                  Essential Items to Bring
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Required</h4>
                    <ul className="space-y-1.5 text-muted-foreground text-sm">
                      {["Flashlight or phone light", "Temple pass (US$37)", "Modest clothing (shoulders & knees covered)", "Comfortable walking shoes"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Recommended</h4>
                    <ul className="space-y-1.5 text-muted-foreground text-sm">
                      {["Camera with extra batteries", "Small backpack", "Cash for breakfast", "Sun protection (hat, sunscreen)"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Sun className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Leave at Hotel</h4>
                    <ul className="space-y-1.5 text-muted-foreground text-sm">
                      {["Passport (bring a copy)", "Airline tickets", "Excess cash", "Valuable jewellery"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <XCircle className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  Food
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.
                </p>
              </div>

              <Separator />

              {/* Booking */}
              <div className="text-center space-y-3">
                <p className="text-primary font-semibold text-xl">$150 for two people</p>
                <a
                  href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Banteay%20Srei%20and%20Grand%20Circuit%20Heritage%20Tour"
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

export default BanteaySreiTourPopup;
