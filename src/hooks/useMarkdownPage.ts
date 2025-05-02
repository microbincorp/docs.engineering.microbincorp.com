
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMarkdownContent, MarkdownContent } from '@/utils/markdownLoader';

export const useMarkdownPage = () => {
  const location = useLocation();
  const [content, setContent] = useState<MarkdownContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Get path without query parameters
        const path = location.pathname;
        
        // Load markdown content
        const markdownContent = await getMarkdownContent(path);

        if (markdownContent) {
          setContent(markdownContent);
        } else {
          setError('Could not load content for this page');
        }
      } catch (err) {
        console.error('Error loading markdown content:', err);
        setError('Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [location.pathname]);

  return {
    content,
    isLoading,
    error,
    pageTitle: content?.frontmatter.title,
    pageDescription: content?.frontmatter.description,
  };
};
