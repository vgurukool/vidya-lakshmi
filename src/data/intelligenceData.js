export const INTELLIGENCE_CATEGORIES = [
  {
    id: "linguistic",
    name: "Linguistic Intelligence",
    nickName: "Word Smart",
    sanskritName: "Vāk & Shabda Vidya",
    vedicDeity: "Saraswati (Goddess of Speech & Eloquence)",
    color: "#38BDF8",
    gradient: "linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)",
    bgTint: "rgba(56, 189, 248, 0.1)",
    borderTint: "rgba(56, 189, 248, 0.3)",
    shortDesc: "The ability to use words, language, writing, and speaking effectively.",
    longDesc: "Linguistic intelligence involves sensitivity to spoken and written language, the ability to learn languages, and the capacity to use language to accomplish certain goals. It includes rhetorical mastery, poetic expression, and semantic nuance.",
    coreStrengths: [
      "Eloquent verbal communication & storytelling",
      "High retention of written prose & vocabulary",
      "Skill in writing essays, articles, or poetry",
      "Fast comprehension of linguistic metaphors & puns"
    ],
    learningStyles: [
      "Reading and taking comprehensive textual notes",
      "Explaining concepts aloud or participating in debates",
      "Word games, creative writing, and semantic associations",
      "Audiobooks, podcasts, and recorded lectures"
    ],
    careerPaths: ["Author / Novelist", "Journalist", "Lawyer & Advocate", "Translator / Linguist", "Speechwriter", "Copywriter"],
    famousExemplars: ["William Shakespeare", "Maya Angelou", "Rabindranath Tagore", "Cicero"],
    dailyWorkout: [
      { title: "Semantic Journaling", desc: "Write 300 words reflecting on your day using at least 3 unfamiliar vocabulary words." },
      { title: "The 3-Minute Elevator Pitch", desc: "Pick a complex topic and explain it verbally in under 3 minutes with compelling metaphors." },
      { title: "Poetic Condensation", desc: "Summarize a long article into a 4-line structured verse or haiku." }
    ],
    questions: [
      { id: "l1", prompt: "I find it easy to articulate complex ideas clearly into words or written summaries.", score: 4 },
      { id: "l2", prompt: "I genuinely enjoy reading books, essays, poetry, or playing word games (crosswords, Scrabble).", score: 4 },
      { id: "l3", prompt: "People often compliment me on my vocabulary, storytelling, or speech delivery.", score: 3 },
      { id: "l4", prompt: "I learn and remember things best by writing them down or reading detailed texts.", score: 4 },
      { id: "l5", prompt: "I notice grammatical nuances, word origins, and subtle puns easily in conversations.", score: 3 }
    ]
  },
  {
    id: "logical_mathematical",
    name: "Logical-Mathematical Intelligence",
    nickName: "Number & Reasoning Smart",
    sanskritName: "Ganita & Tarka Vidya",
    vedicDeity: "Brihaspati (Lord of Reason & Logic)",
    color: "#818CF8",
    gradient: "linear-gradient(135deg, #4F46E5 0%, #818CF8 100%)",
    bgTint: "rgba(129, 140, 248, 0.1)",
    borderTint: "rgba(129, 140, 248, 0.3)",
    shortDesc: "The capacity for deductive reasoning, calculating, and recognizing abstract patterns.",
    longDesc: "Logical-Mathematical intelligence involves the ability to analyze problems logically, carry out mathematical operations, and investigate issues scientifically. It encompasses inductive and deductive reasoning, critical calculation, and symbolic pattern detection.",
    coreStrengths: [
      "Deductive & inductive logic frameworks",
      "Abstract pattern detection and algorithmic thinking",
      "Structured quantitative problem-solving",
      "Systematic scientific hypothesis formulation"
    ],
    learningStyles: [
      "Flowcharts, logic gates, and decision trees",
      "Mathematical modeling and statistical analysis",
      "Experimentation and step-by-step causality testing",
      "Solving puzzles, algorithms, and logic riddles"
    ],
    careerPaths: ["Data Scientist", "Software Architect", "Mathematician", "Financial Analyst", "Physicist", "Cryptographer"],
    famousExemplars: ["Albert Einstein", "Srinivasa Ramanujan", "Alan Turing", "Ada Lovelace"],
    dailyWorkout: [
      { title: "Pattern Recognition Sprint", desc: "Solve 3 logic or number sequence puzzles without looking at the solutions." },
      { title: "First Principles Deconstruction", desc: "Break down a everyday decision into a probability tree with expected value calculations." },
      { title: "Code Refactoring Challenge", desc: "Simplify a complex algorithm or spreadsheet formula by 30% while retaining correctness." }
    ],
    questions: [
      { id: "m1", prompt: "I naturally see patterns, logical flaws, and causal relationships in everyday arguments.", score: 4 },
      { id: "m2", prompt: "I feel comfortable working with numbers, statistics, spreadsheets, and abstract equations.", score: 4 },
      { id: "m3", prompt: "I prefer systematic, step-by-step problem-solving over gut intuition when making decisions.", score: 3 },
      { id: "m4", prompt: "I enjoy strategy games like chess, sudoku, coding problems, or logic puzzles.", score: 4 },
      { id: "m5", prompt: "I constantly seek to measure, quantify, and categorize information for maximum efficiency.", score: 3 }
    ]
  },
  {
    id: "visual_spatial",
    name: "Visual-Spatial Intelligence",
    nickName: "Picture Smart",
    sanskritName: "Rūpa & Shilpa Vidya",
    vedicDeity: "Vishwakarma (The Divine Architect)",
    color: "#F43F5E",
    gradient: "linear-gradient(135deg, #E11D48 0%, #F43F5E 100%)",
    bgTint: "rgba(244, 63, 94, 0.1)",
    borderTint: "rgba(244, 63, 94, 0.3)",
    shortDesc: "The ability to visualize the world in 3D and manipulate spatial images.",
    longDesc: "Visual-Spatial intelligence features the potential to recognize and manipulate patterns of wide space as well as patterns of more confined areas. It allows people to transform, represent, and mentally manipulate spatial configurations.",
    coreStrengths: [
      "Mental 3D rotation & spatial orientation",
      "Visual aesthetic sense & graphic design intuition",
      "Navigation, map-reading, and terrain visualization",
      "Translating abstract concepts into diagrams & mind-maps"
    ],
    learningStyles: [
      "Infographics, diagrams, and color-coded visual charts",
      "Mind-mapping and sketching ideas visually",
      "3D modeling, interactive simulations, and spatial walkthroughs",
      "Video demonstrations and spatial memory palaces"
    ],
    careerPaths: ["Architect", "UI/UX Designer", "Pilot / Navigator", "Surgeon", "Filmmaker / Animator", "Cartographer"],
    famousExemplars: ["Leonardo da Vinci", "Zaha Hadid", "Pablo Picasso", "Frank Lloyd Wright"],
    dailyWorkout: [
      { title: "Mental Blueprinting", desc: "Look at a room, close your eyes, and visualize the layout rotated 90 degrees in full detail." },
      { title: "Concept Mind-Mapping", desc: "Draw a hand-sketched visual flowchart explaining a process using icons instead of words." },
      { title: "Blind Navigation Walk", desc: "Mentally navigate from your current spot to a landmark 2 miles away step by step." }
    ],
    questions: [
      { id: "v1", prompt: "I have a strong sense of direction and can easily navigate with maps or mental landmarks.", score: 4 },
      { id: "v2", prompt: "I can visualize three-dimensional objects and rotate them in my mind effortlessly.", score: 3 },
      { id: "v3", prompt: "I prefer diagrams, charts, graphs, and visual illustrations over walls of plain text.", score: 4 },
      { id: "v4", prompt: "I notice subtle design flaws, color harmonies, and aesthetic proportions in architecture or art.", score: 4 },
      { id: "v5", prompt: "I doodle, sketch, or create mental imagery to solve problems or organize thoughts.", score: 3 }
    ]
  },
  {
    id: "bodily_kinesthetic",
    name: "Bodily-Kinesthetic Intelligence",
    nickName: "Body Smart",
    sanskritName: "Kāya & Yoga Vidya",
    vedicDeity: "Hanuman (Master of Strength & Physical Grace)",
    color: "#F97316",
    gradient: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
    bgTint: "rgba(249, 115, 22, 0.1)",
    borderTint: "rgba(249, 115, 22, 0.3)",
    shortDesc: "Skill in using physical movement, body control, and hand-eye coordination.",
    longDesc: "Bodily-Kinesthetic intelligence entails the capacity of using ones whole body or parts of the body to solve problems, make things, or put on some kind of production. It unites fine motor dexterity, somatic awareness, and reflex mastery.",
    coreStrengths: [
      "High proprioception & somatic body awareness",
      "Exceptional fine motor dexterity & hand-eye coordination",
      "Muscle memory acquisition speed for crafts/sports",
      "Physical expression, posture control, and non-verbal gestures"
    ],
    learningStyles: [
      "Hands-on experimentation & physical building",
      "Role-playing, simulations, and tactile engagement",
      "Taking frequent movement breaks & active standing desks",
      "Associating concepts with physical gestures and touch"
    ],
    careerPaths: ["Athlete / Sports Coach", "Surgeon / Orthopedist", "Dancer / Choreographer", "Sculptor / Artisan", "Physiotherapist", "Stunt Performer"],
    famousExemplars: ["Michael Jordan", "Simone Biles", "Bruce Lee", "B.K.S. Iyengar"],
    dailyWorkout: [
      { title: "Equilibrium & Balance Hold", desc: "Hold a single-leg tree pose with eyes closed for 60 seconds each side." },
      { title: "Fine Motor Finger Dexterity", desc: "Practice fast finger drumming or precision origami folding for 5 minutes." },
      { title: "Somatic Posture Reset", desc: "Perform a mindful body scan checking tension in spine, neck, and jaw." }
    ],
    questions: [
      { id: "k1", prompt: "I learn new physical skills, sports movements, or tools quickly through muscle memory.", score: 3 },
      { id: "k2", prompt: "I find it hard to sit still for long hours and prefer walking or moving while thinking.", score: 4 },
      { id: "k3", prompt: "I have good hand-eye coordination, balance, and dexterity for tactile tasks (crafts, sports, tools).", score: 3 },
      { id: "k4", prompt: "I use hand gestures, physical postures, and body language to express my emotions.", score: 4 },
      { id: "k5", prompt: "I prefer hands-on practice (learning by doing) rather than reading instructions manuals.", score: 4 }
    ]
  },
  {
    id: "musical",
    name: "Musical Intelligence",
    nickName: "Music Smart",
    sanskritName: "Gāndharva & Nāda Vidya",
    vedicDeity: "Nārada (Cosmic Musician & Master of Sound)",
    color: "#A855F7",
    gradient: "linear-gradient(135deg, #9333EA 0%, #A855F7 100%)",
    bgTint: "rgba(168, 85, 247, 0.1)",
    borderTint: "rgba(168, 85, 247, 0.3)",
    shortDesc: "Sensitivity to rhythm, pitch, tone, and melody to create or appreciate music.",
    longDesc: "Musical intelligence involves skill in the performance, composition, and appreciation of musical patterns. It encompasses the capacity to recognize and compose musical pitches, tones, and rhythms, as well as an intuitive feel for acoustic environments.",
    coreStrengths: [
      "Pitch accuracy, timbre sensitivity, and harmonic ear",
      "Rhythmic timing and pulse synchronization",
      "Emotional resonance with acoustic environments",
      "Memory retention through melody, chant, or rhythmic cadence"
    ],
    learningStyles: [
      "Using rhythmic chants, mnemonics, or songs to memorize",
      "Studying with curated acoustic or ambient soundscapes",
      "Analyzing structural composition, motifs, and variations",
      "Connecting emotional tone of voice to musical intervals"
    ],
    careerPaths: ["Composer / Producer", "Audio Engineer", "Musician / Vocalist", "Music Therapist", "Sound Designer", "Conductor"],
    famousExemplars: ["Wolfgang Amadeus Mozart", "M.S. Subbulakshmi", "Stevie Wonder", "Hans Zimmer"],
    dailyWorkout: [
      { title: "Rhythmic Syncopation Tap", desc: "Tap a 3-against-2 polyrhythm with your left and right hands simultaneously." },
      { title: "Acoustic Attunement", desc: "Close your eyes for 2 minutes and identify 5 distinct acoustic layers in your room." },
      { title: "Melodic Memorization", desc: "Listen to a short melody once and whistle or hum it back with exact intervals." }
    ],
    questions: [
      { id: "mu1", prompt: "I can easily detect when an instrument is out of tune or when someone is singing off-key.", score: 4 },
      { id: "mu2", prompt: "Music evokes deep emotional states, inspiration, and focus in my daily life.", score: 5 },
      { id: "mu3", prompt: "I frequently have melodies, rhythms, or song hooks repeating naturally in my head.", score: 4 },
      { id: "mu4", prompt: "I can quickly tap out or repeat complex rhythmic beats and tempo variations.", score: 3 },
      { id: "mu5", prompt: "I often remember information better when it is linked to a rhythm, jingle, or rhyme.", score: 3 }
    ]
  },
  {
    id: "interpersonal",
    name: "Interpersonal Intelligence",
    nickName: "People Smart",
    sanskritName: "Sambhāsha & Maitrī Vidya",
    vedicDeity: "Mitra & Varuna (Keepers of Harmony & Friendship)",
    color: "#10B981",
    gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    bgTint: "rgba(16, 185, 129, 0.1)",
    borderTint: "rgba(16, 185, 129, 0.3)",
    shortDesc: "The capacity to understand, empathize, and communicate well with others.",
    longDesc: "Interpersonal intelligence denotes a persons capacity to understand the intentions, motivations, and desires of other people and consequently to work effectively with others. It is the cornerstone of leadership, negotiation, and high-trust collaboration.",
    coreStrengths: [
      "Micro-expression & non-verbal cue deciphering",
      "Empathic listening and conflict mediation",
      "Group dynamic facilitation & consensus building",
      "Persuasive negotiation and motivational charisma"
    ],
    learningStyles: [
      "Peer-to-peer study groups and interactive discussions",
      "Teaching others as a primary consolidation method",
      "Collaborative projects, hackathons, and brainstorms",
      "Case study roleplaying and simulated negotiations"
    ],
    careerPaths: ["Diplomat / Mediator", "Executive Coach", "Psychologist / Counselor", "Product Manager / Team Lead", "Educator", "Sales Director"],
    famousExemplars: ["Mahatma Gandhi", "Nelson Mandela", "Eleanor Roosevelt", "Oprah Winfrey"],
    dailyWorkout: [
      { title: "Active Empathetic Mirroring", desc: "In your next conversation, repeat back the speakers core emotion before sharing your view." },
      { title: "Perspective Inversion", desc: "Write down a disagreement you had from the other persons perspective with full compassion." },
      { title: "Micro-Cue Observation", desc: "Observe a group discussion on mute (or in public) and deduce the social power dynamics." }
    ],
    questions: [
      { id: "p1", prompt: "I can quickly sense other peoples moods, unsaid tensions, and hidden intentions.", score: 4 },
      { id: "p2", prompt: "Friends and colleagues frequently come to me for advice, mediation, or emotional support.", score: 4 },
      { id: "p3", prompt: "I thrive in team environments, group brainstorms, and collaborative problem-solving.", score: 4 },
      { id: "p4", prompt: "I adapt my communication style effortlessly depending on who I am speaking with.", score: 4 },
      { id: "p5", prompt: "I enjoy organizing people, bringing groups together, and rallying them toward a common goal.", score: 3 }
    ]
  },
  {
    id: "intrapersonal",
    name: "Intrapersonal Intelligence",
    nickName: "Self Smart",
    sanskritName: "Ātma & Dhyāna Vidya",
    vedicDeity: "Dakshinamurthy (The Silent Teacher of Self-Knowledge)",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
    bgTint: "rgba(245, 158, 11, 0.1)",
    borderTint: "rgba(245, 158, 11, 0.3)",
    shortDesc: "Deep self-awareness, emotional clarity, and an understanding of one's own motives.",
    longDesc: "Intrapersonal intelligence entails the capacity to understand oneself, to have an effective working model of oneself-including ones own desires, fears, and capacities-and to use such information effectively in regulating ones own life.",
    coreStrengths: [
      "Accurate emotional self-appraisal & metacognition",
      "Autonomous goal setting & disciplined inner drive",
      "Resilience in solitude and deep self-reflection",
      "Alignment of core values with daily decision making"
    ],
    learningStyles: [
      "Self-paced independent study and research",
      "Reflective journaling and periodic self-audits",
      "Meditation, contemplative pauses, and solo deep-work",
      "Setting personal benchmarks rather than comparing with peers"
    ],
    careerPaths: ["Philosopher", "Independent Researcher", "Author / Essayist", "Strategist", "Spiritual Guide / Monk", "Entrepreneur"],
    famousExemplars: ["Swami Vivekananda", "Marcus Aurelius", "Carl Jung", "Siddhartha Gautama (The Buddha)"],
    dailyWorkout: [
      { title: "Evening Atma-Vichara (Self-Inquiry)", desc: "Spend 5 minutes asking: What triggered my strongest reaction today, and why?" },
      { title: "Values Alignment Check", desc: "Rate your top 3 daily actions against your 3 core lifetime values on a 1-10 scale." },
      { title: "Silent Contemplation Sits", desc: "Sit in complete silence without devices for 10 minutes observing breath and thoughts." }
    ],
    questions: [
      { id: "s1", prompt: "I have a very clear understanding of my personal strengths, blind spots, and weaknesses.", score: 5 },
      { id: "s2", prompt: "I am highly self-motivated and can work autonomously for extended periods without oversight.", score: 5 },
      { id: "s3", prompt: "I regularly spend time in quiet reflection, introspection, or journaling.", score: 4 },
      { id: "s4", prompt: "I understand why I feel certain emotions and can regulate my reactions under stress.", score: 4 },
      { id: "s5", prompt: "My personal values and life purpose strongly guide my career and lifestyle choices.", score: 4 }
    ]
  },
  {
    id: "naturalist",
    name: "Naturalist Intelligence",
    nickName: "Nature Smart",
    sanskritName: "Prakriti & Vana Vidya",
    vedicDeity: "Aranyani (Goddess of Forests & Wildlife)",
    color: "#22C55E",
    gradient: "linear-gradient(135deg, #16A34A 0%, #22C55E 100%)",
    bgTint: "rgba(34, 197, 94, 0.1)",
    borderTint: "rgba(34, 197, 94, 0.3)",
    shortDesc: "The ability to identify, classify, and understand plants, animals, and ecosystems.",
    longDesc: "Naturalist intelligence designates the human ability to discriminate among living things (plants, animals) as well as sensitivity to other features of the natural world (clouds, rock configurations). It powers taxonomy, environmental intuition, and organic harmony.",
    coreStrengths: [
      "Botanical, zoological, and ecological taxonomy",
      "Weather pattern and environmental cue sensitivity",
      "Animal behavior decoding and botanical empathy",
      "Holistic ecosystem thinking and sustainability awareness"
    ],
    learningStyles: [
      "Field trips, outdoor exploration, and nature walks",
      "Classification grids and biological taxonomies",
      "Hands-on gardening, animal care, or environmental testing",
      "Biomimicry: studying nature to solve human engineering challenges"
    ],
    careerPaths: ["Ecologist / Biologist", "Botanist / Horticulturist", "Veterinarian", "Environmental Scientist", "Landscape Architect", "Forest Ranger"],
    famousExemplars: ["Charles Darwin", "Jane Goodall", "David Attenborough", "Jagadish Chandra Bose"],
    dailyWorkout: [
      { title: "Flora / Fauna Taxonomy Log", desc: "Photograph and identify 2 wild plant or insect species in your neighborhood." },
      { title: "Microclimate Observation", desc: "Note the wind direction, cloud formations, and humidity changes throughout the day." },
      { title: "Biomimicry Problem Solving", desc: "Identify how nature solves a current engineering problem you are working on." }
    ],
    questions: [
      { id: "n1", prompt: "I feel deeply revitalized and peaceful when spending time in nature, forests, or gardens.", score: 4 },
      { id: "n2", prompt: "I easily notice changes in seasons, weather shifts, plant growth, or animal behaviors.", score: 4 },
      { id: "n3", prompt: "I enjoy identifying different plant species, bird calls, tree types, or rock formations.", score: 3 },
      { id: "n4", prompt: "I have an innate care for animals, ecological balance, and environmental sustainability.", score: 4 },
      { id: "n5", prompt: "I can intuitively categorize and sort biological or natural elements into clear systems.", score: 3 }
    ]
  },
  {
    id: "existential",
    name: "Existential Intelligence",
    nickName: "Life Smart",
    sanskritName: "Darshana & Brahma Vidya",
    vedicDeity: "Prajapati & Adi Guru (Lord of Cosmic Creation & Ultimate Truth)",
    color: "#06B6D4",
    gradient: "linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)",
    bgTint: "rgba(6, 182, 212, 0.1)",
    borderTint: "rgba(6, 182, 212, 0.3)",
    shortDesc: "The capacity to ponder deep philosophical questions about human existence, morality, and the cosmos.",
    longDesc: "Existential intelligence is the sensitivity and capacity to tackle deep questions about human existence, such as the meaning of life, why we die, what is our origin, and what lies beyond physical reality. It connects individual human experience to the cosmic order.",
    coreStrengths: [
      "Cosmic perspective & transcendental framing",
      "Philosophical synthesis across ancient & modern thought",
      "Deep inquiry into consciousness, morality, and purpose",
      "Comfort with existential mystery, paradox, and the unknown"
    ],
    learningStyles: [
      "Philosophical dialectics and ethical thought experiments",
      "Studying classical treatises (Upanishads, Stoics, Kant, existentialists)",
      "Cosmological diagrams and metaphysical conceptual maps",
      "Contemplating non-dualism, consciousness studies, and epistemology"
    ],
    careerPaths: ["Philosopher", "Theologian / Astrobiologist", "Ethics Consultant (AI/Bioethics)", "Spiritual Teacher", "Cosmologist", "Transformational Author"],
    famousExemplars: ["Adi Shankara", "Socrates", "Friedrich Nietzsche", "Carl Sagan"],
    dailyWorkout: [
      { title: "Cosmic Zoom-Out Exercise", desc: "Contemplate your immediate problem from the scale of the observable universe for 3 minutes." },
      { title: "Ethical Dilemma Dialectic", desc: "Take a tough modern ethical question (e.g. AI sentient rights) and write arguments for both sides." },
      { title: "Ontological Socratic Questioning", desc: "Ask 'Why?' 5 consecutive layers deep into a belief you take for granted." }
    ],
    questions: [
      { id: "e1", prompt: "I often ponder big questions like 'Why do we exist?', 'What is consciousness?', and 'What is the cosmos?'.", score: 5 },
      { id: "e2", prompt: "I am drawn to philosophy, metaphysics, theology, and ancient wisdom traditions.", score: 4 },
      { id: "e3", prompt: "I can view everyday human struggles from a detached, macro cosmic perspective.", score: 4 },
      { id: "e4", prompt: "Questions of ethics, higher purpose, and legacy feel more important to me than short-term gains.", score: 5 },
      { id: "e5", prompt: "I feel a deep sense of awe and wonder when contemplating the mysteries of life and death.", score: 5 }
    ]
  }
];

export const VEDIC_QUOTES = [
  {
    quote: "विद्यया विन्दतेऽमृतम् (Vidyayā vindate'mṛtam)",
    translation: "Through knowledge and multiple faculties of intelligence, one attains immortality and liberation.",
    source: "Kena Upanishad"
  },
  {
    quote: "सा विद्या या विमुक्तये (Sā Vidyā Yā Vimuktaye)",
    translation: "True knowledge is that which liberates the mind and reveals the boundless potential of the self.",
    source: "Vishnu Purana"
  },
  {
    quote: "ज्ञानेन हीनाः पशुभिः समानाः (Jñānena hīnāḥ paśubhiḥ samānāḥ)",
    translation: "One who cultivates the spectrum of intellect and wisdom elevates themselves to the highest human potential.",
    source: "Hitopadesha"
  }
];
