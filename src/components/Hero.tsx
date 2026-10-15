import { Calendar, MessageCircle, Shield, Globe, Award, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { InstagramIcon } from './InstagramIcon';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    'Hello Astrologer Sahil Samrat, I would like to book a private consultation.'
  )}`;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '130px',
        paddingBottom: '80px',
        overflow: 'hidden',
        background: 'var(--bg-deep)',
      }}
    >
      {/* Ambient Celestial Backdrop (static faint cosmos) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/celestial-hero.jpg')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12,
          filter: 'blur(2px) contrast(110%)',
          pointerEvents: 'none',
        }}
      />

      {/* Rotating Sacred Sri Yantra / Chakra */}
      <div className="chakra-rotating-bg" aria-hidden="true" />

      {/* Atmospheric Overlays for Depth and Contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'radial-gradient(circle at 50% 30%, rgba(38, 10, 24, 0.45) 0%, rgba(6, 5, 8, 0.88) 60%, var(--bg-deep) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Gold Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Sacred Kicker / Maa Kali Devotional Line */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 20px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(38, 10, 24, 0.65)',
              border: '1px solid var(--border-gold)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
              marginBottom: '28px',
            }}
          >
            <Sparkles size={14} color="var(--gold-primary)" />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                letterSpacing: '0.22em',
                color: 'var(--champagne)',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Maa Kali Upasak • Authentic Vedic Traditions
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              margin: '0 0 16px',
              lineHeight: 1.12,
              letterSpacing: '0.06em',
            }}
          >
            <span style={{ color: 'var(--ivory)', display: 'block' }}>ASTROLOGER</span>
            <span className="gold-text">SAHIL SAMRAT</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)',
              fontStyle: 'italic',
              color: 'var(--champagne)',
              letterSpacing: '0.04em',
              marginBottom: '20px',
              fontWeight: 400,
            }}
          >
            Vedic Astrology • Spiritual Guidance • Relationship Consultation
          </p>

          {/* Sacred Divider */}
          <div className="sacred-divider" style={{ margin: '8px 0 24px' }}>
            <span className="sacred-divider-line" />
            <span className="sacred-divider-symbol">✦ ॐ ✦</span>
            <span className="sacred-divider-line" />
          </div>

          {/* Philosophical Quote */}
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.25rem, 2.4vw, 1.7rem)',
              color: 'var(--gold-light)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              lineHeight: 1.4,
              maxWidth: '720px',
              margin: '0 0 18px',
            }}
          >
            “Find Clarity. Understand Your Path. Move Forward With Confidence.”
          </blockquote>

          {/* Hero Paragraph */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              lineHeight: 1.75,
              marginBottom: '38px',
            }}
          >
            Discover personalised Vedic astrology guidance for love, relationships, marriage, and life's important decisions.
          </p>

          {/* Main Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              marginBottom: '44px',
              width: '100%',
            }}
          >
            <button
              type="button"
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{
                padding: '16px 36px',
                fontSize: '0.96rem',
                minWidth: '260px',
              }}
            >
              <Calendar size={18} />
              <span>Book a Private Consultation</span>
            </button>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: '16px 32px',
                fontSize: '0.96rem',
                minWidth: '220px',
              }}
            >
              <MessageCircle size={19} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Refined Trust Indicator */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 22px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(18, 15, 23, 0.75)',
              border: '1px solid var(--border-gold)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--gold-primary)',
              }}
            >
              <InstagramIcon size={17} color="var(--gold-primary)" />
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--champagne)' }}>
                {SITE_CONFIG.instagramHandle}
              </span>
            </div>
            <span style={{ color: 'var(--border-gold-strong)' }}>•</span>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Trusted by a Growing Community of{' '}
              <strong style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                {SITE_CONFIG.instagramFollowers} Followers
              </strong>
            </span>
          </div>

          {/* Quick Value Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              width: '100%',
              maxWidth: '840px',
              marginTop: '56px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(212, 175, 55, 0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-gold)',
                }}
              >
                <Shield size={17} color="var(--gold-primary)" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--champagne)' }}>
                  100% Confidential
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Private & Dignified Sanctuary
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-gold)',
                }}
              >
                <Globe size={17} color="var(--gold-primary)" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--champagne)' }}>
                  NRI & Worldwide
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Sessions Across All Time Zones
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-gold)',
                }}
              >
                <Award size={17} color="var(--gold-primary)" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--champagne)' }}>
                  Traditional Shastras
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Vedic Astrology & Upasana
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
