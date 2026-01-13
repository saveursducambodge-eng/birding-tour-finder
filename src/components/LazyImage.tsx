import { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  onClick?: () => void;
}
const LazyImage = ({
  src,
  alt,
  className,
  aspectRatio = "aspect-square",
  onClick
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '50px'
    });
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <div ref={imgRef} className={`${aspectRatio} overflow-hidden ${className}`} onClick={onClick}>
      {!isInView ? <Skeleton className="w-full h-full" /> : <>
          {!isLoaded && <Skeleton className="w-full h-full absolute" />}
          
        </>}
    </div>;
};
export default LazyImage;