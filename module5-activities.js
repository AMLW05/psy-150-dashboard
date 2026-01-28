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
            { q: "A student studies a subject purely for the enjoyment of learning and intellectual curiosity. Which type of motivation is this student experiencing?", answers: ["Extrinsic motivation driven by external rewards", "Intrinsic motivation from internal satisfaction ✓", "Drive reduction to decrease tension", "Incentive theory motivation"], correct: 1 },
            { q: "According to Abraham Maslow's hierarchy of needs, what must be satisfied before an individual can pursue self-actualization?", answers: ["Only basic physiological needs", "All lower-level needs including physiological, safety, belonging, and esteem ✓", "No prerequisites are necessary", "Only esteem needs"], correct: 1 },
            { q: "The overjustification effect in motivation occurs when:", answers: ["Intrinsic motivation increases due to rewards", "Providing extrinsic rewards for intrinsically motivated behavior decreases intrinsic motivation ✓", "All motivation disappears", "Only extrinsic motivation exists"], correct: 1 },
            { q: "According to the Schachter-Singer two-factor theory of emotion, experiencing an emotion requires:", answers: ["Only physiological arousal", "Both physiological arousal and cognitive interpretation of that arousal ✓", "Only cognitive appraisal without arousal", "No physiological component is necessary"], correct: 1 },
            { q: "The facial feedback hypothesis proposes that:", answers: ["Emotions only cause facial expressions in one direction", "Facial expressions themselves can influence and intensify emotional experiences ✓", "There is no connection between expressions and emotions", "Only biological factors determine emotions"], correct: 1 },
            { q: "During the resistance stage of Hans Selye's General Adaptation Syndrome, what occurs in the body?", answers: ["The initial alarm reaction to the stressor", "The body actively adapts and attempts to cope with the ongoing stressor ✓", "Physical and psychological resources become depleted", "No stress response occurs"], correct: 1 },
            { q: "Problem-focused coping strategies are most effective when:", answers: ["The stressor is completely uncontrollable", "The stressor is controllable and changeable ✓", "They are never effective", "They are always superior to emotion-focused coping"], correct: 1 },
            { q: "How does social support help individuals manage stress more effectively?", answers: ["By completely eliminating all stressors", "By buffering stress effects and providing emotional and practical coping resources ✓", "By actually making stress worse", "Social support has no real effect on stress"], correct: 1 },
            { q: "The hormone leptin primarily signals the brain about:", answers: ["Blood glucose levels", "Fat stores and feelings of satiety ✓", "Hydration and water needs", "Cortisol and stress levels"], correct: 1 },
            { q: "Albert Bandura's concept of self-efficacy refers to:", answers: ["A person's actual objective ability level", "One's belief in their capability to succeed in specific situations ✓", "External locus of control", "Fixed unchangeable personality traits"], correct: 1 }
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
            { q: "A student only studies to earn good grades and gain parental approval, never showing genuine interest in the subject matter. According to self-determination theory, what psychological need is being threatened?", answers: ["Extrinsic motivation levels", "Intrinsic motivation and autonomy ✓", "No psychological needs are impacted", "This pattern actually improves motivation"], correct: 1 },
            { q: "A company begins offering financial bonuses for employees who complete creative projects. According to psychological research, what potential risk does this pose?", answers: ["It will always increase creativity and innovation", "It could undermine intrinsic motivation through the overjustification effect ✓", "It will have no measurable effect on employee behavior", "It can only have positive outcomes for the company"], correct: 1 },
            { q: "At a lively party, a person experiences a racing heart and interprets this sensation as excitement rather than anxiety due to the social context. Which theory of emotion best explains this phenomenon?", answers: ["James-Lange theory of emotion", "Schachter-Singer two-factor theory of emotion ✓", "Cannon-Bard theory of emotion", "This scenario does not align with any emotion theory"], correct: 1 },
            { q: "An employee is facing an impossible deadline for a project with constraints beyond their control. Which coping strategy would be most effective in this situation?", answers: ["Problem-focused coping exclusively", "Emotion-focused coping such as acceptance, cognitive reframing, and seeking support ✓", "Complete avoidance of the situation", "Denial of the stressor's existence"], correct: 1 },
            { q: "An artist with high intrinsic motivation for painting begins selling artwork professionally and subsequently loses enjoyment in the creative process. Which psychological concept explains this shift?", answers: ["Incentive theory of motivation", "The overjustification effect ✓", "Drive reduction theory", "Progression toward self-actualization"], correct: 1 },
            { q: "When analyzing personal well-being using Maslow's hierarchy of needs, a person realizes they are currently struggling with profound loneliness and social isolation. Which level of need should be their priority?", answers: ["Self-actualization needs at the highest level", "Love and belonging needs ✓", "Safety and security needs", "Esteem and recognition needs"], correct: 1 },
            { q: "A competitive athlete learns to channel pre-competition anxiety and physiological arousal to enhance focus and improve performance. This adaptive response exemplifies which concept?", answers: ["Distress and negative stress responses", "Eustress, or positive stress that motivates ✓", "Burnout and exhaustion", "The exhaustion stage of stress response"], correct: 1 },
            { q: "A person experiencing the exhaustion stage of Selye's General Adaptation Syndrome is most at risk for which outcome?", answers: ["Improved performance and resilience", "Physical illness and psychological breakdown ✓", "Peak levels of functioning and productivity", "No significant health effects"], correct: 1 },
            { q: "Research on stress and coping consistently demonstrates that social support helps individuals manage stress through which mechanism?", answers: ["Completely eliminating all sources of stress", "Buffering stress effects and providing emotional and practical coping resources ✓", "Actually making stress responses worse over time", "Social support has no measurable impact on stress levels"], correct: 1 },
            { q: "A teacher wants to increase students' intrinsic motivation for learning. Based on self-determination theory, which approach would be most effective?", answers: ["Offer more extrinsic rewards and incentives", "Provide autonomy support, enhance competence, and design meaningful learning tasks ✓", "Rely exclusively on punishment for poor performance", "Increase external pressure and strict deadlines"], correct: 1 }
        ]
    }
};

const module5Quiz = {
    questions: [
        { q: "According to achievement motivation theory, what psychological factors drive an individual to pursue excellence and success?", answers: ["Only the fear of failure and negative outcomes", "The desire to excel, meet high standards, and accomplish challenging goals ✓", "No specific goals or performance standards", "External rewards exclusively without internal drive"], correct: 1 },
        { q: "Set-point theory provides an explanation for which aspect of human physiology and behavior?", answers: ["The absence of any weight regulation mechanisms", "The body's tendency to maintain a relatively stable weight over time ✓", "Only conscious eating behavior without biological influences", "The complete absence of biological factors in weight"], correct: 1 },
        { q: "Paul Ekman's cross-cultural research on emotion made which significant discovery?", answers: ["Emotional expressions are entirely culturally learned with no universal patterns", "Universal facial expressions exist for basic emotions across diverse cultures ✓", "Emotions have no biological or evolutionary basis", "Only learned expressions exist with no innate components"], correct: 1 },
        { q: "The Yerkes-Dodson law describes what relationship between arousal and performance?", answers: ["Higher arousal always leads to better performance", "Moderate levels of arousal are optimal for performance, with an inverted-U relationship ✓", "No arousal is needed for effective performance", "Arousal levels are completely irrelevant to performance outcomes"], correct: 1 },
        { q: "In motivational conflict theory, an approach-avoidance conflict occurs when:", answers: ["A person must choose between two equally positive options", "A single goal has both attractive and unattractive aspects simultaneously ✓", "A person faces two equally negative options", "No psychological conflict exists"], correct: 1 },
        { q: "During the body's stress response, the hormone cortisol is released by which endocrine structure?", answers: ["The hippocampus in the brain", "The adrenal glands above the kidneys ✓", "The thyroid gland in the neck", "Exclusively the pituitary gland"], correct: 1 },
        { q: "The field of psychoneuroimmunology examines which relationships in human health?", answers: ["Neural processes exclusively without other systems", "The interactions between psychological factors, the nervous system, and immune system functioning ✓", "Immune function in complete isolation from other factors", "The absence of connections between psychological and biological systems"], correct: 1 },
        { q: "Research on daily hassles and their impact on health has demonstrated which finding?", answers: ["Only major life events create stress that affects health", "The cumulative effect of minor daily stressors can significantly impact physical and mental health ✓", "Daily hassles have no measurable impact on health outcomes", "Minor hassles actually improve health through stress inoculation"], correct: 1 },
        { q: "In the context of stress and coping, psychological resilience is best defined as:", answers: ["Never experiencing stress or adversity", "The ability to adapt successfully and maintain functioning despite adversity ✓", "Avoiding all challenges and difficult situations", "A fixed personality trait that cannot be developed or changed"], correct: 1 },
        { q: "Arousal theory in motivation suggests that optimal levels of motivation and performance require:", answers: ["Minimal arousal across all tasks and situations", "An optimal arousal level that varies depending on task complexity and difficulty ✓", "Maximum arousal at all times regardless of the task", "No physiological arousal whatsoever"], correct: 1 }
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
