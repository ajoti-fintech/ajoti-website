import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import FeaturesSection from './components/FeaturesSection'
import EarnSection from './components/EarnSection'
import TrustScoreSection from './components/TrustScoreSection'
import StatsSection from './components/StatsSection'
import SmartTriggersSection from './components/SmartTriggersSection'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'

import Products from './pages/Products' 

function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <FeaturesSection />
      <EarnSection />
      <TrustScoreSection />
      <StatsSection />
      <SmartTriggersSection />
      <DownloadSection />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App