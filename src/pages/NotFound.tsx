
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    // Use navigate from react-router instead of window.location for SPA navigation
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-5xl font-bold mb-6 text-solana-purple">404</h1>
        <p className="text-xl text-gray-600 mb-6">The page you're looking for cannot be found.</p>
        <Button 
          onClick={handleGoHome}
          className="flex items-center gap-2 bg-solana-purple hover:bg-opacity-90"
        >
          <ArrowLeft size={16} />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
