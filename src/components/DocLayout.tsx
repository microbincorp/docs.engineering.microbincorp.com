
import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { SidebarItem } from "@/types";

interface DocLayoutProps {
  children: ReactNode;
  sidebarItems: SidebarItem[];
  title?: string;
}

const DocLayout: React.FC<DocLayoutProps> = ({ 
  children, 
  sidebarItems,
  title
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      
      <div className="flex-grow flex flex-col md:flex-row">
        <Sidebar items={sidebarItems} className="md:h-[calc(100vh-4rem)] md:sticky md:top-16" />
        
        <main className="flex-grow p-6 md:p-10">
          {title && (
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
              <div className="h-1 w-16 bg-blue-600 mt-4"></div>
            </div>
          )}
          
          <div className="max-w-3xl">
            {children}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default DocLayout;
