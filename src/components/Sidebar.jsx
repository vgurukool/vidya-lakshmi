import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Binary,
  Eye,
  Activity,
  Music,
  Users,
  UserCheck,
  TreePine,
  Sparkles,
  Flame,
  Award,
  RotateCcw
} from 'lucide-react';

const ICON_MAP = {
  linguistic: BookOpen,
  logical_mathematical: Binary,
  visual_spatial: Eye,
  bodily_kinesthetic: Activity,
  musical: Music,
  interpersonal: Users,
  intrapersonal: UserCheck,
  naturalist: TreePine,
  existential: Sparkles
};

export function Sidebar({ activeTab, setActiveTab, intelligenceState, onResetAll }) {
  const calculateTotalPct = (intel) => {
    if (!intel || !intel.questions || intel.questions.length === 0) return 0;
    const total = intel.questions.reduce((sum, q) => sum + (q.score || 0), 0);
    const max = intel.questions.length * 5;
    return Math.round((total / max) * 100);
  };

  return (
    <aside style={{
      width: '280px',
      backgroundColor: '#0F172A',
      borderRight: '1px solid #1E293B',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 40,
      overflowY: 'auto'
    }}>
      {/* Brand Header */}
      <div style={{
        padding: '24px 20px 20px 20px',
        borderBottom: '1px solid #1E293B',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(245, 158, 11, 0.35)',
          color: '#0B0F19',
          fontWeight: 900,
          fontSize: '22px'
        }}>
          🪷
        </div>
        <div>
          <h1 style={{
            fontSize: '17px',
            fontWeight: 800,
            letterSpacing: '-0.2px',
            color: '#F8FAFC',
            fontFamily: "'Cinzel', serif"
          }}>
            VIDYA LAKSHMI
          </h1>
          <p style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600, letterSpacing: '0.5px' }}>
            9 MULTIPLE INTELLIGENCES
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <div style={{ padding: '16px 12px 8px 12px' }}>
        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', fontWeight: 700, padding: '0 8px 8px 8px' }}>
          Overview & Insights
        </div>

        <button
          onClick={() => setActiveTab('dashboard')}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 12px',
            borderRadius: '8px',
            border: 'none',
            background: activeTab === 'dashboard' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
            color: activeTab === 'dashboard' ? '#FBBF24' : '#94A3B8',
            fontWeight: activeTab === 'dashboard' ? 700 : 500,
            fontSize: '13px',
            cursor: 'pointer',
            textAlign: 'left',
            marginBottom: '4px',
            transition: 'all 0.15s'
          }}
        >
          <LayoutDashboard size={18} color={activeTab === 'dashboard' ? '#FBBF24' : '#94A3B8'} />
          <span>Intelligence Dashboard</span>
        </button>

        <button
          onClick={() => setActiveTab('planner')}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 12px',
            borderRadius: '8px',
            border: 'none',
            background: activeTab === 'planner' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
            color: activeTab === 'planner' ? '#34D399' : '#94A3B8',
            fontWeight: activeTab === 'planner' ? 700 : 500,
            fontSize: '13px',
            cursor: 'pointer',
            textAlign: 'left',
            marginBottom: '4px',
            transition: 'all 0.15s'
          }}
        >
          <Flame size={18} color={activeTab === 'planner' ? '#34D399' : '#94A3B8'} />
          <span>Growth Workout Planner</span>
        </button>

        <button
          onClick={() => setActiveTab('report')}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 12px',
            borderRadius: '8px',
            border: 'none',
            background: activeTab === 'report' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
            color: activeTab === 'report' ? '#38BDF8' : '#94A3B8',
            fontWeight: activeTab === 'report' ? 700 : 500,
            fontSize: '13px',
            cursor: 'pointer',
            textAlign: 'left',
            marginBottom: '4px',
            transition: 'all 0.15s'
          }}
        >
          <Award size={18} color={activeTab === 'report' ? '#38BDF8' : '#94A3B8'} />
          <span>Archetype & Study Profile</span>
        </button>
      </div>

      {/* 9 Intelligences List */}
      <div style={{ padding: '8px 12px 16px 12px', flex: 1 }}>
        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', fontWeight: 700, padding: '0 8px 8px 8px', marginTop: '8px' }}>
          9 Multiple Intelligences
        </div>

        {Object.values(intelligenceState).map((intel) => {
          const IconComponent = ICON_MAP[intel.id] || Sparkles;
          const isActive = activeTab === intel.id;
          const pct = calculateTotalPct(intel);

          return (
            <button
              key={intel.id}
              onClick={() => setActiveTab(intel.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '9px 12px',
                borderRadius: '8px',
                border: 'none',
                background: isActive ? intel.bgTint : 'transparent',
                color: isActive ? intel.color : '#CBD5E1',
                fontWeight: isActive ? 700 : 500,
                fontSize: '12.5px',
                cursor: 'pointer',
                textAlign: 'left',
                marginBottom: '3px',
                transition: 'all 0.15s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                <div style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '6px',
                  backgroundColor: isActive ? intel.color : '#1E293B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <IconComponent size={14} color={isActive ? '#0F172A' : intel.color} />
                </div>
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: isActive ? 700 : 600 }}>{intel.nickName}</div>
                  <div style={{ fontSize: '10px', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis' }}>{intel.sanskritName}</div>
                </div>
              </div>

              {/* Mini Score Pill */}
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                padding: '2px 6px',
                borderRadius: '10px',
                backgroundColor: isActive ? intel.color : '#1E293B',
                color: isActive ? '#0F172A' : '#94A3B8'
              }}>
                {pct}%
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer Info / Reset */}
      <div style={{
        padding: '16px',
        borderTop: '1px solid #1E293B',
        backgroundColor: '#0B0F19',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ fontSize: '11px', color: '#64748B' }}>
          Port: <strong style={{ color: '#FBBF24' }}>3008</strong>
        </div>
        <button
          onClick={onResetAll}
          title="Reset all assessment scores to defaults"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'transparent',
            border: '1px solid #334155',
            padding: '4px 8px',
            borderRadius: '6px',
            color: '#94A3B8',
            fontSize: '11px',
            cursor: 'pointer'
          }}
        >
          <RotateCcw size={12} />
          Reset
        </button>
      </div>
    </aside>
  );
}
