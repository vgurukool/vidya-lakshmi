import React from 'react';
import { Award, Compass, BookOpen, Brain, Sparkles, Check, Share2, Printer } from 'lucide-react';

export function ArchetypeReport({ intelligenceState }) {
  const intels = Object.values(intelligenceState).map(intel => {
    const totalScore = intel.questions.reduce((sum, q) => sum + (q.score || 0), 0);
    const maxScore = intel.questions.length * 5;
    const pct = Math.round((totalScore / maxScore) * 100);
    return { ...intel, pct };
  });

  const sorted = [...intels].sort((a, b) => b.pct - a.pct);
  const primary = sorted[0];
  const secondary = sorted[1];
  const tertiary = sorted[2];

  // Synthesize archetype title
  const getArchetype = (p, s) => {
    if (p.id === 'logical_mathematical' && s.id === 'existential') return { title: 'The Quantum Philosopher', desc: 'Synthesizes deep mathematical rigor with cosmic contemplation and ultimate principles.' };
    if (p.id === 'linguistic' && s.id === 'interpersonal') return { title: 'The Inspiring Orator & Diplomat', desc: 'Commands speech and interpersonal empathy to unite and mobilize communities.' };
    if (p.id === 'visual_spatial' && s.id === 'logical_mathematical') return { title: 'The Master Systems Architect', desc: 'Envisions complex spatial configurations and grounds them in flawless logic.' };
    if (p.id === 'intrapersonal' && s.id === 'existential') return { title: 'The Rishi / Contemplative Sage', desc: 'Possesses immense self-mastery, inner clarity, and metaphysical intuition.' };
    if (p.id === 'naturalist' && s.id === 'visual_spatial') return { title: 'The Biomimetic Visionary', desc: 'Translates biological ecosystems and natural patterns into innovative creations.' };
    if (p.id === 'musical' && s.id === 'linguistic') return { title: 'The Harmonic Bard & Lyricist', desc: 'Merges acoustic cadence and lyrical nuance into resonant artistic works.' };
    return {
      title: `The ${p.nickName} & ${s.nickName} Polymath`,
      desc: `A versatile cognitive profile anchored in ${p.name.toLowerCase()} accompanied by strong ${s.name.toLowerCase()} capabilities.`
    };
  };

  const archetype = getArchetype(primary, secondary);

  return (
    <div style={{ padding: '32px', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Report Header Card */}
      <div style={{
        background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        border: '1px solid #334155',
        borderRadius: '16px',
        padding: '36px',
        marginBottom: '28px',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(245, 158, 11, 0.2)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#FBBF24',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 800,
              marginBottom: '12px'
            }}>
              <Award size={13} />
              COGNITIVE ARCHETYPE DOSSIER
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#F8FAFC', fontFamily: "'Cinzel', serif", marginBottom: '6px' }}>
              {archetype.title}
            </h1>
            <p style={{ fontSize: '15px', color: '#94A3B8', margin: 0, maxWidth: '650px', lineHeight: 1.5 }}>
              {archetype.desc}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <button
              onClick={() => window.print()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#334155',
                border: 'none',
                color: '#F8FAFC',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <Printer size={14} /> Print / Export PDF
            </button>
          </div>
        </div>

        {/* 3 Dominant Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', borderTop: '1px solid #334155', paddingTop: '20px' }}>
          <div style={{ background: '#0F172A', padding: '16px', borderRadius: '10px', border: `1px solid ${primary.borderTint}` }}>
            <span style={{ fontSize: '11px', color: primary.color, fontWeight: 800 }}>PRIMARY APEX ({primary.pct}%)</span>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC', margin: '4px 0 2px 0' }}>{primary.name}</h4>
            <span style={{ fontSize: '12px', color: '#94A3B8' }}>{primary.sanskritName}</span>
          </div>

          <div style={{ background: '#0F172A', padding: '16px', borderRadius: '10px', border: `1px solid ${secondary.borderTint}` }}>
            <span style={{ fontSize: '11px', color: secondary.color, fontWeight: 800 }}>SECONDARY APEX ({secondary.pct}%)</span>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC', margin: '4px 0 2px 0' }}>{secondary.name}</h4>
            <span style={{ fontSize: '12px', color: '#94A3B8' }}>{secondary.sanskritName}</span>
          </div>

          <div style={{ background: '#0F172A', padding: '16px', borderRadius: '10px', border: `1px solid ${tertiary.borderTint}` }}>
            <span style={{ fontSize: '11px', color: tertiary.color, fontWeight: 800 }}>TERTIARY APEX ({tertiary.pct}%)</span>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC', margin: '4px 0 2px 0' }}>{tertiary.name}</h4>
            <span style={{ fontSize: '12px', color: '#94A3B8' }}>{tertiary.sanskritName}</span>
          </div>
        </div>
      </div>

      {/* Synthesis Details */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Recommended Learning Modalities */}
        <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={18} color="#FBBF24" />
            Synthesized Learning Blueprint
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {primary.learningStyles.concat(secondary.learningStyles.slice(0, 2)).map((style, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: '#0F172A', padding: '12px', borderRadius: '8px' }}>
                <Check size={16} color="#34D399" style={{ marginTop: '2px' }} />
                <span style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: 1.4 }}>{style}</span>
              </div>
            ))}
          </div>
        </div>

        {/* High-Affinity Careers */}
        <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Compass size={18} color="#38BDF8" />
            Optimal Career Spectrum
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[...new Set([...primary.careerPaths, ...secondary.careerPaths])].map((career, idx) => (
              <div key={idx} style={{ background: '#0F172A', padding: '12px 14px', borderRadius: '8px', border: '1px solid #334155' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#F8FAFC' }}>{career}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
