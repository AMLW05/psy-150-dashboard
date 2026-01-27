// Module 5: Cognition, Emotion & Motivation
// Complete Activity Data

const module5Activities = {
    la1: {
        questions: [
            { term: "Cognition", def: "Mental activities associated with thinking, knowing, remembering, and communicating" },
            { term: "Language", def: "System of communication using sounds or symbols according to grammatical rules" },
            { term: "Phonemes", def: "The smallest units of sound in a language" },
            { term: "Morphemes", def: "The smallest units of meaning in a language" },
            { term: "Intelligence", def: "The ability to learn from experience, solve problems, and use knowledge to adapt" },
            { term: "IQ (Intelligence Quotient)", def: "A measure of intelligence calculated from standardized test scores" },
            { term: "Multiple Intelligences", def: "Gardner's theory that intelligence comes in different forms (linguistic, logical-mathematical, spatial, etc.)" },
            { term: "Emotional Intelligence", def: "The ability to perceive, understand, manage, and use emotions" },
            { term: "Flynn Effect", def: "The finding that IQ scores have gradually increased over generations" },
            { term: "Intrinsic Motivation", def: "Desire to perform a behavior for its own sake or for internal rewards" },
            { term: "Extrinsic Motivation", def: "Desire to perform a behavior for external rewards or to avoid punishment" },
            { term: "Self-Determination Theory", def: "Theory that we need autonomy, competence, and relatedness for optimal motivation" },
            { term: "Maslow's Hierarchy", def: "Theory that needs are arranged in a pyramid from basic (physiological) to higher (self-actualization)" },
            { term: "James-Lange Theory", def: "Theory that emotion results from physiological arousal (we feel afraid because our heart races)" },
            { term: "Two-Factor Theory", def: "Theory that emotion requires both physiological arousal AND cognitive label" }
        ]
    },
    la2: {
        intelligenceControversies: [
            { topic: "Nature vs Nurture", question: "Is intelligence more influenced by genes or environment?", evidence: "Twin studies show heritability around 50%, but environment (education, nutrition, stimulation) significantly impacts IQ" },
            { topic: "Multiple Intelligences", question: "Is there one general intelligence or many types?", evidence: "G-factor research vs Gardner's theory; debate continues about whether 'intelligences' are truly independent" },
            { topic: "IQ Testing Bias", question: "Are IQ tests culturally fair?", evidence: "Tests can reflect cultural knowledge and test-taking experience; group differences may reflect opportunity gaps, not innate ability" },
            { topic: "Flynn Effect", question: "Why have IQ scores risen over time?", evidence: "Better nutrition, more education, test familiarity, environmental complexity all likely contribute" }
        ]
    },
    la3: {
        dataAnalysis: {
            title: "The Flynn Effect Data Analysis",
            chartData: { title: "IQ Score Changes Over Time (1940-2020)" },
            questions: [
                { q: "By how many points have average IQ scores increased per decade?", a: "Approximately 3 points per decade" },
                { q: "What are three possible explanations for this increase?", a: "Better education, improved nutrition, test-taking familiarity, more cognitively demanding environments, reduced childhood diseases" },
                { q: "Does this mean people are becoming more intelligent genetically?", a: "No; likely reflects environmental improvements, not genetic changes" }
            ]
        }
    },
    la4: {
        title: "Motivation Self-Analysis",
        instructions: "Analyze your own motivation for college using drive-reduction theory, arousal theory, and self-determination theory. Identify intrinsic vs extrinsic factors.",
        prompts: [
            "What intrinsic factors motivate you to attend college?",
            "What extrinsic factors motivate you?",
            "How do autonomy, competence, and relatedness affect your motivation?",
            "What could increase your intrinsic motivation?"
        ]
    }
};

const module5Quiz = {
    questions: [
        { q: "The smallest unit of sound in a language is a:", answers: ["Morpheme", "Phoneme ✓", "Syntax", "Semantic"], correct: 1 },
        { q: "According to Gardner's theory, intelligence:", answers: ["Is a single general ability", "Comes in multiple independent forms ✓", "Cannot be measured", "Only includes math and language skills"], correct: 1 },
        { q: "Emotional intelligence includes:", answers: ["Only understanding your own emotions", "Perceiving, understanding, managing, and using emotions ✓", "Having high IQ", "Suppressing emotions"], correct: 1 },
        { q: "The Flynn Effect refers to:", answers: ["Intelligence declining over time", "IQ scores gradually increasing over generations ✓", "The difference between fluid and crystallized intelligence", "The effect of test anxiety on performance"], correct: 1 },
        { q: "Intrinsic motivation means:", answers: ["Doing something for external rewards", "Doing something for its own sake or internal satisfaction ✓", "Doing something to avoid punishment", "Doing something because others expect it"], correct: 1 },
        { q: "According to self-determination theory, we need:", answers: ["Money, status, and power", "Autonomy, competence, and relatedness ✓", "Challenge, variety, and feedback", "Security, love, and esteem"], correct: 1 },
        { q: "According to James-Lange theory:", answers: ["Physiological arousal and emotion occur simultaneously", "Physiological arousal CAUSES emotion ✓", "Cognitive interpretation causes emotion", "Emotion causes physiological arousal"], correct: 1 },
        { q: "Two-factor theory states that emotion requires:", answers: ["Only physiological arousal", "Only cognitive interpretation", "Both physiological arousal AND cognitive label ✓", "Neither arousal nor cognition"], correct: 2 },
        { q: "At the top of Maslow's hierarchy is:", answers: ["Safety needs", "Love and belonging", "Esteem", "Self-actualization ✓"], correct: 3 },
        { q: "Which is an example of extrinsic motivation?", answers: ["Reading a book because you enjoy it", "Studying to earn a good grade ✓", "Playing music because you love it", "Exercising because it feels good"], correct: 1 },
        { q: "The ability to delay gratification is related to:", answers: ["IQ only", "Emotional intelligence only", "Both cognitive and emotional regulation ✓", "Neither intelligence nor emotion"], correct: 2 },
        { q: "Cultural differences in IQ scores are BEST explained by:", answers: ["Genetic differences between races", "Environmental factors like education and opportunity ✓", "Language differences only", "Test administration errors"], correct: 1 },
        { q: "Problem-solving that involves a sudden realization is called:", answers: ["Algorithm", "Heuristic", "Insight ✓", "Trial and error"], correct: 2 },
        { q: "Which factor does NOT explain the Flynn Effect?", answers: ["Better nutrition", "More education", "Genetic evolution ✓", "Environmental complexity"], correct: 2 },
        { q: "Stereotype threat refers to:", answers: ["Creating stereotypes about groups", "Anxiety that one's performance will confirm a negative stereotype ✓", "Positive stereotypes helping performance", "Stereotypes being always accurate"], correct: 1 }
    ]
};

const module5Discussion = {
    prompt: `**Discussion: Emotional Intelligence & Success**

Research suggests emotional intelligence (EQ) may predict life success as much as or more than IQ. Reflect on a time when EQ was critical. Which components of EQ were involved? Can EQ be learned?

**Initial Post:** 300+ words
**Peer Responses:** 150+ words each, 2 peers

**Grading:** 50 points`,
    rubric: "Discussion Rubric"
};

const module5Portfolio = {
    title: "Portfolio Piece #5: Cognitive Analysis",
    instructions: `Analyze thinking errors, problem-solving, or decision-making in a real scenario using multiple cognitive theories. 2 pages. (40 points)`,
    rubric: "Portfolio Rubric"
};
