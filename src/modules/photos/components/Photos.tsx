import { useEffect, useState } from 'react';
import { ExternalImage } from './ExternalImage';
import { InternalImage } from './InternalImage';

type ExternalImageType = {
  fullImageUrl: string;
  alt?: string;
};

export const Photos = () => {
  const [externalImages, setExternalImages] = useState<ExternalImageType[]>([]);

  useEffect(() => {
    fetch('https://api.namitoyokota.com/images.json').then((response) => {
      response.json().then((data) => {
        setExternalImages(data);
      });
    });
  }, []);

  return (
    <>
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-black">Photos</h1>

      {/* Subtitle */}
      <p>
        I have been blessed to work for <span className="font-semibold">great companies and teams</span>. Here is a
        brief history of my employment history and the contributions I made.
      </p>

      {/* Photo Gallery */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          {externalImages.map((image, index) => {
            return (
              <ExternalImage
                key={index}
                src={image.fullImageUrl}
                alt={image.alt || `Image ${index + 1}`}
                className="w-full max-w-[750px] rounded-lg shadow-md"
                placeholder="https://placehold.co/1000x750"
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <InternalImage imageImport={() => import('../../../assets/test-1.jpg')} alt="Sample" />
          <InternalImage imageImport={() => import('../../../assets/test-2.jpg')} alt="Sample" />
          <InternalImage imageImport={() => import('../../../assets/test-3.jpg')} alt="Sample" />
          <InternalImage imageImport={() => import('../../../assets/test-4.jpg')} alt="Sample" />
          <InternalImage imageImport={() => import('../../../assets/test-5.jpg')} alt="Sample" />
          <InternalImage imageImport={() => import('../../../assets/test-6.jpg')} alt="Sample" />
        </div>
      </div>
    </>
  );
};
