
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Find the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("Application successfully rendered");
  } catch (error) {
    console.error("Error rendering application:", error);
  }
}
