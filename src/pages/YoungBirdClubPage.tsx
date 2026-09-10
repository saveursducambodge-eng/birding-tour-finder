import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Mail, Binoculars, Leaf, Users } from "lucide-react";
import youngBirdClubImage from "@/assets/young-bird-club.jpg.asset.json";

const donateEmail = "pearaingbirdingtrails@gmail.com";
const donateSubject = "Donation to Young Bird Club";
const volunteerSubject = "Volunteer with Young Bird Club";

const YoungBirdClubPage = () => {
  return (
    <>
      <Helmet>
        <title>Young Bird Club | Pearaing Birding Trails</title>
        <meta name="description" content="Join the Pearaing Birding Trails Young Bird Club. Inspire the next generation of Cambodian birders through field trips, conservation education, and community fun." />
        <link rel="canonical" href="https://pearaing.com/tours/young-bird-club" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-16">
          {/* HERO */}
          <section className="relative h-[75vh] min-h-[520px] w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${youngBirdClubImage.url})` }}
              role="img"
              aria-label="Young birders with a guide watching waterbirds in a Cambodian wetland"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/85" />
            <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-16 sm:pb-24">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-6">
                <Binoculars className="w-4 h-4" /> Youth & Conservation
              </span>
              <h1 className="font-serif italic text-primary-foreground text-4xl sm:text-6xl md:text-7xl font-medium leading-[0.95] max-w-4xl">
                Young Bird Club
              </h1>
              <p className="mt-8 max-w-2xl text-base sm:text-lg text-primary-foreground/85 leading-relaxed">
                Inspiring Cambodia’s next generation of nature lovers through fun, hands-on birding experiences in the wild places we call home.
              </p>
            </div>
          </section>

          {/* INTRO */}
          <section className="container mx-auto px-6 py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-5 inline-block">About the Club</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary leading-tight mb-6">
                  Where curiosity takes flight.
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5">
                  The Young Bird Club is a community initiative by Pearaing Birding Trails that introduces children and young people to the birds, wetlands, and forests of Cambodia. Through guided walks, games, and simple conservation activities, members learn to observe, appreciate, and protect the wildlife around them.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5">
                  We believe that when a child spots their first kingfisher or hears a bulbul call, something changes. A young birder becomes a young conservationist — and Cambodia’s natural heritage gains a new guardian.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  The club is open to school groups, families, and young nature enthusiasts of all backgrounds. No experience or equipment is needed — just curiosity and a love for the outdoors.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-8 sm:p-12">
                <h3 className="font-serif text-2xl sm:text-3xl text-primary mb-6">What young members do</h3>
                <ul className="space-y-5">
                  {[
                    { icon: Binoculars, text: "Join easy half-day birding walks led by friendly local guides" },
                    { icon: Leaf, text: "Learn to identify common birds, plants, and wetland habitats" },
                    { icon: Users, text: "Meet other young nature lovers and share discoveries" },
                    { icon: Heart, text: "Take part in simple conservation actions that protect local wildlife" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-full bg-primary/10 text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-muted-foreground text-base sm:text-lg leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CALL TO ACTION */}
          <section className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 py-16 sm:py-24 text-center">
              <Heart className="w-10 h-10 mx-auto mb-8 text-primary-foreground/80" />
              <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl leading-[1.15] max-w-3xl mx-auto mb-6">
                Help us grow the next generation of bird guardians.
              </h2>
              <p className="max-w-2xl mx-auto text-base sm:text-lg text-primary-foreground/85 leading-relaxed mb-10">
                Your donation funds binoculars, field guides, and free club outings for young people in local communities. Or volunteer your time to mentor, teach, and explore alongside our young birders.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
                  <a
                    href={`mailto:${donateEmail}?subject=${encodeURIComponent(donateSubject)}`}
                    aria-label="Send an email to donate to the Young Bird Club"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Donate
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-w-[200px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a
                    href={`mailto:${donateEmail}?subject=${encodeURIComponent(volunteerSubject)}`}
                    aria-label="Send an email to volunteer with the Young Bird Club"
                  >
                    <HandHeart className="w-4 h-4 mr-2" />
                    Volunteer
                  </a>
                </Button>
              </div>
              <p className="mt-8 text-sm text-primary-foreground/70 inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {donateEmail}
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default YoungBirdClubPage;
