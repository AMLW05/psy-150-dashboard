// Module 2: Biopsychology, Sensation & Perception
// Complete Activity Data

const module2Activities = {
    la1: {
        questions: [
            { term: "Neuron", def: "A nerve cell; the basic building block of the nervous system" },
            { term: "Dendrites", def: "Branch-like extensions that receive messages from other neurons" },
            { term: "Axon", def: "Long fiber that transmits neural impulses away from the cell body" },
            { term: "Synapse", def: "The gap between neurons where neurotransmitters are released" },
            { term: "Neurotransmitter", def: "Chemical messengers that cross the synapse to carry signals between neurons" },
            { term: "Dopamine", def: "Neurotransmitter involved in reward, motivation, and motor control" },
            { term: "Serotonin", def: "Neurotransmitter that regulates mood, sleep, and appetite" },
            { term: "Frontal Lobe", def: "Brain region responsible for planning, decision-making, and personality" },
            { term: "Temporal Lobe", def: "Brain region involved in auditory processing and memory" },
            { term: "Hippocampus", def: "Brain structure crucial for forming new memories" },
            { term: "Amygdala", def: "Brain structure involved in processing emotions, especially fear" },
            { term: "Biopsychosocial Model", def: "Framework that explains behavior through biological, psychological, and social factors" },
            { term: "Sensation", def: "The process of detecting physical energy from the environment" },
            { term: "Perception", def: "The process of organizing and interpreting sensory information" },
            { term: "Absolute Threshold", def: "The minimum stimulus intensity needed to detect a stimulus 50% of the time" }
        ]
    },
    la2: {
        caseStudies: [
            {
                name: "Phineas Gage (1848)",
                description: "Railroad worker who survived an iron rod passing through his frontal lobe. After the accident, his personality changed dramatically - he became impulsive, inappropriate, and unable to plan for the future.",
                questions: [
                    "Which brain region was damaged?",
                    "What functions did Phineas lose?",
                    "What does this tell us about frontal lobe function?"
                ],
                answers: {
                    region: "Frontal lobe (prefrontal cortex)",
                    functions: "Impulse control, planning, social judgment, personality regulation",
                    significance: "Demonstrates that personality and decision-making are linked to specific brain regions"
                }
            },
            {
                name: "H.M. (Henry Molaison, 1953)",
                description: "To treat severe epilepsy, surgeons removed parts of H.M.'s temporal lobes, including the hippocampus. He could no longer form new long-term memories, though his short-term memory and older memories remained intact.",
                questions: [
                    "Which brain structure was removed?",
                    "What type of memory was affected?",
                    "What remained intact?"
                ],
                answers: {
                    region: "Hippocampus (in temporal lobes)",
                    functions: "Forming new long-term memories (anterograde amnesia)",
                    significance: "Demonstrated hippocampus is essential for memory consolidation"
                }
            },
            {
                name: "Jill Bolte Taylor (2008)",
                description: "Neuroscientist who had a stroke in her left hemisphere. She lost language abilities, analytical thinking, and sense of time but reported feeling euphoric and connected to everything. After recovery, she wrote about experiencing the different functions of her two hemispheres.",
                questions: [
                    "Which hemisphere was damaged?",
                    "What functions were lost?",
                    "What abilities remained with the right hemisphere?"
                ],
                answers: {
                    region: "Left hemisphere",
                    functions: "Language, analytical thinking, linear time sense, detail-focused processing",
                    significance: "Illustrates hemispheric specialization and how the right hemisphere processes holistic, spatial, and emotional information"
                }
            }
        ]
    },
    la3: {
        title: "Perception & Illusions Lab",
        illusions: [
            { name: "Müller-Lyer Illusion", principle: "Context affects length perception" },
            { name: "Ponzo Illusion", principle: "Depth cues influence size perception" },
            { name: "Checker Shadow Illusion", principle: "Context affects brightness perception" },
            { name: "Motion-Induced Blindness", principle: "Attention limits what we perceive" },
            { name: "Necker Cube", principle: "Perception alternates between interpretations" }
        ]
    },
    la4: {
        dataAnalysis: {
            title: "Interpreting Brain Imaging Data",
            chartData: {
                title: "fMRI Brain Activity During Different Tasks",
                description: "This chart shows which brain regions are active during various cognitive tasks"
            },
            questions: [
                { q: "Which brain region shows most activity during language tasks?", a: "Left frontal lobe (Broca's area) and left temporal lobe (Wernicke's area)" },
                { q: "What does it mean when multiple brain regions are active during a complex task?", a: "Complex tasks require coordination across brain networks; different regions contribute different functions" },
                { q: "How does brain imaging support the concept of localization of function?", a: "Shows that specific brain regions are consistently active during specific tasks" }
            ]
        }
    }
};

const module2Quiz = {
    questions: [
        { q: "What is the function of dendrites?", answers: ["Transmit signals away from the cell body", "Receive messages from other neurons ✓", "Produce neurotransmitters", "Provide energy to the neuron"], correct: 1 },
        { q: "The gap between two neurons where neurotransmitters are released is called:", answers: ["Axon", "Dendrite", "Synapse ✓", "Soma"], correct: 2 },
        { q: "Which neurotransmitter is associated with reward and motivation?", answers: ["Serotonin", "GABA", "Dopamine ✓", "Acetylcholine"], correct: 2 },
        { q: "Damage to which brain structure would most likely impair memory formation?", answers: ["Amygdala", "Hippocampus ✓", "Cerebellum", "Medulla"], correct: 1 },
        { q: "The frontal lobe is primarily responsible for:", answers: ["Processing visual information", "Planning and decision-making ✓", "Hearing and language comprehension", "Regulating heartbeat"], correct: 1 },
        { q: "The case of Phineas Gage is important because it showed:", answers: ["The brain cannot recover from injury", "Personality is linked to brain structure ✓", "Memory depends on the hippocampus", "Language is in the left hemisphere"], correct: 1 },
        { q: "The biopsychosocial model explains behavior using:", answers: ["Only biological factors", "Only psychological factors", "Biological, psychological, and social factors ✓", "Only social factors"], correct: 2 },
        { q: "Sensation refers to:", answers: ["Interpreting sensory information", "Detecting physical energy from the environment ✓", "Making decisions about stimuli", "Storing sensory information"], correct: 1 },
        { q: "Perception refers to:", answers: ["Detecting physical energy", "Organizing and interpreting sensory information ✓", "Transmitting neural signals", "Releasing neurotransmitters"], correct: 1 },
        { q: "Why do optical illusions occur?", answers: ["Our eyes are defective", "Our brain uses shortcuts and context to interpret sensory information ✓", "Optical illusions are real, not perceptual", "We lack sufficient visual receptors"], correct: 1 },
        { q: "The absolute threshold is:", answers: ["The maximum stimulus we can detect", "The minimum intensity needed to detect a stimulus 50% of the time ✓", "The point where two stimuli seem identical", "The time it takes to respond to a stimulus"], correct: 1 },
        { q: "Bottom-up processing:", answers: ["Starts with our expectations and knowledge", "Starts with sensory input and builds up to perception ✓", "Only occurs in the visual system", "Is slower than top-down processing"], correct: 1 },
        { q: "Top-down processing:", answers: ["Starts with sensory receptors", "Uses our knowledge and expectations to interpret sensations ✓", "Only occurs when sensory input is clear", "Doesn't involve the brain"], correct: 1 },
        { q: "What does H.M.'s case teach us about memory?", answers: ["Memory requires the frontal lobe", "The hippocampus is essential for forming new long-term memories ✓", "Short-term memory depends on the amygdala", "Memory cannot be studied scientifically"], correct: 1 },
        { q: "Which statement about brain plasticity is TRUE?", answers: ["The brain cannot change after childhood", "The brain can reorganize and form new connections throughout life ✓", "Brain damage is always permanent", "Only the hippocampus shows plasticity"], correct: 1 }
    ]
};

const module2Discussion = {
    prompt: `**Discussion: Biopsychosocial Integration**

The biopsychosocial model is one of psychology's most important frameworks. It recognizes that behavior and mental processes result from the interaction of biological, psychological, and social factors.

**Instructions:**

**Part 1: Initial Post (300+ words)**

Choose a behavior or mental process to analyze through all three levels:
- Emotion (e.g., anxiety, happiness, anger)
- Memory
- Motivation
- Addiction
- Stress response
- Or another psychological phenomenon

**Analyze your chosen phenomenon at ALL THREE levels:**

**1. Biological Level:**
- What brain structures are involved?
- What neurotransmitters or hormones play a role?
- Are there genetic influences?

**2. Psychological Level:**
- What cognitive processes are involved (thoughts, beliefs, interpretations)?
- What learning or past experiences contribute?
- What individual differences matter (personality, coping style)?

**3. Social/Cultural Level:**
- How do relationships and social support affect this?
- What cultural factors influence it?
- How does the social environment matter?

**4. Integration:**
- How do these three levels interact?
- Why is considering all three levels important?

**Part 2: Peer Responses (150+ words each, 2 peers)**

- Expand on one of the levels they discussed
- Share additional research or examples
- Make connections to course concepts
- Ask thoughtful questions

**Grading:** See Discussion Rubric (50 points)`,
    rubric: "Discussion Rubric"
};

const module2Portfolio = {
    title: "Portfolio Piece #2: Biopsychosocial Analysis",
    instructions: `Analyze a specific behavior or disorder using the biopsychosocial model. Include diagrams, images, or visual representations. 2 pages + visuals. (40 points)`,
    rubric: "Portfolio Rubric"
};
