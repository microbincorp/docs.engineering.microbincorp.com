
import React from 'react';
import DocLayout from "@/components/DocLayout";
import { SidebarItem } from "@/types";
import MarkdownContent from "@/components/MarkdownContent";
import { useMarkdownPage } from "@/hooks/useMarkdownPage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ManageDocsPage = () => {
  const { content, isLoading, error } = useMarkdownPage();
  
  return (
    <DocLayout
      title="Documentation Management"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>How to Edit Documentation</CardTitle>
            <CardDescription>
              Learn how to contribute to the MicroBin documentation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              MicroBin documentation uses a simple Markdown-based system that makes it easy for anyone to contribute,
              even without technical knowledge of the underlying code.
            </p>
            
            <h3 className="text-lg font-medium mb-2">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Simple Markdown format</li>
              <li>Organized by product category</li>
              <li>Frontmatter for page metadata</li>
              <li>Support for images and links</li>
            </ul>
          </CardContent>
        </Card>
        
        <MarkdownContent 
          content={content}
          isLoading={isLoading}
          error={error || undefined}
        />
      </div>
    </DocLayout>
  );
};

const sidebarItems: SidebarItem[] = [
  {
    title: "Documentation Management",
    link: "/manage-docs"
  },
  {
    title: "Contributing",
    link: "/contributing"
  }
];

export default ManageDocsPage;
