import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
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
import Faq from './pages/Faq'

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

export default function App() {
  return (
    <MantineProvider>
      <Router>
         <div className="min-h-screen bg-white font-sans">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
          <Footer />
      </div>
      </Router>
    </MantineProvider>
  );
}
