
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Find the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found - DOM element with id 'root' is missing");
  
  // Create fallback for missing root element
  const fallbackRoot = document.createElement('div');
  fallbackRoot.id = 'root';
  document.body.appendChild(fallbackRoot);
  
  console.log("Created fallback root element");
  
  // Continue with the newly created root element
  try {
    console.log("Starting application initialization with fallback root...");
    const root = createRoot(fallbackRoot);
    root.render(<App />);
    console.log("Application successfully rendered on fallback root");
  } catch (error) {
    console.error("Critical error rendering application on fallback root:", error);
    fallbackRoot.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h2>Something went wrong</h2>
        <p>The application failed to initialize. Please try refreshing the page.</p>
        <p style="color: gray; font-size: 12px;">See console for technical details.</p>
      </div>
    `;
  }
} else {
  try {
    console.log("Starting application initialization...");
    const root = createRoot(rootElement);
    
    // Log current base URL to help debug path issues
    console.log("Base URL:", document.baseURI);
    console.log("Location pathname:", window.location.pathname);
    console.log("Window location:", window.location.href);
    
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
