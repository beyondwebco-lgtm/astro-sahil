export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyPoints: string[];
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  isNRI: boolean;
  serviceType: string;
  preferredContact: 'whatsapp' | 'call' | 'email';
  preferredTime: string;
  message: string;
}
