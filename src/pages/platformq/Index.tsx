
import DocLayout from "@/components/DocLayout";
import { SidebarItem } from "@/types";
import MarkdownContent from "@/components/MarkdownContent";
import { useMarkdownPage } from "@/hooks/useMarkdownPage";

const PlatformQPage = () => {
  const { content, isLoading, error, pageTitle } = useMarkdownPage();
  
  return (
    <DocLayout
      title={pageTitle || "PlatformQ Documentation"}
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
    title: "PlatformQ",
    link: "/platformq"
  },
  {
    title: "Getting Started",
    children: [
      { title: "Account Creation", link: "/platformq/account-creation" },
      { title: "Organization Setup", link: "/platformq/organization-setup" },
      { title: "First Project", link: "/platformq/first-project" }
    ]
  },
  {
    title: "User Guide",
    link: "/platformq/user-guide"
  },
  {
    title: "Tutorials",
    link: "/platformq/tutorials"
  },
  {
    title: "FAQ",
    link: "/platformq/faq"
  }
];

export default PlatformQPage;
