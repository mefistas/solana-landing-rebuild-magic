
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Suspense, lazy, useEffect } from "react";

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Simple loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen w-screen bg-black">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

const App = () => {
  console.log("App rendering");
  console.log("Current URL:", window.location.href);
  
  useEffect(() => {
    console.log("App mounted");
    
    // Log error if window.openModal is not defined
    if (typeof window.openModal === 'undefined') {
      console.error("window.openModal is not defined - globalFunctions.js might not be loaded correctly");
    } else {
      console.log("window.openModal is defined correctly");
    }
    
    return () => {
      console.log("App unmounted");
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Suspense fallback={<LoadingFallback />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
