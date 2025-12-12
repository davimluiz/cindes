import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import { ViewState } from './types';
import { IconBriefcase, IconCalendar, IconFileText, IconUsers } from './components/Icons';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  const navItems: { id: ViewState; label: string; icon: React.FC<any> }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: IconBriefcase },
    { id: 'events', label: 'Eventos', icon: IconCalendar },
    { id: 'suppliers', label: 'Fornecedores', icon: IconUsers },
    { id: 'finance', label: 'Notas e Orçamentos', icon: IconFileText },
    { id: 'internal', label: 'Funções Internas', icon: IconBriefcase },
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={(page) => setCurrentView(page as ViewState)} />;
      default:
        // Placeholder for other pages to be implemented in next steps
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 inline-block">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Página em Construção: {navItems.find(n => n.id === currentView)?.label}</h2>
              <p className="text-gray-500 mb-6">Esta seção será implementada na próxima etapa do desenvolvimento.</p>
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Voltar para Dashboard
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      
      {/* Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setCurrentView('dashboard')}>
                <div className="bg-black text-white font-bold text-xl px-3 py-1 tracking-widest border-2 border-black">
                  CINDES
                </div>
              </div>
              <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full transition-colors ${
                      currentView === item.id
                        ? 'border-black text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center">
               <div className="flex-shrink-0">
                  <span className="text-xs text-gray-500 mr-2">Setor de Operações</span>
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 border border-gray-300">
                    OP
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu (simple version) */}
        <div className="sm:hidden border-t border-gray-200 overflow-x-auto">
          <div className="flex space-x-4 px-4 py-2">
             {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`whitespace-nowrap px-3 py-2 rounded-md text-xs font-medium ${
                    currentView === item.id ? 'bg-gray-100 text-black' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </button>
             ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-400">
            &copy; 2024 CINDES - Centro da Indústria do Espírito Santo. Todos os direitos reservados. Uso Interno.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;