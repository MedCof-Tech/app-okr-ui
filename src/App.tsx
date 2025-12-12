import Header from './components/Header'
import Hero from './components/Hero'
import OKRSection from './components/OKRSection'
import Timeline from './components/Timeline'
import Highlights from './components/Highlights'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'
import './App.css'

function App() {
  return (
    <div className="app">
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <Highlights />
        <OKRSection />
        <Timeline />
      </main>
      <Footer />
    </div>
  )
}

export default App
