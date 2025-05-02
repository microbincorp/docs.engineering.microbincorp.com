
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import DocCategoryCard from "@/components/DocCategoryCard";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const docCategories = [
    {
      id: "hardware",
      title: "Hardware Products",
      description: "Documentation for MicroBin's commercial off-the-shelf hardware products",
      icon: "📟",
      link: "/hardware"
    },
    {
      id: "iot",
      title: "IoT Dashboard",
      description: "Learn how to use the IoT dashboard builder and access API documentation",
      icon: "📊",
      link: "/iot-dashboard"
    },
    {
      id: "platformq",
      title: "PlatformQ",
      description: "AI-enabled design & development platform for OEMs and SMBs",
      icon: "🧠",
      link: "/platformq"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-blue-900 dark:text-blue-100">
                MicroBin Documentation
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Your complete resource for MicroBin products, solutions, and platforms
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  className="pl-10 py-6 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Documentation Categories */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Documentation Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category) => (
                <DocCategoryCard
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  link={category.link}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Quick Links */}
        <section className="bg-slate-50 dark:bg-slate-800/50 py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-12">Quick Links</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Changed to use hash links as placeholders since these routes don't exist yet */}
                <QuickLinkCard title="Getting Started" link="#" />
                <QuickLinkCard title="Hardware API Reference" link="/hardware/api" />
                <QuickLinkCard title="IoT Dashboard Setup" link="/iot-dashboard/setup" />
                <QuickLinkCard title="PlatformQ Tutorials" link="/platformq/tutorials" />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const QuickLinkCard = ({ title, link }: { title: string; link: string }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <Button variant="outline" asChild>
          {/* Use regular anchor tag for hash links and Link for actual routes */}
          {link.startsWith('#') ? (
            <a href={link}>View Documentation</a>
          ) : (
            <Link to={link}>View Documentation</Link>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Index;
