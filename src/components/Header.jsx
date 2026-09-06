import React from 'react';
import { VEDIC_QUOTES } from '../data/intelligenceData';
import { Compass, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

export function Header({ activeTab, currentIntel }) {
  const randomQuote = VEDIC_QUOTES[0];

  return (
    <header style={{
      height: '74px',
      backgroundColor: '#0F172A',
      borderBottom: '1px solid #1E293B',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 30
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: currentIntel ? currentIntel.gradient : 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
        }}>
          <Sparkles size={18} color="#FFFFFF" />
        </div>
        <div>
          <h2 style={{ fontSize: '17px', fontWeight: 800, margin: 0, color: '#F8FAFC', letterSpacing: '-0.2px' }}>
            {activeTab === 'dashboard' && 'Cognitive Spectrum Dashboard'}
            {activeTab === 'planner' && 'Daily Intelligence Growth Workout'}
            {activeTab === 'report' && 'Multiple Intelligence Archetype Report'}
            {currentIntel && `${currentIntel.name} (${currentIntel.nickName})`}
          </h2>
          <div style={{ fontSize: '12px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>{currentIntel ? currentIntel.sanskritName : "Theory of Multiple Intelligences • Howard Gardner & Vedic Bodha"}</span>
          </div>
        </div>
      </div>

      {/* Vedic Wisdom Pill */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: 'rgba(30, 41, 59, 0.7)',
        border: '1px solid #334155',
        borderRadius: '20px',
        padding: '6px 16px',
        maxWidth: '520px'
      }}>
        <div style={{ fontSize: '11.5px', color: '#FBBF24', fontWeight: 700, whiteSpace: 'nowrap' }}>
          {randomQuote.quote.split('(')[0]}
        </div>
        <div style={{ fontSize: '11px', color: '#94A3B8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          "{randomQuote.translation}"
        </div>
      </div>
    </header>
  );
}
