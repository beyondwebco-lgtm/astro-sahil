import { Flame, Compass, HeartHandshake, Globe2, ShieldCheck } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="about"
      className="section-wrapper"
      style={{
        background: 'linear-gradient(180deg, var(--bg-deep) 0%, #150710 40%, var(--bg-deep) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Subtle Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Portrait Column with Luxury Vedic Frame */}
          <div
            style={{
              position: 'relative',
              maxWidth: '460px',
              margin: '0 auto',
              width: '100%',
            }}
          >
            {/* Outer Decorative Gold Border Frame */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-lg)',
                pointerEvents: 'none',
                opacity: 0.6,
              }}
            />

            {/* Corner Vedic Accents */}
            <div
              style={{
                position: 'absolute',
                top: '-18px',
                left: '-18px',
                color: 'var(--gold-primary)',
                fontSize: '1rem',
              }}
            >
              ✦
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '-18px',
                right: '-18px',
                color: 'var(--gold-primary)',
                fontSize: '1rem',
              }}
            >
              ✦
            </div>

            {/* Main Portrait Container */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), var(--shadow-gold)',
                border: '1px solid var(--border-gold-strong)',
                background: 'var(--bg-charcoal)',
              }}
            >
              <img
                src="/sahil-portrait.jpg"
                alt="Astrologer Sahil Samrat - Vedic Astrologer & Maa Kali Upasak"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'contrast(105%)',
                }}
                loading="lazy"
              />

              {/* Bottom Subtle Gradient with Monogram Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px 20px 16px',
                  background:
                    'linear-gradient(to top, rgba(10, 8, 12, 0.95) 0%, rgba(10, 8, 12, 0.4) 60%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      color: 'var(--champagne)',
                      fontWeight: 600,
                    }}
                  >
                    Sahil Samrat
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--gold-primary)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Maa Kali Upasak
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(212, 175, 55, 0.15)',
                    border: '1px solid var(--border-gold)',
                    fontSize: '0.74rem',
                    color: 'var(--gold-light)',
                  }}
                >
                  <ShieldCheck size={14} color="var(--gold-primary)" />
                  <span>Private Sanctuary</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Content Column */}
          <div>
            <div className="section-kicker" style={{ justifyContent: 'flex-start' }}>
              About The Astrologer
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '22px' }}>
              Guided by Devotion, <br />
              <span className="gold-text">Grounded in Vedic Wisdom</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '18px',
              }}
            >
              Astrologer Sahil Samrat is a dedicated Vedic astrologer and devout Maa Kali Upasak, committed to offering genuine spiritual counsel, emotional perspective, and traditional astrological insight to seekers confronting life’s most vulnerable moments.
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '26px',
              }}
            >
              Rather than promoting quick fixes or fearful superstitions, his approach treats astrology as a sacred interpretive science — a map to understand planetary periods, emotional dynamics, and divine timing. Each consultation is held in a respectful, strictly confidential space where individuals and couples can speak freely about their deepest concerns.
            </p>

            {/* Core Pillars / Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '14px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(20, 14, 22, 0.6)',
                  border: '1px solid rgba(212, 175, 55, 0.16)',
                }}
              >
                <Flame size={20} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--champagne)' }}>
                    Maa Kali Upasak
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Deep spiritual discipline, meditative stillness, and satvik remedies.
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '14px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(20, 14, 22, 0.6)',
                  border: '1px solid rgba(212, 175, 55, 0.16)',
                }}
              >
                <Compass size={20} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--champagne)' }}>
                    Vedic Astrology & Remedies
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Classical Parashari chart analysis and time-tested spiritual practices.
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '14px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(20, 14, 22, 0.6)',
                  border: '1px solid rgba(212, 175, 55, 0.16)',
                }}
              >
                <HeartHandshake size={20} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--champagne)' }}>
                    Love & Marriage Guidance
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Compassionate analysis of relationship concerns and mutual compatibility.
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '14px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(20, 14, 22, 0.6)',
                  border: '1px solid rgba(212, 175, 55, 0.16)',
                }}
              >
                <Globe2 size={20} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--champagne)' }}>
                    Global NRI Consultations
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Seamless remote sessions accommodating USA, UK, Canada, and global seekers.
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={onOpenBooking}
                className="btn btn-primary"
                style={{ padding: '13px 28px' }}
              >
                <span>Request a Private Consultation</span>
              </button>

              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Direct 1-on-1 confidential attention
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
