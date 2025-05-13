
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Find the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found - DOM element with id 'root' is missing");
} else {
  try {
    console.log("Starting application initialization...");
    const root = createRoot(rootElement);
    
    // Log current base URL to help debug path issues
    console.log("Base URL:", document.baseURI);
    console.log("Location pathname:", window.location.pathname);
    
    root.render(<App />);
    console.log("Application successfully rendered");
  } catch (error) {
    console.error("Critical error rendering application:", error);
    
    // Create fallback UI in case of render failure
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h2>Something went wrong</h2>
        <p>The application failed to initialize. Please try refreshing the page.</p>
        <p style="color: gray; font-size: 12px;">See console for technical details.</p>
      </div>
    `;
  }
}
