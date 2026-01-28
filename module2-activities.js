// Module 2: Biopsychology & Sensation/Perception
const module2Activities = {
    la1: {
        questions: [
            { term: "Neuron", def: "Basic building block of nervous system; transmits information" },
            { term: "Synapse", def: "Gap between neurons where neurotransmitters are released" },
            { term: "Neurotransmitter", def: "Chemical messenger crossing synapse (e.g., dopamine, serotonin)" },
            { term: "Central Nervous System", def: "Brain and spinal cord" },
            { term: "Peripheral Nervous System", def: "All nerves outside brain and spinal cord" },
            { term: "Amygdala", def: "Brain structure involved in emotion processing, especially fear" },
            { term: "Hippocampus", def: "Brain structure crucial for memory formation" },
            { term: "Cerebral Cortex", def: "Outer layer of brain responsible for higher functions" },
            { term: "Hemispheric Specialization", def: "Different functions of left (language) and right (spatial) brain" },
            { term: "Absolute Threshold", def: "Minimum stimulus intensity detected 50% of the time" },
            { term: "Sensory Adaptation", def: "Decreased sensitivity after prolonged exposure to stimulus" },
            { term: "Perceptual Set", def: "Tendency to perceive based on expectations and context" },
            { term: "Gate-Control Theory", def: "Spinal cord contains gate that blocks/allows pain signals" },
            { term: "Trichromatic Theory", def: "Color vision based on three types of cones (red, green, blue)" },
            { term: "Cochlea", def: "Spiral fluid-filled structure in ear converting sound waves" }
        ]
    },
    la2: {
        questions: [
            { q: "A patient has sustained damage to Broca's area in the frontal lobe. Which symptom would this patient most likely exhibit?", answers: ["Inability to comprehend spoken language", "Difficulty producing fluent, grammatical speech ✓", "Complete loss of vision", "Severe memory impairment"], correct: 1 },
            { q: "Which neurotransmitter is primarily involved in mood regulation and has been strongly implicated in clinical depression?", answers: ["Acetylcholine", "Dopamine", "Serotonin ✓", "GABA (gamma-aminobutyric acid)"], correct: 2 },
            { q: "A split-brain patient (whose corpus callosum has been severed) is shown a word in the left visual field only. What would be the expected response?", answers: ["The patient can verbally report the word", "The patient cannot verbally report the word but can point to it with the left hand ✓", "The patient sees nothing at all", "The patient responds normally with no impairment"], correct: 1 },
            { q: "When you enter a dark movie theater, your vision gradually improves and you can see better after several minutes. Which sensory process explains this phenomenon?", answers: ["Sensory adaptation (dark adaptation) ✓", "Perceptual set", "Gate-control theory of pain", "Absolute threshold adjustment"], correct: 0 },
            { q: "According to gate-control theory, rubbing or massaging an injured area can reduce pain perception. Which principle explains this effect?", answers: ["Trichromatic color theory", "Gate-control theory: touch signals compete with pain signals ✓", "Place theory of pitch perception", "Signal detection theory"], correct: 1 },
            { q: "When the sympathetic nervous system is activated during a stress response, which physiological changes typically occur?", answers: ["Increased digestive activity", "Increased heart rate and heightened alertness ✓", "Promotion of sleep and rest", "Enhanced long-term memory formation"], correct: 1 },
            { q: "Functional magnetic resonance imaging (fMRI) is a neuroimaging technique that allows researchers to:", answers: ["Measure brain activity by detecting blood flow changes ✓", "Record electrical activity from individual neurons", "Directly stimulate specific brain regions", "Measure neurotransmitter concentrations in synapses"], correct: 0 },
            { q: "Some individuals who have had limbs amputated continue to experience pain sensations from the missing limb (phantom limb pain). What does this phenomenon demonstrate?", answers: ["That the pain is purely imaginary and not real", "That the brain can create pain perceptions even without physical input from the limb ✓", "That gate-control mechanisms have completely failed", "That sensory adaptation has occurred abnormally"], correct: 0 },
            { q: "In perception, bottom-up processing refers to which type of information flow?", answers: ["Prior expectations and knowledge shape perception", "Sensory input drives perception from basic stimuli upward to higher cognition ✓", "Only top-down processing occurs in perception", "Perception occurs without any sensory input"], correct: 1 },
            { q: "Damage to the hippocampus would most severely impair which cognitive function?", answers: ["Regulation of emotional responses", "Formation of new long-term memories ✓", "Production of spoken language", "Voluntary motor control"], correct: 1 }
        ]
    },
    la3: {
        brainStructureMatching: {
            structures: [
                { name: "Frontal Lobe", function: "Executive functions, planning, personality" },
                { name: "Parietal Lobe", function: "Sensory processing, spatial awareness" },
                { name: "Temporal Lobe", function: "Auditory processing, memory, language comprehension" },
                { name: "Occipital Lobe", function: "Visual processing" },
                { name: "Cerebellum", function: "Coordination, balance, motor learning" },
                { name: "Thalamus", function: "Sensory relay station (except smell)" },
                { name: "Hypothalamus", function: "Homeostasis, hunger, thirst, temperature" },
                { name: "Amygdala", function: "Emotion, fear, aggression" },
                { name: "Hippocampus", function: "Memory formation and consolidation" },
                { name: "Brainstem", function: "Vital functions: breathing, heart rate" }
            ]
        },
        neurotransmitterCategorization: {
            scenarios: [
                { symptom: "Low mood, depression symptoms", neurotransmitter: "Serotonin" },
                { symptom: "Parkinson's motor symptoms", neurotransmitter: "Dopamine" },
                { symptom: "Muscle contraction, Alzheimer's memory loss", neurotransmitter: "Acetylcholine" },
                { symptom: "Anxiety, inhibition problems", neurotransmitter: "GABA" },
                { symptom: "Pain signal transmission", neurotransmitter: "Substance P" },
                { symptom: "Schizophrenia positive symptoms", neurotransmitter: "Dopamine (excess)" },
                { symptom: "Stress response, alertness", neurotransmitter: "Norepinephrine" },
                { symptom: "Natural pain relief, runner's high", neurotransmitter: "Endorphins" },
                { symptom: "Seizures, excitation issues", neurotransmitter: "Glutamate" },
                { symptom: "Learning, memory, excitatory transmission", neurotransmitter: "Glutamate" }
            ]
        }
    },
    la4: {
        title: "LA4: Neuroscience Case Analysis",
        questions: [
            { q: "A patient can understand spoken language perfectly but cannot produce fluent speech (they know what they want to say but cannot form the words). Which brain area has most likely been damaged?", answers: ["Wernicke's area", "Broca's area ✓", "Hippocampus", "Amygdala"], correct: 1 },
            { q: "A patient cannot form new long-term memories but can remember events from childhood perfectly (similar to patient H.M.). Which brain structure has most likely been damaged?", answers: ["Frontal lobe", "Hippocampus ✓", "Cerebellum", "Occipital lobe"], correct: 1 },
            { q: "A patient exhibits tremors, difficulty initiating movements, and overall slowed motor function. Which neurotransmitter is most likely deficient in this patient?", answers: ["Serotonin", "Dopamine ✓", "Acetylcholine", "GABA"], correct: 1 },
            { q: "After sustaining damage to the amygdala, a patient would most likely exhibit changes in which area?", answers: ["Long-term memory formation", "Fear responses and emotional reactivity ✓", "Language production and comprehension", "Fine motor control and coordination"], correct: 1 },
            { q: "A split-brain patient is shown an image of a spoon in the LEFT visual field only. What would be the expected response?", answers: ["The patient will verbally say 'spoon'", "The patient cannot name it verbally but can point to it with the left hand ✓", "The patient will report seeing nothing", "The patient will name it normally without impairment"], correct: 1 },
            { q: "A patient experiencing anxiety is prescribed an SSRI medication (such as Prozac or Zoloft). How do these medications work to reduce anxiety?", answers: ["By decreasing serotonin levels in the brain", "By increasing serotonin availability in synapses ✓", "By blocking dopamine receptors", "By reducing GABA activity"], correct: 1 },
            { q: "After sustaining severe frontal lobe damage (as in the famous case of Phineas Gage), in which areas would changes most likely occur?", answers: ["Long-term memory storage only", "Personality characteristics and impulse control ✓", "Visual perception", "Auditory processing"], correct: 1 },
            { q: "A person who has undergone limb amputation continues to experience pain sensations from the missing limb (phantom limb pain). What does this phenomenon demonstrate about pain perception?", answers: ["That the pain is imaginary and not real", "That the brain can generate pain perceptions even without physical input from the limb ✓", "That the patient is malingering or faking symptoms", "That nerve damage is the sole cause"], correct: 1 }
        ]
    }
};

const module2Quiz = {
    questions: [
        { q: "How do neurons primarily communicate with each other in the nervous system?", answers: ["Through direct electrical connections between neurons", "By releasing neurotransmitters into synapses ✓", "Through blood flow between brain regions", "Exclusively through hormone signaling"], correct: 1 },
        { q: "The parasympathetic nervous system primarily promotes which physiological state?", answers: ["Fight-or-flight stress response", "Rest, digestion, and energy conservation ✓", "Heightened stress and arousal", "Enhanced memory encoding"], correct: 1 },
        { q: "What is the primary difference between MRI and fMRI neuroimaging techniques?", answers: ["MRI shows brain structure while fMRI shows brain function ✓", "They are identical techniques with different names", "MRI shows brain function while fMRI shows structure", "fMRI is an older, outdated version of MRI"], correct: 0 },
        { q: "Damage to Wernicke's area in the brain typically causes which language impairment?", answers: ["Inability to produce fluent speech", "Inability to comprehend spoken and written language ✓", "Complete loss of vision", "Severe memory impairment"], correct: 1 },
        { q: "In neuroscience, what does the term 'neuroplasticity' refer to?", answers: ["The brain's structure becomes fixed and unchangeable after childhood", "The brain's ability to reorganize itself and form new neural connections ✓", "Only new neurons can grow, existing ones cannot change", "The brain inevitably shrinks as we age"], correct: 1 },
        { q: "What is the functional difference between rods and cones in the human eye?", answers: ["Rods detect color while cones detect black and white", "Rods function in dim light while cones detect color and fine detail ✓", "Rods and cones serve identical functions", "Rods are found only in the fovea"], correct: 1 },
        { q: "Signal detection theory in sensation and perception considers which factors when determining whether a stimulus is detected?", answers: ["Only the physical intensity of the stimulus", "Both the stimulus characteristics and psychological factors like expectations and motivation ✓", "Only perceptual organization", "Only sensory processes without cognition"], correct: 1 },
        { q: "Gestalt principles of perception emphasize which aspect of how we perceive stimuli?", answers: ["Individual sensory elements processed separately", "The tendency to perceive organized wholes rather than separate parts ✓", "Exclusively bottom-up sensory processing", "Exclusively top-down cognitive processing"], correct: 1 },
        { q: "The biopsychosocial approach to understanding pain perception includes which types of factors?", answers: ["Biological factors only", "Biological, psychological, and social factors all interacting ✓", "Psychological factors only", "Social and cultural factors only"], correct: 1 },
        { q: "How does the endocrine system differ from the nervous system in terms of communication?", answers: ["The endocrine system uses hormones and has slower but longer-lasting effects ✓", "The endocrine system communicates faster than the nervous system", "The endocrine system operates only within the brain", "There are no significant differences between the two systems"], correct: 0 }
    ]
};

const module2Discussion = null;

const module2Checkpoint = {
    title: "Project Piece #1: Research Question & Method Selection",
    instructions: "Choose a psychological phenomenon that interests you and develop a researchable question. This is the foundation of your semester-long investigation project. Create a 1-2 page document including: (1) Research Topic - what phenomenon and why it's important, (2) Research Question - specific, measurable question, (3) Research Method - Experimental, Correlational, or Descriptive with justification, (4) Method details (IV/DV or variables to measure), (5) Ethical Considerations. Full instructions in Canvas assignment. This is Piece #1 of your portfolio - all 6 pieces due together in Module 7."
};
