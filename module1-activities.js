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
            { q: "A researcher randomly assigns students to study either with music or in silence, then compares their test scores. Which research method is being used?", answers: ["Survey methodology", "Correlational research", "Experimental method ✓", "Case study approach"], correct: 2 },
            { q: "Ice cream sales and drowning deaths both increase during summer months. What does this relationship demonstrate?", answers: ["A causal relationship between ice cream and drowning", "A correlation likely explained by a third variable (temperature) ✓", "No meaningful relationship between the variables", "An experimental effect requiring further study"], correct: 1 },
            { q: "What is the primary advantage of experimental research compared to correlational studies?", answers: ["Experiments are less expensive to conduct", "Experiments can establish cause-and-effect relationships ✓", "Experiments are always more ethical", "Experiments require fewer participants"], correct: 1 },
            { q: "In a drug study, participants do not know whether they received the actual medication or an inert placebo. What is this research design called?", answers: ["Random assignment procedure", "Single-blind or double-blind study ✓", "Informed consent protocol", "Case study methodology"], correct: 1 },
            { q: "Which psychological perspective primarily examines how brain chemistry and neural processes affect behavior?", answers: ["Psychodynamic perspective", "Humanistic perspective", "Behavioral perspective", "Biological perspective ✓"], correct: 3 },
            { q: "A cognitive psychologist would most likely investigate which of the following topics?", answers: ["How memory encoding and retrieval processes work ✓", "The role of unconscious motives in behavior", "Observable behaviors without reference to mental processes", "Self-actualization and personal growth"], correct: 0 },
            { q: "According to APA ethical guidelines, what must researchers obtain before participants can take part in a study?", answers: ["Permission to use deception in all cases", "Informed consent explaining the study procedures ✓", "Agreement to skip debriefing procedures", "Guarantee of zero discomfort or risk"], correct: 1 },
            { q: "A researcher conducts an intensive, detailed examination of a single patient with a rare brain injury over several years. Which research method is being employed?", answers: ["Experimental method", "Survey research", "Case study ✓", "Naturalistic observation"], correct: 2 },
            { q: "In experimental research, what is the primary purpose of random assignment to conditions?", answers: ["To reduce research costs", "To minimize the time required for data collection", "To reduce pre-existing differences between groups ✓", "To eliminate all ethical concerns"], correct: 2 },
            { q: "A study finds a correlation of +0.80 between exercise and mood, and another finds -0.80 between stress and sleep quality. How do these correlations compare?", answers: ["The positive correlation is stronger than the negative", "The negative correlation is stronger than the positive", "Both correlations are equally strong but in opposite directions ✓", "These correlation coefficients cannot be compared"], correct: 2 }
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
    },
    la4: {
        title: "LA4: Research Ethics Case Analysis",
        questions: [
            { q: "A researcher tells participants that a study is about 'learning strategies' but is actually measuring implicit prejudice. After the study, the researcher explains the deception and the true purpose. How should this be evaluated ethically?", answers: ["This is unethical because deception is never permitted in research", "This is ethical if thorough debriefing occurs and no harm results ✓", "This is unethical because researchers must always tell the complete truth", "This is ethical and no debriefing is necessary"], correct: 1 },
            { q: "A stress research study exposes participants to loud noises that cause temporary discomfort but no lasting physical or psychological effects. Participants provide informed consent and can withdraw at any time. How should this study be evaluated?", answers: ["This is unethical because any participant discomfort is prohibited", "This is ethical if the scientific benefits outweigh the minimal risk ✓", "This is unethical because loud noises are never permissible", "This is ethical only if participants receive substantial monetary compensation"], correct: 1 },
            { q: "A developmental researcher observes children's playground behavior without seeking parental permission. Under what circumstances could this be considered ethical?", answers: ["This is never ethical without explicit parental consent", "This is ethical if the behavior occurs in a public setting and children remain anonymous ✓", "This is ethical as long as the children do not notice the observation", "This is ethical if parents are physically present nearby"], correct: 1 },
            { q: "The infamous Tuskegee syphilis study (1932-1972) violated research ethics primarily by:", answers: ["Including African American men in the research sample", "Withholding available treatment and deceiving participants about their condition ✓", "Continuing the research for an excessive number of years", "Receiving funding from the U.S. government"], correct: 1 },
            { q: "Under which circumstances must a researcher immediately stop a study in progress?", answers: ["When preliminary results are not statistically significant", "When a participant exhibits distress and requests to withdraw from the study ✓", "When the data do not support the original hypothesis", "When the collected data appear inconsistent or difficult to analyze"], correct: 1 },
            { q: "In psychological research, what does the principle of confidentiality require?", answers: ["That absolutely no one can access the research data under any circumstances", "That participant identities are protected when results are reported or published ✓", "That anonymous and confidential research are identical concepts", "That researchers cannot know the identities of their participants"], correct: 1 },
            { q: "What is the primary purpose of an Institutional Review Board (IRB) in research institutions?", answers: ["To protect the professional reputation of researchers", "To protect the welfare and rights of research participants ✓", "To shield the university from potential lawsuits", "To ensure adequate funding for research projects"], correct: 1 },
            { q: "A study finds that an experimental treatment helps participants in Group A but appears to harm participants in Group B. What is the ethically appropriate action?", answers: ["Publish only the positive results from Group A", "Report both positive and negative findings honestly and completely ✓", "Conceal the Group B data to avoid controversy", "Immediately cease all use of the treatment worldwide"], correct: 1 }
        ]
    }
};

const module1Quiz = {
    questions: [
        { q: "How is psychology defined as a scientific discipline?", answers: ["The exclusive study of brain structures and functions", "The study of mental disorders and their treatment", "The scientific study of behavior and mental processes ✓", "The practice of psychotherapy and counseling"], correct: 2 },
        { q: "The psychodynamic perspective in psychology primarily emphasizes which of the following?", answers: ["Observable behaviors and environmental influences", "Unconscious conflicts and early childhood experiences ✓", "Free will and self-determination", "Conscious thought processes and problem-solving"], correct: 1 },
        { q: "A researcher is conducting a study on anxiety treatments. In this study, what would be considered the independent variable?", answers: ["The participants' levels of anxiety", "The type of treatment administered to participants ✓", "The random assignment procedure used", "The characteristics of the participants selected"], correct: 1 },
        { q: "A correlation coefficient of r = -0.70 between hours of sleep and stress levels indicates which of the following?", answers: ["That lack of sleep directly causes increased stress", "That more sleep is associated with lower stress levels ✓", "That there is no meaningful relationship between sleep and stress", "That this represents a positive correlation"], correct: 1 },
        { q: "What is the primary advantage of experimental research methods compared to correlational studies?", answers: ["Experimental methods are less expensive to conduct", "Experimental methods can establish cause-and-effect relationships ✓", "Experimental methods are always more ethical", "Experimental methods require fewer statistical analyses"], correct: 1 },
        { q: "The placebo effect in psychological research demonstrates which important principle?", answers: ["That most medications are actually ineffective", "That participants' expectations can influence research outcomes ✓", "That control groups are unnecessary in research", "That blind study procedures are ineffective"], correct: 1 },
        { q: "According to APA ethical guidelines, under what circumstances is debriefing required after a research study?", answers: ["After the random assignment procedure is complete", "After participants have provided informed consent", "After studies that involved deception or withheld information ✓", "After all research studies without exception"], correct: 2 },
        { q: "The behavioral approach to psychology focuses primarily on which aspect of human experience?", answers: ["Unconscious motivations and desires", "Observable behaviors and environmental contingencies ✓", "Self-actualization and personal growth", "Cognitive processes such as thinking and memory"], correct: 1 },
        { q: "In scientific research, what does the term 'replication' refer to?", answers: ["Using a large number of participants in a single study", "Repeating a study to verify the original findings ✓", "Publishing research results in multiple journals", "Using appropriate control groups in experiments"], correct: 1 },
        { q: "What is the primary purpose of using a double-blind procedure in psychological research?", answers: ["To prevent ethical violations during the study", "To prevent experimenter bias and expectancy effects ✓", "To ensure proper random assignment to conditions", "To eliminate the need for informed consent"], correct: 1 }
    ]
};

const module1Discussion = {
    title: "Discussion #1: Psychology in Your Life",
    prompt: "Choose ONE psychological principle from Module 1 (Confirmation Bias, Bystander Effect, or Classical/Operant Conditioning). Describe the principle in your own words (cite textbook), share a personal example from your own life where you've observed this principle in action, analyze the example using psychological terminology, and reflect on why understanding this principle is useful.",
    requirements: [
        "Initial post: 300+ words with specific example",
        "Cite textbook when defining psychological terms",
        "Respond to 2 peers (150+ words each) who chose different principles",
        "Be respectful and constructive in responses"
    ]
};

const module1Checkpoint = null;
