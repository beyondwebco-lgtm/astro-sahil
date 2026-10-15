import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import {
  Send,
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import { SERVICES } from '../data/content';
import type { ConsultationFormData } from '../types';

interface BookingFormProps {
  preselectedService?: string;
  onSubmitted?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    isNRI: false,
    serviceType: preselectedService || SERVICES[0].title,
    preferredContact: 'whatsapp',
    preferredTime: 'Evening (6 PM - 9 PM IST / Flexible)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage('Please provide either your phone / WhatsApp number or email address.');
      return;
    }

    setLoading(true);

    // Simulate verified form processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const constructWhatsAppUrl = () => {
    const text = `*New Private Consultation Enquiry - Astrologer Sahil Samrat*
---------------------------------------
*Name:* ${formData.fullName}
*Contact:* ${formData.phone || formData.email}
*Location / Country:* ${formData.location || (formData.isNRI ? 'NRI Client' : 'India')}
*Service:* ${formData.serviceType}
*Preferred Mode:* ${formData.preferredContact.toUpperCase()}
*Preferred Timing:* ${formData.preferredTime}
*Brief Note:* ${formData.message || 'Seeking guidance on this matter.'}
---------------------------------------
Please confirm consultation availability and next steps.`;

    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="booking" className="section-wrapper" style={{ background: 'var(--bg-deep)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">Private & Confidential</div>
          <h2 className="section-title">
            Book A Private <br />
            <span className="gold-text">Vedic Consultation</span>
          </h2>
          <div className="sacred-divider">
            <span className="sacred-divider-line" />
            <span className="sacred-divider-symbol">✦ ॐ ✦</span>
            <span className="sacred-divider-line" />
          </div>
          <p className="section-subtitle">
            Submit your enquiry below or initiate your consultation request. All discussions and records remain strictly confidential.
          </p>
        </div>

        {/* Form Container */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            borderRadius: 'var(--radius-lg)',
            background:
              'linear-gradient(160deg, rgba(26, 16, 28, 0.85) 0%, rgba(13, 11, 17, 0.95) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), var(--shadow-gold)',
            padding: '44px 36px',
            position: 'relative',
          }}
        >
          {submitted ? (
            <div
              style={{
                textAlign: 'center',
                padding: '40px 10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <CheckCircle size={36} color="#25D366" />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  color: 'var(--champagne)',
                  marginBottom: '12px',
                }}
              >
                Enquiry Successfully Prepared
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '560px',
                  lineHeight: 1.7,
                  marginBottom: '28px',
                }}
              >
                Thank you, <strong style={{ color: 'var(--gold-light)' }}>{formData.fullName}</strong>. Your consultation enquiry details have been formulated. You can now transmit them directly to the consultation desk on WhatsApp for the fastest coordination.
              </p>

              {/* Direct WhatsApp Action Button */}
              <a
                href={constructWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{
                  padding: '16px 36px',
                  fontSize: '1rem',
                  marginBottom: '20px',
                  width: '100%',
                  maxWidth: '380px',
                }}
              >
                <MessageCircle size={20} />
                <span>Send Enquiry to WhatsApp Now</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    location: '',
                    isNRI: false,
                    serviceType: SERVICES[0].title,
                    preferredContact: 'whatsapp',
                    preferredTime: 'Evening (6 PM - 9 PM IST / Flexible)',
                    message: '',
                  });
                }}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  textDecoration: 'underline',
                  marginTop: '10px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div
                  style={{
                    padding: '12px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(220, 38, 38, 0.15)',
                    border: '1px solid rgba(220, 38, 38, 0.4)',
                    color: '#fca5a5',
                    fontSize: '0.9rem',
                    marginBottom: '24px',
                  }}
                >
                  {errorMessage}
                </div>
              )}

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '22px',
                  marginBottom: '22px',
                }}
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    style={{
                      display: 'block',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--champagne)',
                      marginBottom: '8px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Your Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(10, 8, 14, 0.8)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)')}
                  />
                </div>

                {/* WhatsApp / Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      display: 'block',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--champagne)',
                      marginBottom: '8px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210 or +1 (555) 000-0000"
                    required
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(10, 8, 14, 0.8)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)')}
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '22px',
                  marginBottom: '22px',
                }}
              >
                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--champagne)',
                      marginBottom: '8px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Email Address (Optional)
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. yourname@domain.com"
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(10, 8, 14, 0.8)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)')}
                  />
                </div>

                {/* Service of Interest */}
                <div>
                  <label
                    htmlFor="serviceType"
                    style={{
                      display: 'block',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--champagne)',
                      marginBottom: '8px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Consultation Topic / Area *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: '#120f17',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)')}
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title} style={{ background: '#120f17' }}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '22px',
                  marginBottom: '22px',
                }}
              >
                {/* Location / Country */}
                <div>
                  <label
                    htmlFor="location"
                    style={{
                      display: 'block',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--champagne)',
                      marginBottom: '8px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Your Location / Country
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Delhi, London, Toronto, Dubai, New York"
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(10, 8, 14, 0.8)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)')}
                  />
                </div>

                {/* Preferred Contact Mode */}
                <div>
                  <label
                    htmlFor="preferredContact"
                    style={{
                      display: 'block',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--champagne)',
                      marginBottom: '8px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Preferred Contact Mode
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: '#120f17',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  >
                    <option value="whatsapp">WhatsApp (Voice / Chat)</option>
                    <option value="call">Direct Phone Call</option>
                    <option value="email">Email Communication</option>
                  </select>
                </div>
              </div>

              {/* NRI Checkbox */}
              <div style={{ marginBottom: '22px' }}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.88rem',
                    color: 'var(--champagne)',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    name="isNRI"
                    checked={formData.isNRI}
                    onChange={handleChange}
                    style={{
                      width: '18px',
                      height: '18px',
                      accentColor: 'var(--gold-primary)',
                      cursor: 'pointer',
                    }}
                  />
                  <span>
                    I am an NRI / International client seeking time-zone flexible scheduling
                  </span>
                </label>
              </div>

              {/* Message / Details */}
              <div style={{ marginBottom: '28px' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: 'var(--champagne)',
                    marginBottom: '8px',
                    letterSpacing: '0.04em',
                  }}
                >
                  Brief Summary of Concern (Optional & Strictly Confidential)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a brief note regarding your relationship, marriage, or personal astrological question. Sensitive birth data is only requested privately after slot confirmation."
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(10, 8, 14, 0.8)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)')}
                />
              </div>

              {/* Submit Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{
                    padding: '15px 36px',
                    fontSize: '0.96rem',
                    minWidth: '240px',
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  <Send size={18} />
                  <span>{loading ? 'Preparing Request...' : 'Submit Consultation Request'}</span>
                </button>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-muted)',
                    fontSize: '0.82rem',
                  }}
                >
                  <Lock size={15} color="var(--gold-primary)" />
                  <span>256-bit encrypted • Private & discrete</span>
                </div>
              </div>
            </form>
          )}

          {/* Privacy Note footer */}
          <div
            style={{
              marginTop: '32px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(212, 175, 55, 0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <ShieldCheck size={18} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--text-secondary)' }}>Privacy Assurance:</strong> We never collect unnecessary birth or family details on public web forms. Your birth date, time, and location can be shared directly with Astrologer Sahil Samrat via private WhatsApp/Call during your scheduled session.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
