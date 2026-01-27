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
            { q: "Freud's psychosexual stages emphasize:", answers: ["Conscious thoughts", "Childhood experiences shape personality ✓", "Only adulthood", "No unconscious"], correct: 1 },
            { q: "Trait theories assume personality is:", answers: ["Completely situational", "Composed of stable characteristics ✓", "Always changing", "Unconscious only"], correct: 1 },
            { q: "Person high in conscientiousness (Big Five) likely:", answers: ["Disorganized", "Organized, disciplined, reliable ✓", "Anxious", "Closed to experience"], correct: 1 },
            { q: "Projective tests (Rorschach, TAT) are based on:", answers: ["Self-report", "Psychodynamic theory; unconscious reveals through ambiguous stimuli ✓", "Trait theory", "Observable behavior"], correct: 1 },
            { q: "Fundamental attribution error: You fail test, you think:", answers: ["Internal: 'I'm not smart'", "Situational: 'Test was unfair' ✓ (for self, actually reverse for others)", "No attribution", "Both equally"], correct: 1 },
            { q: "Actually, for others' failures, FAE leads to:", answers: ["Situational attributions", "Dispositional attributions ('they're lazy') ✓", "No bias", "Accurate assessment"], correct: 1 },
            { q: "Asch's conformity studies showed:", answers: ["No one conforms", "About 75% conformed at least once to wrong answer ✓", "100% conformity", "Conformity is rare"], correct: 1 },
            { q: "Milgram's obedience study found:", answers: ["No one obeyed", "About 65% delivered maximum shock when ordered ✓", "Everyone refused", "Only sadists obeyed"], correct: 1 },
            { q: "Cognitive dissonance resolution often involves:", answers: ["Ignoring conflict", "Changing attitudes to match behavior ✓", "No resolution", "Always changing behavior"], correct: 1 },
            { q: "Social facilitation effect means:", answers: ["Groups always impair performance", "Simple/well-learned tasks improve with audience ✓", "No effect of others", "Complex tasks improve"], correct: 1 }
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
    }
};

const module6Quiz = {
    questions: [
        { q: "Rogers' person-centered theory emphasizes:", answers: ["Unconscious conflicts", "Unconditional positive regard and self-actualization ✓", "Traits only", "Behavioral patterns"], correct: 1 },
        { q: "Reciprocal determinism (Bandura) means:", answers: ["One-way causation", "Person, behavior, and environment mutually influence each other ✓", "Only environment matters", "Only person matters"], correct: 1 },
        { q: "Self-serving bias helps:", answers: ["Accurate self-assessment", "Maintain self-esteem ✓", "Understand others", "Nothing"], correct: 1 },
        { q: "Groupthink occurs when:", answers: ["Groups disagree", "Desire for harmony overrides realistic appraisal ✓", "No consensus possible", "Always beneficial"], correct: 1 },
        { q: "Mere exposure effect shows:", answers: ["Familiarity breeds contempt", "Repeated exposure increases liking ✓", "No effect of exposure", "Avoidance increases"], correct: 1 },
        { q: "Foot-in-the-door technique involves:", answers: ["Large request first", "Small request first, then larger ✓", "No requests", "Door slamming"], correct: 1 },
        { q: "Stereotype threat can:", answers: ["Improve performance", "Harm performance of stereotyped group members ✓", "Have no effect", "Only help"], correct: 1 },
        { q: "Deindividuation in groups leads to:", answers: ["Increased self-awareness", "Reduced self-awareness and restraint ✓", "Better decisions", "No change"], correct: 1 },
        { q: "Contact hypothesis suggests prejudice reduces when groups:", answers: ["Avoid each other", "Interact with equal status, common goals, cooperation ✓", "Compete", "Stay separate"], correct: 1 },
        { q: "Altruism debate concerns:", answers: ["Whether helping ever truly selfless ✓", "Only selfish behavior exists", "No helping occurs", "Helping is always selfish"], correct: 0 }
    ]
};

const module6Discussion = {
    title: "Discussion Board: Social Psychology in Action (50 pts)",
    prompt: "Analyze a real-world example of social influence, conformity, obedience, or prejudice. Connect to classic research studies (Milgram, Asch, Zimbardo, etc.). Discuss ethical implications and how understanding these phenomena can promote positive social change. Consider biopsychosocial factors.",
    requirements: [
        "Initial post: 300+ words with research connections",
        "Cite at least 2 sources (classic study + current example)",
        "Include ethical analysis",
        "Respond to 2 peers (150+ words each) with additional perspectives"
    ]
};

const module6Checkpoint = null;
