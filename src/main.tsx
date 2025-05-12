
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Additional console logs to help debug if there are any issues
console.log('Application starting...');
console.log('DOM element "root":', document.getElementById("root"));

try {
  createRoot(document.getElementById("root")!).render(<App />);
  console.log('App successfully rendered');
} catch (error) {
  console.error('Error rendering the App:', error);
}
