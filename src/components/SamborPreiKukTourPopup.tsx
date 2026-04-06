import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, MapPin, Users, Star, Utensils, CloudSun, CheckCircle, XCircle, Lightbulb, Camera, Backpack, BadgeDollarSign } from "lucide-react";
import samborPreiKukImg from "@/assets/temples/sambor-prei-kuk.jpg";

interface SamborPreiKukTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SamborPreiKukTourPopup = ({ isOpen, onClose }: SamborPreiKukTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="relative">
            <img src={samborPreiKukImg} alt="Sambor Prei Kuk temples" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <DialogHeader>
                <DialogTitle className="text-white text-2xl md:text-3xl font-serif">
                  Sambor Prei Kuk Full-Day Heritage Tour
                </DialogTitle>
              </DialogHeader>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Overview */}
            <div>
              <p className="text-muted-foreground text-base leading-relaxed text-justify">
                Discover the ancient capital of the Chenla Empire at Sambor Prei Kuk, a UNESCO World Heritage Site. This peaceful forest temple complex dates back to the 7th century and features over 100 pre-Angkorian brick temples hidden in the jungle.
              </p>
            </div>

            {/* Tour Duration */}
            <div className="flex flex-wrap gap-4 text-base">
              <span className="flex items-center gap-2 text-muted-foreground"><Clock className="w-4 h-4 text-primary" /> Full Day (Approx. 8–10 hours)</span>
              <span className="flex items-center gap-2 text-muted-foreground"><MapPin className="w-4 h-4 text-primary" /> Departure from Phnom Penh or Kampong Thom</span>
            </div>

            {/* Itinerary */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">🗓️ Full Itinerary</h3>
              <div className="space-y-4 text-base text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">07:30 AM – Hotel Pickup</p>
                  <p className="text-justify">Pick up from your hotel in Phnom Penh (or Kampong Thom). Travel by private vehicle through scenic countryside.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">10:30 AM – Arrival at Sambor Prei Kuk</p>
                  <p className="text-justify">Welcome by local guide with a brief introduction to the history of Isanapura (ancient capital).</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Morning Exploration – Temple Groups</p>
                  <ul className="list-disc list-inside space-y-2 ml-2 text-justify">
                    <li><strong>Prasat Sambor (North Group)</strong> – Main temple dedicated to Shiva, one of the oldest structures from the 7th century.</li>
                    <li><strong>Prasat Yeah Puon (South Group)</strong> – Complex of multiple temples surrounded by forest with unique octagonal towers (rare in Southeast Asia).</li>
                    <li><strong>Prasat Tao (Central Group – Lion Temple)</strong> – Famous lion statues guarding the sanctuary, an iconic photo spot.</li>
                  </ul>
                  <p className="mt-2 text-justify">Walk through shaded forest paths connecting temples. Enjoy peaceful atmosphere — much less crowded than Angkor.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">01:00 PM – Lunch Break</p>
                  <p className="text-justify">Local restaurant in Kampong Thom town (or picnic lunch option near temple area).</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">02:30 PM – Cultural & Village Experience</p>
                  <p className="text-justify">Visit nearby local village. Learn about traditional lifestyles. Optional: interact with local artisans or monks.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">03:30 PM – Return Journey</p>
                  <p className="text-justify">Relax on the drive back.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">06:30 PM – Drop-off at Hotel</p>
                  <p>End of tour.</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">💰 Pricing</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Private Tour</h4>
                  <ul className="space-y-1 text-base text-muted-foreground">
                    <li>1–2 persons: $120–$150</li>
                    <li>3–5 persons: $160–$200</li>
                    <li>6–10 persons: $220–$300</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Group Tour</h4>
                  <ul className="space-y-1 text-base text-muted-foreground">
                    <li>Per person: $40–$70</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">Prices depend on transport type, guide language, and group size.</p>
                </div>
              </div>
            </div>

            {/* Includes / Excludes */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Includes</h4>
                <ul className="space-y-1 text-base text-muted-foreground">
                  <li>Hotel pickup & drop-off</li>
                  <li>Private air-conditioned vehicle</li>
                  <li>Professional English-speaking guide</li>
                  <li>Entrance fee to Sambor Prei Kuk</li>
                  <li>Drinking water & cold towels</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><XCircle className="w-4 h-4 text-red-600" /> Excludes</h4>
                <ul className="space-y-1 text-base text-muted-foreground">
                  <li>Meals (lunch & drinks)</li>
                  <li>Personal expenses</li>
                  <li>Tips for guide/driver</li>
                  <li>Travel insurance</li>
                </ul>
              </div>
            </div>

            {/* Essential Items */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">🎒 Essential Items</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Recommended</h4>
                  <ul className="space-y-1 text-base text-muted-foreground">
                    <li>Camera with extra batteries</li>
                    <li>Small backpack</li>
                    <li>Cash for breakfast</li>
                    <li>Sun protection (hat, sunscreen)</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Leave at Hotel</h4>
                  <ul className="space-y-1 text-base text-muted-foreground">
                    <li>Passport (bring a copy)</li>
                    <li>Airline tickets</li>
                    <li>Excess cash</li>
                    <li>Valuable jewelry</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">📅 Best Time to Visit</h3>
              <div className="space-y-2 text-base text-muted-foreground">
                <p><strong className="text-foreground">✅ Best Season:</strong> November – February (Cool & dry) 🌿 — Comfortable weather, best for walking.</p>
                <p><strong className="text-foreground">🔥 Hot Season:</strong> March – May — Very hot (start early recommended).</p>
                <p><strong className="text-foreground">🌧️ Green Season:</strong> June – October — Lush forest, fewer tourists, but occasional rain.</p>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">⭐ Highlights</h3>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>• UNESCO World Heritage Site (since 2017)</li>
                <li>• Over 100 ancient temples in jungle setting</li>
                <li>• Unique pre-Angkorian architecture</li>
                <li>• Quiet and authentic experience</li>
                <li>• Rich Khmer history before Angkor</li>
              </ul>
            </div>

            {/* Travel Tips */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">💡 Travel Tips</h3>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li>• Wear comfortable walking shoes</li>
                <li>• Bring mosquito repellent</li>
                <li>• Carry sunscreen & hat</li>
                <li>• Hire a local guide for deeper history</li>
                <li>• Start early to avoid heat</li>
              </ul>
            </div>

            {/* Optional Add-ons */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">📌 Optional Add-ons</h3>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li>• Combine with Kampong Kdei Ancient Bridge stop</li>
                <li>• Extend to Koh Ker or Preah Vihear (multi-day tour)</li>
                <li>• Cycling tour inside temple complex</li>
              </ul>
            </div>

            {/* Weather */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">🌤️ Weather</h3>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.
              </p>
            </div>

            {/* Food */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">🍜 Food</h3>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.
              </p>
            </div>

            {/* Terms & Conditions */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">📋 Terms & Conditions</h3>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li>• Booking confirmation required in advance</li>
                <li>• Free cancellation: 24–48 hours before tour</li>
                <li>• Child policy: discounts available</li>
                <li>• Tour operates year-round</li>
                <li>• Refunds will be processed within 5–10 business days</li>
              </ul>
            </div>

            {/* Book Now */}
            <div className="text-center pt-4 pb-2">
              <a
                href="https://wa.me/85581553810?text=Hi%2C%20I%20am%20interested%20in%20the%20Sambor%20Prei%20Kuk%20Full-Day%20Heritage%20Tour.%20Could%20you%20provide%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
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

export default SamborPreiKukTourPopup;
