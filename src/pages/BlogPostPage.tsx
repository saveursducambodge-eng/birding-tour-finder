import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, Clock, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { blogPosts } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | Pearaing Conservation Tours</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://my-birding-canvas.lovable.app/blog/${post.slug}`} />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          {/* Hero */}
          <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
            <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-10 px-4 md:px-6 lg:px-8 text-white">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge className="bg-nature-forest text-white">{post.category}</Badge>
                <span className="text-xs flex items-center gap-1 opacity-90">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="text-xs flex items-center gap-1 opacity-90">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold max-w-4xl">
                {post.title}
              </h1>
            </div>
          </section>

          {/* Body */}
          <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto max-w-3xl">
              <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to blog
              </Link>

              <p className="text-lg text-muted-foreground italic mb-8 border-l-4 border-nature-forest pl-4">
                {post.excerpt}
              </p>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
                {post.content.map((para, idx) => (
                  <p key={idx} className="text-justify leading-relaxed">{para}</p>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-10 p-6 bg-nature-sand/30 rounded-2xl">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Tour Highlights</h3>
                <ul className="space-y-2">
                  {post.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-nature-forest flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link to="/tours" className="w-full sm:w-auto">
                  <Button size="lg" variant="nature" className="w-full sm:w-auto">
                    Explore Our Tours
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Related */}
          <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8">More articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
                    <div className="rounded-xl overflow-hidden bg-card shadow hover:shadow-float transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="p-4">
                        <Badge variant="outline" className="text-xs mb-2">{p.category}</Badge>
                        <h3 className="font-serif font-semibold text-primary group-hover:text-nature-forest transition-colors">
                          {p.title}
                        </h3>
                      </div>
                    </div>
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

export default BlogPostPage;