import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <Helmet>
        <title>Blog | Birding & Temple Tour Insights | Pearaing Conservation Tours</title>
        <meta
          name="description"
          content="Stories, guides, and insights about bird watching, full-day tours, multi-day expeditions, and temple tours across Cambodia."
        />
        <link rel="canonical" href="https://my-birding-canvas.lovable.app/blog" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12 lg:mb-16">
                <Badge className="mb-4 bg-nature-sand text-nature-forest">Our Journal</Badge>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                  Birding & Temple Tour Stories
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Field notes, tour highlights, and expert guidance from our certified guides across Cambodia.
                </p>
              </div>

              {/* Featured post */}
              <Link to={`/blog/${featured.slug}`} className="block group mb-12 lg:mb-16">
                <Card className="overflow-hidden hover:shadow-float transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-video lg:aspect-auto overflow-hidden">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <Badge className="bg-nature-forest text-white">{featured.category}</Badge>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {featured.date}
                        </span>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {featured.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-nature-forest transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
                      <Button variant="ghost" className="self-start p-0 h-auto text-primary hover:text-primary">
                        Read article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </Link>

              {/* Grid of remaining posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                    <Card className="h-full overflow-hidden hover:shadow-float transition-all duration-300 flex flex-col">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <Badge variant="outline" className="text-xs">{post.category}</Badge>
                          <span className="text-muted-foreground text-xs flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-primary mb-2 group-hover:text-nature-forest transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                          {post.excerpt}
                        </p>
                        <span className="text-sm font-medium text-primary inline-flex items-center">
                          Read more
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default BlogPage;