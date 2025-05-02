
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import { MarkdownContent as MarkdownContentType } from '@/utils/markdownLoader';

interface MarkdownContentProps {
  content: MarkdownContentType | null;
  isLoading?: boolean;
  error?: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ 
  content, 
  isLoading = false,
  error 
}) => {
  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-7 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/5 mb-6"></div>
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md border border-red-200 dark:border-red-800">
        <h3 className="text-red-800 dark:text-red-300 font-medium mb-2">Error Loading Content</h3>
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-md border border-amber-200 dark:border-amber-800">
        <h3 className="text-amber-800 dark:text-amber-300 font-medium mb-2">Content Not Found</h3>
        <p className="text-amber-600 dark:text-amber-400">The requested documentation page could not be found.</p>
      </div>
    );
  }

  // Custom components for ReactMarkdown
  const components = {
    // Custom link component to use React Router for internal links
    a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }) => {
      const isInternal = href && !href.startsWith('http') && !href.startsWith('#');
      
      if (isInternal && href) {
        return <Link to={href} {...props}>{children}</Link>;
      }
      
      return <a href={href} target={href?.startsWith('http') ? "_blank" : undefined} rel={href?.startsWith('http') ? "noreferrer" : undefined} {...props}>{children}</a>;
    }
  };

  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        components={components}
      >
        {content.content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
