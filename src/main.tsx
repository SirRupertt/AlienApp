import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import WeylandYutaniRecruitmentPortal from './weyland_yutani_recruitment_portal.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WeylandYutaniRecruitmentPortal />
  </StrictMode>,
)
