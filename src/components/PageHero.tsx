import { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  title: ReactNode;
  subtitle?: ReactNode;
  imageAlt?: string;
  children?: ReactNode;
}

/** Shared page banner: full-width photo with left-aligned gold title (matches the homepage). */
const PageHero = ({ image, title, subtitle, imageAlt, children }: PageHeroProps) => (
  <section className="relative h-[60vh] min-h-[420px] flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
      role="img"
      aria-label={imageAlt}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-nature-forest/85 via-nature-forest/45 to-transparent" />
    <div className="relative z-10 container mx-auto px-4 sm:px-8">
      <div className="max-w-2xl text-primary-foreground">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-nature-gold mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-snug">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  </section>
);

export default PageHero;
