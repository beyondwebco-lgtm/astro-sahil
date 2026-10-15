import React from 'react';
import {
  HeartHandshake,
  Sparkles,
  Compass,
  Sun,
  Flame,
  Globe2,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import { SERVICES } from '../data/content';
import type { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake size={28} color="var(--gold-primary)" />;
      case 'Sparkles':
        return <Sparkles size={28} color="var(--gold-primary)" />;
      case 'Compass':
        return <Compass size={28} color="var(--gold-primary)" />;
      case 'Sun':
        return <Sun size={28} color="var(--gold-primary)" />;
      case 'Flame':
        return <Flame size={28} color="var(--gold-primary)" />;
      case 'Globe2':
        return <Globe2 size={28} color="var(--gold-primary)" />;
      default:
        return <Sparkles size={28} color="var(--gold-primary)" />;
    }
  };

  return (
    <section id="services" className="section-wrapper" style={{ background: 'var(--bg-obsidian)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">Consultation Areas</div>
          <h2 className="section-title">
            Vedic Guidance For Life's <br />
            <span className="gold-text">Sacred Crossroads</span>
          </h2>
          <div className="sacred-divider">
            <span className="sacred-divider-line" />
            <span className="sacred-divider-symbol">✦ ॐ ✦</span>
            <span className="sacred-divider-line" />
          </div>
          <p className="section-subtitle">
            Every session offers grounded Vedic astrological perspective, compassionate dialogue, and personalised clarity tailored to your unique birth chart and circumstance.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
            marginBottom: '48px',
          }}
        >
          {SERVICES.map((service: ServiceItem, idx) => (
            <div
              key={service.id}
              className="glass-card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(212, 175, 55, 0.22)',
                borderRadius: 'var(--radius-md)',
                background:
                  idx % 2 === 0
                    ? 'linear-gradient(145deg, rgba(22, 16, 26, 0.8) 0%, rgba(12, 10, 15, 0.95) 100%)'
                    : 'linear-gradient(145deg, rgba(30, 12, 22, 0.8) 0%, rgba(12, 10, 15, 0.95) 100%)',
              }}
            >
              <div>
                {/* Top Icon and Index */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid var(--border-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    {getIcon(service.icon)}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                      color: 'rgba(212, 175, 55, 0.4)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--champagne)',
                    marginBottom: '14px',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '20px',
                  }}
                >
                  {service.shortDesc}
                </p>

                {/* Key Points */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {service.keyPoints.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.84rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--gold-primary)',
                          fontSize: '0.8rem',
                          marginTop: '2px',
                        }}
                      >
                        ✦
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Action */}
              <div
                style={{
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(212, 175, 55, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--gold-primary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--gold-light)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--gold-primary)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={16} />
                </button>

                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  Confidential
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Disclaimer Box */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            padding: '18px 24px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(25, 10, 18, 0.45)',
            border: '1px solid rgba(212, 175, 55, 0.18)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <ShieldAlert size={22} color="var(--gold-muted)" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: 'var(--champagne)' }}>Spiritual & Interpretive Consultation:</strong> Astrology provides symbolic perspectives and traditional philosophical clarity. It is not an absolute science or deterministic guarantee of specific life outcomes. We uphold dignified, ethical guidance empowering personal responsibility and free will.
          </p>
        </div>
      </div>
    </section>
  );
};
