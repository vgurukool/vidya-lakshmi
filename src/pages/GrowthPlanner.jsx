import React, { useState, useEffect } from 'react';
import { Flame, CheckCircle2, Circle, Dumbbell, Sparkles, Trophy, Calendar } from 'lucide-react';

export function GrowthPlanner({ intelligenceState, onSelectTab }) {
  // Store completed workout IDs in localStorage
  const [completedWorkouts, setCompletedWorkouts] = useState(() => {
    try {
      const saved = localStorage.getItem('vidya_completed_workouts_v1');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vidya_completed_workouts_v1', JSON.stringify(completedWorkouts));
    } catch {}
  }, [completedWorkouts]);

  const toggleWorkout = (id) => {
    setCompletedWorkouts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const intels = Object.values(intelligenceState);
  const allWorkouts = intels.flatMap(intel =>
    intel.dailyWorkout.map((w, idx) => ({
      ...w,
      intelId: intel.id,
      intelName: intel.name,
      intelNick: intel.nickName,
      color: intel.color,
      workoutId: `${intel.id}_w_${idx}`
    }))
  );

  const completedCount = Object.values(completedWorkouts).filter(Boolean).length;
  const totalCount = allWorkouts.length;
  const completionPct = Math.round((completedCount / totalCount) * 100);

  return (
    <div style={{ padding: '32px', maxWidth: '1300px', margin: '0 auto' }}>
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        borderRadius: '16px',
        padding: '28px 32px',
        marginBottom: '32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 700,
            color: '#34D399',
            marginBottom: '12px'
          }}>
            <Flame size={13} />
            NEUROPLASTICITY & BRAIN PLASTICITY REGIMEN
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#F8FAFC', marginBottom: '8px' }}>
            Daily 9-Intelligence Growth Workout
          </h1>
          <p style={{ fontSize: '14px', color: '#94A3B8', margin: 0, maxWidth: '700px' }}>
            Rotate through daily micro-habits across all 9 dimensions to develop an agile, holistic, and resilient intellect.
          </p>
        </div>

        {/* Progress Card */}
        <div style={{
          background: '#1E293B',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '20px 24px',
          textAlign: 'center',
          minWidth: '160px'
        }}>
          <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>
            Mastery Progress
          </div>
          <div style={{ fontSize: '38px', fontWeight: 900, color: '#34D399', fontFamily: "'Cinzel', serif" }}>
            {completedCount}/{totalCount}
          </div>
          <div style={{ fontSize: '11px', color: '#64748B' }}>
            {completionPct}% Completed
          </div>
        </div>
      </div>

      {/* Grid of Workouts by Category */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {intels.map(intel => (
          <div
            key={intel.id}
            style={{
              background: '#1E293B',
              border: `1px solid ${intel.borderTint}`,
              borderRadius: '14px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
                  {intel.nickName}
                </h3>
                <span style={{ fontSize: '11px', color: intel.color, fontWeight: 600 }}>{intel.sanskritName}</span>
              </div>
              <button
                onClick={() => onSelectTab(intel.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: intel.color,
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                View →
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              {intel.dailyWorkout.map((w, idx) => {
                const wId = `${intel.id}_w_${idx}`;
                const isDone = !!completedWorkouts[wId];

                return (
                  <div
                    key={wId}
                    onClick={() => toggleWorkout(wId)}
                    style={{
                      background: isDone ? 'rgba(16, 185, 129, 0.1)' : '#0F172A',
                      border: isDone ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid #334155',
                      borderRadius: '8px',
                      padding: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      transition: 'all 0.15s'
                    }}
                  >
                    <div style={{ marginTop: '2px' }}>
                      {isDone ? (
                        <CheckCircle2 size={16} color="#34D399" />
                      ) : (
                        <Circle size={16} color="#64748B" />
                      )}
                    </div>
                    <div>
                      <div style={{
                        fontSize: '12.5px',
                        fontWeight: 700,
                        color: isDone ? '#34D399' : '#F1F5F9',
                        textDecoration: isDone ? 'line-through' : 'none',
                        marginBottom: '3px'
                      }}>
                        {w.title}
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#94A3B8', lineHeight: 1.4 }}>
                        {w.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
