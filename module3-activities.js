// Module 3: Learning & Memory
const module3Activities = {
    la1: {
        questions: [
            { term: "Classical Conditioning", def: "Learning through association of neutral stimulus with reflexive response (Pavlov)" },
            { term: "Unconditioned Stimulus", def: "Stimulus naturally triggering response without learning (e.g., food)" },
            { term: "Conditioned Response", def: "Learned response to previously neutral stimulus" },
            { term: "Operant Conditioning", def: "Learning through consequences: reinforcement and punishment (Skinner)" },
            { term: "Positive Reinforcement", def: "Adding pleasant stimulus to increase behavior" },
            { term: "Negative Reinforcement", def: "Removing unpleasant stimulus to increase behavior" },
            { term: "Punishment", def: "Consequence that decreases behavior" },
            { term: "Observational Learning", def: "Learning by watching others (Bandura's social learning)" },
            { term: "Working Memory", def: "Temporary storage and manipulation of information (formerly short-term)" },
            { term: "Long-Term Potentiation", def: "Strengthening of synaptic connections with repeated activation" },
            { term: "Episodic Memory", def: "Memory for personal experiences and events" },
            { term: "Semantic Memory", def: "Memory for facts and general knowledge" },
            { term: "Encoding", def: "Converting information into memory form" },
            { term: "Retrieval", def: "Accessing stored information from memory" },
            { term: "Interference", def: "When other information disrupts memory retrieval" }
        ]
    },
    la2: {
        questions: [
            { q: "Dog salivates to bell after pairing with food. Bell is:", answers: ["Unconditioned stimulus", "Conditioned stimulus ✓", "Unconditioned response", "Neutral stimulus"], correct: 1 },
            { q: "Parent gives child dessert for eating vegetables. This is:", answers: ["Positive reinforcement ✓", "Negative reinforcement", "Positive punishment", "Negative punishment"], correct: 0 },
            { q: "Taking aspirin removes headache, increases aspirin use. This is:", answers: ["Positive reinforcement", "Negative reinforcement ✓", "Punishment", "Extinction"], correct: 1 },
            { q: "Little Albert experiment demonstrated:", answers: ["Operant conditioning", "Classical conditioning of fear ✓", "Observational learning", "Memory consolidation"], correct: 1 },
            { q: "Continuous vs partial reinforcement:", answers: ["Continuous creates faster extinction ✓", "Same effect", "Partial is faster to learn", "No difference"], correct: 0 },
            { q: "Elaborative rehearsal improves memory by:", answers: ["Simple repetition", "Connecting to existing knowledge ✓", "Fast review", "Cramming"], correct: 1 },
            { q: "Retroactive interference means:", answers: ["Old memories disrupt new learning", "New learning disrupts old memories ✓", "No interference", "Only during sleep"], correct: 1 },
            { q: "Flashbulb memories are:", answers: ["Always perfectly accurate", "Vivid but can contain errors ✓", "Never emotional", "Only visual"], correct: 1 },
            { q: "Hippocampus damage (H.M. case) impaired:", answers: ["All memory types", "Forming new long-term memories ✓", "Short-term memory", "Procedural memory"], correct: 1 },
            { q: "Best way to study according to memory research:", answers: ["Cramming night before", "Distributed practice over time ✓", "Reading only", "Highlighting"], correct: 1 }
        ]
    },
    la3: {
        conditioningScenarios: {
            scenarios: [
                { text: "Child cleans room, parents remove chores for day", type: "Negative Reinforcement" },
                { text: "Employee receives bonus for sales target", type: "Positive Reinforcement" },
                { text: "Student loses phone for breaking curfew", type: "Negative Punishment" },
                { text: "Dog gets shocked by invisible fence", type: "Positive Punishment" },
                { text: "Dentist drill sound causes anxiety", type: "Classical Conditioning" },
                { text: "Rat presses lever, gets food pellet", type: "Positive Reinforcement (Operant)" },
                { text: "Toddler imitates older sibling's behavior", type: "Observational Learning" },
                { text: "Nausea after food poisoning creates aversion", type: "Classical Conditioning (Taste Aversion)" },
                { text: "Teenager loses car privileges for bad grades", type: "Negative Punishment" },
                { text: "Worker wears seatbelt to stop annoying beep", type: "Negative Reinforcement" }
            ]
        },
        memoryStageMatching: {
            examples: [
                { scenario: "Reading phone number and immediately dialing", stage: "Working Memory" },
                { scenario: "Remembering your high school graduation", stage: "Episodic Long-Term Memory" },
                { scenario: "Knowing Paris is capital of France", stage: "Semantic Long-Term Memory" },
                { scenario: "Riding bicycle without thinking", stage: "Procedural Long-Term Memory" },
                { scenario: "Brief visual image after looking away", stage: "Sensory Memory" },
                { scenario: "Solving math problem by holding numbers in mind", stage: "Working Memory" },
                { scenario: "First kiss memory", stage: "Episodic Long-Term Memory" },
                { scenario: "Understanding language grammar rules", stage: "Semantic Long-Term Memory" },
                { scenario: "Typing without looking at keyboard", stage: "Procedural Long-Term Memory" },
                { scenario: "Echo of sound just heard", stage: "Sensory Memory (Echoic)" }
            ]
        }
    }
};

const module3Quiz = {
    questions: [
        { q: "Difference between classical and operant conditioning:", answers: ["No difference", "Classical: involuntary associations; Operant: voluntary behaviors with consequences ✓", "Classical uses punishment", "Operant doesn't work"], correct: 1 },
        { q: "Extinction occurs when:", answers: ["CS presented without US (classical) or behavior without reinforcement (operant) ✓", "Punishment is used", "Learning happens", "Memory fades"], correct: 0 },
        { q: "Bandura's Bobo doll study showed:", answers: ["Classical conditioning", "Children imitate aggressive models ✓", "Punishment effectiveness", "Memory formation"], correct: 1 },
        { q: "Primacy effect (remembering first items) suggests:", answers: ["Recency effect", "Rehearsal transferred to long-term memory ✓", "Working memory unlimited", "Interference"], correct: 1 },
        { q: "Misinformation effect demonstrates:", answers: ["Memory is perfect recording", "Memories can be altered by post-event information ✓", "Only children affected", "Visual memory only"], correct: 1 },
        { q: "Implicit memory includes:", answers: ["Episodic memory", "Procedural skills and priming ✓", "Semantic knowledge", "Working memory"], correct: 1 },
        { q: "Context-dependent memory means:", answers: ["Memory better in same environment as encoding ✓", "Context doesn't matter", "Only emotional contexts", "Sleep improves memory"], correct: 0 },
        { q: "Fixed-ratio reinforcement schedule:", answers: ["Time-based reinforcement", "Reinforcement after set number of responses ✓", "Random reinforcement", "No reinforcement"], correct: 1 },
        { q: "Forgetting curve (Ebbinghaus) shows:", answers: ["Linear forgetting", "Rapid initial forgetting, then leveling ✓", "No forgetting with rehearsal", "Forgetting increases over time linearly"], correct: 1 },
        { q: "Spacing effect supports:", answers: ["Cramming", "Distributed practice over massed practice ✓", "One long study session", "No review needed"], correct: 1 }
    ]
};

const module3Discussion = null;

const module3Checkpoint = {
    title: "Thread Project Checkpoint #2: Literature Review & Hypothesis (50 pts)",
    instructions: "Review 3-5 empirical studies related to your research question. Synthesize findings, identify gaps, and develop specific hypothesis. Justify your methodology choice based on literature. Include APA-formatted references. See Canvas for full rubric."
};
