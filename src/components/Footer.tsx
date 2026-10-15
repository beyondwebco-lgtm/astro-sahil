import {
  Globe,
  MessageCircle,
  ExternalLink,
  Shield,
} from 'lucide-react';
import { SITE_CONFIG, SERVICES } from '../data/content';
import type { ModalType } from './LegalModal';
import { InstagramIcon } from './InstagramIcon';

interface FooterProps {
  onOpenLegal: (type: ModalType) => void;
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onSelectService }) => {
  return (
    <footer
      style={{
        background: '#060508',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        paddingTop: '80px',
        paddingBottom: '36px',
        position: 'relative',
        color: 'var(--text-secondary)',
      }}
    >
      <div className="container">
        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background:
                    'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, rgba(20, 10, 15, 0.9) 100%)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--gold-primary)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                  }}
                >
                  ॐ
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--champagne)',
                    display: 'block',
                    lineHeight: 1.2,
                  }}
                >
                  SAHIL SAMRAT
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    color: 'var(--gold-primary)',
                    textTransform: 'uppercase',
                  }}
                >
                  Vedic Astrology & Upasana
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Personalised Vedic astrology guidance, relationship consultation, and Maa Kali Upasana for seekers in India and NRI clients worldwide.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                fontSize: '0.78rem',
                color: 'var(--gold-light)',
              }}
            >
              <Shield size={13} color="var(--gold-primary)" />
              <span>100% Confidential Consultations</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.98rem',
                color: 'var(--champagne)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#about" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  About Sahil Samrat
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Consultation Areas
                </a>
              </li>
              <li>
                <a href="#why-consult" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#philosophy" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Ethics & Guidance
                </a>
              </li>
              <li>
                <a href="#faqs" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#booking" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.98rem',
                color: 'var(--champagne)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Consultation Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(srv.title)}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      textAlign: 'left',
                      padding: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Verification & Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.98rem',
                color: 'var(--champagne)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Official Profiles & Desk
            </h4>

            {/* Instagram Link */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                Official Instagram Profile
              </div>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--gold-light)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                }}
              >
                <InstagramIcon size={17} color="var(--gold-primary)" />
                <span>{SITE_CONFIG.instagramHandle}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  ({SITE_CONFIG.instagramFollowers})
                </span>
              </a>
            </div>

            {/* Website Reference */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                Website Reference
              </div>
              <a
                href={SITE_CONFIG.referenceWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--champagne)',
                  fontSize: '0.88rem',
                }}
              >
                <Globe size={16} color="var(--gold-primary)" />
                <span>{SITE_CONFIG.referenceWebsite}</span>
                <ExternalLink size={12} color="var(--text-muted)" />
              </a>
            </div>

            {/* WhatsApp Contact Placeholder */}
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                WhatsApp Consultation Desk
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#25D366',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  background: 'rgba(37, 211, 102, 0.08)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(37, 211, 102, 0.25)',
                }}
              >
                <MessageCircle size={15} />
                <span>{SITE_CONFIG.whatsappPlaceholder}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--gold-muted)',
                    border: '1px solid var(--border-gold)',
                    padding: '1px 5px',
                    borderRadius: '3px',
                  }}
                >
                  Verified Desk
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                (Placeholder active until client verified number updated)
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links & Spiritual Disclaimer */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid rgba(212, 175, 55, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Policy Buttons */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Privacy Policy
            </button>
            <span style={{ color: 'rgba(212, 175, 55, 0.3)' }}>•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Terms & Conditions
            </button>
            <span style={{ color: 'rgba(212, 175, 55, 0.3)' }}>•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('disclaimer')}
              style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Consultation Disclaimer
            </button>
          </div>

          {/* Disclaimer text */}
          <p
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '860px',
              margin: 0,
            }}
          >
            Disclaimer: Vedic Astrology and spiritual guidance are interpretive disciplines rooted in traditional Indian heritage and sacred shastras. Results and life outcomes are subject to individual karma, destiny, and personal decisions. Consultations are intended for self-reflection and guidance.
          </p>

          {/* Copyright */}
          <div
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            © {new Date().getFullYear()} Astrologer Sahil Samrat. All Rights Reserved. • Designed with Vedic Elegance.
          </div>
        </div>
      </div>
    </footer>
  );
};
