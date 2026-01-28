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
            { q: "The representativeness heuristic, which judges probability based on how typical something seems, can lead people to:", answers: ["Make perfect rational decisions", "Engage in stereotyping and ignore statistical base rates ✓", "Experience functional fixedness", "Display confirmation bias"], correct: 1 },
            { q: "Robert Sternberg's triarchic theory of intelligence proposes that intelligence consists of:", answers: ["Only a single IQ score", "Analytical, creative, and practical components ✓", "Fluid intelligence only", "One uniform type"], correct: 1 },
            { q: "The Flynn effect, observed across many countries over the past century, demonstrates that:", answers: ["IQ scores have been steadily declining", "IQ scores have been rising across generations ✓", "IQ scores show no change over time", "Only genetic factors determine intelligence"], correct: 1 },
            { q: "According to Piaget's theory, a child in the preoperational stage (ages 2-7) typically struggles with:", answers: ["Object permanence", "Conservation tasks and overcoming egocentrism ✓", "Abstract hypothetical thinking", "Forming secure attachments"], correct: 1 },
            { q: "Harry Harlow's famous studies with infant monkeys and surrogate mothers demonstrated that:", answers: ["Food is the primary factor in attachment formation", "Contact comfort is more important than food for attachment ✓", "Infant monkeys do not need attachment figures", "Punishment is the most effective parenting approach"], correct: 1 },
            { q: "The authoritative parenting style is characterized by which combination of dimensions?", answers: ["High demands with low responsiveness", "High demands combined with high responsiveness ✓", "Low demands with low responsiveness", "Complete absence of rules and structure"], correct: 1 },
            { q: "Adolescent egocentrism, as described in developmental psychology, includes which phenomena?", answers: ["Concrete operational thinking", "Imaginary audience and personal fable beliefs ✓", "Complete absence of self-awareness", "Difficulties with object permanence"], correct: 1 },
            { q: "Erik Erikson's psychosocial crisis of identity versus role confusion primarily occurs during which developmental period?", answers: ["Infancy", "Early childhood", "Adolescence ✓", "Late adulthood"], correct: 2 },
            { q: "The availability heuristic involves judging the likelihood of events based on:", answers: ["Carefully analyzed statistical data", "How easily examples come to mind ✓", "Pure logical reasoning only", "Expert opinion exclusively"], correct: 1 },
            { q: "Lev Vygotsky's sociocultural theory emphasized the important role of:", answers: ["Universal developmental stages only", "Social interaction and culture in cognitive development ✓", "Genetic factors exclusively", "Individual discovery without social influence"], correct: 1 }
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
    },
    la4: {
        title: "LA4: Cognitive Bias & Development Analysis",
        questions: [
            { q: "After watching extensive media coverage during Shark Week, a person significantly overestimates the risk of shark attacks. Which cognitive bias is being demonstrated?", answers: ["Confirmation bias", "Availability heuristic ✓", "Hindsight bias", "Functional fixedness"], correct: 1 },
            { q: "An investor has lost $1,000 on a particular stock but refuses to sell because they have 'already invested so much.' Which decision-making error is this?", answers: ["Functional fixedness", "Sunk cost fallacy ✓", "Overconfidence bias", "Framing effect"], correct: 1 },
            { q: "A person exclusively reads news sources that align with and support their existing political views. Which cognitive bias does this exemplify?", answers: ["Critical thinking skills", "Confirmation bias ✓", "Availability heuristic", "Anchoring bias"], correct: 1 },
            { q: "After a car accident occurs, an observer claims 'I knew that intersection was dangerous all along.' Which bias is this person displaying?", answers: ["Confirmation bias", "Hindsight bias ✓", "Availability heuristic", "Representativeness heuristic"], correct: 1 },
            { q: "A 2-year-old child watches as a parent hides a toy under a blanket, then successfully searches for and retrieves the toy. Which Piagetian milestone has this child achieved?", answers: ["Conservation", "Object permanence ✓", "Abstract hypothetical thinking", "Reversibility"], correct: 1 },
            { q: "A 4-year-old child believes that the moon is following them as they walk down the street. Which preoperational characteristics does this demonstrate?", answers: ["Animism and egocentrism ✓", "Concrete operational thinking", "Formal operational reasoning", "Conservation"], correct: 0 },
            { q: "A 7-year-old understands that the amount of water remains the same even when poured from a short wide glass into a tall narrow glass. Which cognitive achievement is this?", answers: ["Object permanence", "Conservation ✓", "Centration", "Egocentrism"], correct: 1 },
            { q: "An adolescent believes that 'everyone is constantly watching and judging me' (imaginary audience) and 'my experiences are unique and no one could possibly understand' (personal fable). What developmental phenomenon is this?", answers: ["Concrete operational thinking", "Adolescent egocentrism ✓", "Identity crisis", "Role confusion"], correct: 1 },
            { q: "According to Lawrence Kohlberg's theory of moral development, the reasoning 'it's wrong to steal because you'll get caught and punished' represents which stage?", answers: ["Preconventional morality ✓", "Conventional morality", "Postconventional morality", "Complete absence of moral development"], correct: 0 },
            { q: "Between the ages of 2 and 6, children experience rapid vocabulary growth in which they can learn new words after hearing them just once. What is this phenomenon called?", answers: ["Telegraphic speech", "Language explosion or vocabulary spurt ✓", "Overregularization", "Babbling"], correct: 1 }
        ]
    }
};

const module4Quiz = {
    questions: [
        { q: "Howard Gardner's theory of multiple intelligences proposes that:", answers: ["Intelligence consists of one general ability", "Intelligence comprises eight relatively independent types ✓", "Only traditional IQ scores matter for success", "Intelligence has exactly three distinct types"], correct: 1 },
        { q: "What is the key methodological difference between cross-sectional and longitudinal research designs?", answers: ["They are identical research methods", "Cross-sectional studies compare different age groups simultaneously while longitudinal studies follow the same individuals over time ✓", "Longitudinal designs are faster to complete", "Cross-sectional designs can show developmental change"], correct: 1 },
        { q: "The nature versus nurture debate in developmental psychology concerns:", answers: ["The exclusive role of genetics in development", "The exclusive role of environment in development", "The complex interaction between heredity and environment ✓", "The conclusion that neither factor influences development"], correct: 2 },
        { q: "Telegraphic speech, characterized by two-word phrases like 'want cookie' or 'mommy go,' typically occurs during which developmental period?", answers: ["Early infancy", "Around age 2 years ✓", "Adolescence", "Young adulthood"], correct: 1 },
        { q: "Lawrence Kohlberg's conventional stage of moral development emphasizes:", answers: ["Avoiding punishment and seeking rewards", "Conforming to social rules and gaining approval ✓", "Universal ethical principles", "Pure self-interest"], correct: 1 },
        { q: "In cognitive development research, conservation tasks are used to assess a child's understanding of:", answers: ["Memory capacity", "The principle that quantity remains constant despite changes in appearance ✓", "Language comprehension", "Attachment security"], correct: 1 },
        { q: "Divergent thinking, an important component of creativity, involves:", answers: ["Finding one single correct answer", "Generating multiple creative solutions to open-ended problems ✓", "Only convergent reasoning", "Complete absence of creativity"], correct: 1 },
        { q: "Mary Ainsworth's Strange Situation procedure was specifically designed to measure:", answers: ["Cognitive intelligence", "Attachment quality between infant and caregiver ✓", "Language development milestones", "Memory capabilities"], correct: 1 },
        { q: "Research on menopause in women and hormonal changes in middle-aged men demonstrates that:", answers: ["No significant biological changes occur during middle adulthood", "Reproductive and hormonal changes occur gradually rather than suddenly ✓", "Only women experience midlife physical changes", "All hormones completely cease production"], correct: 1 },
        { q: "In cognitive psychology, the term 'metacognition' refers to:", answers: ["Memory processes exclusively", "The ability to think about and monitor one's own thinking processes ✓", "Concrete operational reasoning", "Social cognition and perspective-taking"], correct: 1 }
    ]
};

const module4Discussion = null;

const module4Checkpoint = {
    title: "Project Piece #2: Literature Review & Theory Application",
    instructions: "Building on your research question from Piece #1, conduct a literature review. Find and summarize 3-5 peer-reviewed sources relevant to your topic. Identify the main psychological theories that apply to your phenomenon. This is Piece #2 of your 6-piece portfolio - all pieces due together in Module 7. See project-pieces.js for complete instructions."
};

const module4Midterm = {
    title: "Midterm Exam (Modules 1-4)",
    points: 100,
    questions: 50,
    note: "Covers all Module 1-4 content. See exams.js for complete exam content."
};
