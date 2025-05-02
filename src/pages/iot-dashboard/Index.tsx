
import DocLayout from "@/components/DocLayout";
import { SidebarItem } from "@/types";
import MarkdownContent from "@/components/MarkdownContent";
import { useMarkdownPage } from "@/hooks/useMarkdownPage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const IoTDashboardPage = () => {
  const { content, isLoading, error, pageTitle } = useMarkdownPage();
  
  const path = window.location.pathname;
  
  // Only show tabs and cards on the main IoT Dashboard page
  const showExtras = path === "/iot-dashboard";
  
  return (
    <DocLayout
      title={pageTitle || "IoT Dashboard Documentation"}
      sidebarItems={sidebarItems}
    >
      <MarkdownContent 
        content={content}
        isLoading={isLoading}
        error={error || undefined}
      />
      
      {showExtras && (
        <>
          <Tabs defaultValue="overview" className="mb-10 mt-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="prose max-w-none dark:prose-invert mt-6">
              <h3>What is MicroBin IoT Dashboard?</h3>
              <p>
                MicroBin IoT Dashboard is a powerful, flexible platform for building custom dashboards 
                to monitor and control your IoT devices. With an intuitive drag-and-drop interface, 
                powerful visualization tools, and a robust API, you can quickly build dashboards 
                that provide insights into your IoT ecosystem.
              </p>
            </TabsContent>
            
            <TabsContent value="features" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard 
                  title="Real-time Monitoring" 
                  description="View real-time data from your connected IoT devices with millisecond updates."
                />
                <FeatureCard 
                  title="Custom Widgets" 
                  description="Create custom widgets for specialized visualizations and controls."
                />
                <FeatureCard 
                  title="Device Management" 
                  description="Manage devices, set thresholds, and configure alerts directly from the dashboard."
                />
                <FeatureCard 
                  title="Data Analysis" 
                  description="Analyze historical data with built-in analytics and visualization tools."
                />
              </div>
            </TabsContent>
            
            <TabsContent value="quickstart" className="prose max-w-none dark:prose-invert mt-6">
              <h3>Quick Start Guide</h3>
              <ol>
                <li>
                  <strong>Create an Account</strong> - Sign up for a MicroBin IoT Dashboard account 
                  <Link to="/iot-dashboard/getting-started" className="text-blue-600 hover:text-blue-800"> here</Link>.
                </li>
                <li>
                  <strong>Add Devices</strong> - Connect your first IoT device using the device registration wizard.
                </li>
                <li>
                  <strong>Create a Dashboard</strong> - Use the dashboard builder to create your first visualization.
                </li>
                <li>
                  <strong>Customize</strong> - Add widgets, set up alerts, and customize your dashboard layout.
                </li>
              </ol>
              <Link 
                to="/iot-dashboard/getting-started"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mt-4"
              >
                Complete Getting Started Guide
              </Link>
            </TabsContent>
          </Tabs>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Documentation Sections</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Guide</CardTitle>
                  <CardDescription>Learn how to use the IoT Dashboard Builder</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    to="/iot-dashboard/user-guide"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    View User Guide →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>API Documentation</CardTitle>
                  <CardDescription>Integration guides and API reference</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    to="/iot-dashboard/api"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    View API Docs →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>
        </>
      )}
    </DocLayout>
  );
};

const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const sidebarItems: SidebarItem[] = [
  {
    title: "IoT Dashboard",
    link: "/iot-dashboard"
  },
  {
    title: "Getting Started",
    link: "/iot-dashboard/getting-started"
  },
  {
    title: "User Guide",
    children: [
      { title: "Dashboard Creation", link: "/iot-dashboard/user-guide/dashboards" },
      { title: "Widgets", link: "/iot-dashboard/user-guide/widgets" },
      { title: "Device Management", link: "/iot-dashboard/user-guide/devices" },
      { title: "Alerts & Notifications", link: "/iot-dashboard/user-guide/alerts" }
    ]
  },
  {
    title: "API Documentation",
    children: [
      { title: "Authentication", link: "/iot-dashboard/api/authentication" },
      { title: "Devices API", link: "/iot-dashboard/api/devices" },
      { title: "Data API", link: "/iot-dashboard/api/data" },
      { title: "Webhooks", link: "/iot-dashboard/api/webhooks" }
    ]
  },
  {
    title: "Tutorials",
    link: "/iot-dashboard/tutorials"
  }
];

export default IoTDashboardPage;
