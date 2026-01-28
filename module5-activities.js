// Module 5: Motivation, Emotion & Stress
const module5Activities = {
    la1: {
        questions: [
            { term: "Motivation", def: "Internal process initiating, guiding, and maintaining behavior toward goals" },
            { term: "Drive-Reduction Theory", def: "Behavior motivated by biological needs creating drives to restore homeostasis" },
            { term: "Incentive Theory", def: "External rewards and goals motivate behavior" },
            { term: "Intrinsic Motivation", def: "Engaging in behavior for inherent satisfaction" },
            { term: "Extrinsic Motivation", def: "Engaging in behavior for external rewards" },
            { term: "Self-Determination Theory", def: "Autonomy, competence, and relatedness drive motivation" },
            { term: "Maslow's Hierarchy", def: "Five-level pyramid: physiological, safety, love, esteem, self-actualization" },
            { term: "James-Lange Theory", def: "Physiological arousal causes emotion (afraid because heart races)" },
            { term: "Cannon-Bard Theory", def: "Emotion and arousal occur simultaneously and independently" },
            { term: "Schachter-Singer Theory", def: "Two-factor: arousal plus cognitive label creates emotion" },
            { term: "General Adaptation Syndrome", def: "Selye's three stress stages: alarm, resistance, exhaustion" },
            { term: "Eustress", def: "Positive stress that motivates (challenge, excitement)" },
            { term: "Problem-Focused Coping", def: "Addressing stressor directly to reduce or eliminate it" },
            { term: "Emotion-Focused Coping", def: "Managing emotional response to stressor" },
            { term: "Type A Personality", def: "Competitive, time-urgent, hostile; higher heart disease risk" }
        ]
    },
    la2: {
        questions: [
            { q: "Student studies for enjoyment of learning. This is:", answers: ["Extrinsic motivation", "Intrinsic motivation ✓", "Drive reduction", "Incentive theory"], correct: 1 },
            { q: "According to Maslow, before seeking self-actualization, one must satisfy:", answers: ["Only physiological needs", "Lower-level needs first ✓", "No prerequisites", "Esteem only"], correct: 1 },
            { q: "Overjustification effect occurs when:", answers: ["Intrinsic motivation increases", "Extrinsic rewards decrease intrinsic motivation ✓", "No motivation", "Only extrinsic exists"], correct: 1 },
            { q: "Schachter-Singer two-factor theory requires:", answers: ["Only arousal", "Arousal and cognitive interpretation ✓", "Only cognition", "No arousal needed"], correct: 1 },
            { q: "Facial feedback hypothesis suggests:", answers: ["Emotions cause expressions only", "Facial expressions can influence emotional experience ✓", "No connection", "Only biology matters"], correct: 1 },
            { q: "General Adaptation Syndrome resistance stage:", answers: ["Initial stress response", "Body adapts and copes with stressor ✓", "Resources depleted", "No stress"], correct: 1 },
            { q: "Problem-focused coping is most effective when:", answers: ["Stressor is uncontrollable", "Stressor is controllable ✓", "Never effective", "Always better than emotion-focused"], correct: 1 },
            { q: "Social support helps stress by:", answers: ["Eliminating stressors", "Buffering effects, providing resources and perspective ✓", "Making stress worse", "No effect"], correct: 1 },
            { q: "Leptin signals the brain about:", answers: ["Glucose levels", "Fat stores and satiety ✓", "Water needs", "Stress levels"], correct: 1 },
            { q: "Self-efficacy (Bandura) refers to:", answers: ["Actual ability", "Belief in one's ability to succeed ✓", "External control", "Fixed traits"], correct: 1 }
        ]
    },
    la3: {
        emotionTheoryMatching: {
            scenarios: [
                { scenario: "Heart races, THEN feel afraid", theory: "James-Lange" },
                { scenario: "Heart races AND feel afraid simultaneously", theory: "Cannon-Bard" },
                { scenario: "Heart races, interpret as fear due to dark alley context", theory: "Schachter-Singer (Two-Factor)" },
                { scenario: "Smiling makes you feel happier", theory: "Facial Feedback Hypothesis" },
                { scenario: "See bear → Run away → Realize you're afraid", theory: "James-Lange" },
                { scenario: "Thalamus sends signals to cortex and body at same time", theory: "Cannon-Bard" },
                { scenario: "Arousal from exercise misattributed as attraction", theory: "Schachter-Singer" },
                { scenario: "Emotion is appraisal of arousal's meaning", theory: "Schachter-Singer (Cognitive Appraisal)" },
                { scenario: "Physiological changes are sufficient for emotion", theory: "James-Lange" },
                { scenario: "Different emotions can have similar arousal patterns", theory: "Challenges James-Lange, supports Schachter-Singer" }
            ]
        },
        copingStrategyCategorization: {
            examples: [
                { strategy: "Studying for exam you're anxious about", type: "Problem-Focused Coping" },
                { strategy: "Meditating to calm down before presentation", type: "Emotion-Focused Coping" },
                { strategy: "Creating budget to address financial stress", type: "Problem-Focused Coping" },
                { strategy: "Venting feelings to friend after bad day", type: "Emotion-Focused Coping" },
                { strategy: "Scheduling time management plan for busy week", type: "Problem-Focused Coping" },
                { strategy: "Reframing situation to see positive aspects", type: "Emotion-Focused Coping" },
                { strategy: "Seeking medical help for health concern", type: "Problem-Focused Coping" },
                { strategy: "Exercise to relieve stress", type: "Emotion-Focused Coping" },
                { strategy: "Confronting person causing conflict", type: "Problem-Focused Coping" },
                { strategy: "Accepting unchangeable situation", type: "Emotion-Focused Coping" }
            ]
        }
    },
    la4: {
        title: "LA4: Motivation & Well-Being Application Analysis",
        questions: [
            { q: "Student only studies to get grades and parental approval, never for interest. According to self-determination theory, this threatens:", answers: ["Extrinsic motivation", "Intrinsic motivation and autonomy ✓", "No impact", "Improves motivation"], correct: 1 },
            { q: "Company offers bonuses for creative projects. This could:", answers: ["Always increase creativity", "Undermine intrinsic motivation (overjustification effect) ✓", "Have no effect", "Only help"], correct: 1 },
            { q: "Person experiences racing heart at party. Interprets as excitement (not anxiety) due to context. This demonstrates:", answers: ["James-Lange theory", "Schachter-Singer two-factor theory ✓", "Cannon-Bard theory", "No theory"], correct: 1 },
            { q: "Employee facing impossible deadline (can't control stressor). Best coping strategy:", answers: ["Problem-focused only", "Emotion-focused coping (acceptance, reframing, support) ✓", "Avoidance", "Denial"], correct: 1 },
            { q: "Person with high intrinsic motivation for painting starts selling art and loses enjoyment. This is:", answers: ["Incentive theory", "Overjustification effect ✓", "Drive reduction", "Self-actualization"], correct: 1 },
            { q: "Analyzing personal well-being using Maslow's hierarchy, currently struggling with loneliness. Priority need:", answers: ["Self-actualization", "Love and belonging ✓", "Safety", "Esteem"], correct: 1 },
            { q: "Athlete uses pre-competition anxiety (arousal) to enhance focus and performance. This demonstrates:", answers: ["Distress", "Eustress (positive stress) ✓", "Burnout", "Exhaustion stage"], correct: 1 },
            { q: "Person in GAS exhaustion stage most at risk for:", answers: ["Improved performance", "Illness and breakdown ✓", "Peak functioning", "No effects"], correct: 1 },
            { q: "Research shows social support helps stress by:", answers: ["Eliminating stressors", "Buffering effects and providing coping resources ✓", "Making stress worse", "No real impact"], correct: 1 },
            { q: "To increase student intrinsic motivation, teacher should:", answers: ["Offer more rewards", "Provide autonomy, competence support, and meaningful tasks ✓", "Use only punishment", "Increase pressure"], correct: 1 }
        ]
    }
};

const module5Quiz = {
    questions: [
        { q: "Achievement motivation includes:", answers: ["Only fear of failure", "Desire to excel and meet high standards ✓", "No goals", "External rewards only"], correct: 1 },
        { q: "Set-point theory explains:", answers: ["No weight regulation", "Body maintains relatively stable weight ✓", "Only eating behavior", "No biological factors"], correct: 1 },
        { q: "Ekman's research found:", answers: ["Emotions are entirely cultural", "Universal facial expressions for basic emotions ✓", "No biological basis", "Only learned expressions"], correct: 1 },
        { q: "Yerkes-Dodson law states:", answers: ["More arousal always better", "Moderate arousal optimal for performance ✓", "No arousal needed", "Arousal irrelevant"], correct: 1 },
        { q: "Approach-avoidance conflict involves:", answers: ["Two positive options", "Single goal with both positive and negative aspects ✓", "Two negative options", "No conflict"], correct: 1 },
        { q: "Cortisol is released during stress by:", answers: ["Hippocampus", "Adrenal glands ✓", "Thyroid", "Pituitary only"], correct: 1 },
        { q: "Psychoneuroimmunology studies:", answers: ["Neurons only", "Interaction between psychological factors, nervous system, and immune function ✓", "Immunity only", "No connections"], correct: 1 },
        { q: "Daily hassles research shows:", answers: ["Only major life events cause stress", "Cumulative minor stressors significantly affect health ✓", "No health impact", "Hassles help health"], correct: 1 },
        { q: "Resilience involves:", answers: ["Never experiencing stress", "Adapting well despite adversity ✓", "Avoiding all challenges", "Fixed trait cannot change"], correct: 1 },
        { q: "Arousal theory suggests optimal motivation requires:", answers: ["Minimal arousal", "Optimal level varies by task complexity ✓", "Maximum arousal always", "No arousal"], correct: 1 }
    ]
};

const module5Discussion = {
    title: "Discussion #3: Motivation & Well-Being in Your Life",
    prompt: "Analyze your own motivation and stress using course concepts. Choose ONE area (academic motivation, work, health behavior, or stress management). Apply relevant theories (self-determination theory, Maslow's hierarchy, emotion theories, GAS, coping strategies). Discuss how understanding these concepts can help you enhance well-being and achieve goals. Connect to biopsychosocial model.",
    requirements: [
        "Initial post: 300+ words with theory applications",
        "Cite textbook and at least 1 additional source",
        "Include specific personal examples and planned changes",
        "Respond to 2 peers (150+ words each) with additional insights"
    ]
};

const module5Checkpoint = null;
