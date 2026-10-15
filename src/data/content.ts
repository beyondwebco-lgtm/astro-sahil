import type { ServiceItem, FAQItem } from '../types';

export const SITE_CONFIG = {
  name: 'Astrologer Sahil Samrat',
  title: 'Vedic Astrologer & Maa Kali Upasak',
  tagline: 'Vedic Astrology • Spiritual Guidance • Relationship Consultation',
  quote: 'Find Clarity. Understand Your Path. Move Forward With Confidence.',
  heroDescription:
    "Discover personalised Vedic astrology guidance for love, relationships, marriage, and life's important decisions.",
  instagramHandle: '@astro_sahil_samrat',
  instagramUrl: 'https://instagram.com/astro_sahil_samrat',
  instagramFollowers: '21.3K+',
  referenceWebsite: 'lostloverproblemsolution.info',
  referenceWebsiteUrl: 'https://lostloverproblemsolution.info',
  whatsappPlaceholder: '+91 XXXXX XXXXX',
  whatsappDisplay: '+91 [Client Contact To Be Provided]',
  // Using a standard wa.me format with prefilled text
  defaultWhatsAppMessage: 'Hello Astrologer Sahil Samrat, I would like to enquire about a private consultation.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'love-relationship',
    title: 'Love & Relationship Guidance',
    shortDesc:
      'Personalised astrological perspectives on relationship concerns, emotional uncertainty, and deeper understanding.',
    fullDesc:
      'Navigating emotional crossroads requires empathetic clarity and astrological insight. Through deep analysis of Venus, Mars, the 5th and 7th houses, and planetary aspects, Sahil Samrat provides thoughtful perspectives on mutual harmony, emotional blockages, and relational dynamics.',
    keyPoints: [
      'Analysis of relational planets and cosmic alignments',
      'Clarity on emotional patterns and partner compatibility',
      'Constructive spiritual guidance during uncertain phases',
      'Confidential 1-on-1 discussion respecting your dignity',
    ],
    icon: 'HeartHandshake',
  },
  {
    id: 'marriage-guidance',
    title: 'Marriage Guidance',
    shortDesc:
      'Traditional astrological perspectives on marriage, compatibility (Kundali Milan), and union decisions.',
    fullDesc:
      'Marriage represents a sacred confluence of two journeys. We examine Ashtakoota compatibility, Navamsha (D9) chart nuances, dosha evaluations, and upcoming dasha periods to help couples and families make mindful, harmonious life decisions.',
    keyPoints: [
      'Comprehensive Kundali Milan and Navamsha chart review',
      'Assessment of Mangal Dosha and planetary remedies',
      'Understanding long-term stability and family harmony',
      'Traditional spiritual remedies to ease transition tensions',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'reconciliation-guidance',
    title: 'Reconciliation Guidance',
    shortDesc:
      'Compassionate guidance for individuals navigating emotional distance, misunderstandings, and relationship difficulties.',
    fullDesc:
      'When misunderstandings or external pressures create distance in a cherished bond, Vedic perspectives illuminate the underlying karmic cycles and timing. Consultations focus on personal healing, mutual forgiveness, and understanding root causes.',
    keyPoints: [
      'Understanding temporary planetary friction and transit cycles',
      'Karmic perspectives on communication breakdown',
      'Compassionate counsel without judgment or pressure',
      'Traditional spiritual practices for peace of mind',
    ],
    icon: 'Compass',
  },
  {
    id: 'vedic-consultation',
    title: 'Vedic Astrology Consultation',
    shortDesc:
      'Personalised readings, Janam Kundali analysis, and traditional astrological interpretations for life decisions.',
    fullDesc:
      'A complete reading of your birth chart (Janma Kundali) evaluating current planetary periods (Mahadasha/Antardasha), planetary strengths, transits (Gochara), and potential opportunities across career, wellness, and personal growth.',
    keyPoints: [
      'Detailed planetary dasha timeline review',
      'Career, financial stability, and life purpose insights',
      'Clarity on major life transitions and upcoming periods',
      'Authentic classical Parashari Vedic methodology',
    ],
    icon: 'Sun',
  },
  {
    id: 'spiritual-remedies',
    title: 'Spiritual Remedies (Maa Kali Upasana)',
    shortDesc:
      'Traditional spiritual practices, mantra guidance, and satvik remedies based on individual consultation.',
    fullDesc:
      'Rooted in the devotional lineage of Maa Kali Upasana and Vedic traditions, remedies are tailored to individual energies. These include positive spiritual disciplines, mantra recitation guidance, meditative focus, and satvik offerings to cultivate inner strength and calm.',
    keyPoints: [
      'Devotional Maa Kali spiritual guidance and inner peace',
      'Satvik Vedic mantra recitations and dhyana practices',
      'Yantra and spiritual grounding recommendations',
      'Grounded remedies that promote mental peace and balance',
    ],
    icon: 'Flame',
  },
  {
    id: 'nri-consultations',
    title: 'NRI & Worldwide Consultations',
    shortDesc:
      'Dedicated remote consultations for seekers in the USA, Canada, UK, Australia, UAE, Europe, and worldwide.',
    fullDesc:
      'Distance is no barrier to seeking spiritual clarity. Consultations are arranged across international time zones via private WhatsApp voice/video calls or audio sessions, ensuring overseas Indian diaspora and global seekers receive prompt, considerate attention.',
    keyPoints: [
      'Flexible scheduling aligned with your local time zone',
      'Direct WhatsApp voice/video or audio consultation',
      'Cultural understanding of modern diaspora challenges',
      'Private, secure, and discrete remote communication',
    ],
    icon: 'Globe2',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Personalised Consultation Experience',
    desc: 'Every birth chart and human experience is unique. Consultations are conducted personally by Sahil Samrat with undivided attention to your specific concerns.',
    icon: 'UserCheck',
  },
  {
    title: '100% Confidential & Respectful',
    desc: 'Your identity, family matters, and personal circumstances are held in strictest confidence. We provide a safe, respectful sanctuary free from judgment.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Traditional Vedic Astrology Approach',
    desc: 'Rooted in authentic Parashari principles, sacred shastras, and spiritual devotion as a Maa Kali Upasak, avoiding modern sensationalism.',
    icon: 'BookOpen',
  },
  {
    title: 'Seamless Online Consultations',
    desc: 'Convenient appointment booking from the comfort and privacy of your home through high-definition WhatsApp or phone consultations.',
    icon: 'Laptop',
  },
  {
    title: 'Global Guidance for NRI Clients',
    desc: 'Proudly serving clients across the US, UK, Canada, Australia, Gulf countries, and Europe with flexible scheduling across international time zones.',
    icon: 'Globe',
  },
  {
    title: 'Ethical & Grounded Perspective',
    desc: 'We present astrology as divine interpretive wisdom and spiritual guidance. We believe in empowering your free will rather than inducing fear.',
    icon: 'Scale',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Choose Your Consultation',
    desc: 'Review the areas of guidance available — whether relationship clarity, marriage compatibility, Vedic horoscope analysis, or NRI guidance.',
  },
  {
    step: '02',
    title: 'Share Your Enquiry',
    desc: 'Reach out privately through our enquiry form or via WhatsApp with your preferred consultation type, convenient timing, and basic contact details.',
  },
  {
    step: '03',
    title: 'Connect for Guidance',
    desc: 'Confirm your consultation schedule, time slot, and applicable fees with the consultation desk, then connect directly with Sahil Samrat for your private session.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How can I book a consultation?',
    answer:
      'You can initiate a booking by clicking "Book a Private Consultation" on this website, completing the enquiry form, or directly reaching out via WhatsApp. Our consultation coordinator will respond to confirm available slots and next steps.',
  },
  {
    question: 'Are online consultations available?',
    answer:
      'Yes, the majority of consultations are conducted virtually via private WhatsApp voice or video calls, as well as direct phone calls. This allows you to consult from the privacy and comfort of your home anywhere in the world.',
  },
  {
    question: 'Do you offer consultations for NRI clients?',
    answer:
      'Yes, Astrologer Sahil Samrat regularly assists clients residing in the United States, Canada, United Kingdom, Australia, UAE, Europe, and Singapore. Consultations are coordinated according to your local time zone.',
  },
  {
    question: 'What information is needed for a consultation?',
    answer:
      'For accurate Vedic horoscope reading, your exact Date of Birth, Time of Birth, and Place of Birth are required. If exact birth details are unavailable, guidance can be discussed based on Prashna Kundali (horary astrology) or your primary relationship queries during the private session.',
  },
  {
    question: 'How can I learn about consultation fees?',
    answer:
      'Consultation fees depend on the nature and duration of the session (e.g., specific relationship query vs. comprehensive full-life horoscope analysis). Applicable fees and payment options are clearly communicated by the consultation desk prior to confirming your appointment.',
  },
  {
    question: 'Are consultations private and confidential?',
    answer:
      'Yes, complete confidentiality is our highest ethical priority. Your discussions, personal situations, and birth records remain entirely private and are never shared with any third party.',
  },
  {
    question: 'How do I contact Sahil Samrat?',
    answer:
      'You can connect directly via WhatsApp through the links provided on this website, send an enquiry through our confidential consultation form, or reach out through our official Instagram profile @astro_sahil_samrat.',
  },
];
