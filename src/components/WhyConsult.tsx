import React from 'react';
import {
  UserCheck,
  ShieldCheck,
  BookOpen,
  Laptop,
  Globe,
  Scale,
  Sparkles,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyConsult: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck size={24} color="var(--gold-primary)" />;
      case 'ShieldCheck':
        return <ShieldCheck size={24} color="var(--gold-primary)" />;
      case 'BookOpen':
        return <BookOpen size={24} color="var(--gold-primary)" />;
      case 'Laptop':
        return <Laptop size={24} color="var(--gold-primary)" />;
      case 'Globe':
        return <Globe size={24} color="var(--gold-primary)" />;
      case 'Scale':
        return <Scale size={24} color="var(--gold-primary)" />;
      default:
        return <Sparkles size={24} color="var(--gold-primary)" />;
    }
  };

  return (
    <section
      id="why-consult"
      className="section-wrapper"
      style={{
        background: 'linear-gradient(180deg, var(--bg-deep) 0%, #170912 50%, var(--bg-deep) 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">Integrity & Wisdom</div>
          <h2 className="section-title">
            Why Consult With <br />
            <span className="gold-text">Astrologer Sahil Samrat?</span>
          </h2>
          <div className="sacred-divider">
            <span className="sacred-divider-line" />
            <span className="sacred-divider-symbol">✦ ॐ ✦</span>
            <span className="sacred-divider-line" />
          </div>
          <p className="section-subtitle">
            A quiet sanctuary of sincere spiritual counsel where ancient Vedic shastras meet modern sensitivity, confidentiality, and deep respect for your life journey.
          </p>
        </div>

        {/* Feature Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '34px 28px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(18, 14, 22, 0.65)',
                border: '1px solid rgba(212, 175, 55, 0.18)',
                backdropFilter: 'blur(12px)',
                position: 'relative',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.18)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid var(--border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {getIcon(item.icon)}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.18rem',
                  color: 'var(--champagne)',
                  marginBottom: '12px',
                  fontWeight: 600,
                  lineHeight: 1.35,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
