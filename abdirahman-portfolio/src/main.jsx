import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
const RootComponent = currentPath === '/freelance'
  ? lazy(() => import('./FreelancePage.jsx'))
  : lazy(() => import('./App.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="route-loader" role="status">Loading page…</div>}>
      <RootComponent />
    </Suspense>
  </StrictMode>,
)
