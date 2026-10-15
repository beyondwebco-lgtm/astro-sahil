import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, MessageCircle, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Consult', href: '#why-consult' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#booking' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    'Hello Astrologer Sahil Samrat, I am contacting you from your official website regarding a private consultation.'
  )}`;

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.35s ease',
          backgroundColor: scrolled
            ? 'rgba(7, 6, 9, 0.94)'
            : 'rgba(7, 6, 9, 0.6)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled
            ? '1px solid rgba(212, 175, 55, 0.25)'
            : '1px solid rgba(212, 175, 55, 0.1)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.8)' : 'none',
        }}
      >
        {/* Top Announcement Bar */}
        <div
          style={{
            background: 'linear-gradient(90deg, #1b0711 0%, #260a18 50%, #1b0711 100%)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
            padding: '6px 16px',
            fontSize: '0.75rem',
            textAlign: 'center',
            color: 'var(--champagne)',
            letterSpacing: '0.06em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={12} color="var(--gold-primary)" />
            <span>Maa Kali Upasak • Authentic Vedic Astrology Guidance</span>
          </span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span style={{ color: 'var(--gold-light)' }}>
            Worldwide Online Consultations Available
          </span>
        </div>

        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '74px',
            }}
          >
            {/* Brand Logo */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background:
                    'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, rgba(20, 10, 15, 0.9) 100%)',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--gold-primary)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                  }}
                >
                  ॐ
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--champagne)',
                    lineHeight: 1.15,
                  }}
                >
                  SAHIL SAMRAT
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.18em',
                    color: 'var(--gold-primary)',
                    textTransform: 'uppercase',
                  }}
                >
                  Vedic Astrologer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '24px',
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.05em',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    padding: '6px 2px',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--gold-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '12px',
              }}
              className="desktop-actions"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  padding: '9px 16px',
                  fontSize: '0.8rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderRadius: 'var(--radius-sm)',
                }}
                title="Connect via WhatsApp"
              >
                <MessageCircle size={15} color="#25D366" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="btn btn-primary"
                style={{
                  padding: '10px 18px',
                  fontSize: '0.82rem',
                }}
              >
                <Calendar size={14} />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                color: 'var(--champagne)',
                padding: '8px',
                borderRadius: '6px',
                border: '1px solid var(--border-gold)',
                background: 'rgba(20, 15, 25, 0.6)',
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '104px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(8, 7, 10, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            overflowY: 'auto',
            borderTop: '1px solid var(--border-gold)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  color: 'var(--champagne)',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{link.label}</span>
                <span style={{ color: 'var(--gold-primary)', fontSize: '0.8rem' }}>→</span>
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={18} />
              <span>Book a Private Consultation</span>
            </button>
          </div>
        </div>
      )}

      {/* Responsive CSS for Header */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 959px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};
