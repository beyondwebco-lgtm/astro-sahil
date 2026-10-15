import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    'Hello Astrologer Sahil Samrat, I would like to enquire about a private consultation.'
  )}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
      }}
    >
      {/* Tooltip Notification */}
      {!tooltipDismissed && (
        <div
          style={{
            background: 'linear-gradient(135deg, #1b0a15 0%, #0d0a10 100%)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-md)',
            padding: '10px 14px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6), var(--shadow-gold)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '260px',
            animation: 'fadeInUp 0.4s ease',
          }}
        >
          <div style={{ fontSize: '0.82rem', color: 'var(--champagne)', lineHeight: 1.4 }}>
            <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>Private Consultation:</span>{' '}
            Chat directly with the consultation desk.
          </div>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            aria-label="Dismiss message"
            style={{
              color: 'var(--text-muted)',
              padding: '2px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Astrologer Sahil Samrat"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(37, 211, 102, 0.45)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          color: '#ffffff',
          position: 'relative',
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(37, 211, 102, 0.45)';
        }}
      >
        <MessageCircle size={28} />

        {/* Pulsing subtle online green dot */}
        <span
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#4ade80',
            border: '2px solid #060508',
          }}
        />
      </a>
    </div>
  );
};
