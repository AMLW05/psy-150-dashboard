// Module 1: Introduction to Psychology & Research Methods
const module1Activities = {
    la1: {
        questions: [
            { term: "Psychology", def: "Scientific study of behavior and mental processes" },
            { term: "Structuralism", def: "Early approach analyzing mental processes into components (Wundt)" },
            { term: "Functionalism", def: "Approach studying how mental processes help adaptation (James)" },
            { term: "Behaviorism", def: "Focus on observable behavior only (Watson, Skinner)" },
            { term: "Psychodynamic", def: "Emphasis on unconscious processes (Freud)" },
            { term: "Cognitive Perspective", def: "Focus on mental processes like memory and thinking" },
            { term: "Biological Perspective", def: "How brain and genetics influence behavior" },
            { term: "Humanistic", def: "Emphasis on growth and self-actualization (Rogers)" },
            { term: "Experiment", def: "Research manipulating variables to determine cause-effect" },
            { term: "Correlation", def: "Statistical relationship between variables; not causation" },
            { term: "Independent Variable", def: "Variable manipulated by researcher" },
            { term: "Dependent Variable", def: "Variable measured in experiment" },
            { term: "Random Assignment", def: "Assigning participants to groups by chance" },
            { term: "Informed Consent", def: "Participants understand procedures before agreeing" },
            { term: "Placebo Effect", def: "Improvement from expectations, not actual treatment" }
        ]
    },
    la2: {
        questions: [
            { q: "Researcher randomly assigns students to study with music or silence, then compares test scores. What method?", answers: ["Survey", "Correlation", "Experiment ✓", "Case study"], correct: 2 },
            { q: "Ice cream sales and drowning both increase in summer. This shows:", answers: ["Causation", "Correlation (third variable likely) ✓", "No relationship", "Experimental effect"], correct: 1 },
            { q: "Main advantage of experiments over correlations:", answers: ["Cheaper", "Can determine cause-effect ✓", "More ethical", "Fewer participants"], correct: 1 },
            { q: "Participants don't know if they got real drug or placebo. This is:", answers: ["Random assignment", "Blind study ✓", "Informed consent", "Case study"], correct: 1 },
            { q: "Which approach studies brain chemistry effects on behavior?", answers: ["Psychodynamic", "Humanistic", "Behavioral", "Biological ✓"], correct: 3 },
            { q: "Cognitive psychologist most likely studies:", answers: ["How memory works ✓", "Unconscious motives", "Observable behavior only", "Self-actualization"], correct: 0 },
            { q: "APA ethics requires:", answers: ["Deception always", "Informed consent ✓", "No debriefing", "No discomfort ever"], correct: 1 },
            { q: "Intensively studying one brain injury patient is:", answers: ["Experiment", "Survey", "Case study ✓", "Observation"], correct: 2 },
            { q: "Random assignment minimizes:", answers: ["Cost", "Time", "Pre-existing group differences ✓", "Ethical issues"], correct: 2 },
            { q: "Correlation of +0.80 vs -0.80:", answers: ["Positive is stronger", "Negative is stronger", "Equal strength, opposite direction ✓", "Cannot compare"], correct: 2 }
        ]
    },
    la3: {
        timelineBuilder: {
            events: [
                { event: "Wundt establishes first psychology lab", date: "1879", order: 1 },
                { event: "William James publishes Principles", date: "1890", order: 2 },
                { event: "Freud develops psychoanalysis", date: "1900", order: 3 },
                { event: "Watson launches behaviorism", date: "1920", order: 4 },
                { event: "Skinner introduces operant conditioning", date: "1938", order: 5 },
                { event: "Rogers develops client-centered therapy", date: "1940s", order: 6 },
                { event: "Cognitive revolution begins", date: "1950s", order: 7 },
                { event: "APA adopts ethics code", date: "1953", order: 8 },
                { event: "DSM first published", date: "1952", order: 9 },
                { event: "Positive psychology emerges", date: "1990s", order: 10 }
            ]
        },
        researchMatching: {
            scenarios: [
                { text: "Manipulate caffeine, measure alertness", answer: "Experiment" },
                { text: "Examine study time vs GPA relationship", answer: "Correlation" },
                { text: "Poll 1000 students about stress", answer: "Survey" },
                { text: "Study one amnesia patient for 5 years", answer: "Case Study" },
                { text: "Watch children play without interfering", answer: "Naturalistic Observation" },
                { text: "Random assign to sleep conditions, test memory", answer: "Experiment" },
                { text: "Find height correlates with salary", answer: "Correlation" },
                { text: "Ask voters about preferences", answer: "Survey" },
                { text: "Study one split-brain patient", answer: "Case Study" },
                { text: "Observe primates in habitat", answer: "Naturalistic Observation" }
            ]
        }
    }
};

const module1Quiz = {
    questions: [
        { q: "Psychology is scientific study of:", answers: ["Brain only", "Mental disorders only", "Behavior and mental processes ✓", "Therapy only"], correct: 2 },
        { q: "Psychodynamic emphasizes:", answers: ["Observable behavior", "Unconscious conflicts ✓", "Free will", "Thinking processes"], correct: 1 },
        { q: "In anxiety therapy study, independent variable is:", answers: ["Anxiety level", "Type of treatment ✓", "Random assignment", "Participants"], correct: 1 },
        { q: "r = -0.70 between sleep and stress means:", answers: ["Sleep causes less stress", "More sleep, lower stress trend ✓", "No relationship", "Positive correlation"], correct: 1 },
        { q: "Experiments vs correlations:", answers: ["Cheaper", "Can show cause-effect ✓", "Always ethical", "No statistics"], correct: 1 },
        { q: "Placebo effect shows:", answers: ["Medications are fake", "Expectations influence outcomes ✓", "Controls unnecessary", "Blind studies fail"], correct: 1 },
        { q: "Ethics requires debriefing after:", answers: ["Random assignment", "Informed consent", "Studies using deception ✓", "All studies"], correct: 2 },
        { q: "Behavioral approach studies:", answers: ["Unconscious", "Observable behavior ✓", "Self-actualization", "Cognitive processes"], correct: 1 },
        { q: "Replication means:", answers: ["Many participants", "Repeating study to verify ✓", "Publishing results", "Using controls"], correct: 1 },
        { q: "Double-blind study prevents:", answers: ["Ethical violations", "Experimenter bias ✓", "Random assignment", "Informed consent"], correct: 1 }
    ]
};

const module1Discussion = null;

const module1Checkpoint = {
    title: "Thread Project Checkpoint #1: Research Question & Design (50 pts)",
    instructions: "Choose psychological phenomenon, formulate research question, identify appropriate method, create basic design. See Canvas for full rubric."
};
