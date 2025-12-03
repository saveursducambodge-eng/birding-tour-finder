import { useImagePreloader } from '@/hooks/useImagePreloader';
import { Progress } from '@/components/ui/progress';

const ImagePreloader = ({ children }: { children: React.ReactNode }) => {
  const { loading, progress, error } = useImagePreloader();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-hero">
        <div className="text-center space-y-8 max-w-md mx-auto px-6">
          {/* Logo ou icône */}
          <div className="w-20 h-20 mx-auto rounded-full bg-nature-sand flex items-center justify-center">
            <svg 
              className="w-10 h-10 text-nature-forest animate-pulse"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>

          {/* Titre */}
          <div className="space-y-2">
            <h1 className="text-2xl font-serif font-bold text-white">
              Cambodia Bird Tours
            </h1>
            <p className="text-nature-sand opacity-90">
              Preparing your adventure...
            </p>
          </div>

          {/* Barre de progression */}
          <div className="space-y-3">
            <Progress 
              value={progress} 
              className="w-full h-2 bg-nature-sand/30"
            />
            <p className="text-sm text-nature-sand opacity-75">
              {progress}% loaded
            </p>
          </div>

          {/* Message d'erreur */}
          {error && (
            <p className="text-red-300 text-sm">
              {error}
            </p>
          )}

          {/* Animation de chargement */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-nature-sand rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-nature-sand rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-nature-sand rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ImagePreloader;