import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';
import {
  Sparkles,
  ArrowRight,
  Zap,
  TrendingUp,
  Brain,
  Award,
  BookOpen,
  GraduationCap,
  Briefcase,
  Compass
} from 'lucide-react';

export function DashboardPage({ intelligenceState, onSelectTab }) {
  // Compute percentage score for each intelligence
  const intelList = Object.values(intelligenceState).map(intel => {
    const totalScore = intel.questions.reduce((sum, q) => sum + (q.score || 0), 0);
    const maxScore = intel.questions.length * 5;
    const pct = Math.round((totalScore / maxScore) * 100);
    return {
      ...intel,
      pct,
      rawScore: totalScore,
      maxScore
    };
  });

  // Sort by score descending
  const sortedByStrength = [...intelList].sort((a, b) => b.pct - a.pct);
  const topThree = sortedByStrength.slice(0, 3);
  const bottomTwo = sortedByStrength.slice(-2);

  // Overall average
  const overallAvg = Math.round(intelList.reduce((acc, curr) => acc + curr.pct, 0) / intelList.length);

  // Radar chart data
  const radarData = intelList.map(item => ({
    subject: item.nickName,
    score: item.pct,
    fullMark: 100
  }));

  // Bar chart data
  const barData = intelList.map(item => ({
    name: item.nickName,
    score: item.pct,
    color: item.color
  }));

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(14, 165, 233, 0.1) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.25)',
        borderRadius: '16px',
        padding: '28px 32px',
        marginBottom: '32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ zIndex: 2, maxWidth: '750px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 700,
            color: '#FBBF24',
            marginBottom: '12px'
          }}>
            <Sparkles size={13} />
            HARVARD MULTIPLE INTELLIGENCE THEORY × VEDIC BODHA
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#F8FAFC', marginBottom: '10px' }}>
            Discover Your 9-Dimensional Cognitive Blueprint
          </h1>
          <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
            Intelligence is not a single static IQ number. According to Howard Gardner and Vedic psychology, human consciousness expresses itself through 9 distinct cognitive strengths. Evaluate each facet below to optimize your learning and career pathways.
          </p>
        </div>

        {/* Holistic Score Badge */}
        <div style={{
          zIndex: 2,
          background: '#1E293B',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '20px 24px',
          textAlign: 'center',
          minWidth: '170px'
        }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#94A3B8', fontWeight: 700 }}>
            Overall Spectrum
          </div>
          <div style={{ fontSize: '42px', fontWeight: 900, color: '#F59E0B', fontFamily: "'Cinzel', serif" }}>
            {overallAvg}%
          </div>
          <div style={{ fontSize: '11px', color: '#34D399', fontWeight: 600 }}>
            Active Synthesis
          </div>
        </div>
      </div>

      {/* Top 3 Superpowers Cards */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Zap size={18} color="#FBBF24" />
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
            Your Top 3 Dominant Cognitive Superpowers
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {topThree.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              style={{
                background: '#1E293B',
                border: `1px solid ${item.borderTint}`,
                borderRadius: '14px',
                padding: '22px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = item.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = item.borderTint;
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: item.bgTint,
                  color: item.color,
                  fontSize: '11px',
                  fontWeight: 800
                }}>
                  Rank #{idx + 1}
                </div>
                <div style={{ fontSize: '22px', fontWeight: 900, color: item.color }}>
                  {item.pct}%
                </div>
              </div>

              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#F8FAFC', marginBottom: '4px' }}>
                {item.name}
              </h3>
              <div style={{ fontSize: '12px', color: '#FBBF24', fontWeight: 600, marginBottom: '10px' }}>
                {item.sanskritName} • {item.nickName}
              </div>

              <p style={{ fontSize: '12.5px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '16px' }}>
                {item.shortDesc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #334155', paddingTop: '12px' }}>
                <span style={{ fontSize: '11px', color: '#64748B' }}>Primary Strength</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 700, color: item.color }}>
                  View Deep Dive <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Charts Grid: 9-Axis Radar + Bar Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '24px', marginBottom: '32px' }}>
        {/* Radar Spider Chart */}
        <div style={{
          background: '#1E293B',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
                9-Axis Cognitive Radar
              </h3>
              <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>
                Symmetric distribution of your 9 multiple intelligences
              </p>
            </div>
            <div style={{ fontSize: '11px', color: '#FBBF24', fontWeight: 700, background: 'rgba(245,158,11,0.1)', padding: '4px 10px', borderRadius: '8px' }}>
              Full Spectrum
            </div>
          </div>

          <div style={{ height: '360px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" stroke="#94A3B8" tick={{ fill: '#CBD5E1', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" tick={{ fill: '#64748B', fontSize: 10 }} />
                <Radar
                  name="Intelligence"
                  dataKey="score"
                  stroke="#F59E0B"
                  fill="#F59E0B"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Ranking List / Bar Chart */}
        <div style={{
          background: '#1E293B',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
              Ranked Intelligence Spectrum
            </h3>
            <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>
              Relative ranking across all 9 assessed dimensions
            </p>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {sortedByStrength.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  padding: '6px 8px',
                  borderRadius: '8px',
                  transition: 'background 0.15s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#0F172A'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ width: '130px', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.nickName}
                </div>

                <div style={{ flex: 1, height: '10px', backgroundColor: '#0F172A', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${item.pct}%`,
                    height: '100%',
                    background: item.gradient,
                    borderRadius: '5px'
                  }} />
                </div>

                <div style={{ width: '38px', textAlign: 'right', fontSize: '12px', fontWeight: 800, color: item.color }}>
                  {item.pct}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 9 Intelligence Grid Cards */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
              Explore All 9 Multiple Intelligences
            </h2>
            <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>
              Click any card to modify your assessment answers, explore career paths, and study styles
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
          {intelList.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              style={{
                background: '#1E293B',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = item.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = '#334155';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: item.color }}>
                  {item.nickName}
                </span>
                <span style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '8px',
                  backgroundColor: item.bgTint,
                  color: item.color
                }}>
                  {item.pct}%
                </span>
              </div>

              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC', margin: '0 0 6px 0' }}>
                {item.name}
              </h4>
              <div style={{ fontSize: '11px', color: '#64748B', marginBottom: '10px' }}>
                {item.sanskritName}
              </div>

              <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
                {item.shortDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
