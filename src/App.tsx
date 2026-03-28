// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import WhySection from './components/WhySection'
// import FeaturesSection from './components/FeaturesSection'
// import EarnSection from './components/EarnSection'
// import TrustScoreSection from './components/TrustScoreSection'
// import StatsSection from './components/StatsSection'
// import SmartTriggersSection from './components/SmartTriggersSection'
// import DownloadSection from './components/DownloadSection'
// import Footer from './components/Footer'
// import{BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
// import AboutUs from './pages/AboutUs'


// function HomePage() {
//   return (
//     <div className="min-h-screen bg-white font-sans">
//       <Navbar />
//       <Hero />
//       <WhySection />
//       <FeaturesSection />
//       <EarnSection />
//       <TrustScoreSection />
//       <StatsSection />
//       <SmartTriggersSection />
//       <DownloadSection />
//       <Footer />
//     </div>
 
//   )
// }


// function App(){
//   // const location = useLocation()
//   // const state = location.state as {background?: Location} | null
//   // const backgroundLocation = state?.background

//   return(
//   <BrowserRouter>
//   <Routes>
//     <Route
//       path="/"
//       element={
//         <HomePage />
//       }
//    />
//     <Route
//       path="/aboutus"
//       element={
//         <AboutUs />
//       }
//     />
//    </Routes>
//    </BrowserRouter>
//   )
// }
// export default App
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
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products"

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
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App