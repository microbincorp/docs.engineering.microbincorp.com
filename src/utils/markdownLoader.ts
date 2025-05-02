
import matter from 'gray-matter';

export type MarkdownContent = {
  content: string;
  frontmatter: {
    title?: string;
    description?: string;
    [key: string]: any;
  };
};

/**
 * Dynamic markdown content loader
 * Loads markdown content for a given path
 */
export const getMarkdownContent = async (path: string): Promise<MarkdownContent | null> => {
  try {
    // Normalize path to match our content directory structure
    if (path.endsWith('/')) {
      path = path + 'index';
    }
    
    if (!path.startsWith('/')) {
      path = '/' + path;
    }
    
    // Remove leading slash for import
    const importPath = path.substring(1);
    
    // Try to import the markdown file
    const markdownModule = await import(`../content/${importPath}.md`);
    const fileContents = markdownModule.default;
    
    // Parse frontmatter and content
    const { data, content } = matter(fileContents);
    
    return {
      content,
      frontmatter: data
    };
  } catch (error) {
    console.error(`Failed to load markdown for path: ${path}`, error);
    return null;
  }
};
