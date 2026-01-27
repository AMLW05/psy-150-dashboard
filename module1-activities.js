// Module 1: Introduction to Psychology & Research Methods
// Complete Activity Data

const module1Activities = {
    la1: {
        questions: [
            { term: "Psychology", def: "The scientific study of behavior and mental processes" },
            { term: "Empiricism", def: "Knowledge comes from observation and experience, not intuition" },
            { term: "Psychoanalytic Approach", def: "Focus on unconscious processes and childhood experiences (Freud)" },
            { term: "Behavioral Approach", def: "Focus on observable behavior and environmental influences (Watson, Skinner)" },
            { term: "Cognitive Approach", def: "Focus on mental processes like thinking, memory, and problem-solving" },
            { term: "Humanistic Approach", def: "Focus on personal growth, free will, and self-actualization (Maslow, Rogers)" },
            { term: "Biological Approach", def: "Focus on brain, genes, hormones, and nervous system" },
            { term: "Sociocultural Approach", def: "Focus on how social and cultural factors influence behavior" },
            { term: "Experimental Research", def: "Manipulates independent variable to determine causal effects on dependent variable" },
            { term: "Correlational Research", def: "Examines relationship between two variables without manipulation; cannot establish causation" },
            { term: "Naturalistic Observation", def: "Observing behavior in natural setting without interference" },
            { term: "Informed Consent", def: "Participants must be told about research procedures and give voluntary agreement" },
            { term: "Confidentiality", def: "Keeping participant data private and secure" },
            { term: "Debriefing", def: "Explaining the study's purpose and procedures to participants after completion" },
            { term: "Placebo Effect", def: "Participant's expectations influence their response to treatment, not the treatment itself" }
        ]
    },
    la2: {
        questions: [
            { q: "A researcher wants to test whether a new study technique improves test scores. Students are randomly assigned to use either the new technique or their usual method. What type of research is this?", answers: ["Correlational", "Experimental ✓", "Naturalistic observation", "Case study"], correct: 1 },
            { q: "Which research method can establish cause-and-effect relationships?", answers: ["Correlational", "Naturalistic observation", "Experimental ✓", "Survey"], correct: 2 },
            { q: "A psychologist observes children on a playground without interacting with them. This is an example of:", answers: ["Experimental research", "Naturalistic observation ✓", "Case study", "Correlational research"], correct: 1 },
            { q: "Which psychological approach emphasizes unconscious motives and childhood experiences?", answers: ["Behavioral", "Cognitive", "Psychoanalytic ✓", "Humanistic"], correct: 2 },
            { q: "The belief that we can only study observable behavior, not mental processes, is associated with:", answers: ["Cognitive approach", "Behavioral approach ✓", "Psychoanalytic approach", "Humanistic approach"], correct: 1 },
            { q: "A study finds that students who sleep more hours get higher grades. What can we conclude?", answers: ["More sleep causes higher grades", "Higher grades cause more sleep", "There is a relationship, but we cannot determine causation ✓", "Sleep and grades are unrelated"], correct: 2 },
            { q: "What ethical principle requires researchers to keep participant information private?", answers: ["Informed consent", "Debriefing", "Confidentiality ✓", "Anonymity"], correct: 2 },
            { q: "Before participating in a study, individuals must be told about procedures and risks. This is called:", answers: ["Debriefing", "Informed consent ✓", "Confidentiality", "Anonymity"], correct: 1 },
            { q: "Which approach focuses on personal growth, free will, and reaching one's potential?", answers: ["Psychoanalytic", "Behavioral", "Humanistic ✓", "Biological"], correct: 2 },
            { q: "A researcher measures both stress levels and illness rates in 100 people. This is:", answers: ["Experimental research", "Naturalistic observation", "Correlational research ✓", "Case study"], correct: 2 }
        ]
    },
    la3: {
        historicalStudies: {
            title: "Analyzing Historical Research Ethics",
            instructions: "Review these three controversial studies. For each, identify ethical violations and explain how modern APA Ethics Code addresses these issues.",
            studies: [
                {
                    name: "Tuskegee Syphilis Study (1932-1972)",
                    description: "U.S. Public Health Service studied untreated syphilis in African American men. Participants were told they were receiving free healthcare but were never informed they had syphilis and were denied treatment even after penicillin became available.",
                    violations: [
                        "No informed consent - participants deceived about study purpose",
                        "Harm to participants - denied treatment for serious disease",
                        "Exploitation of vulnerable population",
                        "No right to withdraw"
                    ],
                    modernProtections: [
                        "Informed consent required (APA 8.02)",
                        "Research must minimize harm (APA 8.08)",
                        "Special protections for vulnerable populations (APA 8.10)",
                        "Participants can withdraw at any time (APA 8.02)"
                    ]
                },
                {
                    name: "Milgram Obedience Study (1961)",
                    description: "Participants believed they were giving increasingly dangerous electric shocks to another person. The 'learner' was actually an actor, but participants experienced extreme stress believing they were harming someone.",
                    violations: [
                        "Deception about true nature of study",
                        "Psychological distress to participants",
                        "Questionable informed consent"
                    ],
                    modernProtections: [
                        "Deception only allowed when necessary and participants are debriefed (APA 8.07)",
                        "Researchers must minimize psychological harm (APA 8.08)",
                        "IRB review required for all research (APA 8.01)"
                    ]
                },
                {
                    name: "Stanford Prison Experiment (1971)",
                    description: "College students were randomly assigned to be 'guards' or 'prisoners' in a mock prison. Guards became abusive, prisoners showed signs of severe stress. Study was stopped after 6 days instead of planned 14.",
                    violations: [
                        "Insufficient informed consent about potential risks",
                        "Inadequate protection from psychological harm",
                        "Researcher dual role (Zimbardo was both researcher and 'prison superintendent')",
                        "Failure to stop study when harm became evident"
                    ],
                    modernProtections: [
                        "IRB review would likely not approve this design today",
                        "Researchers must monitor participants and stop study if harm occurs (APA 8.08)",
                        "Better informed consent about potential psychological risks",
                        "Independent monitoring required"
                    ]
                }
            ]
        }
    }
};

// Module 1 Quiz (15 questions)
const module1Quiz = {
    questions: [
        {
            q: "Which of the following best defines psychology?",
            answers: [
                "The study of mental illness and therapy",
                "The scientific study of behavior and mental processes ✓",
                "The study of how people interact in groups",
                "The philosophical study of the mind"
            ],
            correct: 1
        },
        {
            q: "The principle that knowledge comes from observation rather than intuition is called:",
            answers: [
                "Determinism",
                "Empiricism ✓",
                "Rationalism",
                "Idealism"
            ],
            correct: 1
        },
        {
            q: "Sigmund Freud is associated with which approach to psychology?",
            answers: [
                "Behavioral",
                "Cognitive",
                "Psychoanalytic ✓",
                "Humanistic"
            ],
            correct: 2
        },
        {
            q: "B.F. Skinner and John Watson are famous for contributions to:",
            answers: [
                "Psychoanalytic theory",
                "Behavioral approach ✓",
                "Cognitive psychology",
                "Humanistic psychology"
            ],
            correct: 1
        },
        {
            q: "Which approach emphasizes how brain chemistry and genetics influence behavior?",
            answers: [
                "Behavioral",
                "Humanistic",
                "Biological ✓",
                "Psychoanalytic"
            ],
            correct: 2
        },
        {
            q: "In an experiment, the variable that is manipulated by the researcher is called the:",
            answers: [
                "Dependent variable",
                "Independent variable ✓",
                "Control variable",
                "Confounding variable"
            ],
            correct: 1
        },
        {
            q: "What is the MAIN limitation of correlational research?",
            answers: [
                "It cannot measure two variables",
                "It cannot establish cause-and-effect ✓",
                "It is too expensive",
                "It requires too many participants"
            ],
            correct: 1
        },
        {
            q: "A researcher finds a correlation of +0.85 between study time and exam scores. This means:",
            answers: [
                "Studying more causes higher scores",
                "There is a strong positive relationship ✓",
                "Study time and scores are unrelated",
                "The relationship is negative"
            ],
            correct: 1
        },
        {
            q: "Which ethical principle requires that participants be told about a study's purpose and procedures before agreeing to participate?",
            answers: [
                "Confidentiality",
                "Debriefing",
                "Informed consent ✓",
                "Anonymity"
            ],
            correct: 2
        },
        {
            q: "The placebo effect demonstrates that:",
            answers: [
                "Some medications don't work",
                "Participants' expectations can influence outcomes ✓",
                "Research is unreliable",
                "Control groups are unnecessary"
            ],
            correct: 1
        },
        {
            q: "Which type of research would be BEST for studying whether a new therapy reduces depression?",
            answers: [
                "Naturalistic observation",
                "Case study",
                "Experimental research ✓",
                "Correlational research"
            ],
            correct: 2
        },
        {
            q: "A random sample is important because it:",
            answers: [
                "Increases the likelihood that the sample represents the population ✓",
                "Reduces the cost of research",
                "Makes the study easier to conduct",
                "Eliminates the need for a control group"
            ],
            correct: 0
        },
        {
            q: "The approach that emphasizes personal growth and self-actualization is:",
            answers: [
                "Behavioral",
                "Psychoanalytic",
                "Humanistic ✓",
                "Biological"
            ],
            correct: 2
        },
        {
            q: "Which statement about the scientific method is FALSE?",
            answers: [
                "Theories generate testable hypotheses",
                "Results should be replicable",
                "Personal beliefs should guide interpretation ✓",
                "Observations should be objective"
            ],
            correct: 2
        },
        {
            q: "What is the purpose of debriefing participants after a study?",
            answers: [
                "To pay them for participation",
                "To explain the study's purpose and address any concerns ✓",
                "To recruit more participants",
                "To collect additional data"
            ],
            correct: 1
        }
    ]
};

// Module 1 Discussion Board
const module1Discussion = {
    prompt: `**Discussion: Psychology in Your Life**

Psychology is all around us - in our decisions, relationships, work, and daily experiences. For this discussion, you'll apply psychological concepts to your own life.

**Instructions:**

**Part 1: Initial Post (300+ words)**

Choose ONE psychological approach from Module 1:
- Psychoanalytic (unconscious motives, childhood)
- Behavioral (observable behavior, learning, environment)
- Cognitive (thinking, memory, problem-solving)
- Humanistic (growth, potential, free will)
- Biological (brain, genes, neuroscience)
- Sociocultural (culture, social groups, context)

**Analyze a behavior or pattern you've observed in yourself or others using your chosen approach:**

1. **Describe the behavior:** What is happening? Be specific with examples.

2. **Apply the approach:** How would a psychologist from this approach explain this behavior? What factors would they focus on?

3. **Limitations:** What questions does this approach NOT answer? What would a different approach add?

**Example:** "I notice that I procrastinate on assignments until the night before they're due. From a **behavioral approach**, this could be explained by reinforcement patterns: I've been repeatedly reinforced for last-minute work (I still get decent grades), so the behavior continues. The immediate reinforcement (relief from anxiety) is stronger than the delayed punishment (stress). However, the behavioral approach doesn't explain WHY I find the anxiety relief reinforcing - a **cognitive approach** might explore my thoughts and beliefs about my abilities..."

**Part 2: Peer Responses (150+ words each, respond to 2 classmates)**

- Engage thoughtfully with their analysis
- Suggest how a DIFFERENT psychological approach might add to their explanation
- Share similar or contrasting experiences
- Ask questions that deepen the discussion

**Grading:** See Discussion Rubric (50 points total)`,

    rubric: "Discussion Rubric: Initial Post Quality (20 pts), Peer Engagement (20 pts), Psychological Accuracy (10 pts)"
};

// Module 1 Portfolio Piece
const module1Portfolio = {
    title: "Portfolio Piece #1: Research Methods Application",
    instructions: `**Portfolio Piece #1: Design a Psychological Study (40 points)**

One of the best ways to understand research methods is to design your own study. For this portfolio piece, you'll propose a research study to answer a psychological question you're curious about.

**Instructions:**

**Part 1: Research Question (10 points)**

Choose a psychological question you're genuinely curious about. Examples:
- Does listening to music while studying help or hurt memory?
- Do people conformto group pressure more in person or online?
- Is there a relationship between social media use and loneliness?
- Does mindfulness meditation reduce test anxiety?

**State your research question clearly and explain why it's worth studying.**

---

**Part 2: Research Design (20 points)**

**Choose ONE research method** (experimental, correlational, naturalistic observation, or survey) and explain:

1. **Method Choice:** Why is this the best method for your question?

2. **Participants:** Who would you study? How many? How would you recruit them?

3. **Variables (if experimental or correlational):**
   - What are you measuring?
   - How would you operationally define your variables?
   - For experimental: What is your IV? DV? How would you manipulate the IV?
   - For correlational: What two variables would you measure?

4. **Procedure:** Step-by-step, what would participants do?

5. **Controls:** How would you control for confounding variables? Would you use random assignment, control group, etc.?

6. **What could you conclude?** What would your results tell you? What couldn't you conclude (e.g., causation limits)?

---

**Part 3: Ethical Considerations (10 points)**

Address these ethical principles:
- **Informed Consent:** What would you tell participants before they agree?
- **Potential Risks:** Are there any physical or psychological risks? How would you minimize them?
- **Confidentiality:** How would you protect participant privacy?
- **Debriefing:** What would you tell participants after the study?
- **Deception:** Would any deception be necessary? If so, why is it justified?

---

**Format:** 2-3 pages, organized with clear headings for each section

**Submission:** Upload to Canvas

**Grading:** Research Question (10 pts), Research Design (20 pts), Ethical Considerations (10 pts)`,

    rubric: "See Portfolio Pieces Rubric"
};
