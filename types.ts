export type EventStatus = 'critical' | 'warning' | 'normal' | 'past';

export interface EventData {
  id: string;
  name: string;
  date: string; // ISO string
  responsible: string;
  sharePointLink: string;
  location: string;
}

export interface SupplierData {
  id: string;
  name: string;
  category: 'Buffet' | 'Estrutura' | 'Gráfica' | 'Decoração' | 'Limpeza' | 'Segurança' | 'Transporte' | 'Outros';
  responsible: string;
  phone: string;
  email: string;
  sharePointLink: string;
}

export interface DocumentData {
  id: string;
  title: string;
  type: 'invoice' | 'budget' | 'checklist' | 'official' | 'template';
  date: string;
  fileSize: string;
}

export type ViewState = 'dashboard' | 'suppliers' | 'events' | 'finance' | 'internal';