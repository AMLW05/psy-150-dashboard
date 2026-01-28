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
            { q: "After repeatedly pairing a bell with food, a dog begins to salivate at the sound of the bell alone. In classical conditioning terms, what is the bell?", answers: ["Unconditioned stimulus", "Conditioned stimulus ✓", "Unconditioned response", "Neutral stimulus"], correct: 1 },
            { q: "A parent gives their child dessert as a reward for eating vegetables. Which operant conditioning principle is being applied?", answers: ["Positive reinforcement ✓", "Negative reinforcement", "Positive punishment", "Negative punishment"], correct: 0 },
            { q: "Taking aspirin successfully removes a headache, which increases the likelihood of taking aspirin in the future. Which conditioning principle explains this?", answers: ["Positive reinforcement", "Negative reinforcement ✓", "Positive punishment", "Extinction"], correct: 1 },
            { q: "The famous Little Albert experiment conducted by Watson and Rayner demonstrated which learning principle?", answers: ["Operant conditioning with rewards", "Classical conditioning of fear responses ✓", "Observational learning from models", "Memory consolidation during sleep"], correct: 1 },
            { q: "How do continuous reinforcement and partial reinforcement schedules differ in terms of extinction resistance?", answers: ["Continuous reinforcement creates faster extinction than partial ✓", "They produce identical effects on extinction", "Partial reinforcement is faster to learn initially", "There is no difference between the two schedules"], correct: 0 },
            { q: "Elaborative rehearsal improves long-term memory retention primarily by:", answers: ["Simply repeating information mechanically", "Connecting new information to existing knowledge ✓", "Reviewing material very quickly", "Cramming information before a test"], correct: 1 },
            { q: "Retroactive interference in memory occurs when:", answers: ["Previously learned information disrupts new learning", "Newly learned information disrupts recall of older memories ✓", "No interference between memories occurs", "Interference only occurs during sleep"], correct: 1 },
            { q: "Flashbulb memories of emotionally significant events are characterized by:", answers: ["Perfect accuracy and complete detail", "Vivid detail but can still contain factual errors ✓", "Complete absence of emotional content", "Only visual information without context"], correct: 1 },
            { q: "Patient H.M., who sustained bilateral hippocampal damage, experienced profound impairment in:", answers: ["All types of memory functioning", "Forming new long-term declarative memories ✓", "Short-term working memory capacity", "Procedural memory and motor skills"], correct: 1 },
            { q: "According to memory research, what is the most effective way to study for long-term retention?", answers: ["Cramming all material the night before an exam", "Distributed practice spaced over multiple days with self-testing ✓", "Passive reading of material only once", "Highlighting text without active review"], correct: 1 }
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
    },
    la4: {
        title: "LA4: Learning Principles Application Scenarios",
        questions: [
            { q: "A child cleans their room, and in response the parents remove the chore of washing dishes for a week. Which operant conditioning principle is being demonstrated?", answers: ["Positive reinforcement", "Negative reinforcement ✓", "Positive punishment", "Negative punishment"], correct: 1 },
            { q: "A dog receives an electric shock from an invisible fence when approaching the property boundary and subsequently stops approaching that area. Which learning principle is this?", answers: ["Negative reinforcement", "Positive punishment ✓", "Negative punishment", "Extinction"], correct: 1 },
            { q: "A teenager loses cell phone privileges for one week after breaking curfew. Which operant conditioning consequence is being applied?", answers: ["Positive punishment", "Negative punishment ✓", "Positive reinforcement", "Negative reinforcement"], correct: 1 },
            { q: "An employee receives a paycheck every two weeks regardless of the amount of work completed during that specific period. Which reinforcement schedule is this?", answers: ["Variable interval schedule", "Fixed interval schedule ✓", "Fixed ratio schedule", "Variable ratio schedule"], correct: 1 },
            { q: "A slot machine pays out winnings on an unpredictable, irregular basis. Which reinforcement schedule creates this highly addictive pattern?", answers: ["Fixed ratio schedule", "Variable ratio schedule ✓", "Fixed interval schedule", "Variable interval schedule"], correct: 1 },
            { q: "After experiencing severe nausea during chemotherapy sessions, a cancer patient develops an aversion to the hospital environment. Which learning principle explains this?", answers: ["Operant conditioning with punishment", "Classical conditioning creating context/taste aversion ✓", "Observational learning from other patients", "Habituation to the environment"], correct: 1 },
            { q: "To maximize retention and performance on an upcoming exam, what study strategy should a student employ?", answers: ["Cram all material the night before the exam", "Distribute study sessions over several days with active self-testing ✓", "Passively highlight textbook passages only", "Read through the material carefully one time"], correct: 1 },
            { q: "A person forgets an old password because learning a new password has interfered with the old memory. Which forgetting mechanism is this?", answers: ["Memory decay over time", "Retroactive interference ✓", "Proactive interference", "Encoding failure"], correct: 1 },
            { q: "A therapist treating a phobia uses gradual exposure to the feared object while the client practices relaxation techniques. Which behavioral therapy technique is being used?", answers: ["Flooding", "Systematic desensitization ✓", "Aversion therapy", "Token economy"], correct: 1 },
            { q: "An eyewitness is exposed to misleading information after observing a crime, which then becomes incorporated into their memory of the event. Which memory phenomenon is this?", answers: ["Encoding failure", "Misinformation effect ✓", "Memory decay", "Source amnesia"], correct: 1 }
        ]
    }
};

const module3Quiz = {
    questions: [
        { q: "What is the fundamental difference between classical conditioning and operant conditioning?", answers: ["There is no meaningful difference between them", "Classical conditioning involves involuntary associations while operant conditioning involves voluntary behaviors with consequences ✓", "Classical conditioning always uses punishment", "Operant conditioning is ineffective in changing behavior"], correct: 1 },
        { q: "In learning theory, extinction occurs when:", answers: ["The conditioned stimulus is presented without the unconditioned stimulus (classical) or behavior occurs without reinforcement (operant) ✓", "Punishment is systematically applied", "New learning takes place", "Memory naturally fades over time"], correct: 0 },
        { q: "Albert Bandura's famous Bobo doll study demonstrated which important learning principle?", answers: ["Classical conditioning of fear", "Children learn and imitate aggressive behaviors from observed models ✓", "The effectiveness of punishment in reducing aggression", "How memory is formed and consolidated"], correct: 1 },
        { q: "The primacy effect, in which people remember items at the beginning of a list better, suggests that:", answers: ["This is the same as the recency effect", "Early items received more rehearsal and were transferred to long-term memory ✓", "Working memory capacity is unlimited", "Interference prevents later learning"], correct: 1 },
        { q: "The misinformation effect in eyewitness memory research demonstrates that:", answers: ["Memory functions as a perfect recording of events", "Memories can be distorted or altered by post-event information ✓", "Only children's memories are susceptible to suggestion", "Visual memory is immune to distortion"], correct: 1 },
        { q: "Implicit memory, which operates without conscious awareness, includes:", answers: ["Episodic memories of personal experiences", "Procedural skills and priming effects ✓", "Semantic knowledge of facts", "Working memory processes"], correct: 1 },
        { q: "Context-dependent memory refers to the finding that:", answers: ["Memory retrieval is enhanced when in the same environment as encoding ✓", "Environmental context has no impact on memory", "Only emotionally charged contexts affect memory", "Sleep automatically improves all memory"], correct: 0 },
        { q: "A fixed-ratio reinforcement schedule delivers reinforcement:", answers: ["Based on time intervals", "After a specific, set number of responses ✓", "On a random, unpredictable basis", "Never, by definition"], correct: 1 },
        { q: "The forgetting curve, first described by Hermann Ebbinghaus, demonstrates that:", answers: ["Forgetting occurs at a steady linear rate", "Forgetting is rapid initially and then levels off ✓", "No forgetting occurs if material is rehearsed once", "Forgetting increases linearly over time"], correct: 1 },
        { q: "The spacing effect in memory research provides evidence that:", answers: ["Cramming is the most effective study method", "Distributed practice is superior to massed practice ✓", "One long intensive study session is optimal", "No review or practice is needed"], correct: 1 }
    ]
};

const module3Discussion = {
    title: "Discussion #2: Learning Principles in Action",
    prompt: "Choose ONE scenario (Parenting & Discipline, Classroom Management, Workplace Motivation, or Personal Habit Change). Analyze using operant conditioning principles (positive/negative reinforcement, punishment, extinction, schedules). Evaluate effectiveness and recommend improvements using psychological research. Cite at least ONE source beyond textbook.",
    requirements: [
        "Initial post: 350+ words with detailed scenario analysis",
        "Identify learning principles accurately",
        "Include research citation beyond textbook (APA format)",
        "Respond to 2 peers (150+ words each) with additional insights"
    ]
};

const module3Checkpoint = null;
