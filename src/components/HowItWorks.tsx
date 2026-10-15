import React from 'react';
import { Calendar, MessageSquare, Compass, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/content';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass size={22} color="var(--gold-primary)" />;
      case 1:
        return <MessageSquare size={22} color="var(--gold-primary)" />;
      case 2:
        return <Calendar size={22} color="var(--gold-primary)" />;
      default:
        return <Compass size={22} color="var(--gold-primary)" />;
    }
  };

  return (
    <section id="how-it-works" className="section-wrapper" style={{ background: 'var(--bg-obsidian)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">Simple & Transparent</div>
          <h2 className="section-title">
            How To Begin Your <br />
            <span className="gold-text">Consultation Journey</span>
          </h2>
          <div className="sacred-divider">
            <span className="sacred-divider-line" />
            <span className="sacred-divider-symbol">✦ ॐ ✦</span>
            <span className="sacred-divider-line" />
          </div>
          <p className="section-subtitle">
            A dignified, private, and seamless process designed to respect your time and provide straightforward clarity from the very first interaction.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            position: 'relative',
            marginBottom: '50px',
          }}
        >
          {HOW_IT_WORKS.map((item, idx) => (
            <div
              key={item.step}
              className="glass-card"
              style={{
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                border: '1px solid rgba(212, 175, 55, 0.22)',
                background:
                  'linear-gradient(160deg, rgba(22, 18, 28, 0.85) 0%, rgba(12, 10, 16, 0.95) 100%)',
              }}
            >
              {/* Step Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '26px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getStepIcon(idx)}
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'rgba(212, 175, 55, 0.3)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {item.step}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  color: 'var(--champagne)',
                  marginBottom: '14px',
                  fontWeight: 600,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.94rem',
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

        {/* Action Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={onOpenBooking}
            className="btn btn-primary"
            style={{ padding: '15px 34px' }}
          >
            <span>Start Your Enquiry Now</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};
