import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Clock, Camera, Sun, Footprints, AlertTriangle, CheckCircle, XCircle, MessageCircle } from "lucide-react";

interface KampongPhlukTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const KampongPhlukTourPopup = ({ isOpen, onClose }: KampongPhlukTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-lg">
          <div className="p-6 text-left">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-primary">
                Full Day to Kampong Phluk Fishing Village & Flooded Forest
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 space-y-6">
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Itinerary: Kampong Phluk Fishing Village & Flooded Forest
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get ready for an exciting day trip to the amazing Tonle Sap Lake in Cambodia!
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Your adventure starts at 8:00 AM when you leave your hotel for a fun ride through the countryside. The Tonle Sap is a magical lake that changes size with the seasons, growing as big as 100,000 – 12,000 km² in the rainy season! The lake covers approximately 3,500 km² during the dry season. You'll hop on a boat to visit Kampong Phluk, a group of fishing villages where houses stand on tall stilts above the water. As you float through the underwater forest, you'll see cool plants and animals, just like in a nature movie!
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Upon arrival, you'll board a boat and travel to Kampong Phluk, a fascinating cluster of fishing villages where homes are built high on stilts above the water. As you cruise through the area, you'll witness daily life on the lake and, depending on the season, glide through a flooded mangrove forest filled with unique plant and animal life—an experience that feels straight out of a nature documentary.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  After the boat excursion, continue exploring the surrounding countryside for an authentic glimpse into rural Cambodian life. Along the way, you may see locals planting rice, raising ducks, or even collecting insects. You'll also visit a local Buddhist monastery, offering insight into the country's spiritual traditions.
                </p>
                <p className="text-muted-foreground leading-relaxed font-semibold text-foreground">
                  Alternative Option to Kampong Phluk: Visit Chong Khneas with a Sunset Experience during the dry season (01st March until 31st July)
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Due to the dry season, the water level in Kampong Phluk is quite low to fully appreciate the unique charm of the floating village. However, Chong Khneas offers an excellent alternative. Located closer to Siem Reap, this floating village remains accessible and provides a wonderful opportunity to explore life on the Tonlé Sap Lake.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  What You'll Do
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {[
                    "Visit Kampong Phluk – a stunning stilted village rising above the waters of Tonle Sap",
                    "Boat ride through the flooded mangrove forest – an otherworldly natural landscape",
                    "Observe daily life in a floating community – fishing, farming, and local traditions",
                    "Learn about the unique ecosystem of Tonle Sap – Southeast Asia's largest freshwater lake",
                    "Enjoy scenic views of the lake and surrounding countryside",
                    "Interact with friendly local villagers and learn about their way of life",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sun className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Tour Schedule
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {[
                    { time: "8:00 AM", desc: "Hotel pickup in Siem Reap" },
                    { time: "8:45 AM", desc: "Drive through the Cambodian countryside to Kampong Phluk" },
                    { time: "9:30 AM", desc: "Arrive at Kampong Phluk and board a traditional wooden boat" },
                    { time: "10:00 AM", desc: "Cruise through the stilted village – observe local life" },
                    { time: "10:45 AM", desc: "Enter the flooded mangrove forest by boat" },
                    { time: "11:30 AM", desc: "Explore the forest canopy and enjoy the serene atmosphere" },
                    { time: "12:00 PM", desc: "Return to the village for a local lunch experience" },
                    { time: "1:00 PM", desc: "Free time to walk through the village and interact with locals" },
                    { time: "2:00 PM", desc: "Scenic boat ride back across Tonle Sap Lake" },
                    { time: "3:00 PM", desc: "Drive back to Siem Reap" },
                    { time: "4:00 PM", desc: "Arrive back at your hotel" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-semibold text-primary min-w-[80px]">{item.time}</span>
                      <span>{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

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
                      "Boat ride through village and flooded forest",
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
                      "Meals and drinks",
                      "Tips and gratuities",
                      "Personal expenses",
                      "Boat entrance fee (if applicable)",
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
                  Good to Know
                </h3>
                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  {[
                    "Best visited during the wet season (July–October) when water levels are highest",
                    "Wear comfortable clothing and sun protection (hat, sunscreen)",
                    "Bring a waterproof bag for electronics and valuables",
                    "The boat ride may be bumpy — hold on to personal belongings",
                    "This tour is not wheelchair accessible",
                    "Children must be accompanied by an adult at all times",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Footprints className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
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

              <div className="text-center space-y-3">
                <p className="text-primary font-semibold text-xl">$150 for two people</p>
                <a
                  href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Kampong%20Phluk%20Fishing%20Village%20%26%20Flooded%20Forest%20Tour"
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

export default KampongPhlukTourPopup;
