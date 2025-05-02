
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HardwareDocsPage from "./pages/hardware/Index";
import IoTDashboardPage from "./pages/iot-dashboard/Index";
import PlatformQPage from "./pages/platformq/Index";
import ManageDocsPage from "./pages/manage-docs/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hardware" element={<HardwareDocsPage />} />
          <Route path="/hardware/api" element={<HardwareDocsPage />} />
          <Route path="/hardware/sbc" element={<HardwareDocsPage />} />
          <Route path="/hardware/som" element={<HardwareDocsPage />} />
          <Route path="/hardware/io" element={<HardwareDocsPage />} />
          <Route path="/hardware/devkit" element={<HardwareDocsPage />} />
          <Route path="/hardware/ibc" element={<HardwareDocsPage />} />
          <Route path="/hardware/per4mer" element={<HardwareDocsPage />} />
          <Route path="/hardware/ex6eeder" element={<HardwareDocsPage />} />
          <Route path="/hardware/excep7ional" element={<HardwareDocsPage />} />
          <Route path="/iot-dashboard" element={<IoTDashboardPage />} />
          <Route path="/iot-dashboard/setup" element={<IoTDashboardPage />} />
          <Route path="/iot-dashboard/api" element={<IoTDashboardPage />} />
          <Route path="/iot-dashboard/getting-started" element={<IoTDashboardPage />} />
          <Route path="/iot-dashboard/user-guide/*" element={<IoTDashboardPage />} />
          <Route path="/iot-dashboard/api/*" element={<IoTDashboardPage />} />
          <Route path="/iot-dashboard/tutorials" element={<IoTDashboardPage />} />
          <Route path="/platformq" element={<PlatformQPage />} />
          <Route path="/platformq/account-creation" element={<PlatformQPage />} />
          <Route path="/platformq/organization-setup" element={<PlatformQPage />} />
          <Route path="/platformq/first-project" element={<PlatformQPage />} />
          <Route path="/platformq/user-guide/*" element={<PlatformQPage />} />
          <Route path="/platformq/tutorials" element={<PlatformQPage />} />
          <Route path="/platformq/faq" element={<PlatformQPage />} />
          <Route path="/manage-docs" element={<ManageDocsPage />} />
          <Route path="/contributing" element={<ManageDocsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
