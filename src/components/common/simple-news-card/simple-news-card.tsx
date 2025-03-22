'use client';
import { cn } from '@/lib/cn';
import { Tag } from '@/components/common/tag/tag';
import { formatDate } from '@/lib/datetime';
import { motion } from 'motion/react';
import Link from 'next/link';

type News = {
  id: string;
  title: string;
  publishedAt: string;
  category: { id: string; name: string; createdAt: string; updatedAt: string };
  tags: { id: string; name: string }[];
};

export const SimpleNewsCard = ({
  content,
  className,
}: {
  content: News;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      animate="visible"
      className={className}
    >
      <Link
        href={
          content.category.id === 'blog'
            ? `/blog/${content.id}`
            : `/news/${content.id}`
        }
        className="flex w-full flex-row items-center justify-start py-3 transition-opacity hover:opacity-50"
      >
        <div className="flex flex-col">
          {/* category */}
          <div>
            {content.category.id !== 'blog' && (
              <span
                className={cn(
                  'inline-block text-xs font-bold',
                  content.category.id === 'release' && 'text-category-release',
                  content.category.id === 'info' && 'text-category-info',
                  content.category.id === 'media' && 'text-category-media',
                )}
              >
                {content.category.name}
              </span>
            )}
          </div>
          {/* title */}
          <h3 className="block font-bold">{content.title}</h3>
          {/* date */}
          <time
            dateTime={content.publishedAt}
            className="inline-block text-xs font-bold text-gray-500"
          >
            {formatDate(content.publishedAt)}
          </time>
          {/* tags */}
          {content.tags && content.tags.length !== 0 && (
            <div className="mt-1 inline-flex flex-wrap gap-0.5 text-xs">
              {content.tags.map((tag: { id: string; name: string }) => (
                <Tag key={tag.id} id={tag.id} name={tag.name} />
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};
