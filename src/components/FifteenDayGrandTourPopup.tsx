import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, CheckCircle, XCircle, Sun, UtensilsCrossed } from "lucide-react";

interface FifteenDayGrandTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FifteenDayGrandTourPopup = ({ isOpen, onClose }: FifteenDayGrandTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="relative overflow-hidden max-h-[90vh] p-6 shadow-none text-justify text-lg">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                15 Days Grand Cambodia Tour
              </h2>
              <div className="flex flex-wrap gap-4 mt-3 text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 15 Days / 14 Nights</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Available year-round</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> All Cambodia</span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Tour Overview</h3>
              <p className="text-muted-foreground leading-relaxed text-justify text-base mt-2">
                The ultimate Cambodia experience — 15 days covering every corner of this extraordinary kingdom. From the legendary temples of Angkor to the pristine beaches of Sihanoukville, the remote northeast, the colonial cities, and the vibrant capital. This comprehensive journey reveals the full depth of Cambodia's history, culture, nature, and warm hospitality.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Itinerary</h3>
            </div>

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 1–3: Siem Reap & Angkor</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Comprehensive Angkor exploration including Small Circuit, Grand Circuit, Banteay Srei, Beng Mealea, Kampong Phluk floating village, and Kulen Mountain with its sacred waterfall and River of a Thousand Lingas.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 4–5: Battambang</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Explore Cambodia's charming second city. Bamboo Train, Phnom Sampeau bat caves, Wat Banan, Ek Phnom ruins, colonial architecture walking tour, and traditional village workshops for rice paper, fish paste, and knife-making.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 6–7: Phnom Penh</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Cambodia's dynamic capital. Royal Palace, Silver Pagoda, National Museum, Tuol Sleng Museum, Killing Fields, Central Market, Russian Market, Riverside promenade, and Koh Pich Diamond Island.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 8–9: Kratie & Mekong</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Drive along the Mekong to Kratie. Boat trip to see Irrawaddy freshwater dolphins, visit Phnom Sombok pagoda, explore Koh Trong island by bicycle, and discover the colonial architecture of Kratie town.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 10–11: Stung Treng & Northeast</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Journey to the remote northeast. Visit Stung Treng's Mekong flooded forest, Ramsar wetland sites, and local indigenous communities. Explore the spectacular Mekong rapids and enjoy the pristine natural environment far from tourist crowds.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 12–13: Preah Vihear & Remote Temples</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Visit the UNESCO World Heritage Preah Vihear Temple on its dramatic clifftop. Explore the remote Koh Ker temple complex with its seven-tiered pyramid. Visit Beng Mealea, the jungle-engulfed temple considered a prototype of Angkor Wat.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 14–15: Sambor Prei Kuk & Return</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Visit the pre-Angkorian UNESCO World Heritage site of Sambor Prei Kuk in Kampong Thom, featuring unique octagonal towers set in peaceful forest. Return to Siem Reap or Phnom Penh for departure, with time for last-minute shopping and relaxation.
              </p>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" /> Includes
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li className="text-base">• Experienced English-speaking tour guide</li>
                  <li className="text-base">• Air-conditioned vehicle throughout</li>
                  <li className="text-base">• Daily breakfast and lunch</li>
                  <li className="text-base">• All entrance fees</li>
                  <li className="text-base">• All boat trips</li>
                  <li className="text-base">• Bottled water and cold towels daily</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive" /> Excludes
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li className="text-base">• Accommodation (available upon request)</li>
                  <li className="text-base">• International flights</li>
                  <li className="text-base">• Dinner</li>
                  <li className="text-base">• Personal expenses</li>
                  <li className="text-base">• Travel insurance</li>
                  <li className="text-base">• Visa fees</li>
                </ul>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" /> Weather
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Weather varies significantly across Cambodia. Coastal areas are humid, northern highlands are cooler, and central plains are hot and dry. The dry season (November–April) is ideal for this extensive tour. Pack layers for early morning temple visits and cooler highland areas.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-primary" /> Food
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                This tour offers an incredible culinary journey through Cambodia. Each region has its own specialties — from Battambang's famous oranges and rice, to Kratie's Mekong fish, Phnom Penh's cosmopolitan dining scene, and Siem Reap's blend of traditional and international cuisine.
              </p>
            </div>

            <Separator />

            <div className="text-center">
              <a href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%2015%20Days%20Grand%20Cambodia%20Tour.%20Could%20you%20please%20provide%20more%20details%3F" target="_blank" rel="noopener noreferrer">
                <Button variant="nature" size="lg" className="w-full md:w-auto">Book Now via WhatsApp</Button>
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default FifteenDayGrandTourPopup;
