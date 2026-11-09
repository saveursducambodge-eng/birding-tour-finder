import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Clock, Heart, Bird, Users, Leaf, ShieldCheck, MapPin, CalendarCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import TourIntroPopup from "@/components/TourIntroPopup";

import heroSlideGuides from "@/assets/hero-slide-guides.jpg";
import heroSlideBirdingGroup from "@/assets/hero-slide-birding-group.jpg";
import heroSlideScope from "@/assets/hero-slide-scope.jpg";
import heroMoon2 from "@/assets/hero-moon/hero-moon-2.jpg.asset.json";
import heroMoon3 from "@/assets/hero-moon/hero-moon-3.jpg.asset.json";
import heroMoon4 from "@/assets/hero-moon/hero-moon-4.jpg.asset.json";
import heroMoon5 from "@/assets/hero-moon/hero-moon-5.jpg.asset.json";
import heroMoon6 from "@/assets/hero-moon/hero-moon-6.jpg.asset.json";
import heroPaintedStorksFlight from "@/assets/hero-painted-storks-flight.jpg.asset.json";
import heroPondHeronLilies from "@/assets/hero-pond-heron-lilies.jpg.asset.json";
import heroGlossyIbises from "@/assets/hero-glossy-ibises.jpg.asset.json";
import kampongPhlukAsset from "@/assets/kampong-phluk-heron-lilies.jpg.asset.json";
import samnangGuidePortrait from "@/assets/samnang-guide-portrait.jpg";
import sekiGuidePortrait from "@/assets/seki-guide-portrait.jpg";
import phutGuidePortrait from "@/assets/ladong-guide-portrait.jpg";
// Import bird images from gallery
import bird1Asset from "@/assets/half-day-birding-siem-reap-new.jpg.asset.json";
const bird1 = bird1Asset.url;
import angkorWatSunsetAsset from "@/assets/angkor-wat-sunset.jpg.asset.json";
const angkorWatSunset = angkorWatSunsetAsset.url;
import bird2 from "@/assets/prek-toal-storks.jpg";
import bird3 from "@/assets/bird-3.jpg";
import bird4 from "@/assets/sarus-cranes.jpg";
import bird5 from "@/assets/prek-toal-waterbird-sanctuary.jpg";
import bird6 from "@/assets/tmatboey-ibis-tour6.jpg";
import kohKerImage from "@/assets/koh-ker-bird-tours.png";

const heroSlides = [
  heroMoon2.url,
  heroMoon3.url,
  heroMoon4.url,
  heroMoon5.url,
  heroMoon6.url,
  heroSlideGuides,
  heroSlideBirdingGroup,
  heroSlideScope,
  heroPaintedStorksFlight.url,
  heroPondHeronLilies.url,
  heroGlossyIbises.url,
];

const homeFaqs = [
  {
    question: "What is Pearaing Biodiversity Conservation Center?",
    answer: "Pearaing Biodiversity Conservation Center is a community-managed wetland about 13 km southeast of Siem Reap, close to Tonle Sap Lake. It protects feeding habitat for Painted Stork, Spot-billed Pelican, Oriental Darter and more than 70 wetland bird species.",
  },
  {
    question: "Can I visit Pearaing on a half-day birding tour?",
    answer: "Yes. Pearaing Birding Trails runs morning and afternoon half-day tours from Siem Reap with hotel pickup, a local birding guide, site fees and boat transport included.",
  },
  {
    question: "What birds can I see near Siem Reap?",
    answer: "Depending on the season, visitors may see Painted Stork, Milky Stork, Spot-billed Pelican, Grey-headed Fish Eagle, kingfishers, herons, egrets, jacanas and grassland species.",
  },
  {
    question: "How do I book a Cambodia birding tour?",
    answer: "Use the contact form or email pearaingbirdingtrails@gmail.com. Tours are private or small-group and can be tailored to your dates, target birds and travel pace.",
  },
];

// Only tours that exist on the Tours page, with their real prices.
const featuredTours = [
  { title: "Half Day Birding at Pearaing", description: "Explore Pearaing Biodiversity Conservation Center with 50+ wetland species, just 20 minutes from Siem Reap.", image: bird1, duration: "Half day", price: "$144 per person" },
  { title: "Bengal Florican Grassland Birding", description: "Search the seasonally flooded grasslands for the critically endangered Bengal Florican.", image: bird3, duration: "Half day", price: "$255 per person" },
  { title: "Prek Toal Waterbird Sanctuary", description: "Huge colonies of waterbirds – one of the best places to see Greater Adjutant and Milky Stork.", image: bird2, duration: "Full day", price: "$240 per person" },
  { title: "Kampong Phluk & Tonle Sap Wetlands", description: "Bird the flooded forest and lotus wetlands, then visit a traditional stilted village.", image: kampongPhlukAsset.url, duration: "Half day", price: "$165 per person" },
  { title: "Koh Ker and Beng Mealea Forest Birding", description: "Ancient temples and forest birding with White-rumped Falcon and 8 woodpecker species.", image: kohKerImage, duration: "Full day", price: "$245 per person" },
  { title: "Angkor Wat Birding Tour", description: "Combine sunrise at Angkor Wat with forest birding and temple exploration.", image: angkorWatSunset, duration: "Full day", price: "$195 per person" },
];

const whyChoose = [
  { icon: Bird, title: "Expert local bird guides", text: "Cambodian guides certified by the Ministry of Tourism, with deep knowledge of the country's bird species." },
  { icon: CalendarCheck, title: "Over a decade of experience", text: "Our guides have led birding and temple tours across Cambodia for more than ten years." },
  { icon: Users, title: "Private and tailor-made tours", text: "Every trip is planned around your dates, target birds and travel pace – no fixed departures." },
  { icon: ShieldCheck, title: "Responsible birdwatching", text: "We follow ethical birding practices that put the welfare of birds and their habitats first." },
  { icon: Leaf, title: "Conservation focused", text: "Every tour supports the protection of Cambodia's wetlands, grasslands and forests." },
  { icon: Heart, title: "Supporting local communities", text: "We work with community-managed sites so tourism income reaches local families." },
];

const destinations = [
  { name: "Siem Reap & Angkor", image: angkorWatSunset },
  { name: "Prek Toal Biosphere Reserve", image: bird5 },
  { name: "Western Siem Pang", image: bird6 },
  { name: "Russey Treb", image: heroMoon4.url },
  { name: "Kratie", image: heroMoon5.url },
  { name: "Keo Seima, Mondulkiri", image: heroMoon6.url },
  { name: "Phnom Penh & Surrounding Wetlands", image: bird4 },
];

const team = [
  { name: "Sok Samnang", image: samnangGuidePortrait, detail: "Certified by the Cambodian Ministry of Tourism – 20+ years as a temple guide, 10+ years as a bird guide." },
  { name: "So Seki", image: sekiGuidePortrait, detail: "English-speaking bird guide with over 12 years of experience across Cambodia." },
  { name: "Phanith Phut", image: phutGuidePortrait, detail: "English-speaking bird guide with over 8 years of experience with tour companies and research groups." },
];

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <>
      <Helmet>
        <title>Cambodia Birding Tours | Pearaing Birding Trails</title>
        <meta name="description" content="Explore Cambodia birding tours from Siem Reap to Tonle Sap, Prek Toal, the Bengal Florican grasslands, and the Northern Plains with expert local guides." />
        <link rel="canonical" href="https://pearaing.com/" />
        <meta property="og:title" content="Cambodia Birding Tours | Pearaing Birding Trails" />
        <meta property="og:description" content="Explore Cambodia birding tours from Siem Reap to Tonle Sap, Prek Toal, the Bengal Florican grasslands, and the Northern Plains with expert local guides." />
        <meta property="og:url" content="https://pearaing.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pearaing Birding Trails",
            url: "https://pearaing.com/",
            description:
              "Community-based birding and temple tours in Cambodia led by certified local guides.",
            email: "pearaingbirdingtrails@gmail.com",
            areaServed: "Cambodia",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Pearaing Birding Trails",
            url: "https://pearaing.com/",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero — left-aligned title over full-width photo */}
      <section className="relative h-[85vh] min-h-[520px] mt-16 flex items-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${slide})`, opacity: currentSlide === index ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-nature-forest/80 via-nature-forest/40 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 sm:px-8">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="font-serif font-bold leading-[1.05] mb-4 animate-fade-in">
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-nature-gold">Discover Cambodia</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-nature-gold">Through Birdwatching</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed mb-8">
              Explore Cambodia's extraordinary birdlife with experienced local birding guides. Discover rare species, spectacular wetlands and pristine forests through responsible wildlife adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/tours">
                <Button size="lg" className="rounded-full px-8 bg-nature-gold text-nature-forest hover:bg-nature-gold-light font-semibold">
                  Explore Birding Tours
                </Button>
              </Link>
              <Button size="lg" variant="outline" onClick={() => setShowPopup(true)} className="rounded-full px-8 bg-transparent border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Plan Your Birding Trip
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-[3px] rounded-full transition-all ${currentSlide === index ? "w-10 bg-nature-gold" : "w-6 bg-primary-foreground/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Intro — media left, text right */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-lg overflow-hidden shadow-card aspect-video">
            <img src={bird1} alt="Painted Storks at Pearaing Biodiversity Conservation Center" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary leading-tight mb-6">
              Pearaing runs birding and wildlife trips to the best conservation sites across Cambodia
            </h2>
            <p className="text-muted-foreground leading-loose mb-8">
              From Pearaing and Prek Toal to the Bengal Florican grasslands and the remote Northern Plains, our certified local guides give visitors close access to Cambodia's rarest birds. Every tour supports local communities and the protection of wetland and forest habitats.
            </p>
            <Link to="/about">
              <Button size="lg" className="rounded-full px-8 bg-nature-gold text-nature-forest hover:bg-nature-gold-light font-semibold">
                Meet our guides
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured birding experiences */}
      <section className="py-16 lg:py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary mb-4">Featured Birding Experiences</h2>
            <p className="text-muted-foreground">
              Recommended by our expert bird guides, from half-day trips near Siem Reap to full-day adventures. Every tour is private and can be tailored to your target birds.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTours.map((tour) => (
              <Card key={tour.title} className="group overflow-hidden flex flex-col border-0 shadow-card hover:shadow-float transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={tour.image} alt={tour.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">{tour.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{tour.description}</p>
                  <div className="flex items-center justify-between text-sm mb-5 border-t border-border pt-4">
                    <span className="flex items-center gap-1 text-muted-foreground"><Clock className="w-4 h-4" />{tour.duration}</span>
                    <span className="font-semibold text-primary">{tour.price}</span>
                  </div>
                  <Link to="/contact">
                    <Button className="w-full rounded-full bg-nature-gold text-nature-forest hover:bg-nature-gold-light font-semibold">Enquire Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/tours">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                View all tours <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Pearaing */}
      <section className="py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary mb-4">Why Choose Pearaing?</h2>
            <p className="text-muted-foreground">
              A local, conservation-minded team offering personal birding experiences across Cambodia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <Card key={item.title} className="border-border">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-nature-gold mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Birding destinations */}
      <section className="py-16 lg:py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary mb-4">Birding Destinations</h2>
            <p className="text-muted-foreground">
              From the wetlands of Tonle Sap to the forests of the Northern Plains and Eastern Highlands.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {destinations.map((dest) => (
              <Link key={dest.name} to="/itineraries" className="group relative rounded-lg overflow-hidden aspect-[4/3] shadow-card">
                <img src={dest.image} alt={dest.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/85 via-nature-forest/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-primary-foreground">{dest.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation banner */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bird5})` }} />
        <div className="absolute inset-0 bg-nature-forest/75" />
        <div className="relative container mx-auto text-center text-primary-foreground max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-nature-gold mb-4">Supporting Bird Conservation</h2>
          <p className="mb-8 leading-relaxed">
            Every tour contributes to protecting Cambodia's endangered birds and their habitats. We work alongside community-managed conservation sites so that your visit directly supports biodiversity protection, local livelihoods and responsible ecotourism.
          </p>
          <Link to="/conservation">
            <Button size="lg" className="rounded-full px-8 bg-nature-gold text-nature-forest hover:bg-nature-gold-light font-semibold">
              <Heart className="w-5 h-5 mr-2" /> Learn About Conservation
            </Button>
          </Link>
        </div>
      </section>

      {/* About our team */}
      <section className="py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary mb-4">About Our Team</h2>
            <p className="text-muted-foreground">
              Meet the local guides who will lead your Cambodian birding adventure.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((guide) => (
              <Card key={guide.name} className="overflow-hidden border-0 shadow-card text-center">
                <div className="aspect-square overflow-hidden">
                  <img src={guide.image} alt={`${guide.name}, bird guide at Pearaing Birding Trails`} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-1">{guide.name}</h3>
                  <p className="text-sm font-medium text-nature-gold mb-3">Guide</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{guide.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/about">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Read our full story <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking and contact */}
      <section className="py-16 lg:py-20 px-4 bg-nature-forest text-primary-foreground">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center max-w-5xl">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-nature-gold mb-4">Plan Your Birding Trip</h2>
            <p className="leading-relaxed mb-6">
              Tell us your number of travellers, preferred travel dates, target bird species and preferred tour duration – our team bird guide will design a private trip around you.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-nature-gold" /> Based in Siem Reap, guiding across Cambodia</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-nature-gold" /> Office hours 8:30 AM – 5:00 PM (GMT+7), Monday to Friday</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a href="https://wa.me/85589529696" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-nature-gold text-nature-gold hover:bg-nature-gold/10 hover:text-nature-gold font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8 bg-nature-gold text-nature-forest hover:bg-nature-gold-light font-semibold">
                Send a Tour Enquiry
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Or email us at pearaingbirdingtrails@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Visitor Questions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary text-center mb-10">
            Planning a birding tour near Siem Reap?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {homeFaqs.map((faq) => (
              <Card key={faq.question} className="border-border">
                <CardContent className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TourIntroPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div></>;
};
export default Homepage;
