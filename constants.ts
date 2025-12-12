import { EventData, SupplierData, DocumentData } from './types';

// Helper to get future dates
const addDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
};

export const MOCK_EVENTS: EventData[] = [
  {
    id: 'ev-001',
    name: 'Reunião Anual da Indústria',
    date: addDays(1), // Critical (< 2 days)
    responsible: 'Ana Souza',
    sharePointLink: '#',
    location: 'Auditório CINDES - Térreo'
  },
  {
    id: 'ev-002',
    name: 'Workshop de Segurança do Trabalho',
    date: addDays(4), // Warning (2-7 days)
    responsible: 'Carlos Mendes',
    sharePointLink: '#',
    location: 'Sala de Treinamento 03'
  },
  {
    id: 'ev-003',
    name: 'Feira de Inovação Industrial',
    date: addDays(15), // Normal (> 7 days)
    responsible: 'Mariana Lima',
    sharePointLink: '#',
    location: 'Centro de Convenções'
  },
  {
    id: 'ev-004',
    name: 'Café com Empresários',
    date: addDays(6), // Warning
    responsible: 'Roberto Almeida',
    sharePointLink: '#',
    location: 'Espaço Gourmet'
  },
  {
    id: 'ev-005',
    name: 'Palestra: Indústria 4.0',
    date: addDays(30),
    responsible: 'Fernanda Costa',
    sharePointLink: '#',
    location: 'Online (Zoom)'
  },
  {
    id: 'ev-006',
    name: 'Treinamento de Brigada',
    date: addDays(1), // Critical
    responsible: 'Sérgio Ricardo',
    sharePointLink: '#',
    location: 'Pátio Externo'
  },
  {
    id: 'ev-007',
    name: 'Entrega do Prêmio CINDES',
    date: addDays(60),
    responsible: 'Diretoria Executiva',
    sharePointLink: '#',
    location: 'Salão Nobre'
  },
  {
    id: 'ev-008',
    name: 'Revisão Orçamentária Semestral',
    date: addDays(8),
    responsible: 'Departamento Financeiro',
    sharePointLink: '#',
    location: 'Sala de Reuniões 1'
  },
  {
    id: 'ev-009',
    name: 'Visita Técnica: Porto de Vitória',
    date: addDays(12),
    responsible: 'Logística',
    sharePointLink: '#',
    location: 'Externo'
  },
  {
    id: 'ev-010',
    name: 'Alinhamento Estratégico 2024',
    date: addDays(2), // Warning
    responsible: 'CEO',
    sharePointLink: '#',
    location: 'Sala da Presidência'
  }
];

export const MOCK_SUPPLIERS: SupplierData[] = [
  { id: 'sup-1', name: 'Gourmet Real Buffet', category: 'Buffet', responsible: 'João Silva', phone: '(27) 99999-1111', email: 'contato@gourmetreal.com', sharePointLink: '#' },
  { id: 'sup-2', name: 'Estruturas Metálicas Vix', category: 'Estrutura', responsible: 'Pedro Santos', phone: '(27) 99999-2222', email: 'vendas@estruturasvix.com', sharePointLink: '#' },
  { id: 'sup-3', name: 'Gráfica Rápida Cores', category: 'Gráfica', responsible: 'Maria Oliveira', phone: '(27) 99999-3333', email: 'arte@graficacores.com', sharePointLink: '#' },
  { id: 'sup-4', name: 'Decora Eventos', category: 'Decoração', responsible: 'Lucas Pereira', phone: '(27) 99999-4444', email: 'lucas@decora.com', sharePointLink: '#' },
  { id: 'sup-5', name: 'Clean Service', category: 'Limpeza', responsible: 'Juliana Costa', phone: '(27) 99999-5555', email: 'comercial@clean.com', sharePointLink: '#' },
  { id: 'sup-6', name: 'Protege Segurança', category: 'Segurança', responsible: 'Marcos Paulo', phone: '(27) 99999-6666', email: 'marcos@protege.com', sharePointLink: '#' },
  { id: 'sup-7', name: 'Vans & Logística', category: 'Transporte', responsible: 'Ricardo Gomes', phone: '(27) 99999-7777', email: 'frota@vanslog.com', sharePointLink: '#' },
  { id: 'sup-8', name: 'Tech Solutions Audio', category: 'Estrutura', responsible: 'Felipe Rocha', phone: '(27) 99999-8888', email: 'felipe@techsolutions.com', sharePointLink: '#' },
  { id: 'sup-9', name: 'Flores do Campo', category: 'Decoração', responsible: 'Ana Clara', phone: '(27) 99999-9999', email: 'ana@flores.com', sharePointLink: '#' },
  { id: 'sup-10', name: 'Limos Luxo', category: 'Transporte', responsible: 'Roberto Dias', phone: '(27) 98888-1111', email: 'reserva@limos.com', sharePointLink: '#' },
  { id: 'sup-11', name: 'Segura Total', category: 'Segurança', responsible: 'Cláudio Neto', phone: '(27) 98888-2222', email: 'claudio@seguratotal.com', sharePointLink: '#' },
  { id: 'sup-12', name: 'Impressão 3D Pro', category: 'Gráfica', responsible: 'Tatiane Melo', phone: '(27) 98888-3333', email: 'tati@3dpro.com', sharePointLink: '#' },
  { id: 'sup-13', name: 'Sabor Caseiro', category: 'Buffet', responsible: 'Dona Maria', phone: '(27) 98888-4444', email: 'maria@sabor.com', sharePointLink: '#' },
  { id: 'sup-14', name: 'Tendas e Palcos', category: 'Estrutura', responsible: 'Jorge Amado', phone: '(27) 98888-5555', email: 'jorge@tendas.com', sharePointLink: '#' },
  { id: 'sup-15', name: 'Facilities Group', category: 'Limpeza', responsible: 'Renata Souza', phone: '(27) 98888-6666', email: 'rh@facilities.com', sharePointLink: '#' },
];

export const MOCK_DOCS: DocumentData[] = [
  { id: 'doc-1', title: 'Nota Fiscal #00432 - Buffet', type: 'invoice', date: '2023-10-01', fileSize: '1.2 MB' },
  { id: 'doc-2', title: 'Orçamento Palco Evento Anual', type: 'budget', date: '2023-10-02', fileSize: '450 KB' },
  { id: 'doc-3', title: 'Checklist Segurança Padrão', type: 'checklist', date: '2023-09-15', fileSize: '200 KB' },
  { id: 'doc-4', title: 'Manual de Identidade Visual', type: 'official', date: '2023-01-10', fileSize: '5.6 MB' },
  { id: 'doc-5', title: 'Modelo de Contrato Prestação', type: 'template', date: '2023-05-20', fileSize: '89 KB' },
  { id: 'doc-6', title: 'Organograma Setorial 2024', type: 'official', date: '2023-10-05', fileSize: '1.1 MB' },
  { id: 'doc-7', title: 'Planilha Comparativa Gráficas', type: 'budget', date: '2023-10-03', fileSize: '32 KB' },
];

export const QUICK_LINKS = [
  { name: 'SharePoint Setorial', url: '#', icon: 'Folder' },
  { name: 'Solicitar Compras', url: '#', icon: 'ShoppingCart' },
  { name: 'Reservar Sala', url: '#', icon: 'Calendar' },
  { name: 'Ramais Internos', url: '#', icon: 'Phone' },
];