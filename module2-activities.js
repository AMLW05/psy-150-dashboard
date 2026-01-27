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
            { q: "Patient has damage to Broca's area. Most likely symptom:", answers: ["Cannot understand speech", "Cannot produce fluent speech ✓", "Cannot see", "Cannot remember"], correct: 1 },
            { q: "Neurotransmitter involved in mood, linked to depression:", answers: ["Acetylcholine", "Dopamine", "Serotonin ✓", "GABA"], correct: 2 },
            { q: "Split-brain patient sees word in left visual field. They:", answers: ["Can say the word", "Cannot verbally report but can point with left hand ✓", "See nothing", "Have normal response"], correct: 1 },
            { q: "You enter dark theater and gradually see better. This is:", answers: ["Sensory adaptation ✓", "Perceptual set", "Gate control", "Absolute threshold"], correct: 0 },
            { q: "Rubbing injured area reduces pain, supporting:", answers: ["Trichromatic theory", "Gate-control theory ✓", "Place theory", "Signal detection"], correct: 1 },
            { q: "Sympathetic nervous system activation causes:", answers: ["Digestion", "Increased heart rate and alertness ✓", "Sleep", "Memory formation"], correct: 1 },
            { q: "fMRI is used to:", answers: ["Measure brain activity through blood flow ✓", "Record single neurons", "Stimulate brain areas", "Measure neurotransmitters"], correct: 0 },
            { q: "Phantom limb pain demonstrates:", answers: ["Brain creates pain perception even without limb ✓", "Gate-control failure", "Sensory adaptation", "Absolute threshold changes"], correct: 0 },
            { q: "Bottom-up processing means:", answers: ["Expectations shape perception", "Sensation drives perception from stimuli upward ✓", "Top-down only", "No sensory input needed"], correct: 1 },
            { q: "Damage to hippocampus would most impair:", answers: ["Emotion regulation", "Forming new memories ✓", "Language production", "Motor control"], correct: 1 }
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
    }
};

const module2Quiz = {
    questions: [
        { q: "Neurons communicate via:", answers: ["Direct electrical connection", "Neurotransmitters at synapses ✓", "Blood flow", "Hormones only"], correct: 1 },
        { q: "Parasympathetic nervous system promotes:", answers: ["Fight-or-flight", "Rest and digest ✓", "Stress response", "Memory encoding"], correct: 1 },
        { q: "MRI vs fMRI:", answers: ["MRI shows structure, fMRI shows function ✓", "Same thing", "MRI shows function", "fMRI is older"], correct: 0 },
        { q: "Wernicke's area damage causes:", answers: ["Cannot produce speech", "Cannot understand speech ✓", "Cannot see", "Cannot remember"], correct: 1 },
        { q: "Neuroplasticity means:", answers: ["Brain is fixed after childhood", "Brain can reorganize and form new connections ✓", "Only neurons grow", "Brain shrinks with age"], correct: 1 },
        { q: "Rods vs cones:", answers: ["Rods for color, cones for black/white", "Rods for dim light, cones for color ✓", "Same function", "Rods only in fovea"], correct: 1 },
        { q: "Signal detection theory considers:", answers: ["Only stimulus intensity", "Both stimulus and psychological factors (expectations, motivation) ✓", "Only perception", "Only sensation"], correct: 1 },
        { q: "Gestalt principles emphasize:", answers: ["Individual sensations", "Organized whole perception ✓", "Bottom-up only", "Top-down only"], correct: 1 },
        { q: "Biopsychosocial approach to pain includes:", answers: ["Biological factors only", "Biological, psychological, and social factors ✓", "Psychological only", "Social only"], correct: 1 },
        { q: "Endocrine system differs from nervous system:", answers: ["Uses hormones, slower, longer-lasting effects ✓", "Faster communication", "Only in brain", "No difference"], correct: 0 }
    ]
};

const module2Discussion = {
    title: "Discussion Board: Biopsychosocial Analysis of Behavior (50 pts)",
    prompt: "Choose a behavior or psychological phenomenon (e.g., anxiety, addiction, aggression, attraction). Analyze it from all three levels: biological (brain structures, neurotransmitters, genetics), psychological (thoughts, emotions, perceptions), and social (culture, relationships, environment). Explain how these factors interact. Cite at least one research study.",
    requirements: [
        "Initial post: 300+ words with biopsychosocial integration",
        "Include at least one cited source (APA format)",
        "Respond to 2 peers (150+ words each)",
        "Demonstrate critical thinking about interactions between levels"
    ]
};

const module2Checkpoint = null;
