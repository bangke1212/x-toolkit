import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ShadowbanHub from './pages/ShadowbanHub'
import ToolsHub from './pages/ToolsHub'
import RecoverSuite from './pages/RecoverSuite'
import MutualUniverse from './pages/MutualUniverse'
import AiAgent from './pages/AiAgent'
import Dashboard from './pages/Dashboard'
import Pricing from './pages/Pricing'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shadowban" element={<ShadowbanHub />} />
          <Route path="/tools" element={<ToolsHub />} />
          <Route path="/recover" element={<RecoverSuite />} />
          <Route path="/mutual" element={<MutualUniverse />} />
          <Route path="/agent" element={<AiAgent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}