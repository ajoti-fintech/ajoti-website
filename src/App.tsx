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

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <WhySection />
      <FeaturesSection />
      <EarnSection />
      <TrustScoreSection />
      <StatsSection />
      <SmartTriggersSection />
      <DownloadSection />
      <Footer />
    </div>
  )
}

export default App
