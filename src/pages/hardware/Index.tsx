
import DocLayout from "@/components/DocLayout";
import { SidebarItem } from "@/types";
import MarkdownContent from "@/components/MarkdownContent";
import { useMarkdownPage } from "@/hooks/useMarkdownPage";

const HardwareDocsPage = () => {
  const { content, isLoading, error, pageTitle } = useMarkdownPage();
  
  return (
    <DocLayout
      title={pageTitle || "Hardware Documentation"}
      sidebarItems={sidebarItems}
    >
      <MarkdownContent 
        content={content}
        isLoading={isLoading}
        error={error || undefined}
      />
    </DocLayout>
  );
};

const sidebarItems: SidebarItem[] = [
  {
    title: "Hardware",
    link: "/hardware"
  },
  {
    title: "Product Categories",
    children: [
      { title: "Single Board Computers", link: "/hardware/sbc" },
      { title: "System on Modules", link: "/hardware/som" },
      { title: "I/O Boards", link: "/hardware/io" },
      { title: "Development Kits", link: "/hardware/devkit" },
      { title: "Infinite Board Computers", link: "/hardware/ibc" }
    ]
  },
  {
    title: "Product Series",
    children: [
      { title: "Per4mer Series", link: "/hardware/per4mer" },
      { title: "Ex6eeder Series", link: "/hardware/ex6eeder" },
      { title: "Excep7ional Series", link: "/hardware/excep7ional" }
    ]
  },
  {
    title: "API Documentation",
    link: "/hardware/api"
  }
];

export default HardwareDocsPage;
