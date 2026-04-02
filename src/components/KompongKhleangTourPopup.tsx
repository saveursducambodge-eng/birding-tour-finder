import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, Sun, UtensilsCrossed, Camera, ShieldAlert, MessageCircle } from "lucide-react";

interface KompongKhleangTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const KompongKhleangTourPopup = ({ isOpen, onClose }: KompongKhleangTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh] p-6">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary">
              Kompong Khleang Stilted House & Floating Village Tour
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Itinerary</h3>
            </div>

            <Separator />

            <div>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Discover Kompong Khleang, one of the largest and most authentic floating communities on the Tonle Sap Lake. Unlike the more tourist-heavy villages, Kompong Khleang offers a genuine glimpse into the daily lives of families who have lived on the water for generations.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify mt-3">
                Your journey begins with a scenic drive from Siem Reap through charming countryside villages. Upon arrival, you'll be greeted by towering stilted houses — some reaching up to 10 meters high — built to withstand the dramatic water level changes of the Tonle Sap throughout the seasons.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify mt-3">
                Board a traditional wooden boat and cruise through the floating village, observing local fishermen at work, children playing on the water, and families going about their daily routines. Visit the local pagoda, school, and market to understand how this remarkable community thrives on the water.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify mt-3">
                During the wet season (July–October), the village transforms as water levels rise dramatically, and homes that stood high on stilts now float at water level, creating a truly unique landscape. In the dry season, the exposed stilts reveal the impressive engineering of these traditional homes.
              </p>
            </div>

            <Separator />

            {/* What You'll Do */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">What You'll Do</h4>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />Scenic countryside drive from Siem Reap</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />Explore towering stilted houses up to 10 meters high</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />Traditional boat cruise through the floating village</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />Visit local pagoda, school, and market</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />Observe daily life of fishing families on the Tonle Sap</li>
              </ul>
            </div>

            <Separator />

            {/* Includes & Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" /> Includes
                </h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Experienced English-speaking tour guide</li>
                  <li>• Air-conditioned vehicle</li>
                  <li>• Traditional boat ride</li>
                  <li>• All entrance fees</li>
                  <li>• Bottled water and cold towels</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive" /> Excludes
                </h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Meals</li>
                  <li>• Optional activities</li>
                  <li>• Personal expenses</li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Essential Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-primary" /> Recommended
                </h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Camera with extra batteries</li>
                  <li>• Sun protection (hat, sunscreen)</li>
                  <li>• Comfortable shoes</li>
                  <li>• Cash for local purchases</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-primary" /> Leave at Hotel
                </h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Passport (bring a copy)</li>
                  <li>• Airline tickets</li>
                  <li>• Excess cash</li>
                  <li>• Valuable jewelry</li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Weather */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" /> Weather
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but the boat ride offers some cooling breeze on the water.
              </p>
            </div>

            <Separator />

            {/* Food */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-primary" /> Food
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.
              </p>
            </div>

            <Separator />

            {/* Price */}
            <div className="text-center">
              <p className="text-primary font-semibold text-xl">$150 for two people</p>
            </div>

            <Separator />

            {/* Book Now */}
            <div className="text-center pb-4">
              <a
                href="https://wa.me/85581555191?text=Hi%2C%20I%20am%20interested%20in%20the%20Kompong%20Khleang%20Stilted%20House%20%26%20Floating%20Village%20Tour.%20Can%20you%20provide%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default KompongKhleangTourPopup;
