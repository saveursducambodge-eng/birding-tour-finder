import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, Info, AlertTriangle, Anchor } from "lucide-react";

interface KampongPhlukTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const KampongPhlukTourPopup = ({ isOpen, onClose }: KampongPhlukTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6 md:p-8">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl md:text-3xl text-primary">
                Itinerary – Kampong Phluk Fishing Village & Flooded Forest
              </DialogTitle>
            </DialogHeader>

            {/* Highlights */}
            <div className="mt-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Anchor className="w-5 h-5 text-primary" />
                Highlights
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Kampong Phluk Village", desc: "Experience a traditional Cambodian village built on towering stilts, offering a fascinating glimpse into local life along the lake." },
                  { title: "Tonle Sap Lake", desc: "Explore Tonle Sap Lake, the largest freshwater lake in Southeast Asia, renowned for its rich biodiversity and vital role in supporting local communities." },
                  { title: "Floating Village", desc: "Discover how families adapt to life on the water, with floating homes, schools, and even markets." },
                  { title: "Flooded Forest", desc: "Depending on the season, enjoy a quiet and scenic boat ride through a flooded mangrove forest — one of the region's most unique ecosystems." },
                  { title: "Local Interactions", desc: "Meet local residents and gain insight into their culture, traditions, and everyday routines." },
                  { title: "Scenic Countryside", desc: "Enjoy the journey to and from Kampong Phluk, passing through picturesque rural landscapes — perfect for photography." },
                ].map((item, i) => (
                  <div key={i} className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-6" />

            {/* Itinerary */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">
              Itinerary
            </h3>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p className="text-lg font-semibold text-foreground italic">
                Get ready for an unforgettable day exploring the wonders of Tonle Sap Lake!
              </p>
              <p>
                Your adventure begins at 8:00 AM with a hotel pickup in Siem Reap. Enjoy a scenic drive through the countryside, where you'll pass rice fields, traditional houses, and local villages.
              </p>
              <p>
                Upon arrival, you'll take a boat trip to Kampong Phluk, a unique community of stilted homes rising high above the water. As you cruise through the village, you'll witness daily life on the lake—fishing, transportation, and family life all centered around the water.
              </p>
              <p>
                Depending on the season, continue your journey into the flooded mangrove forest, where you can glide through calm waters surrounded by submerged trees. It's a peaceful and almost magical experience, rich in wildlife and natural beauty.
              </p>
              <p>
                After the boat excursion, return to land and explore the surrounding countryside. Along the way, you may see locals working in the rice fields, raising ducks, or gathering insects—offering a genuine glimpse into rural Cambodian life. You'll also have the chance to visit a local Buddhist monastery and learn more about the country's spiritual traditions.
              </p>
              <p>
                Return to your hotel in the early afternoon, bringing back wonderful memories of culture, nature, and local life.
              </p>
            </div>

            <Separator className="my-6" />

            {/* Includes & Excludes */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">
              Includes & Excludes
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-lg p-4">
                <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" /> What's Included
                </h4>
                <ul className="space-y-2">
                  {[
                    "Local English-speaking guide",
                    "Air-conditioned vehicle",
                    "Boat cruise on Tonle Sap Lake",
                    "Entrance fees",
                    "Drinking water and cool towels",
                    "Rowboat ride through the Flooded forest",
                  ].map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-green-600">✅</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-destructive/5 rounded-lg p-4">
                <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive" /> Not Included
                </h4>
                <ul className="space-y-2">
                  <li className="text-muted-foreground text-sm">• Meals</li>
                  <li className="text-muted-foreground text-sm">• Personal expenses</li>
                  <li className="text-muted-foreground text-sm">• Tips & gratuities</li>
                </ul>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Additional Information */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Additional Information
            </h3>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-muted-foreground text-sm">
              <p>• Comfortable walking shoes are recommended.</p>
              <p>• For your day trip, we suggest leaving valuables such as passports, airline tickets, and most of your cash at your hotel for safekeeping. Please bring only what you need for the day.</p>
              <p>• This tour is not wheelchair accessible.</p>
              <p>• Private tour options are available—please contact us for more details.</p>
              <p>• <strong>During the dry season (March 1st – July 31st),</strong> visits to Kampong Phluk will be replaced with Chong Khneas due to low water levels.</p>
            </div>

            <Separator className="my-6" />

            {/* Terms & Conditions */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Terms & Conditions
            </h3>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-muted-foreground text-sm">
              <p>Please refer to Journey Cambodia's Terms & Conditions for full details.</p>
            </div>

            <Separator className="my-6" />

            {/* Cancellation Policy */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">
              Cancellation Policy
            </h3>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-muted-foreground text-sm">
              <p>• Full refunds are available for cancellations made at least 24 hours in advance.</p>
              <p>• Cancellations within 24 hours or no-shows are non-refundable.</p>
              <p>• Any changes or amendments must be requested at least 24 hours prior to the tour.</p>
              <p>• Refunds will be processed within 7 business days.</p>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/85581555895?text=Hi%2C%20I%27m%20interested%20in%20the%20Kampong%20Phluk%20Fishing%20Village%20Tour"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book Now via WhatsApp
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default KampongPhlukTourPopup;
