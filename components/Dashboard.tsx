import React, { useState, useEffect } from 'react';
import { MOCK_EVENTS, MOCK_SUPPLIERS, MOCK_DOCS, QUICK_LINKS } from '../constants';
import { EventData, SupplierData, DocumentData } from '../types';
import EventCard from './EventCard';
import { IconSearch, IconLink, IconFileText, IconUsers, IconBriefcase } from './Icons';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventData[]>(MOCK_EVENTS);
  const [filteredSuppliers, setFilteredSuppliers] = useState<SupplierData[]>(MOCK_SUPPLIERS);
  const [filteredDocs, setFilteredDocs] = useState<DocumentData[]>(MOCK_DOCS);

  // Load favorites
  useEffect(() => {
    const stored = localStorage.getItem('cindes_favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const toggleFavorite = (id: string) => {
    const newFavs = favorites.includes(id) 
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('cindes_favorites', JSON.stringify(newFavs));
  };

  // Search Logic
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    
    setFilteredEvents(MOCK_EVENTS.filter(e => 
      e.name.toLowerCase().includes(term) || 
      e.responsible.toLowerCase().includes(term)
    ).slice(0, 4)); // Only show top 4 on dashboard

    setFilteredSuppliers(MOCK_SUPPLIERS.filter(s => 
      s.name.toLowerCase().includes(term) || 
      s.category.toLowerCase().includes(term)
    ).slice(0, 5));

    setFilteredDocs(MOCK_DOCS.filter(d => 
      d.title.toLowerCase().includes(term)
    ).slice(0, 5));
  }, [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header / Search Section */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Visão Geral</h1>
          <p className="text-gray-500 mt-1">Bem-vindo ao Portal Corporativo CINDES.</p>
        </div>
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IconSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm transition duration-150 ease-in-out"
            placeholder="Buscar eventos, fornecedores ou documentos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {QUICK_LINKS.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all group"
            onClick={(e) => e.preventDefault()}
          >
            <div className="p-2 bg-gray-100 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
              <IconLink className="w-5 h-5" />
            </div>
            <span className="ml-3 font-medium text-gray-700">{link.name}</span>
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Events Column (Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 flex items-center">
              <IconUsers className="w-5 h-5 mr-2" />
              Eventos Próximos
            </h2>
            <button className="text-sm font-medium text-gray-500 hover:text-black" onClick={() => onNavigate('events')}>Ver todos</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredEvents.map(event => (
              <EventCard 
                key={event.id} 
                event={event} 
                isFavorite={favorites.includes(event.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
            {filteredEvents.length === 0 && (
              <p className="text-gray-500 text-sm col-span-2 text-center py-4">Nenhum evento encontrado.</p>
            )}
          </div>

          {/* Suppliers Preview inside Events column for density */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
               <h2 className="text-lg font-bold text-gray-900 flex items-center">
                <IconBriefcase className="w-5 h-5 mr-2" />
                Fornecedores Recentes
              </h2>
              <button className="text-sm font-medium text-gray-500 hover:text-black" onClick={() => onNavigate('suppliers')}>Ver todos</button>
            </div>
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {filteredSuppliers.map(supplier => (
                  <li key={supplier.id} className="p-4 hover:bg-gray-50 flex justify-between items-center transition-colors">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{supplier.name}</p>
                      <p className="text-xs text-gray-500">{supplier.category} • {supplier.responsible}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-xs text-gray-400">{supplier.phone}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar Column (Docs & Internal) */}
        <div className="space-y-6">
          
          {/* Internal Functions / Docs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <IconFileText className="w-5 h-5 mr-2" />
              Documentos & Notas
            </h2>
            <ul className="space-y-4">
              {filteredDocs.map(doc => (
                <li key={doc.id} className="group cursor-pointer">
                  <div className="flex items-start">
                    <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 mr-3 ${doc.type === 'invoice' ? 'bg-red-400' : doc.type === 'budget' ? 'bg-blue-400' : 'bg-gray-300'}`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 group-hover:text-black group-hover:underline">{doc.title}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">{doc.type} • {doc.date} • {doc.fileSize}</p>
                    </div>
                  </div>
                </li>
              ))}
              {filteredDocs.length === 0 && (
                <p className="text-gray-500 text-sm">Nenhum documento encontrado.</p>
              )}
            </ul>
            <button className="w-full mt-6 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => onNavigate('finance')}>
              Acessar Pasta Completa
            </button>
          </div>

          {/* Internal Tools (Mini) */}
          <div className="bg-black rounded-lg shadow-lg p-6 text-white">
            <h3 className="font-bold text-lg mb-2">Funções Internas</h3>
            <p className="text-gray-400 text-sm mb-4">Acesso rápido aos padrões e modelos do setor.</p>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded text-xs text-center transition-colors">Checklists</button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded text-xs text-center transition-colors">Modelos</button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded text-xs text-center transition-colors">Organograma</button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded text-xs text-center transition-colors">Calendário</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;