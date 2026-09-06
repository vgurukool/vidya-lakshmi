import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  Briefcase,
  GraduationCap,
  Users,
  Dumbbell,
  CheckCircle2,
  HelpCircle,
  Flame,
  Info
} from 'lucide-react';

export function DetailPage({ intelData, onUpdateIntel, onBackToDashboard }) {
  const [activeSubTab, setActiveSubTab] = useState('assessment'); // assessment | strengths | careers | workout
  const [reflectionNote, setReflectionNote] = useState(() => {
    try {
      return localStorage.getItem(`vidya_note_${intelData.id}`) || '';
    } catch {
      return '';
    }
  });

  const handleScoreChange = (qId, newScore) => {
    const updatedQuestions = intelData.questions.map(q => {
      if (q.id === qId) {
        return { ...q, score: Number(newScore) };
      }
      return q;
    });

    onUpdateIntel({
      ...intelData,
      questions: updatedQuestions
    });
  };

  const handleSaveNote = (e) => {
    const val = e.target.value;
    setReflectionNote(val);
    try {
      localStorage.setItem(`vidya_note_${intelData.id}`, val);
    } catch {}
  };

  const totalScore = intelData.questions.reduce((sum, q) => sum + (q.score || 0), 0);
  const maxScore = intelData.questions.length * 5;
  const pct = Math.round((totalScore / maxScore) * 100);

  return (
    <div style={{ padding: '32px', maxWidth: '1300px', margin: '0 auto' }}>
      {/* Top Breadcrumb & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <button
          onClick={onBackToDashboard}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#1E293B',
            border: '1px solid #334155',
            color: '#CBD5E1',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s'
          }}
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '13px', color: '#94A3B8' }}>Overall Dimension Score:</span>
          <span style={{
            fontSize: '16px',
            fontWeight: 900,
            color: intelData.color,
            background: intelData.bgTint,
            padding: '4px 14px',
            borderRadius: '20px',
            border: `1px solid ${intelData.borderTint}`
          }}>
            {pct}% ({totalScore} / {maxScore} pts)
          </span>
        </div>
      </div>

      {/* Hero Banner for This Intelligence */}
      <div style={{
        background: `linear-gradient(135deg, ${intelData.bgTint} 0%, rgba(15, 23, 42, 0.95) 100%)`,
        border: `1px solid ${intelData.borderTint}`,
        borderRadius: '16px',
        padding: '32px',
        marginBottom: '28px',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: intelData.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 4px 16px ${intelData.bgTint}`,
            fontSize: '22px'
          }}>
            🪷
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: intelData.color, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              {intelData.sanskritName} • {intelData.nickName}
            </div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
              {intelData.name}
            </h1>
          </div>
        </div>

        <p style={{ fontSize: '14.5px', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '900px', marginBottom: '16px' }}>
          {intelData.longDesc}
        </p>

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#64748B', display: 'block' }}>Vedic Deity Archetype:</span>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#FBBF24' }}>{intelData.vedicDeity}</span>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#64748B', display: 'block' }}>Famous Historical Figures:</span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#E2E8F0' }}>{intelData.famousExemplars.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #334155', paddingBottom: '12px', marginBottom: '24px' }}>
        {[
          { id: 'assessment', label: 'Self-Assessment (5 Questions)', icon: CheckCircle2 },
          { id: 'strengths', label: 'Core Strengths & Learning Styles', icon: GraduationCap },
          { id: 'careers', label: 'Recommended Careers & Roles', icon: Briefcase },
          { id: 'workout', label: 'Daily Intelligence Exercises', icon: Dumbbell }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '8px',
                border: 'none',
                background: isActive ? intelData.bgTint : 'transparent',
                color: isActive ? intelData.color : '#94A3B8',
                fontWeight: isActive ? 700 : 500,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Sub-Tab 1: Self-Assessment */}
      {activeSubTab === 'assessment' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px' }}>
          <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
                Evaluate Your {intelData.nickName} Alignment
              </h3>
              <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>
                Rate each statement from 1 (Strongly Disagree) to 5 (Strongly Agree). Scores save automatically.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {intelData.questions.map((q, idx) => (
                <div
                  key={q.id}
                  style={{
                    background: '#0F172A',
                    border: '1px solid #334155',
                    borderRadius: '12px',
                    padding: '18px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ fontSize: '13px', color: '#F1F5F9', fontWeight: 600, flex: 1, paddingRight: '16px' }}>
                      <span style={{ color: intelData.color, marginRight: '8px', fontWeight: 800 }}>Q{idx + 1}.</span>
                      {q.prompt}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 800,
                      color: intelData.color,
                      minWidth: '28px',
                      textAlign: 'right'
                    }}>
                      {q.score}/5
                    </div>
                  </div>

                  {/* Rating Selector Buttons (1 - 5) */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: '#64748B', width: '60px' }}>Disagree</span>
                    <div style={{ display: 'flex', flex: 1, gap: '6px' }}>
                      {[1, 2, 3, 4, 5].map(rating => (
                        <button
                          key={rating}
                          onClick={() => handleScoreChange(q.id, rating)}
                          style={{
                            flex: 1,
                            padding: '8px 0',
                            borderRadius: '6px',
                            border: q.score === rating ? `2px solid ${intelData.color}` : '1px solid #334155',
                            background: q.score === rating ? intelData.color : '#1E293B',
                            color: q.score === rating ? '#0F172A' : '#CBD5E1',
                            fontWeight: 800,
                            fontSize: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.15s'
                          }}
                        >
                          {rating}
                        </button>
                      ))}
                    </div>
                    <span style={{ fontSize: '10px', color: '#64748B', width: '60px', textAlign: 'right' }}>Agree</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Reflection & Summary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#F8FAFC', marginBottom: '8px' }}>
                Dimension Summary
              </h3>
              <div style={{ fontSize: '36px', fontWeight: 900, color: intelData.color, marginBottom: '6px' }}>
                {pct}%
              </div>
              <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '16px' }}>
                {pct >= 80 ? '🌟 Highly Dominant Faculty. This is one of your primary cognitive lenses.' :
                 pct >= 60 ? '⚡ Well-Developed Faculty. Active and consistently utilized.' :
                 pct >= 40 ? '🌱 Moderate Potential. Can be enhanced with deliberate practice.' :
                 '🔍 Dormant Area. Consider integrating small daily exercises to activate.'}
              </p>

              <div style={{ background: '#0F172A', borderRadius: '8px', padding: '12px', border: '1px solid #334155' }}>
                <div style={{ fontSize: '11px', color: '#64748B', marginBottom: '4px' }}>HOWARD GARDNER'S INSIGHT:</div>
                <div style={{ fontSize: '12px', color: '#E2E8F0', fontStyle: 'italic' }}>
                  "We are all able to know the world through language, logical-mathematical analysis, spatial representation, musical thinking, the use of the body to solve problems or to make things, an understanding of other individuals, and an understanding of ourselves."
                </div>
              </div>
            </div>

            {/* Personal Reflection Notes */}
            <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#F8FAFC', marginBottom: '8px' }}>
                Personal Reflection & Notes
              </h3>
              <p style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '12px' }}>
                Note personal breakthroughs, projects, or goals related to this intelligence:
              </p>
              <textarea
                value={reflectionNote}
                onChange={handleSaveNote}
                placeholder="E.g. In my next project, I want to use mind maps and spatial layouts to explain system architecture..."
                rows={5}
                style={{
                  width: '100%',
                  background: '#0F172A',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  padding: '12px',
                  color: '#F8FAFC',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 2: Strengths & Learning Styles */}
      {activeSubTab === 'strengths' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Sparkles size={18} color={intelData.color} />
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
                Core Cognitive Strengths
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {intelData.coreStrengths.map((str, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#0F172A', padding: '14px', borderRadius: '8px', border: '1px solid #334155' }}>
                  <div style={{ color: intelData.color, fontWeight: 900, fontSize: '14px' }}>✓</div>
                  <div style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: 1.4 }}>{str}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <GraduationCap size={18} color="#FBBF24" />
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
                Optimal Learning Techniques
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {intelData.learningStyles.map((style, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#0F172A', padding: '14px', borderRadius: '8px', border: '1px solid #334155' }}>
                  <div style={{ color: '#FBBF24', fontWeight: 900, fontSize: '14px' }}>❖</div>
                  <div style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: 1.4 }}>{style}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 3: Careers & Roles */}
      {activeSubTab === 'careers' && (
        <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <Briefcase size={18} color={intelData.color} />
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
              Professions & Roles Highly Aligned with {intelData.nickName}
            </h3>
          </div>
          <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '24px' }}>
            Individuals with high {intelData.name} thrive in careers that allow constant expression of this cognitive mode:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {intelData.careerPaths.map((career, idx) => (
              <div
                key={idx}
                style={{
                  background: '#0F172A',
                  border: `1px solid ${intelData.borderTint}`,
                  borderRadius: '10px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: intelData.color }} />
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#F8FAFC' }}>{career}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-Tab 4: Daily Intelligence Exercises */}
      {activeSubTab === 'workout' && (
        <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <Dumbbell size={18} color="#34D399" />
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
              Daily Cognitive Workouts for {intelData.nickName}
            </h3>
          </div>
          <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '24px' }}>
            Neuroplasticity allows any of the 9 intelligences to be strengthened over time through targeted daily habits:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {intelData.dailyWorkout.map((w, idx) => (
              <div
                key={idx}
                style={{
                  background: '#0F172A',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', color: '#34D399', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                    Workout #{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px' }}>
                    {w.title}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
