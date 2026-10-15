import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    'Hello Astrologer Sahil Samrat, I have a question regarding consultation procedures.'
  )}`;

  return (
    <section id="faqs" className="section-wrapper" style={{ background: 'var(--bg-obsidian)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">Clarity & Answers</div>
          <h2 className="section-title">
            Frequently Asked <br />
            <span className="gold-text">Questions</span>
          </h2>
          <div className="sacred-divider">
            <span className="sacred-divider-line" />
            <span className="sacred-divider-symbol">✦ ॐ ✦</span>
            <span className="sacred-divider-line" />
          </div>
          <p className="section-subtitle">
            Everything you need to know about scheduling, confidentiality, NRI consultations, and the Vedic consultation process.
          </p>
        </div>

        {/* Accordion List */}
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto 48px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  borderRadius: 'var(--radius-md)',
                  background: isOpen ? 'rgba(26, 18, 28, 0.9)' : 'rgba(16, 13, 20, 0.7)',
                  border: isOpen ? '1px solid var(--gold-primary)' : '1px solid rgba(212, 175, 55, 0.2)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 10px 30px rgba(0, 0, 0, 0.6), var(--shadow-gold)' : 'none',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    color: isOpen ? 'var(--gold-light)' : 'var(--champagne)',
                    cursor: 'pointer',
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <ChevronDown size={18} color="var(--gold-primary)" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 24px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      borderTop: '1px solid rgba(212, 175, 55, 0.12)',
                      paddingTop: '18px',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '24px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(22, 14, 24, 0.6)',
            border: '1px solid rgba(212, 175, 55, 0.16)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--champagne)' }}>
            <HelpCircle size={18} color="var(--gold-primary)" />
            <span style={{ fontWeight: 600, fontSize: '0.98rem' }}>Have a question not listed here?</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '500px' }}>
            Feel free to connect directly via WhatsApp to inquire about availability, specific guidance, or private booking.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '10px 22px', fontSize: '0.85rem' }}
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp Directly</span>
          </a>
        </div>
      </div>
    </section>
  );
};
