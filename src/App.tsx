import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { StubPage } from '@/pages/StubPage'
import { NotFound } from '@/pages/NotFound'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/how-it-works"
            element={<StubPage title="How it works" description="The deep dive on the LeadFlow engine." />}
          />
          <Route
            path="/pricing"
            element={<StubPage title="Pricing" description="Full pricing detail lands at launch." />}
          />
          <Route
            path="/about"
            element={<StubPage title="About" description="Built by operators, for sales teams that are done with the SDR treadmill." />}
          />
          <Route
            path="/contact"
            element={<StubPage title="Contact" description="Talk to us at hello@getleadflow.com." />}
          />
          <Route
            path="/thanks"
            element={<StubPage title="You're in" description="Welcome to the LeadFlow waitlist. We'll be in touch." />}
          />
          <Route
            path="/privacy"
            element={<StubPage title="Privacy" description="Our privacy policy is being finalised." />}
          />
          <Route
            path="/terms"
            element={<StubPage title="Terms" description="Our terms of service are being finalised." />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
