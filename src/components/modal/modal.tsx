'use client';
import { cn } from '@/lib/cn';
import { Button } from '@/components/common/button/button';

export const Modal = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      {/* Overlay */}
      <div className="absolute left-0 top-0 z-40 h-full w-full overflow-hidden bg-black/50" />
      {/* Content */}
      <div className="absolute left-0 top-0 h-screen w-screen">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg bg-white p-5 shadow-xl">
          <div className="flex max-w-80 flex-col items-center justify-center gap-5">
            <h1 className="text-3xl font-bold">Modal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium facere corrupti fugiat qui exercitationem hic?
            </p>
            <div className="flex flex-row gap-3">
              <Button>Yes</Button>
              <Button>No</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
