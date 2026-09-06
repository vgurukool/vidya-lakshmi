import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardPage } from './pages/DashboardPage';
import { DetailPage } from './pages/DetailPage';
import { GrowthPlanner } from './pages/GrowthPlanner';
import { ArchetypeReport } from './pages/ArchetypeReport';
import { INTELLIGENCE_CATEGORIES } from './data/intelligenceData';

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Load intelligence state from localStorage or defaults
  const [intelligenceState, setIntelligenceState] = useState(() => {
    try {
      const saved = localStorage.getItem('vidya_lakshmi_state_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        const stateMap = {};
        INTELLIGENCE_CATEGORIES.forEach(def => {
          const loaded = parsed[def.id];
          stateMap[def.id] = {
            ...def,
            questions: loaded && loaded.questions ? loaded.questions : def.questions
          };
        });
        return stateMap;
      }
    } catch {}

    const defaultMap = {};
    INTELLIGENCE_CATEGORIES.forEach(def => {
      defaultMap[def.id] = { ...def };
    });
    return defaultMap;
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vidya_lakshmi_state_v1', JSON.stringify(intelligenceState));
    } catch {}
  }, [intelligenceState]);

  // Update specific intelligence
  const handleUpdateIntel = (updatedIntel) => {
    setIntelligenceState(prev => ({
      ...prev,
      [updatedIntel.id]: updatedIntel
    }));
  };

  // Reset all to defaults
  const handleResetAll = () => {
    if (!window.confirm('Reset all 9 intelligence self-assessment scores and exercises to defaults?')) return;
    const defaultMap = {};
    INTELLIGENCE_CATEGORIES.forEach(def => {
      defaultMap[def.id] = { ...def };
    });
    setIntelligenceState(defaultMap);
    localStorage.removeItem('vidya_lakshmi_state_v1');
  };

  const currentIntel = intelligenceState[activeTab];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0B0F19', color: '#F8FAFC' }}>
      {/* Fixed Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        intelligenceState={intelligenceState}
        onResetAll={handleResetAll}
      />

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: '280px', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Header */}
        <Header activeTab={activeTab} currentIntel={currentIntel} />

        {/* Dynamic Pages */}
        <main style={{ flex: 1, backgroundColor: '#0B0F19' }}>
          {activeTab === 'dashboard' && (
            <DashboardPage
              intelligenceState={intelligenceState}
              onSelectTab={setActiveTab}
            />
          )}

          {activeTab === 'planner' && (
            <GrowthPlanner
              intelligenceState={intelligenceState}
              onSelectTab={setActiveTab}
            />
          )}

          {activeTab === 'report' && (
            <ArchetypeReport
              intelligenceState={intelligenceState}
            />
          )}

          {currentIntel && (
            <DetailPage
              intelData={currentIntel}
              onUpdateIntel={handleUpdateIntel}
              onBackToDashboard={() => setActiveTab('dashboard')}
            />
          )}
        </main>
      </div>
    </div>
  );
}
