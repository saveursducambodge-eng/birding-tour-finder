import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, CheckCircle, XCircle, Sun, UtensilsCrossed } from "lucide-react";

interface TenDayGrandTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const TenDayGrandTourPopup = ({ isOpen, onClose }: TenDayGrandTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="relative overflow-hidden max-h-[90vh] p-6 shadow-none text-justify text-lg">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                10-Day Grand Cambodia Tour
              </h2>
              <div className="flex flex-wrap gap-4 mt-3 text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 Days / 9 Nights</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Available year-round</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Multi-destination</span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Tour Overview</h3>
              <p className="text-muted-foreground leading-relaxed text-justify text-base mt-2">
                An epic 10-day journey through Cambodia's most spectacular destinations. From the temples of Angkor to the colonial charm of Battambang, the bustling capital Phnom Penh, the Mekong dolphins of Kratie, the remote wilderness of Stung Treng, and the cliff-top majesty of Preah Vihear — this comprehensive tour covers the very best of the Kingdom of Wonder.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Itinerary</h3>
            </div>

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 1–2: Siem Reap & Angkor Temples</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Arrive in Siem Reap. Explore the Small and Grand Circuits of Angkor including Angkor Wat sunrise, Bayon, Ta Prohm, Banteay Srei, and the floating village of Kampong Phluk on Tonle Sap Lake.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 3–4: Battambang</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Travel to Battambang. Explore the Bamboo Train, Phnom Sampeau bat caves, Wat Banan temple, and traditional village workshops. Enjoy the charming colonial architecture and vibrant local food scene.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 5–6: Phnom Penh</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Travel to Phnom Penh. Visit the Royal Palace, Silver Pagoda, National Museum, Tuol Sleng Museum, and Killing Fields. Explore the Central Market, Russian Market, and the scenic Riverside promenade.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 7: Kratie – Irrawaddy Dolphins</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Drive to Kratie along the Mekong River. Afternoon boat trip to observe the rare Irrawaddy freshwater dolphins. Visit Phnom Sombok pagoda for sunset views over the Mekong. Overnight in Kratie.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 8: Stung Treng</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Continue north to Stung Treng, a remote riverside town near the Laos border. Visit the Mekong River flooded forest, local communities, and enjoy the tranquil, off-the-beaten-path atmosphere. Overnight in Stung Treng.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 9: Preah Vihear Temple</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Travel to Preah Vihear and ascend to the magnificent UNESCO World Heritage temple perched atop a 525-meter cliff. Explore all five gopuras and enjoy panoramic views stretching across Cambodia and Thailand. Overnight near Preah Vihear.
              </p>
            </div>
            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 10: Return to Siem Reap</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Return journey to Siem Reap with stops at Koh Ker temple complex and Beng Mealea jungle temple. Arrive back in Siem Reap by late afternoon for departure or onward travel.
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
                  <li className="text-base">• Boat trips (Tonle Sap, Kratie dolphins)</li>
                  <li className="text-base">• Bottled water and cold towels</li>
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
                </ul>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" /> Weather
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Weather varies across destinations. Northern regions (Preah Vihear, Stung Treng) can be slightly cooler. Phnom Penh and Kratie tend to be hot and humid. The dry season (November–April) is ideal for this tour.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-primary" /> Food
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Each destination offers unique culinary experiences. Siem Reap and Phnom Penh have excellent restaurant scenes, while rural areas serve authentic home-cooked Khmer cuisine. Kratie is known for its fresh Mekong River fish dishes.
              </p>
            </div>

            <Separator />

            <div className="text-center">
              <a href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%2010-Day%20Grand%20Cambodia%20Tour.%20Could%20you%20please%20provide%20more%20details%3F" target="_blank" rel="noopener noreferrer">
                <Button variant="nature" size="lg" className="w-full md:w-auto">Book Now via WhatsApp</Button>
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TenDayGrandTourPopup;
