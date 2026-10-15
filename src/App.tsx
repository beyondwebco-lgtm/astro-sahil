import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyConsult } from './components/WhyConsult';
import { HowItWorks } from './components/HowItWorks';
import { ClientPhilosophy } from './components/ClientPhilosophy';
import { FAQSection } from './components/FAQSection';
import { BookingForm } from './components/BookingForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal } from './components/LegalModal';
import type { ModalType } from './components/LegalModal';

export function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<ModalType>(null);

  const scrollToBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Fixed Luxury Navigation */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Main Page Flow */}
      <main style={{ flex: 1 }}>
        <Hero onOpenBooking={() => scrollToBooking()} />
        <About onOpenBooking={() => scrollToBooking()} />
        <Services onSelectService={(serviceTitle) => scrollToBooking(serviceTitle)} />
        <WhyConsult />
        <HowItWorks onOpenBooking={() => scrollToBooking()} />
        <ClientPhilosophy />
        <FAQSection />
        <BookingForm preselectedService={selectedService} />
        <FinalCTA onOpenBooking={() => scrollToBooking()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onSelectService={(serviceTitle) => scrollToBooking(serviceTitle)}
      />

      {/* Persistent Floating WhatsApp Consultation Trigger */}
      <FloatingWhatsApp />

      {/* Interactive Modal for Privacy Policy, Terms, and Disclaimer */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
