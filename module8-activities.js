// Module 8: Applied Psychology & Integration
const module8Activities = {
    la1: {
        questions: [
            { term: "Industrial-Organizational Psychology", def: "Application to workplace: hiring, motivation, leadership, productivity" },
            { term: "Health Psychology", def: "How biological, psychological, and social factors affect health and illness" },
            { term: "Clinical Psychology", def: "Assessment, diagnosis, and treatment of mental disorders" },
            { term: "Forensic Psychology", def: "Application to legal system: competency, testimony, profiling" },
            { term: "Educational Psychology", def: "Application to teaching and learning processes" },
            { term: "Sports Psychology", def: "Application to athletic performance and well-being" },
            { term: "Positive Psychology", def: "Scientific study of human flourishing and optimal functioning" },
            { term: "Cultural Psychology", def: "How culture shapes psychological processes" },
            { term: "Evolutionary Psychology", def: "How evolution shaped psychological mechanisms" },
            { term: "Neuroscience", def: "Study of nervous system structure and function" },
            { term: "Replication Crisis", def: "Many published findings don't replicate; emphasizes research rigor" },
            { term: "Open Science", def: "Movement toward transparent, reproducible research practices" },
            { term: "Informed Consent", def: "Ethical requirement: participants understand study before agreeing" },
            { term: "Confidentiality", def: "Ethical obligation to protect participant/client information" },
            { term: "Evidence-Based Practice", def: "Integrating best research with clinical expertise and patient values" }
        ]
    },
    la2: {
        questions: [
            { q: "I-O psychologist might help company with:", answers: ["Therapy for employees", "Employee selection and organizational culture ✓", "Only clinical work", "Medical diagnosis"], correct: 1 },
            { q: "Health psychology's biopsychosocial model addresses:", answers: ["Only biology", "Biological, psychological, and social factors in health ✓", "Only social factors", "No interventions"], correct: 1 },
            { q: "Positive psychology (Seligman) focuses on:", answers: ["Only treating disorders", "Strengths, virtues, and optimal functioning ✓", "Negative emotions only", "Pathology"], correct: 1 },
            { q: "Cross-cultural psychology research shows:", answers: ["All psychological processes are universal", "Many processes are culturally shaped ✓", "No cultural differences", "Only biological factors matter"], correct: 1 },
            { q: "Applied vs basic research:", answers: ["No difference", "Applied addresses practical problems; Basic seeks fundamental knowledge ✓", "Applied is inferior", "Basic has no value"], correct: 1 },
            { q: "Sports psychologist might work on:", answers: ["Only physical training", "Mental skills, motivation, team cohesion, performance anxiety ✓", "Medical issues only", "No psychological factors"], correct: 1 },
            { q: "APA ethics code requires psychologists to:", answers: ["Maximize profit", "Do no harm, respect dignity, act with integrity ✓", "Guarantee outcomes", "Avoid research"], correct: 1 },
            { q: "Replication crisis emphasizes need for:", answers: ["Less research", "Rigorous methods, larger samples, transparency ✓", "Only new findings", "Ignoring failures"], correct: 1 },
            { q: "Cultural competence in psychology means:", answers: ["Ignoring culture", "Understanding and respecting cultural differences in practice ✓", "One approach for all", "Avoiding diverse clients"], correct: 1 },
            { q: "Emerging technologies (AI, virtual reality) in psychology:", answers: ["Have no applications", "Offer new assessment, treatment, and research tools ✓", "Replace all therapists", "Only harmful"], correct: 1 }
        ]
    },
    la3: {
        psychologyFieldMatching: {
            scenarios: [
                { situation: "Designing employee training program", field: "Industrial-Organizational Psychology" },
                { situation: "Helping athletes overcome performance anxiety", field: "Sports Psychology" },
                { situation: "Assessing defendant's competency to stand trial", field: "Forensic Psychology" },
                { situation: "Developing smoking cessation intervention", field: "Health Psychology" },
                { situation: "Improving classroom learning strategies", field: "Educational Psychology" },
                { situation: "Conducting therapy for depression", field: "Clinical Psychology" },
                { situation: "Studying how cultural values shape emotion regulation", field: "Cultural Psychology" },
                { situation: "Researching neural basis of decision-making", field: "Neuroscience/Biological Psychology" },
                { situation: "Helping people cultivate resilience and meaning", field: "Positive Psychology" },
                { situation: "Advising on jury selection", field: "Forensic Psychology" }
            ]
        },
        integratedConceptApplication: {
            cases: [
                {
                    scenario: "College student experiencing test anxiety",
                    biological: "Sympathetic nervous system activation, cortisol",
                    psychological: "Negative thoughts, fear of failure, low self-efficacy",
                    social: "Peer pressure, family expectations, academic culture"
                },
                {
                    scenario: "Patient with chronic pain",
                    biological: "Nociceptors, gate-control, neural sensitization",
                    psychological: "Pain perception, attention, coping strategies, depression",
                    social: "Social support, cultural pain beliefs, healthcare access"
                },
                {
                    scenario: "Child with ADHD in classroom",
                    biological: "Dopamine/norepinephrine dysregulation, frontal lobe",
                    psychological: "Attention deficits, impulsivity, low frustration tolerance",
                    social: "Classroom structure, teacher expectations, peer relationships"
                },
                {
                    scenario: "Workplace stress and burnout",
                    biological: "Chronic cortisol, immune suppression, sleep disruption",
                    psychological: "Perceived control, coping style, perfectionism",
                    social: "Work demands, support from colleagues, organizational culture"
                },
                {
                    scenario: "Addiction recovery",
                    biological: "Dopamine reward pathways, withdrawal, tolerance",
                    psychological: "Cravings, triggers, self-efficacy, motivation",
                    social: "Social support, stigma, access to treatment, life stressors"
                }
            ]
        }
    }
};

const module8Quiz = {
    questions: [
        { q: "Psychology as a science emphasizes:", answers: ["Only intuition", "Empirical evidence and systematic observation ✓", "Only anecdotes", "No methods needed"], correct: 1 },
        { q: "Biopsychosocial model's main contribution:", answers: ["Focuses only on biology", "Integrates multiple levels of analysis ✓", "Ignores social factors", "Only for physical health"], correct: 1 },
        { q: "Ethical principle of beneficence means:", answers: ["Doing no harm only", "Acting to benefit others and maximize well-being ✓", "Ignoring consequences", "Only avoiding harm"], correct: 1 },
        { q: "Psychological science contributes to society by:", answers: ["Only treating disorders", "Improving education, health, work, relationships, policy ✓", "No practical applications", "Only research"], correct: 1 },
        { q: "Critical thinking about psychological claims involves:", answers: ["Accepting all claims", "Evaluating evidence, considering alternatives, avoiding biases ✓", "Rejecting all science", "Only trusting experts"], correct: 1 },
        { q: "Diversity in psychology (researchers, practitioners, participants):", answers: ["Doesn't matter", "Enhances understanding and applicability across populations ✓", "Creates problems", "Should be avoided"], correct: 1 },
        { q: "Integrating research and practice means:", answers: ["Ignoring research in practice", "Using empirical evidence to guide interventions ✓", "Only doing research", "No connection needed"], correct: 1 },
        { q: "Future of psychology includes:", answers: ["No changes", "Neuroscience integration, technology, cultural awareness, interdisciplinary work ✓", "Abandoning science", "Only medication"], correct: 1 },
        { q: "Psychological literacy enables people to:", answers: ["Diagnose others", "Understand behavior, think critically, apply principles to life ✓", "Replace professionals", "Nothing useful"], correct: 1 },
        { q: "Most important lesson from course:", answers: ["Memorize disorders", "Behavior is complex, multiply determined, scientifically understandable ✓", "Simple answers always exist", "Only biology matters"], correct: 1 }
    ]
};

const module8Discussion = {
    title: "Discussion Board: Course Reflection & Future Applications (50 pts)",
    prompt: "Reflect on your learning journey through PSY-150. What were the most surprising or paradigm-shifting concepts? How has this course changed your understanding of yourself and others? How will you apply psychological principles in your future (career, relationships, civic life, personal growth)? Demonstrate integration of biopsychosocial thinking and psychological thinking skills.",
    requirements: [
        "Initial post: 400+ words with specific concept references",
        "Address personal growth and self-awareness",
        "Discuss future applications across multiple life domains",
        "Respond to 2 peers (150+ words each) with connections and encouragement"
    ]
};

const module8Checkpoint = null;
