import { Lock, Heart, EyeOff, Compass } from 'lucide-react';

export const ClientPhilosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="section-wrapper"
      style={{
        background: 'linear-gradient(180deg, var(--bg-deep) 0%, #1a0812 50%, var(--bg-deep) 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">Ethical Commitment</div>
          <h2 className="section-title">
            Consultation Philosophy & <br />
            <span className="gold-text">Client Guidance</span>
          </h2>
          <div className="sacred-divider">
            <span className="sacred-divider-line" />
            <span className="sacred-divider-symbol">✦ ॐ ✦</span>
            <span className="sacred-divider-line" />
          </div>
          <p className="section-subtitle">
            In adherence to the authentic Vedic path and Maa Kali Upasana, we hold honesty, discretion, and human empathy above commercial promises.
          </p>
        </div>

        {/* 4 Pillars of Guidance */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              padding: '30px 24px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(20, 15, 24, 0.7)',
              border: '1px solid rgba(212, 175, 55, 0.18)',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                border: '1px solid var(--border-gold)',
              }}
            >
              <EyeOff size={20} color="var(--gold-primary)" />
            </div>
            <h3
              style={{
                fontSize: '1.12rem',
                color: 'var(--champagne)',
                marginBottom: '10px',
              }}
            >
              Absolute Discretion
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              We never disclose client identities, relationships, family histories, or private inquiries. Your consultation remains strictly between you and Astrologer Sahil Samrat.
            </p>
          </div>

          <div
            style={{
              padding: '30px 24px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(20, 15, 24, 0.7)',
              border: '1px solid rgba(212, 175, 55, 0.18)',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                border: '1px solid var(--border-gold)',
              }}
            >
              <Lock size={20} color="var(--gold-primary)" />
            </div>
            <h3
              style={{
                fontSize: '1.12rem',
                color: 'var(--champagne)',
                marginBottom: '10px',
              }}
            >
              No False Guarantees
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              We do not market unrealistic claims or manipulative guarantees. Vedic astrology offers interpretive insight and remedies to harmonise karma, not shortcuts to bypass life lessons.
            </p>
          </div>

          <div
            style={{
              padding: '30px 24px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(20, 15, 24, 0.7)',
              border: '1px solid rgba(212, 175, 55, 0.18)',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                border: '1px solid var(--border-gold)',
              }}
            >
              <Heart size={20} color="var(--gold-primary)" />
            </div>
            <h3
              style={{
                fontSize: '1.12rem',
                color: 'var(--champagne)',
                marginBottom: '10px',
              }}
            >
              Compassionate Listening
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Matters of the heart and marriage carry heavy emotional weight. You will find a patient, non-judgmental environment focused on helping you regain inner peace and emotional balance.
            </p>
          </div>

          <div
            style={{
              padding: '30px 24px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(20, 15, 24, 0.7)',
              border: '1px solid rgba(212, 175, 55, 0.18)',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                border: '1px solid var(--border-gold)',
              }}
            >
              <Compass size={20} color="var(--gold-primary)" />
            </div>
            <h3
              style={{
                fontSize: '1.12rem',
                color: 'var(--champagne)',
                marginBottom: '10px',
              }}
            >
              Dedicated NRI Support
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Understanding the nuanced pressures faced by the Indian diaspora living abroad — cross-cultural marriages, career uncertainties, and long-distance familial expectations.
            </p>
          </div>
        </div>

        {/* Notice Card */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '22px 28px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(12, 10, 16, 0.85)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.18rem',
              fontStyle: 'italic',
              color: 'var(--gold-light)',
              marginBottom: '8px',
            }}
          >
            “Truth liberates the mind. Authentic astrology provides clarity so you can act with wisdom, courage, and dignity.”
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            — Astrologer Sahil Samrat • Maa Kali Upasak
          </div>
        </div>
      </div>
    </section>
  );
};
