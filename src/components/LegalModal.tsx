import React from 'react';
import { X, ShieldCheck, Scale, AlertTriangle } from 'lucide-react';

export type ModalType = 'privacy' | 'terms' | 'disclaimer' | null;

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        background: 'rgba(5, 4, 7, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '85vh',
          background: 'linear-gradient(160deg, #17111d 0%, #0c0a10 100%)',
          border: '1px solid var(--gold-primary)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.9), var(--shadow-gold)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '20px 26px',
            borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(30, 10, 22, 0.4)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {type === 'privacy' && <ShieldCheck size={22} color="var(--gold-primary)" />}
            {type === 'terms' && <Scale size={22} color="var(--gold-primary)" />}
            {type === 'disclaimer' && <AlertTriangle size={22} color="var(--gold-primary)" />}

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                color: 'var(--champagne)',
                margin: 0,
              }}
            >
              {type === 'privacy' && 'Privacy Policy & Data Ethics'}
              {type === 'terms' && 'Terms & Conditions of Consultation'}
              {type === 'disclaimer' && 'Consultation & Astrology Disclaimer'}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              color: 'var(--text-secondary)',
              padding: '6px',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div
          style={{
            padding: '26px',
            overflowY: 'auto',
            fontSize: '0.92rem',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
          }}
        >
          {type === 'privacy' && (
            <div>
              <p style={{ marginBottom: '16px' }}>
                At <strong style={{ color: 'var(--champagne)' }}>Astro Sahil Samrat</strong>, we hold client privacy, sacred trust, and confidential dignity as fundamental spiritual obligations.
              </p>
              <h4 style={{ color: 'var(--gold-primary)', fontSize: '1rem', margin: '16px 0 8px' }}>
                1. Information We Collect
              </h4>
              <p style={{ marginBottom: '16px' }}>
                We only collect basic contact information (Name, WhatsApp/Phone, Email, and City/Country) submitted through our enquiry form to arrange consultations. We do not store sensitive birth records (Date, Time, Place of Birth) on public servers or marketing databases. Birth chart details are communicated directly between you and the astrologer during private sessions.
              </p>
              <h4 style={{ color: 'var(--gold-primary)', fontSize: '1rem', margin: '16px 0 8px' }}>
                2. Zero Third-Party Sharing
              </h4>
              <p style={{ marginBottom: '16px' }}>
                Your private life, marital details, relationship concerns, and contact numbers will never be sold, leased, or disclosed to any third party under any circumstances.
              </p>
              <h4 style={{ color: 'var(--gold-primary)', fontSize: '1rem', margin: '16px 0 8px' }}>
                3. Confidential Communication
              </h4>
              <p>
                All consultations conducted via WhatsApp or phone are strictly one-on-one sessions between you and Astrologer Sahil Samrat.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div>
              <p style={{ marginBottom: '16px' }}>
                By booking a consultation with <strong style={{ color: 'var(--champagne)' }}>Astrologer Sahil Samrat</strong>, you agree to the following terms and guidelines:
              </p>
              <h4 style={{ color: 'var(--gold-primary)', fontSize: '1rem', margin: '16px 0 8px' }}>
                1. Nature of Consultation
              </h4>
              <p style={{ marginBottom: '16px' }}>
                Consultations represent traditional Vedic astrology analysis, spiritual guidance, and Maa Kali Upasana remedies. They provide astrological insight and interpretive counsel to aid your reflection.
              </p>
              <h4 style={{ color: 'var(--gold-primary)', fontSize: '1rem', margin: '16px 0 8px' }}>
                2. Fees & Appointment Confirmation
              </h4>
              <p style={{ marginBottom: '16px' }}>
                All consultation slots and applicable dakshina/fees are finalized transparently prior to the session. Appointments are confirmed upon agreement of mutual availability.
              </p>
              <h4 style={{ color: 'var(--gold-primary)', fontSize: '1rem', margin: '16px 0 8px' }}>
                3. Code of Mutual Respect
              </h4>
              <p>
                We maintain an atmosphere of mutual dignity, cultural sensitivity, and cordiality during all consultations.
              </p>
            </div>
          )}

          {type === 'disclaimer' && (
            <div>
              <p style={{ marginBottom: '16px' }}>
                <strong style={{ color: 'var(--champagne)' }}>Important Spiritual & Legal Notice:</strong>
              </p>
              <p style={{ marginBottom: '16px' }}>
                Vedic astrology is an ancient spiritual tradition and interpretive philosophy. It is designed to offer perspective, cultivate mindfulness, and suggest traditional satvik remedies.
              </p>
              <h4 style={{ color: 'var(--gold-primary)', fontSize: '1rem', margin: '16px 0 8px' }}>
                No Absolute Guarantees
              </h4>
              <p style={{ marginBottom: '16px' }}>
                Astrological readings and spiritual remedies do not constitute guaranteed predictions or absolute outcomes. Human life, karma, and individual free will are paramount. We do not promise magical overnight cures or deterministic results.
              </p>
              <h4 style={{ color: 'var(--gold-primary)', fontSize: '1rem', margin: '16px 0 8px' }}>
                Not a Substitute for Professional Services
              </h4>
              <p>
                Astrological advice is not a substitute for certified medical, psychological, psychiatric, financial, or legal professional counsel. For medical or legal matters, always consult qualified licensed professionals.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '16px 26px',
            borderTop: '1px solid rgba(212, 175, 55, 0.15)',
            display: 'flex',
            justifyContent: 'flex-end',
            background: 'rgba(10, 8, 14, 0.8)',
          }}
        >
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary"
            style={{ padding: '8px 22px', fontSize: '0.84rem' }}
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
