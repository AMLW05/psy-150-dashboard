// Module 6: Personality & Social Psychology
// Complete Activity Data

const module6Activities = {
    la1: {
        questions: [
            { term: "Personality", def: "An individual's characteristic pattern of thinking, feeling, and behaving" },
            { term: "Psychoanalytic Theory", def: "Freud's theory emphasizing unconscious processes, childhood experiences, and defense mechanisms" },
            { term: "Id, Ego, Superego", def: "Freud's three parts of personality: pleasure principle, reality principle, and moral principle" },
            { term: "Trait Theory", def: "Approach focusing on identifying and measuring consistent personality characteristics" },
            { term: "Big Five", def: "Five major personality dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism" },
            { term: "Social-Cognitive Theory", def: "Bandura's theory emphasizing how we interact with our environment and reciprocal determinism" },
            { term: "Conformity", def: "Adjusting one's behavior or thinking to match a group standard" },
            { term: "Obedience", def: "Following direct commands, typically from an authority figure" },
            { term: "Social Facilitation", def: "Improved performance on simple tasks in the presence of others" },
            { term: "Cognitive Dissonance", def: "Mental discomfort from holding contradictory beliefs or beliefs that conflict with actions" },
            { term: "Fundamental Attribution Error", def: "Tendency to overemphasize personality and underestimate situation when explaining others' behavior" },
            { term: "Prejudice", def: "Unjustifiable negative attitude toward a group and its members" },
            { term: "Stereotype", def: "Generalized belief about a group of people" },
            { term: "Discrimination", def: "Unjustifiable negative behavior toward a group or its members" },
            { term: "In-group Bias", def: "Tendency to favor one's own group over other groups" }
        ]
    },
    la2: {
        classicStudies: [
            {
                name: "Milgram Obedience Study (1963)",
                description: "Participants were told to give increasingly strong electric shocks to a 'learner' when mistakes were made. Despite protests and apparent pain, 65% gave the maximum 450-volt shock because the experimenter told them to continue.",
                findings: "People obey authority figures even when commands conflict with conscience",
                ethicalIssues: "Deception, psychological stress, lack of informed consent about risks",
                significance: "Demonstrates power of situational factors and authority in influencing behavior"
            },
            {
                name: "Asch Conformity Experiments (1951)",
                description: "Participants judged which line matched a standard line. When confederates gave obviously wrong answers first, about 75% of participants conformed at least once.",
                findings: "People conform to group opinion even when it contradicts their own perception",
                ethicalIssues: "Mild deception, but minimal harm",
                significance: "Shows power of social pressure; conformity increases with group size and unanimity"
            },
            {
                name: "Stanford Prison Experiment (1971)",
                description: "College students randomly assigned to be 'guards' or 'prisoners' in mock prison. Guards became abusive, prisoners showed extreme stress. Study stopped after 6 days instead of planned 14.",
                findings: "Situations and roles powerfully influence behavior; ordinary people can act cruelly when given power",
                ethicalIssues: "Inadequate informed consent, failure to protect from psychological harm, researcher conflict of interest",
                significance: "Demonstrates power of social roles and deindividuation, though methodology has been criticized"
            }
        ]
    },
    la3: {
        dataAnalysis: {
            title: "Personality Stability Across the Lifespan",
            chartData: { title: "Big Five Trait Stability: Ages 20-70" },
            questions: [
                { q: "Which Big Five traits show the most stability over time?", a: "Extraversion and Openness show high stability; Conscientiousness and Agreeableness increase with age; Neuroticism decreases" },
                { q: "Do personalities change or stay the same?", a: "Both: Rank-order stability (relative position compared to others) is high, but mean-level changes occur (most people become more conscientious, agreeable, less neurotic with age)" },
                { q: "What might explain these age-related changes?", a: "Life experiences, social roles, maturation, societal expectations" }
            ]
        }
    },
    la4: {
        title: "Cognitive Dissonance Analysis",
        scenarios: [
            { situation: "A person who values health continues to smoke", dissonance: "Behavior (smoking) conflicts with belief (health is important)", reduction: "Minimize risk, quit smoking, or change attitude about health" },
            { situation: "Someone lies to get a job they really want", dissonance: "Behavior (lying) conflicts with self-concept (honest person)", reduction: "Justify lying, feel guilty, or change self-perception" },
            { situation: "A student cheats despite believing cheating is wrong", dissonance: "Behavior conflicts with moral belief", reduction: "Rationalize ('everyone does it'), feel guilt, or stop cheating" }
        ]
    }
};

const module6Quiz = {
    questions: [
        { q: "According to Freud, the part of personality that operates on the pleasure principle is:", answers: ["Ego", "Id ✓", "Superego", "Unconscious"], correct: 1 },
        { q: "The Big Five personality dimensions include all EXCEPT:", answers: ["Openness", "Conscientiousness", "Resilience ✓", "Agreeableness"], correct: 2 },
        { q: "Bandura's social-cognitive theory emphasizes:", answers: ["Unconscious motives", "Stable traits", "Reciprocal determinism between person, behavior, and environment ✓", "Genetic influences only"], correct: 2 },
        { q: "In Asch's conformity experiments, participants:", answers: ["Always gave correct answers", "Conformed to group pressure about 1/3 of the time ✓", "Never conformed", "Conformed 100% of the time"], correct: 1 },
        { q: "In Milgram's obedience study, what percentage of participants gave the maximum shock?", answers: ["15%", "35%", "65% ✓", "85%"], correct: 2 },
        { q: "Cognitive dissonance is:", answers: ["A learning disorder", "Mental discomfort from conflicting beliefs or beliefs-behavior mismatch ✓", "A personality trait", "A form of social influence"], correct: 1 },
        { q: "The fundamental attribution error is:", answers: ["Overemphasizing personality and underemphasizing situation when explaining others' behavior ✓", "Overemphasizing situation for others' behavior", "Making accurate attributions", "Only applying to negative behaviors"], correct: 0 },
        { q: "Social facilitation refers to:", answers: ["Improved performance on simple tasks in presence of others ✓", "Worse performance when others watch", "Learning from observing others", "Following group norms"], correct: 0 },
        { q: "Prejudice is a(n):", answers: ["Behavior", "Attitude ✓", "Belief", "Action"], correct: 1 },
        { q: "Discrimination is a(n):", answers: ["Attitude", "Belief", "Behavior ✓", "Thought"], correct: 2 },
        { q: "What did the Stanford Prison Experiment demonstrate?", answers: ["Personality determines behavior more than situation", "Situations and roles powerfully influence behavior ✓", "Guards are naturally cruel", "Prisoners are naturally submissive"], correct: 1 },
        { q: "In-group bias refers to:", answers: ["Disliking your own group", "Favoring your own group over others ✓", "Treating all groups equally", "Only occurring in prejudiced people"], correct: 1 },
        { q: "Which is true about personality stability?", answers: ["Personality never changes after age 20", "Personality shows both stability and change across lifespan ✓", "Personality is completely unstable", "Only genetics influence personality"], correct: 1 },
        { q: "The bystander effect shows that:", answers: ["People always help in emergencies", "People are less likely to help when others are present ✓", "People help more when alone", "Group size doesn't affect helping"], correct: 1 },
        { q: "Foot-in-the-door technique involves:", answers: ["Making large request first", "Making small request followed by larger request ✓", "Threatening people", "Using authority"], correct: 1 }
    ]
};

const module6Discussion = {
    prompt: `**Discussion: Social Influence in Your Life**

Describe a time when you conformed to group pressure, obeyed authority, or changed your attitude due to persuasion. Analyze using social psychology concepts. What factors made you susceptible? How could you resist similar influence?

**Initial Post:** 300+ words
**Peer Responses:** 150+ words each, 2 peers

**Grading:** 50 points`,
    rubric: "Discussion Rubric"
};

const module6Portfolio = {
    title: "Portfolio Piece #6: Social Psychology Application",
    instructions: `Analyze social influence, persuasion, or group behavior in a real context (personal experience, current event, or media). 2-3 pages. (40 points)`,
    rubric: "Portfolio Rubric"
};
