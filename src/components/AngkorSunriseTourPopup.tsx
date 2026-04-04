import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Users, Sun, Camera, CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

interface AngkorSunriseTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AngkorSunriseTourPopup = ({ isOpen, onClose }: AngkorSunriseTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <div className="p-6 md:p-8 text-base">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl md:text-3xl text-primary">
                Itinerary – Angkor Wat Sunrise Tour
              </DialogTitle>
            </DialogHeader>

            {/* Intro */}
            <div className="mt-6 space-y-4">
              <p className="text-lg font-semibold text-foreground italic">
                The perfect sunrise. No crowds. No guesswork—just the photos you came for, led by an expert guide.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Skip the crowds, capture incredible photos, and experience Angkor Wat at its most magical—guided by someone who knows every hidden path.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Most visitors arrive around 9:00 AM, when the site is already crowded and the light is harsh. Our Angkor Wat Sunrise Tour gets you there early—around 4:15 AM—so you can enjoy peaceful surroundings, soft morning light, and truly unforgettable views.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                This tour includes expert guiding, visits to four major temples—Angkor Wat, Ta Prohm, Bayon Temple, and Angkor Thom—as well as comfortable transportation with hotel pickup. You'll return with stunning photos and a deeper understanding of Cambodia's most iconic heritage site.
              </p>
            </div>

            <Separator className="my-6" />

            {/* What You Will Do */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Sun className="w-5 h-5 text-primary" />
              What You Will Do – Your Sunrise Adventure
            </h3>
            <div className="space-y-4">
              {[
                { time: "4:15 AM – 4:35 AM", title: "Hotel Pickup", desc: "Your comfortable, air-conditioned vehicle will pick you up from your hotel. It's an early start—but absolutely worth it." },
                { time: "5:30 AM", title: "Enter Angkor Wat in the Dark", desc: "Begin your visit through a quieter eastern entrance, away from the main crowds. Walk through ancient corridors illuminated by your flashlight, surrounded by intricate bas-relief carvings." },
                { time: "6:00 AM", title: "Sunrise at Angkor Wat", desc: "Take your position by one of the reflecting pools as the sun rises behind the temple's iconic towers. Watch the sky come alive with color and see the temple reflected in the still water—an unforgettable moment and a perfect photo opportunity." },
                { time: "6:30 AM – 8:30 AM", title: "Explore Angkor Wat", desc: "Spend time discovering the temple's inner galleries, chambers, and upper terraces. Your guide will bring the carvings and history of the Khmer Empire to life with fascinating stories and insights." },
                { time: "9:00 AM", title: "Optional Breakfast Break", desc: "Enjoy a short rest and breakfast (optional and not included)." },
                { time: "9:30 AM", title: "Visit Ta Prohm", desc: "Explore the famous \"Tomb Raider temple,\" where giant tree roots intertwine with ancient ruins, creating one of the most photogenic sites in the Angkor complex." },
                { time: "10:30 AM", title: "Angkor Thom", desc: "Enter the ancient city of Angkor Thom, passing the Terrace of the Elephants and the Terrace of the Leper King." },
                { time: "11:00 AM", title: "Bayon Temple", desc: "Discover the iconic smiling stone faces of Bayon—over 200 massive carvings that continue to intrigue visitors and historians alike." },
                { time: "11:30 AM", title: "South Gate of Angkor Thom", desc: "Walk past rows of stone gods and demons lining the causeway—an impressive and symbolic entrance to the ancient city." },
                { time: "12:30 PM – 1:30 PM", title: "Return to Hotel", desc: "Head back to your hotel with unforgettable memories and a camera full of stunning photos." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-36 md:w-44">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">{item.time}</span>
                  </div>
                  <div className="text-base">
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-muted-foreground mt-1 text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            {/* Complete Schedule */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Complete Sunrise Tour Schedule
            </h3>
            <div className="space-y-5">
              {[
                { phase: "Early Morning (4:15 AM – 6:00 AM)", items: ["Hotel pickup in a comfortable, air-conditioned vehicle", "Arrival at Angkor Archaeological Park", "Enter Angkor Wat via the quieter eastern entrance", "Walk through ancient corridors using a flashlight"] },
                { phase: "Sunrise Experience (6:00 AM – 8:30 AM)", items: ["Watch the sunrise over Angkor Wat from the reflecting (library) pool", "Receive basic photography guidance from your guide", "Enjoy a two-hour, in-depth exploration of the temple", "Discover the stories behind the intricate bas-relief carvings"] },
                { phase: "Temple Exploration (9:00 AM – 12:00 PM)", items: ["Optional breakfast break (not included)", "Explore the jungle-covered temple of Ta Prohm", "Visit the ancient city of Angkor Thom", "Discover Bayon Temple, famous for its 200+ stone faces", "Walk through the South Gate lined with gods and demons"] },
                { phase: "Return Journey (12:30 PM – 1:30 PM)", items: ["Relax on a comfortable drive back to your hotel", "Time to rest and reflect on an unforgettable morning at Angkor"] },
              ].map((section, i) => (
                <div key={i} className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground text-sm mb-2">{section.phase}</h4>
                  <ul className="space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-muted-foreground flex items-start gap-2 text-base">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            {/* Tour Collection */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">
              Discover Our Angkor Wat Tours – Complete Tour Collection
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              After planning thousands of trips to Cambodia, one thing is clear: not all Angkor tours are created equal. Some rush you through in just a few hours, while others charge premium prices for a basic experience. Here's what truly makes the difference…
            </p>
            <div className="space-y-3">
              {[
                { title: "Small Group Adventures (2–15 people)", desc: "Perfect for travelers who want a more personal experience without the cost of a private tour. You'll enjoy meaningful interaction with knowledgeable guides who bring the stories of Angkor Wat to life." },
                { title: "Private Temple Experiences", desc: "Prefer full flexibility? Private tours allow you to explore at your own pace—start at sunrise, take breaks when you like, and spend more time at the temples that interest you most." },
                { title: "Multi-Language Options", desc: "We offer tours in German, Spanish, French, and Italian. Our native-speaking guides ensure nothing is lost in translation, sharing deeper cultural insights and local legends." },
                { title: "Regional Departures", desc: "Arriving from cities like Singapore or Ho Chi Minh City? We coordinate your tour timing smoothly with your arrival—no stress, no rushing." },
              ].map((item, i) => (
                <div key={i} className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                  <p className="text-muted-foreground mt-1 text-base">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-accent/30 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" /> Good to Know
              </h4>
              <p className="text-muted-foreground mt-1 text-base">
                Sunrise tours are the most popular and tend to sell out quickly, especially during the dry season (November to March). Sunset tours are also beautiful, though typically more crowded.
              </p>
              <p className="text-muted-foreground mt-2 text-lg">
                We recommend booking at least 48 hours in advance to secure the best guides—during peak season, even earlier.
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
                    "Professional English-speaking guide with expert local knowledge",
                    "Air-conditioned transportation with hotel pickup and drop-off",
                    "Complimentary bottled water",
                    "Refreshing cold towels",
                    "Photography guidance for the best angles and lighting",
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
                  <li className="text-muted-foreground text-sm">• Temple entrance fee: US$37 (valid for all temples in one day)</li>
                  <li className="text-muted-foreground text-sm text-xs mt-1 italic">You can easily purchase your pass online via the official Angkor Pass website.</li>
                </ul>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Essential Items */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Essential Items to Bring
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-lg p-4 text-base">
                <h4 className="font-semibold text-foreground text-sm mb-2">Required</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Flashlight or phone light</li>
                  <li>• Temple pass (US$37)</li>
                  <li>• Modest clothing (shoulders & knees covered)</li>
                  <li>• Comfortable walking shoes</li>
                </ul>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground text-sm mb-2">Recommended</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Camera with extra batteries</li>
                  <li>• Small backpack</li>
                  <li>• Cash for breakfast</li>
                  <li>• Sun protection (hat, sunscreen)</li>
                </ul>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground text-sm mb-2">Leave at Hotel</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Passport (bring a copy)</li>
                  <li>• Airline tickets</li>
                  <li>• Excess cash</li>
                  <li>• Valuable jewelry</li>
                </ul>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Additional Info */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Additional Information
            </h3>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-muted-foreground text-sm">
              <p>• <strong>Pickup time:</strong> 4:15 AM – 4:35 AM (exact time confirmed one day before)</p>
              <p>• <strong>Tour ends:</strong> 12:30 PM – 1:30 PM</p>
              <p>• <strong>Breakfast:</strong> If your hotel includes breakfast, request a takeaway box, or stop at a local restaurant</p>
              <p>• <strong>Dress code:</strong> Casual, but respectful (covered shoulders and knees required inside temples)</p>
              <p>• Comfortable walking shoes are strongly recommended</p>
              <p>• For safety, leave valuables at your hotel and bring only what you need</p>
              <p>• This tour is not wheelchair accessible</p>
              <p>• Children under 8 years old are not permitted</p>
              <p>• <strong>Maximum group size:</strong> 2–15 travelers in an air-conditioned vehicle</p>
            </div>
            <Separator className="my-6" />

            {/* Weather */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Sun className="w-5 h-5 text-primary" />
              Weather
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed text-justify">
              Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.
            </p>

            <Separator className="my-6" />

            {/* Food */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Food
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed text-justify">
              Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.
            </p>

            <Separator className="my-6" />

            {/* WhatsApp CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/85581555895?text=Hi%2C%20I%27m%20interested%20in%20the%20Angkor%20Wat%20Sunrise%20Tour"
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

export default AngkorSunriseTourPopup;
