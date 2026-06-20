import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Play, Clock, Calendar, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import featuredVideo from "@/assets/videos/field-diary-2026-06-06.mp4.asset.json";

interface VideoPost {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  duration: string;
  date: string;
}

// Placeholder videos — swap youtubeId values with your real video IDs
const videoPosts: VideoPost[] = [
  {
    id: "1",
    title: "Pearaing Conservation Tours,  Done Bird Survey at Sofitel Angkor Phokeetra Golf & Spa Resort 2025",
    description:
      "Follow our guides into the dry dipterocarp forest at first light for an unforgettable encounter with Cambodia's critically endangered national bird.",
    youtubeId: "VG7j24yDTwQ",
    category: "Field Diary",
    duration: "6:42",
    date: "March 5, 2026",
  },
  {
    id: "2",
    title: "Prek Toal Waterbird Sanctuary — A Full Day on the Tonle Sap",
    description:
      "Greater Adjutants, Milky Storks and Spot-billed Pelicans at the largest breeding colony in Southeast Asia.",
    youtubeId: "vlUvw-qQ2wI",
    category: "\u00a0Tours",
    duration: "8:15",
    date: "May 28, 2026",
  },
  {
    id: "3",
    title: "Sarus Crane Wintering Grounds at Ang Trapaeng Thmor",
    description:
      "Open grasslands, a vast reservoir, and the tallest flying bird in the world — Cambodia's most reliable Sarus Crane site.",
    youtubeId: "dQw4w9WgXcQ",
    category: "Conservation",
    duration: "5:30",
    date: "May 20, 2026",
  },
  {
    id: "4",
    title: "Birding inside the Angkor Forest",
    description:
      "Hainan Blue Flycatcher, Alexandrine Parakeet and Oriental Pied Hornbill — quiet birding among ancient temples.",
    youtubeId: "dQw4w9WgXcQ",
    category: "Temple Birding",
    duration: "7:08",
    date: "May 10, 2026",
  },
];

const VideoBlogPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isFloating, setIsFloating] = useState(false);
  const [floatDismissed, setFloatDismissed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFloating(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Video Blog | Cambodia Birding Videos | Pearaing Conservation Tours</title>
        <meta
          name="description"
          content="Watch our latest birding and conservation videos from across Cambodia — field diaries, tour highlights, and species spotlights."
        />
        <link rel="canonical" href="https://pearaing.com/video-blog" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12 lg:mb-16">
                <Badge className="mb-4 bg-nature-sand text-nature-forest">Video Blog</Badge>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                  Birding Videos from the Field
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Short films and field diaries from our guides across Cambodia's wetlands, forests, and temple landscapes.
                </p>
              </div>

              {/* Featured video */}
              <div ref={heroRef} className="mb-12">
                <Card className="overflow-hidden shadow-float">
                  <div className="aspect-video bg-muted relative">
                    <video
                      src={featuredVideo.url}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Badge variant="outline" className="text-xs">Featured</Badge>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> June 6, 2026
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-3">
                      Latest from the Field
                    </h2>
                    <p className="text-muted-foreground">
                      A fresh clip captured by our guiding team in the Cambodian countryside.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videoPosts.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-float transition-all duration-300 flex flex-col">
                    <div className="aspect-video bg-muted relative">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <Badge variant="outline" className="text-xs">{video.category}</Badge>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {video.duration}
                        </span>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {video.date}
                        </span>
                      </div>
                      <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-3">
                        {video.title}
                      </h2>
                      <p className="text-muted-foreground text-sm flex-grow">{video.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                  <Play className="w-4 h-4" />
                  More videos coming soon
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Floating mini-player */}
        {isFloating && !floatDismissed && (
          <div className="fixed bottom-4 right-4 z-50 w-72 sm:w-80 rounded-lg overflow-hidden shadow-float bg-background border border-border animate-fade-in">
            <button
              onClick={() => setFloatDismissed(true)}
              aria-label="Close floating video"
              className="absolute top-1 right-1 z-10 bg-background/80 hover:bg-background rounded-full p-1 text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="aspect-video bg-muted">
              <video
                src={featuredVideo.url}
                controls
                playsInline
                muted
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoBlogPage;