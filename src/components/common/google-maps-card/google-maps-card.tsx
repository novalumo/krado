import { type ReactNode, useState } from 'react';

export const GoogleMapsCard = ({
  children,
  url,
  className,
  height,
}: {
  children: ReactNode;
  url: string;
  className?: string;
  height?: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={className || ''}>
      <div className="bg-white rounded-lg overflow-hidden border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 p-5">{children}</div>
          <div className="md:w-1/2 relative">
            {!isLoaded && (
              <div className="absolute inset-0 bg-slate-200 animate-pulse" />
            )}
            <iframe
              title="Google Maps"
              src={url}
              width="100%"
              height={`${height || 480}px`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={`${isLoaded ? '' : 'invisible'}`}
              onLoad={() => {
                setIsLoaded(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
