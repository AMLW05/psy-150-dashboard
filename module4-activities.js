// Module 4: Cognition, Intelligence & Development
const module4Activities = {
    la1: {
        questions: [
            { term: "Cognition", def: "Mental processes including thinking, knowing, remembering, problem-solving" },
            { term: "Heuristic", def: "Mental shortcut for quick decisions; can lead to errors" },
            { term: "Confirmation Bias", def: "Seeking information that confirms existing beliefs" },
            { term: "Functional Fixedness", def: "Inability to see new uses for familiar objects" },
            { term: "Intelligence", def: "Ability to learn, solve problems, and adapt to environment" },
            { term: "Fluid Intelligence", def: "Ability to reason and solve novel problems (peaks young adulthood)" },
            { term: "Crystallized Intelligence", def: "Accumulated knowledge and skills (increases with age)" },
            { term: "Schema", def: "Mental framework organizing knowledge (Piaget)" },
            { term: "Assimilation", def: "Incorporating new information into existing schemas" },
            { term: "Accommodation", def: "Changing schemas to fit new information" },
            { term: "Object Permanence", def: "Understanding objects exist when not seen (8-12 months)" },
            { term: "Theory of Mind", def: "Understanding others have different thoughts and beliefs (age 3-4)" },
            { term: "Secure Attachment", def: "Healthy infant-caregiver bond; distressed when separated, comforted upon return" },
            { term: "Critical Period", def: "Optimal time for development; difficult to acquire later" },
            { term: "Teratogen", def: "Environmental agent causing prenatal abnormalities (alcohol, drugs)" }
        ]
    },
    la2: {
        questions: [
            { q: "Representative heuristic can lead to:", answers: ["Perfect decisions", "Stereotyping and ignoring base rates ✓", "Functional fixedness", "Confirmation bias"], correct: 1 },
            { q: "Sternberg's triarchic theory includes:", answers: ["Only IQ", "Analytical, creative, and practical intelligence ✓", "Fluid only", "One type"], correct: 1 },
            { q: "Flynn effect shows:", answers: ["IQ scores declining", "IQ scores rising over generations ✓", "No change", "Genetics only matter"], correct: 1 },
            { q: "Child in Piaget's preoperational stage (2-7 years) struggles with:", answers: ["Object permanence", "Conservation and egocentrism ✓", "Abstract thinking", "Attachment"], correct: 1 },
            { q: "Harlow's monkey studies showed:", answers: ["Food is primary attachment factor", "Contact comfort more important than food ✓", "No attachment needed", "Punishment works best"], correct: 1 },
            { q: "Authoritative parenting is characterized by:", answers: ["High demands, low responsiveness", "High demands and high responsiveness ✓", "Low demands, low responsiveness", "No rules"], correct: 1 },
            { q: "Adolescent egocentrism includes:", answers: ["Concrete thinking", "Imaginary audience and personal fable ✓", "No self-awareness", "Object permanence issues"], correct: 1 },
            { q: "Erikson's identity vs role confusion stage occurs:", answers: ["Infancy", "Early childhood", "Adolescence ✓", "Late adulthood"], correct: 2 },
            { q: "Availability heuristic means judging likelihood by:", answers: ["Statistics", "How easily examples come to mind ✓", "Logic only", "Expert opinion"], correct: 1 },
            { q: "Vygotsky emphasized role of:", answers: ["Stages only", "Social interaction and culture in development ✓", "Genetics only", "Individual discovery"], correct: 1 }
        ]
    },
    la3: {
        piagetStageMatching: {
            scenarios: [
                { behavior: "Baby searches for hidden toy", stage: "Sensorimotor (Object Permanence developing)" },
                { behavior: "Child thinks everyone sees what they see", stage: "Preoperational (Egocentrism)" },
                { behavior: "Knows amount stays same despite shape change", stage: "Concrete Operational (Conservation)" },
                { behavior: "Can think hypothetically about abstract concepts", stage: "Formal Operational" },
                { behavior: "Learns through sensory exploration and motor actions", stage: "Sensorimotor" },
                { behavior: "Symbolic play and language emerge", stage: "Preoperational" },
                { behavior: "Can perform mental operations but needs concrete examples", stage: "Concrete Operational" },
                { behavior: "Struggles with reversibility in thinking", stage: "Preoperational" },
                { behavior: "Can solve complex logical problems systematically", stage: "Formal Operational" },
                { behavior: "Centration: focuses on one aspect, ignores others", stage: "Preoperational" }
            ]
        },
        biasIdentification: {
            examples: [
                { scenario: "Only reading news that supports your political views", bias: "Confirmation Bias" },
                { scenario: "Overestimating plane crash risk after media coverage", bias: "Availability Heuristic" },
                { scenario: "Assuming good student is also athletic (stereotyping)", bias: "Representative Heuristic" },
                { scenario: "Unable to use hammer for new purpose", bias: "Functional Fixedness" },
                { scenario: "Sticking to failing strategy because already invested time", bias: "Sunk Cost Fallacy" },
                { scenario: "Judging probability based on how typical it seems", bias: "Representative Heuristic" },
                { scenario: "Overestimating shark attacks due to Shark Week", bias: "Availability Heuristic" },
                { scenario: "Ignoring evidence that contradicts your hypothesis", bias: "Confirmation Bias" },
                { scenario: "Thinking everyone noticed your mistake (they didn't)", bias: "Spotlight Effect" },
                { scenario: "Using coin only as money, not as screwdriver", bias: "Functional Fixedness" }
            ]
        }
    }
};

const module4Quiz = {
    questions: [
        { q: "Gardner's multiple intelligences theory suggests:", answers: ["One general intelligence", "Eight relatively independent intelligences ✓", "Only IQ matters", "Three types"], correct: 1 },
        { q: "Cross-sectional vs longitudinal studies:", answers: ["Same thing", "Cross-sectional: different ages at once; Longitudinal: same people over time ✓", "Longitudinal is faster", "Cross-sectional shows change"], correct: 1 },
        { q: "Nature vs nurture debate concerns:", answers: ["Only genetics", "Only environment", "Interaction of heredity and environment ✓", "Neither matters"], correct: 2 },
        { q: "Telegraphic speech (\"want cookie\") occurs:", answers: ["Infancy", "Around age 2 ✓", "Adolescence", "Adulthood"], correct: 1 },
        { q: "Kohlberg's conventional morality stage emphasizes:", answers: ["Avoiding punishment", "Social rules and approval ✓", "Universal ethics", "Self-interest only"], correct: 1 },
        { q: "Cognitive development research uses conservation tasks to assess:", answers: ["Memory", "Understanding that quantity stays same despite appearance changes ✓", "Language", "Attachment"], correct: 1 },
        { q: "Divergent thinking involves:", answers: ["One correct answer", "Multiple creative solutions ✓", "Convergent only", "No creativity"], correct: 1 },
        { q: "Strange Situation procedure measures:", answers: ["Intelligence", "Attachment quality ✓", "Language development", "Memory"], correct: 1 },
        { q: "Menopause and male midlife changes show:", answers: ["No biological changes in middle adulthood", "Reproductive and hormonal changes, gradual not sudden ✓", "Only women change", "Complete cessation of all hormones"], correct: 1 },
        { q: "Metacognition refers to:", answers: ["Memory only", "Thinking about one's own thinking processes ✓", "Concrete operations", "Social cognition"], correct: 1 }
    ]
};

const module4Discussion = {
    title: "Discussion Board: Midterm Reflection - Learning & Memory Applications (50 pts)",
    prompt: "Reflect on your learning strategies based on memory research from Modules 1-4. What study techniques have you been using? How can you apply research on encoding, retrieval, spacing effect, and metacognition to improve your learning? Discuss how cognitive biases might affect your studying.",
    requirements: [
        "Initial post: 300+ words with specific research connections",
        "Identify at least 3 evidence-based study strategies",
        "Discuss personal applications and planned changes",
        "Respond to 2 peers (150+ words each) with additional suggestions"
    ]
};

const module4Checkpoint = null;
