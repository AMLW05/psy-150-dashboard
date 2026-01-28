// MIDTERM AND FINAL EXAMS

const midtermExam = {
    module: 4,
    title: "Midterm Exam",
    points: 100,
    timeLimit: 90,
    questionCount: 50,
    attempts: 1,
    coverage: "Modules 1-4 (Introduction through Development)",
    instructions: "This exam covers all content from Modules 1-4. You have 90 minutes and ONE attempt. Questions are multiple choice. Once you begin, you must complete it in one sitting. Review your notes and textbook before starting.",
    linkedCLOs: ["CLO1", "CLO2", "CLO3", "CLO4", "CLO5"],

    questions: [
        // Module 1: Introduction & Research (12 questions)
        { q: "The science of psychology is best defined as:", answers: ["Study of mental disorders", "Study of the mind", "Scientific study of behavior and mental processes ✓", "Study of the unconscious"], correct: 2, module: 1 },
        { q: "Structuralism, founded by Wundt, focused on:", answers: ["Observable behavior only", "Breaking mental processes into basic components ✓", "How mental processes help adaptation", "Unconscious conflicts"], correct: 1, module: 1 },
        { q: "Behaviorism rejected study of mental processes because:", answers: ["They don't exist", "They cannot be directly observed ✓", "Only behavior matters", "Skinner said so"], correct: 1, module: 1 },
        { q: "In an experiment studying sleep and memory, the independent variable is:", answers: ["Memory test scores", "Amount of sleep ✓", "Participant age", "Time of day"], correct: 1, module: 1 },
        { q: "Correlation coefficient r = -0.85 indicates:", answers: ["Weak negative correlation", "Strong negative correlation ✓", "Weak positive correlation", "No relationship"], correct: 1, module: 1 },
        { q: "Random assignment in experiments ensures:", answers: ["Large sample size", "Groups are equivalent before manipulation ✓", "No confounds exist", "Results are significant"], correct: 1, module: 1 },
        { q: "Placebo effect demonstrates:", answers: ["Medications don't work", "Expectations can influence outcomes ✓", "Control groups are unnecessary", "Blind studies fail"], correct: 1, module: 1 },
        { q: "Informed consent in research means:", answers: ["No deception allowed", "Participants understand procedures before agreeing ✓", "Payment is required", "IRB approves study"], correct: 1, module: 1 },
        { q: "Naturalistic observation advantage:", answers: ["Establishes causation", "Observes behavior in real-world context ✓", "Controls all variables", "Quick and cheap"], correct: 1, module: 1 },
        { q: "Operational definition means:", answers: ["Defining surgery procedures", "Specifying how variables will be measured ✓", "Explaining hypothesis", "Describing participants"], correct: 1, module: 1 },
        { q: "Which violates research ethics:", answers: ["Using deception with debriefing", "Causing lasting psychological harm ✓", "Requiring informed consent", "Using random assignment"], correct: 1, module: 1 },
        { q: "Replication in science serves to:", answers: ["Save money", "Verify findings across studies ✓", "Prove hypothesis", "Avoid statistics"], correct: 1, module: 1 },

        // Module 2: Biopsychology & Sensation/Perception (13 questions)
        { q: "Neurotransmitters cross the:", answers: ["Axon", "Cell body", "Synapse ✓", "Dendrite"], correct: 2, module: 2 },
        { q: "Low serotonin is associated with:", answers: ["Parkinson's disease", "Depression ✓", "Schizophrenia", "ADHD"], correct: 1, module: 2 },
        { q: "Split-brain patients cannot:", answers: ["See with left eye", "Verbally report what left visual field sees ✓", "Move left side", "Remember anything"], correct: 1, module: 2 },
        { q: "Broca's area damage causes:", answers: ["Cannot understand speech", "Cannot produce fluent speech ✓", "Memory loss", "Vision problems"], correct: 1, module: 2 },
        { q: "Sympathetic nervous system activation:", answers: ["Decreases heart rate", "Increases alertness and energy ✓", "Aids digestion", "Promotes sleep"], correct: 1, module: 2 },
        { q: "Hippocampus is critical for:", answers: ["Emotion regulation", "Forming new long-term memories ✓", "Vision", "Motor control"], correct: 1, module: 2 },
        { q: "Absolute threshold is:", answers: ["Maximum stimulus detected", "Minimum stimulus detected 50% of the time ✓", "Point where pain begins", "Difference between stimuli"], correct: 1, module: 2 },
        { q: "Sensory adaptation means:", answers: ["Improving perception over time", "Decreased sensitivity after prolonged exposure ✓", "Adjusting to darkness", "Learning to perceive better"], correct: 1, module: 2 },
        { q: "Gate-control theory explains:", answers: ["Vision", "Pain perception ✓", "Hearing", "Smell"], correct: 1, module: 2 },
        { q: "Rods vs. cones:", answers: ["Rods for color, cones for black/white", "Rods for dim light, cones for color/detail ✓", "No difference", "Rods only in center"], correct: 1, module: 2 },
        { q: "Cochlea is part of:", answers: ["Eye", "Ear ✓", "Brain", "Nose"], correct: 1, module: 2 },
        { q: "Bottom-up processing:", answers: ["Starts with expectations", "Starts with sensory input building up ✓", "Only uses top-down", "Requires no sensation"], correct: 1, module: 2 },
        { q: "Perceptual set is influenced by:", answers: ["Nothing", "Expectations and context ✓", "Only biology", "Random chance"], correct: 1, module: 2 },

        // Module 3: Learning & Memory (13 questions)
        { q: "In classical conditioning, the conditioned stimulus:", answers: ["Naturally causes response", "Becomes associated with unconditioned stimulus ✓", "Is the response", "Doesn't matter"], correct: 1, module: 3 },
        { q: "Positive reinforcement:", answers: ["Removes unpleasant stimulus", "Adds pleasant stimulus to increase behavior ✓", "Decreases behavior", "Punishes behavior"], correct: 1, module: 3 },
        { q: "Negative reinforcement:", answers: ["Punishment", "Removes unpleasant stimulus to increase behavior ✓", "Adds negative stimulus", "Decreases behavior"], correct: 1, module: 3 },
        { q: "Taking aspirin to remove headache is example of:", answers: ["Positive reinforcement", "Negative reinforcement ✓", "Punishment", "Extinction"], correct: 1, module: 3 },
        { q: "Variable ratio schedule produces:", answers: ["Slow responding", "Highest, most persistent responding ✓", "Quick extinction", "No learning"], correct: 1, module: 3 },
        { q: "Bandura's Bobo doll study demonstrated:", answers: ["Classical conditioning", "Observational learning of aggression ✓", "Operant conditioning", "Memory formation"], correct: 1, module: 3 },
        { q: "Working memory is similar to:", answers: ["Long-term memory", "Short-term memory with active processing ✓", "Sensory memory", "Procedural memory"], correct: 1, module: 3 },
        { q: "Episodic memory stores:", answers: ["Facts", "Skills", "Personal experiences and events ✓", "Unconscious procedures"], correct: 2, module: 3 },
        { q: "Long-term potentiation (LTP):", answers: ["Weakens synapses", "Strengthens synaptic connections with use ✓", "Has no effect", "Only occurs in children"], correct: 1, module: 3 },
        { q: "Misinformation effect shows:", answers: ["Memory is perfect", "False information can alter memories ✓", "No memory errors occur", "Only affects children"], correct: 1, module: 3 },
        { q: "Elaborative rehearsal improves memory by:", answers: ["Simple repetition", "Connecting new info to existing knowledge ✓", "Cramming", "Speed reading"], correct: 1, module: 3 },
        { q: "Spacing effect supports:", answers: ["Cramming", "Distributed practice over time ✓", "Massed practice", "One study session"], correct: 1, module: 3 },
        { q: "H.M. case study showed hippocampus is critical for:", answers: ["All memory", "Forming new long-term memories ✓", "Short-term memory only", "No memory function"], correct: 1, module: 3 },

        // Module 4: Cognition, Intelligence & Development (12 questions)
        { q: "Heuristics are:", answers: ["Guaranteed solutions", "Mental shortcuts that can lead to errors ✓", "Always accurate", "Only used by experts"], correct: 1, module: 4 },
        { q: "Confirmation bias means:", answers: ["Confirming hypotheses", "Seeking information that supports existing beliefs ✓", "Objective thinking", "Testing all possibilities"], correct: 1, module: 4 },
        { q: "Availability heuristic:", answers: ["Judging by how easily examples come to mind ✓", "Using all available information", "Systematic analysis", "Avoiding bias"], correct: 0, module: 4 },
        { q: "Fluid intelligence:", answers: ["Knowledge accumulated over time", "Ability to solve novel problems ✓", "Social skills", "Emotional understanding"], correct: 1, module: 4 },
        { q: "Piaget's concrete operational stage (7-11 years) achieves:", answers: ["Abstract thinking", "Conservation and logical operations with concrete objects ✓", "Object permanence", "Symbolic thought only"], correct: 1, module: 4 },
        { q: "Object permanence develops around:", answers: ["Birth", "8-12 months ✓", "2 years", "5 years"], correct: 1, module: 4 },
        { q: "Theory of mind (age 3-4) means understanding:", answers: ["Physics", "Others have different thoughts and beliefs ✓", "Conservation", "Abstract concepts"], correct: 1, module: 4 },
        { q: "Harlow's monkey studies showed:", answers: ["Food is most important", "Contact comfort more important than food ✓", "No attachment needed", "Punishment works"], correct: 1, module: 4 },
        { q: "Authoritative parenting combines:", answers: ["High demands, low responsiveness", "High demands and high responsiveness ✓", "Low demands, low responsiveness", "No rules"], correct: 1, module: 4 },
        { q: "Erikson's identity vs. role confusion occurs:", answers: ["Infancy", "Adolescence ✓", "Young adulthood", "Old age"], correct: 1, module: 4 },
        { q: "Vygotsky emphasized:", answers: ["Individual discovery only", "Social/cultural influences on development ✓", "Fixed stages", "Genetics only"], correct: 1, module: 4 },
        { q: "Flynn effect shows:", answers: ["IQ declining", "IQ scores rising over generations ✓", "No change", "Genetics is everything"], correct: 1, module: 4 }
    ]
};

const finalExam = {
    module: 8,
    title: "Final Exam",
    points: 100,
    timeLimit: 120,
    questionCount: 50,
    attempts: 1,
    coverage: "Cumulative: All Modules 1-8 (emphasis on Modules 5-8)",
    instructions: "This comprehensive final exam covers all course material from Modules 1-8, with greater emphasis on Modules 5-8. You have 120 minutes and ONE attempt. Review all module content before starting.",
    linkedCLOs: ["CLO1", "CLO2", "CLO3", "CLO4", "CLO5"],

    questions: [
        // Review Questions from Modules 1-4 (15 questions)
        { q: "Correlation does NOT imply:", answers: ["Relationship exists", "Causation ✓", "Statistical association", "Variables are related"], correct: 1, module: 1 },
        { q: "Double-blind study prevents:", answers: ["Participants knowing condition", "Experimenter bias ✓", "All bias", "Random assignment"], correct: 1, module: 1 },
        { q: "Neuroplasticity means brain can:", answers: ["Never change", "Reorganize and form new connections ✓", "Only grow", "Only shrink"], correct: 1, module: 2 },
        { q: "Phantom limb pain demonstrates:", answers: ["Brain creates pain even without limb ✓", "Pain is imaginary", "No treatment exists", "Only physical causes"], correct: 0, module: 2 },
        { q: "Extinction in classical conditioning occurs when:", answers: ["CS presented without US repeatedly ✓", "Punishment used", "Learning happens", "Reinforcement given"], correct: 0, module: 3 },
        { q: "Distributed practice is better than massed because of:", answers: ["Spacing effect ✓", "Cramming works", "Time savings", "Easier to do"], correct: 0, module: 3 },
        { q: "Functional fixedness prevents:", answers: ["Seeing new uses for familiar objects ✓", "Problem solving entirely", "Learning", "Memory"], correct: 0, module: 4 },
        { q: "Sternberg's triarchic theory includes:", answers: ["Only IQ", "Analytical, creative, and practical intelligence ✓", "One type only", "No intelligence"], correct: 1, module: 4 },
        { q: "Accommodation in Piaget's theory:", answers: ["Fitting new info into schemas", "Changing schemas to fit new information ✓", "Resisting change", "Forgetting"], correct: 1, module: 4 },
        { q: "Telegraphic speech ("want cookie") occurs around:", answers: ["6 months", "Age 2 ✓", "Age 5", "Adolescence"], correct: 1, module: 4 },
        { q: "Fundamental attribution error means:", answers: ["Accurate attributions", "Overestimating dispositional factors in others' behavior ✓", "No bias", "Situational focus"], correct: 1, module: 4 },
        { q: "Meta-analysis is useful for:", answers: ["One study only", "Combining results across multiple studies ✓", "Replacing research", "Avoiding statistics"], correct: 1, module: 1 },
        { q: "Wernicke's area damage impairs:", answers: ["Speech production", "Speech comprehension ✓", "Vision", "Memory"], correct: 1, module: 2 },
        { q: "Implicit memory includes:", answers: ["Episodic memory", "Procedural skills and priming ✓", "Explicit recall", "Working memory"], correct: 1, module: 3 },
        { q: "Cross-sectional vs. longitudinal studies:", answers: ["Same thing", "Cross-sectional: different ages at once; Longitudinal: same people over time ✓", "Longitudinal is faster", "No difference"], correct: 1, module: 4 },

        // Module 5: Motivation & Emotion (8 questions)
        { q: "Drive-reduction theory explains motivation as:", answers: ["Seeking optimal arousal", "Reducing biological needs to restore homeostasis ✓", "Only external rewards", "No biological basis"], correct: 1, module: 5 },
        { q: "Intrinsic motivation:", answers: ["External rewards drive behavior", "Inherent satisfaction drives behavior ✓", "Only money matters", "Doesn't exist"], correct: 1, module: 5 },
        { q: "Self-determination theory emphasizes:", answers: ["External control", "Autonomy, competence, and relatedness ✓", "Only money", "Punishment"], correct: 1, module: 5 },
        { q: "James-Lange theory states:", answers: ["Emotion causes arousal", "Physiological arousal causes emotion ✓", "Cognition causes emotion", "No arousal needed"], correct: 1, module: 5 },
        { q: "Schachter-Singer two-factor theory requires:", answers: ["Only arousal", "Arousal plus cognitive label ✓", "Only cognition", "Neither"], correct: 1, module: 5 },
        { q: "General Adaptation Syndrome stages:", answers: ["One stage only", "Alarm, resistance, exhaustion ✓", "No stages", "Four stages"], correct: 1, module: 5 },
        { q: "Problem-focused coping is best when stressor is:", answers: ["Uncontrollable", "Controllable ✓", "Never effective", "Always worse"], correct: 1, module: 5 },
        { q: "Yerkes-Dodson law suggests:", answers: ["More arousal always better", "Moderate arousal optimal for performance ✓", "No arousal needed", "Maximum arousal best"], correct: 1, module: 5 },

        // Module 6: Personality & Social (9 questions)
        { q: "Big Five personality traits (OCEAN):", answers: ["4 traits", "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism ✓", "10 traits", "2 traits"], correct: 1, module: 6 },
        { q: "Freud's psychodynamic theory emphasizes:", answers: ["Observable behavior only", "Unconscious conflicts and childhood ✓", "Conscious thoughts only", "No unconscious"], correct: 1, module: 6 },
        { q: "Rogers' person-centered therapy focuses on:", answers: ["Unconscious", "Unconditional positive regard and self-actualization ✓", "Behavior only", "Medication"], correct: 1, module: 6 },
        { q: "Asch's conformity study found:", answers: ["No one conforms", "About 75% conformed at least once to wrong answer ✓", "100% conformity", "Conformity is rare"], correct: 1, module: 6 },
        { q: "Milgram's obedience study showed:", answers: ["No obedience", "About 65% delivered maximum shock when ordered ✓", "Everyone refused", "Only 10% obeyed"], correct: 1, module: 6 },
        { q: "Cognitive dissonance resolution often involves:", answers: ["Ignoring conflict", "Changing attitudes to match behavior ✓", "No change", "Only changing behavior"], correct: 1, module: 6 },
        { q: "Bystander effect means:", answers: ["More helpers with more bystanders", "Less likely to help when others present ✓", "No effect of others", "Always help"], correct: 1, module: 6 },
        { q: "Self-serving bias helps:", answers: ["Accurate assessment", "Maintain self-esteem ✓", "Understand others", "Nothing"], correct: 1, module: 6 },
        { q: "Fundamental attribution error occurs when:", answers: ["Accurately attributing", "Overestimating dispositional factors for others ✓", "No bias", "Situational only"], correct: 1, module: 6 },

        // Module 7: Disorders & Treatment (9 questions)
        { q: "DSM-5 is:", answers: ["Treatment manual", "Diagnostic classification system ✓", "Theory book", "History book"], correct: 1, module: 7 },
        { q: "Diathesis-stress model explains disorders as:", answers: ["Only biological", "Interaction of vulnerability and stress ✓", "Only environmental", "No causes"], correct: 1, module: 7 },
        { q: "Major depression vs. bipolar disorder:", answers: ["Same thing", "Bipolar includes manic episodes ✓", "Depression more severe", "Bipolar is only mania"], correct: 1, module: 7 },
        { q: "Hallucinations vs. delusions:", answers: ["Same thing", "Hallucinations: false perceptions; Delusions: false beliefs ✓", "Only visual", "Only thoughts"], correct: 1, module: 7 },
        { q: "CBT (Cognitive-Behavioral Therapy) targets:", answers: ["Only thoughts", "Maladaptive thoughts and behaviors ✓", "Only behavior", "Unconscious only"], correct: 1, module: 7 },
        { q: "SSRIs treat depression by:", answers: ["Blocking dopamine", "Increasing serotonin availability ✓", "Sedation", "Affecting GABA"], correct: 1, module: 7 },
        { q: "Exposure therapy is effective for:", answers: ["Schizophrenia", "Anxiety disorders and phobias ✓", "Bipolar", "All disorders"], correct: 1, module: 7 },
        { q: "Evidence-based practice integrates:", answers: ["Only research", "Research evidence, clinical expertise, and patient values ✓", "Only experience", "Only patient preference"], correct: 1, module: 7 },
        { q: "Learned helplessness (Seligman) relates to:", answers: ["Anxiety", "Depression after uncontrollable negative events ✓", "Schizophrenia", "Nothing"], correct: 1, module: 7 },

        // Module 8: Applied Psychology & Integration (9 questions)
        { q: "Industrial-Organizational psychology applies to:", answers: ["Only therapy", "Workplace issues: hiring, motivation, productivity ✓", "Only schools", "Only research"], correct: 1, module: 8 },
        { q: "Health psychology uses biopsychosocial model to address:", answers: ["Only illness", "Biological, psychological, and social factors in health ✓", "Only biology", "Only behavior"], correct: 1, module: 8 },
        { q: "Positive psychology (Seligman) studies:", answers: ["Only disorders", "Strengths, well-being, and optimal functioning ✓", "Negative only", "Pathology"], correct: 1, module: 8 },
        { q: "Cultural psychology shows:", answers: ["All processes universal", "Many processes are culturally shaped ✓", "No cultural differences", "Only biology matters"], correct: 1, module: 8 },
        { q: "Replication crisis emphasizes need for:", answers: ["Less research", "Rigorous methods and transparency ✓", "Hiding failures", "Only new findings"], correct: 1, module: 8 },
        { q: "Psychology as science emphasizes:", answers: ["Only intuition", "Empirical evidence and systematic observation ✓", "Anecdotes", "No methods"], correct: 1, module: 8 },
        { q: "Biopsychosocial model's value:", answers: ["Simpler than one factor", "Integrates multiple levels of analysis ✓", "Ignores biology", "Only social"], correct: 1, module: 8 },
        { q: "Psychological literacy enables:", answers: ["Diagnosing others", "Understanding behavior, thinking critically, applying principles ✓", "Replacing professionals", "Nothing"], correct: 1, module: 8 },
        { q: "APA ethics code requires psychologists to:", answers: ["Maximize profit", "Do no harm, respect dignity, maintain integrity ✓", "Guarantee outcomes", "Avoid diversity"], correct: 1, module: 8 }
    ]
};
