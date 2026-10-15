import { Calendar, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    'Hello Astrologer Sahil Samrat, I would like to initiate a private consultation to discuss my concerns.'
  )}`;

  return (
    <section
      style={{
        position: 'relative',
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #160711 0%, #260a18 50%, #0a080d 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background Sacred Motif Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 65%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {/* Sacred Kicker */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-display)',
              fontSize: '0.82rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={14} />
            <span>Take The First Step Toward Clarity</span>
            <Sparkles size={14} />
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'var(--champagne)',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}
          >
            Seeking Personalised <br />
            <span className="gold-text">Astrological Guidance?</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: '640px',
              margin: '0 auto 40px auto',
            }}
          >
            Start a private conversation to discuss your concerns and explore the available consultation options.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              marginBottom: '36px',
            }}
          >
            <button
              type="button"
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{
                padding: '16px 36px',
                fontSize: '0.96rem',
                minWidth: '240px',
              }}
            >
              <Calendar size={18} />
              <span>Book a Consultation</span>
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
              <MessageCircle size={18} />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

          {/* Discreet Reassurance */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            <ShieldCheck size={16} color="var(--gold-primary)" />
            <span>Strictly Confidential • No Pressure • Individual Care</span>
          </div>
        </div>
      </div>
    </section>
  );
};
