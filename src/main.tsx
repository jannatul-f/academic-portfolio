import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// const pathname = window.location.pathname;

// if (pathname.startsWith("/admin")) {
//   // Do nothing – let Netlify CMS load its own HTML
// } else {
//   createRoot(document.getElementById("root")!).render(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   );
// }



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
