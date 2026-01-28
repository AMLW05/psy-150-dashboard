// Module 6: Personality & Social Psychology
const module6Activities = {
    la1: {
        questions: [
            { term: "Personality", def: "Individual's characteristic pattern of thinking, feeling, and behaving" },
            { term: "Psychodynamic Theory", def: "Freud's emphasis on unconscious processes and childhood experiences" },
            { term: "Id", def: "Unconscious psychic energy seeking immediate gratification (pleasure principle)" },
            { term: "Superego", def: "Internalized ideals and moral standards (conscience)" },
            { term: "Defense Mechanisms", def: "Unconscious strategies protecting ego from anxiety (e.g., repression, denial)" },
            { term: "Big Five Traits", def: "OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism" },
            { term: "Self-Efficacy", def: "Bandura's belief in one's capability to succeed" },
            { term: "Social Cognition", def: "How people think about and interpret social situations" },
            { term: "Attribution Theory", def: "Explaining behavior through internal (dispositional) or external (situational) causes" },
            { term: "Fundamental Attribution Error", def: "Overestimating dispositional factors, underestimating situational factors in others' behavior" },
            { term: "Conformity", def: "Changing behavior to match group norms (Asch's line study)" },
            { term: "Obedience", def: "Following orders from authority figure (Milgram's shock study)" },
            { term: "Cognitive Dissonance", def: "Discomfort from holding conflicting attitudes; motivates attitude change" },
            { term: "Prejudice", def: "Negative attitude toward group based on stereotypes" },
            { term: "Bystander Effect", def: "Decreased helping when others are present (diffusion of responsibility)" }
        ]
    },
    la2: {
        questions: [
            { q: "Freud's theory of psychosexual stages emphasizes which factor in personality development?", answers: ["Conscious thought processes exclusively", "Childhood experiences fundamentally shape adult personality ✓", "Only experiences during adulthood matter", "No role for unconscious processes"], correct: 1 },
            { q: "What fundamental assumption do trait theories of personality make about human characteristics?", answers: ["Personality is completely determined by situations", "Personality is composed of relatively stable and enduring characteristics ✓", "Personality is constantly changing without consistency", "Personality exists only in the unconscious mind"], correct: 1 },
            { q: "According to the Big Five personality model, an individual who scores high in conscientiousness would most likely demonstrate which characteristics?", answers: ["Disorganized and impulsive behavior patterns", "Organized, disciplined, and reliable behavior ✓", "High anxiety and emotional instability", "Closed-mindedness to new experiences"], correct: 1 },
            { q: "Projective personality tests such as the Rorschach inkblot test and Thematic Apperception Test (TAT) are based on which theoretical framework?", answers: ["Self-report questionnaire methodology", "Psychodynamic theory, revealing unconscious content through responses to ambiguous stimuli ✓", "Trait theory and statistical factor analysis", "Observable behavioral assessment only"], correct: 1 },
            { q: "When you personally fail an exam, the fundamental attribution error would predict that you are more likely to think:", answers: ["Internal attribution: 'I'm not intelligent enough'", "Situational attribution: 'The test was unfairly difficult' ✓", "No attribution would be made at all", "Both internal and situational factors equally"], correct: 1 },
            { q: "When observing another person's failure, the fundamental attribution error typically leads observers to make which type of attribution?", answers: ["Situational attributions emphasizing external factors", "Dispositional attributions emphasizing internal character flaws like laziness ✓", "No systematic bias in attributions", "Perfectly accurate assessments of causes"], correct: 1 },
            { q: "Solomon Asch's classic conformity studies using line judgment tasks demonstrated which finding about social influence?", answers: ["No participants conformed to incorrect group judgments", "Approximately 75% of participants conformed to an obviously incorrect answer at least once ✓", "100% of participants conformed on every trial", "Conformity to group pressure is extremely rare"], correct: 1 },
            { q: "Stanley Milgram's controversial obedience study examining authority and compliance found which result?", answers: ["No participants obeyed the authority figure's commands", "Approximately 65% of participants delivered the maximum electric shock when ordered by the experimenter ✓", "All participants refused to continue the experiment", "Only individuals with sadistic tendencies obeyed"], correct: 1 },
            { q: "When people experience cognitive dissonance between their attitudes and behaviors, how do they typically resolve this uncomfortable psychological state?", answers: ["By completely ignoring the conflict", "By changing their attitudes to align with their behavior ✓", "The dissonance is never resolved", "By always changing their behavior instead"], correct: 1 },
            { q: "The social facilitation effect in social psychology refers to which phenomenon?", answers: ["Groups always impair individual performance", "Simple or well-learned tasks show improved performance in the presence of others ✓", "The presence of others has no measurable effect", "Complex tasks always improve with an audience"], correct: 1 }
        ]
    },
    la3: {
        attributionScenarios: {
            examples: [
                { scenario: "Driver cuts you off; you think 'What a jerk!'", type: "Fundamental Attribution Error (dispositional)" },
                { scenario: "You cut someone off; you think 'I'm late and stressed'", type: "Actor-Observer Bias (situational for self)" },
                { scenario: "Student fails exam: teacher blames laziness, student blames poor teaching", type: "Divergent attributions" },
                { scenario: "Boss praises your work: 'I earned it'; boss criticizes: 'Unfair standards'", type: "Self-Serving Bias" },
                { scenario: "Depressed person fails: 'I'm incompetent' (internal, stable, global)", type: "Pessimistic Attribution Style" },
                { scenario: "Group project succeeds: 'We did it'; fails: 'They messed up'", type: "Self-Serving (group version)" },
                { scenario: "Someone trips: 'They're clumsy'; You trip: 'Floor is slippery'", type: "FAE and Actor-Observer Bias" },
                { scenario: "Success attributed to ability; failure to bad luck", type: "Self-Serving Bias" },
                { scenario: "Helping behavior attributed to 'good person', ignore situational factors", type: "Fundamental Attribution Error" },
                { scenario: "Crime in neighborhood: 'Bad people' vs 'Economic factors'", type: "Dispositional vs Situational Attribution" }
            ]
        },
        personalityTheoryMatching: {
            concepts: [
                { description: "Unconscious conflicts and childhood shape personality", theory: "Psychodynamic (Freud)" },
                { description: "Personality is set of stable, measurable traits", theory: "Trait Theory" },
                { description: "Focus on growth, self-actualization, positive regard", theory: "Humanistic (Rogers, Maslow)" },
                { description: "Personality shaped by reciprocal determinism: person, environment, behavior", theory: "Social-Cognitive (Bandura)" },
                { description: "Personality reflects consistent behavioral patterns", theory: "Behavioral Perspective" },
                { description: "Defense mechanisms protect ego from anxiety", theory: "Psychodynamic" },
                { description: "OCEAN/Big Five dimensions", theory: "Trait Theory (Five-Factor Model)" },
                { description: "Self-concept and incongruence cause distress", theory: "Humanistic (Rogers)" },
                { description: "Observational learning and self-efficacy", theory: "Social-Cognitive" },
                { description: "Personality develops through psychosexual stages", theory: "Psychodynamic (Freud)" }
            ]
        }
    },
    la4: {
        title: "LA4: Personality & Social Psychology Application",
        questions: [
            { q: "An employee is consistently late to work. The supervisor immediately concludes the employee is 'lazy and irresponsible' while completely ignoring the employee's significant childcare challenges. This judgment exemplifies:", answers: ["An accurate and comprehensive assessment", "The fundamental attribution error ✓", "Self-serving bias in attribution", "A correct dispositional attribution"], correct: 1 },
            { q: "When you fail an exam, you think 'The test was unfairly difficult,' but when your friend fails the same exam, you think 'They didn't study enough.' This pattern of attribution demonstrates:", answers: ["Accurate and objective assessment of both situations", "Actor-observer bias in attributions ✓", "No cognitive bias is present", "Purely situational attributions for both"], correct: 1 },
            { q: "An individual volunteers regularly at community organizations and helps neighbors frequently. Using the Big Five personality model, this person would likely score high in which trait(s)?", answers: ["Neuroticism and emotional instability", "Agreeableness and conscientiousness ✓", "Only openness to experience", "Only extraversion without other traits"], correct: 1 },
            { q: "After purchasing an expensive item, a consumer focuses exclusively on its positive features while deliberately ignoring or downplaying its negative aspects. This cognitive strategy represents:", answers: ["Completely rational thinking and decision-making", "Cognitive dissonance reduction ✓", "No psychological bias whatsoever", "A perfect and unbiased decision"], correct: 1 },
            { q: "A group of friends unanimously agrees to pursue a risky plan despite each individual privately harboring serious doubts about its wisdom. This group decision-making pattern demonstrates:", answers: ["Optimal decision-making processes", "Groupthink and pressure toward uniformity ✓", "Simple conformity exclusively", "Obedience to authority"], correct: 1 },
            { q: "When analyzing prejudice and discrimination using social psychology principles, stereotype threat could have which effect on members of stereotyped groups?", answers: ["Significantly improve their performance on challenging tasks", "Harm performance by creating anxiety about confirming negative stereotypes ✓", "Have no measurable effect on behavior or performance", "Only produce positive outcomes"], correct: 1 },
            { q: "A salesperson first gets you to agree to a small, reasonable request, then follows up by asking for a much larger commitment. This persuasion strategy is known as:", answers: ["The door-in-the-face technique", "The foot-in-the-door technique ✓", "The low-ball persuasion technique", "No established persuasion technique"], correct: 1 },
            { q: "You are experiencing a medical emergency in a crowded public location with many bystanders present. Based on research on the bystander effect, you are:", answers: ["More likely to receive help with more people present", "Less likely to receive help due to diffusion of responsibility ✓", "Equally likely to receive help regardless of crowd size", "Guaranteed to receive immediate help"], correct: 1 },
            { q: "According to the Big Five personality model, an individual who scores high in neuroticism would be more likely to experience:", answers: ["Stable moods and emotional consistency", "Anxiety, worry, and emotional instability ✓", "A complete absence of emotions", "Only positive emotions exclusively"], correct: 1 },
            { q: "According to the contact hypothesis for reducing intergroup prejudice, what conditions are most effective for improving relations between groups?", answers: ["Completely avoiding contact between groups", "Equal status contact with cooperation toward shared goals in supportive contexts ✓", "Competitive interactions between groups", "Maintaining separation and segregation"], correct: 1 }
        ]
    }
};

const module6Quiz = {
    questions: [
        { q: "Carl Rogers' person-centered theory of personality emphasizes which key concepts in human development and therapeutic relationships?", answers: ["Unconscious conflicts and childhood trauma exclusively", "Unconditional positive regard, empathy, and the drive toward self-actualization ✓", "Only measurable personality traits", "Learned behavioral patterns exclusively"], correct: 1 },
        { q: "Albert Bandura's concept of reciprocal determinism proposes which relationship between psychological factors?", answers: ["One-way causation from environment to person", "Person, behavior, and environment continuously and mutually influence each other ✓", "Only environmental factors determine behavior", "Only personal factors determine behavior"], correct: 1 },
        { q: "The self-serving bias in attribution serves which psychological function for individuals?", answers: ["Promotes accurate and objective self-assessment", "Helps maintain and protect self-esteem by attributing successes internally and failures externally ✓", "Enhances understanding of others' motivations", "Serves no adaptive psychological function"], correct: 1 },
        { q: "Groupthink, as described by Irving Janis, occurs in group decision-making when:", answers: ["Group members strongly disagree and debate options", "The desire for group harmony and consensus overrides realistic appraisal of alternatives ✓", "No consensus can possibly be reached", "The process is always beneficial to outcomes"], correct: 1 },
        { q: "The mere exposure effect in social psychology demonstrates which phenomenon about attitude formation?", answers: ["Familiarity with stimuli breeds contempt and dislike", "Repeated exposure to neutral stimuli increases liking and positive attitudes ✓", "Exposure to stimuli has no measurable effect on attitudes", "Exposure leads to increased avoidance behaviors"], correct: 1 },
        { q: "The foot-in-the-door persuasion technique involves which sequence of requests?", answers: ["Making a large request first to anchor expectations", "Making a small initial request followed by a larger request ✓", "Making no requests whatsoever", "Aggressive confrontational approaches"], correct: 1 },
        { q: "Research on stereotype threat demonstrates that awareness of negative stereotypes about one's group can:", answers: ["Significantly improve performance on challenging tasks", "Impair performance of stereotyped group members through increased anxiety ✓", "Have no measurable effect on performance", "Only produce beneficial outcomes"], correct: 1 },
        { q: "Deindividuation in group contexts typically leads to which psychological and behavioral changes?", answers: ["Increased self-awareness and personal responsibility", "Reduced self-awareness, weakened restraints against impulsive behavior ✓", "Improved decision-making and judgment", "No changes in individual behavior"], correct: 1 },
        { q: "The contact hypothesis for reducing prejudice suggests that intergroup prejudice decreases when groups:", answers: ["Completely avoid contact with each other", "Interact with equal status, common goals, and cooperative interdependence ✓", "Engage in competitive interactions", "Maintain separation and segregation"], correct: 1 },
        { q: "The ongoing debate about altruism in social psychology centers on which fundamental question?", answers: ["Whether any helping behavior is ever truly selfless without expectation of benefit ✓", "The established fact that only selfish behavior exists", "Whether helping behavior ever occurs at all", "The certainty that all helping is completely selfish"], correct: 0 }
    ]
};

const module6Discussion = null;

const module6Checkpoint = {
    title: "Project Piece #3: Hypothesis Development & Research Design",
    instructions: "Based on your literature review, develop specific hypotheses for your psychological investigation. Design your study methodology (participants, materials, procedures). Justify design choices using research principles. Consider potential confounds and ethical issues. This is Piece #3 of your 6-piece portfolio - all pieces due together in Module 7. See project-pieces.js for complete instructions."
};
