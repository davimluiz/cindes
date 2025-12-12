import React from 'react';
import { EventData } from '../types';
import { IconClock, IconStar } from './Icons';

interface EventCardProps {
  event: EventData;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, isFavorite, onToggleFavorite }) => {
  const eventDate = new Date(event.date);
  const now = new Date();
  const diffTime = eventDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let statusColor = 'border-gray-300';
  let badgeColor = 'bg-gray-200 text-gray-700';
  
  if (diffDays < 2 && diffDays >= 0) {
    statusColor = 'border-red-500';
    badgeColor = 'bg-red-100 text-red-700';
  } else if (diffDays >= 2 && diffDays <= 7) {
    statusColor = 'border-yellow-400';
    badgeColor = 'bg-yellow-100 text-yellow-800';
  }

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
  }).format(eventDate);

  return (
    <div className={`bg-white rounded-lg shadow-sm border-l-4 p-5 transition-all hover:shadow-md ${statusColor} relative group`}>
      <button 
        onClick={(e) => { e.stopPropagation(); onToggleFavorite(event.id); }}
        className="absolute top-4 right-4 text-gray-300 hover:text-yellow-400 transition-colors"
      >
        <IconStar className="w-5 h-5" filled={isFavorite} />
      </button>

      <div className="flex justify-between items-start mb-2">
        <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>
          {diffDays < 0 ? 'Concluído' : diffDays === 0 ? 'Hoje' : `${diffDays} dias restantes`}
        </span>
      </div>
      
      <h3 className="font-bold text-gray-900 text-lg mb-1 leading-tight">{event.name}</h3>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <IconClock className="w-4 h-4 mr-1" />
        <span>{formattedDate}</span>
      </div>

      <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-xs text-gray-600">
        <div>
          <span className="block font-medium text-gray-400 uppercase tracking-wider text-[10px]">Responsável</span>
          <span>{event.responsible}</span>
        </div>
        <a 
          href={event.sharePointLink} 
          className="text-black font-semibold hover:underline"
          onClick={(e) => e.preventDefault()} // Prevent nav for demo
        >
          Ver Detalhes
        </a>
      </div>
    </div>
  );
};

export default EventCard;