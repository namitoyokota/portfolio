import { useEffect, useRef, useState } from 'react';

interface InternalImageProps {
  imageImport: () => Promise<{ default: string }>;
  alt: string;
}

export const InternalImage = ({ imageImport, alt }: InternalImageProps) => {
  const [src, setSrc] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          imageImport().then((module) => {
            setSrc(module.default);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [imageImport]);

  return (
    <div ref={ref} style={{ minHeight: '100px' }}>
      {src ? <img src={src} alt={alt} /> : <div>Loading...</div>}
    </div>
  );
};
