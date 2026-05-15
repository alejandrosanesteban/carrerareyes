import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CarreraSection from '@/components/CarreraSection'
import EntornoSection from '@/components/EntornoSection'
import ClasificacionesSection from '@/components/ClasificacionesSection'
import ContactoSection from '@/components/ContactoSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CarreraSection />
      <EntornoSection />
      <ClasificacionesSection />
      <ContactoSection />
      <Footer />
    </main>
  )
}