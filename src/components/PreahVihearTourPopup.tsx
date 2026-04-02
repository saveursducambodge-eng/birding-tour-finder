import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, CheckCircle, XCircle, Sun, UtensilsCrossed, Camera, Backpack, ShieldAlert, MessageCircle } from "lucide-react";

interface PreahVihearTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreahVihearTourPopup = ({ isOpen, onClose }: PreahVihearTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh] p-6">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary">
              2-Day Tours To Preah Vihear, Boeng Mealea, Koh Ker Temple Adventure Tour
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Itinerary</h3>
            </div>

            <Separator />

            {/* Day 1 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 1: Siem Reap to Preah Vihear</h4>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Your adventure begins with an early morning departure from Siem Reap, venturing into the heart of rural Cambodia. As you journey towards Preah Vihear Province, you'll make a captivating stop at local market, where you can explore a typical Cambodian village market and experience authentic local life.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify mt-3">
                The highlight of the day awaits at the 11th-century Boeng Mealea Temple, considered a prototype of the iconic Angkor Wat. Hidden deep in the jungle, this lesser-known site built by King Suryavarman II offers a truly adventurous exploration.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify mt-3">
                Your cultural journey continues with a visit to the remote Koh Ker temple complex, an archaeological marvel that once served as the 10th-century capital of the Khmer Empire.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify mt-3">
                After a day rich in history and discovery, you will arrive in Preah Vihear in the late afternoon, ready to relax and prepare for the next day's exploration.
              </p>
              <div className="mt-3">
                <p className="text-sm font-semibold text-foreground mb-1">Included Activities:</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary" />Visit local village</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary" />Boeng Mealea Temple</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary" />Koh Ker temple complex</li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Day 2 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 2: Preah Vihear – Anlong Veng – Siem Reap</h4>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Rise early to visit the crown jewel of your tour—the magnificent Preah Vihear Temple. This UNESCO World Heritage Site, perched atop a 525-meter cliff, offers breathtaking views over the plains of Cambodia and the mountains of Thailand. Built during the height of the Khmer Empire, its impressive architecture and dramatic setting make it an unforgettable experience.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify mt-3">
                After lunch, begin your return journey to Siem Reap with a meaningful historical stop at Ta Mok's House in Anlong Veng. From there, continue with a short drive to Pol Pot's cremation site. Pol Pot, leader of the Khmer Rouge, ruled Cambodia as Prime Minister of Democratic Kampuchea from 1976 to 1979. This visit provides a sobering insight into Cambodia's recent history and the impact of the Khmer Rouge era.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify mt-3">
                You will arrive back in Siem Reap in the late afternoon, carrying a deeper understanding of Cambodia's rich cultural heritage—from ancient Khmer temples to significant modern historical sites.
              </p>
              <div className="mt-3">
                <p className="text-sm font-semibold text-foreground mb-1">Included Activities:</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary" />Preah Vihear Temple</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary" />Ta Mok's House</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary" />Pol Pot's Cremation Site</li>
                </ul>
              </div>
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
                  <li>• Meals (Breakfast, lunch)</li>
                  <li>• Air-conditioned vehicle</li>
                  <li>• All entrance fees</li>
                  <li>• Bottled water and cold towels</li>
                  <li>• Activities as mentioned in the itinerary</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive" /> Excludes
                </h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Accommodation (available upon request)</li>
                  <li>• Meals (Dinner)</li>
                  <li>• Optional activities</li>
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
                  <li>• Small backpack</li>
                  <li>• Cash for breakfast</li>
                  <li>• Sun protection (hat, sunscreen)</li>
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
                Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.
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
                href="https://wa.me/85581555191?text=Hi%2C%20I%20am%20interested%20in%20the%202-Day%20Preah%20Vihear%20Tour.%20Can%20you%20provide%20more%20details%3F"
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

export default PreahVihearTourPopup;
