import { useEffect, useRef, useState } from 'react';

interface ExternalImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export const ExternalImage = ({ src, alt, className, placeholder, ...props }: ExternalImageProps) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={imgRef} className={className} style={{ minHeight: '100px' }}>
      {isVisible && !hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => {
            setHasError(true);
          }}
          {...props}
        />
      ) : hasError ? (
        <div className="flex h-full items-center justify-center border-2 border-red-200 text-red-600">
          Image failed to load.
        </div>
      ) : placeholder ? (
        <img src={placeholder} alt="placeholder" />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
