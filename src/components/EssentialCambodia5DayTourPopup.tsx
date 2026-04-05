import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, CheckCircle, XCircle, Camera, ShieldAlert, Sun, UtensilsCrossed } from "lucide-react";

interface EssentialCambodia5DayTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EssentialCambodia5DayTourPopup = ({ isOpen, onClose }: EssentialCambodia5DayTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="relative overflow-hidden max-h-[90vh] p-6 shadow-none text-justify text-lg">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                Essential Cambodia 5-Day Tour in Siem Reap
              </h2>
              <div className="flex flex-wrap gap-4 mt-3 text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 Days / 4 Nights</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Available year-round</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Siem Reap</span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Tour Overview</h3>
              <p className="text-muted-foreground leading-relaxed text-justify text-base mt-2">
                Experience the very best of Siem Reap in 5 unforgettable days. From the iconic Angkor Wat sunrise to the hidden jungle temples, floating villages, and vibrant night markets — this carefully curated itinerary covers all the essential highlights of Cambodia's cultural heartland.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Itinerary</h3>
            </div>

            {/* Day 1 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 1: Arrival & Angkor Wat Sunset</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Arrive in Siem Reap and check into your hotel. In the afternoon, visit Angkor Wat for a spectacular sunset experience. Watch the temple's silhouette reflected in the surrounding moat as the sky transforms into golden hues. Evening free to explore Pub Street and the night market.
              </p>
            </div>

            <Separator />

            {/* Day 2 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 2: Angkor Small Circuit</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Early morning sunrise at Angkor Wat, followed by a full exploration of the Small Circuit. Visit Angkor Thom's South Gate, the Bayon Temple with its enigmatic stone faces, the Baphuon, Phimeanakas, the Terrace of the Elephants, and the Terrace of the Leper King. Afternoon visit to Ta Prohm, the famous "Tomb Raider" temple.
              </p>
            </div>

            <Separator />

            {/* Day 3 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 3: Grand Circuit & Banteay Srei</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Explore the Grand Circuit temples including Preah Khan, Neak Pean, Ta Som, and East Mebon. Continue to Banteay Srei, the "Citadel of Women," renowned for its exquisite pink sandstone carvings — the finest examples of classical Khmer art. Stop at the Cambodia Landmine Museum on the way back.
              </p>
            </div>

            <Separator />

            {/* Day 4 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 4: Kampong Phluk Floating Village</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Full day excursion to Kampong Phluk, a stilted village on the Tonle Sap Lake. Boat through the flooded forest, visit local fishing communities, and learn about the unique lifestyle of families living on Southeast Asia's largest freshwater lake. Afternoon visit to Artisans Angkor or the Angkor National Museum.
              </p>
            </div>

            <Separator />

            {/* Day 5 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 5: Kulen Mountain & Departure</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Morning trip to Phnom Kulen National Park to see the River of a Thousand Lingas, the reclining Buddha, and the stunning waterfall. Return to Siem Reap for any last-minute shopping or relaxation before departure.
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
                  <li className="text-base">• Air-conditioned vehicle</li>
                  <li className="text-base">• Daily lunch</li>
                  <li className="text-base">• All entrance fees</li>
                  <li className="text-base">• Boat ride at Kampong Phluk</li>
                  <li className="text-base">• Bottled water and cold towels</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive" /> Excludes
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li className="text-base">• Accommodation</li>
                  <li className="text-base">• Flights</li>
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
                Hot and dry weather is expected throughout this tour. The best time to visit is from November to March. Midday temperatures can be very hot, so early morning temple visits are recommended.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-primary" /> Food
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. Siem Reap offers an excellent variety of restaurants from traditional Khmer to international cuisine. Street food and night market dining are highly recommended.
              </p>
            </div>

            <Separator />

            <div className="text-center">
              <a href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Essential%20Cambodia%205-Day%20Tour.%20Could%20you%20please%20provide%20more%20details%3F" target="_blank" rel="noopener noreferrer">
                <Button variant="nature" size="lg" className="w-full md:w-auto">Book Now via WhatsApp</Button>
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default EssentialCambodia5DayTourPopup;
