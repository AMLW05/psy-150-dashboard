// Module 3: Learning & Memory
// Complete Activity Data

const module3Activities = {
    la1: {
        questions: [
            { term: "Classical Conditioning", def: "Learning through association; a neutral stimulus comes to elicit a response after being paired with a stimulus that naturally elicits that response" },
            { term: "Unconditioned Stimulus (UCS)", def: "A stimulus that naturally and automatically triggers a response without prior learning" },
            { term: "Conditioned Stimulus (CS)", def: "An originally neutral stimulus that, after association with an unconditioned stimulus, comes to trigger a conditioned response" },
            { term: "Operant Conditioning", def: "Learning through consequences; behaviors followed by rewards increase, those followed by punishment decrease" },
            { term: "Reinforcement", def: "Any consequence that increases the likelihood of a behavior" },
            { term: "Positive Reinforcement", def: "Adding a desirable stimulus to increase behavior" },
            { term: "Negative Reinforcement", def: "Removing an aversive stimulus to increase behavior" },
            { term: "Punishment", def: "Any consequence that decreases the likelihood of a behavior" },
            { term: "Observational Learning", def: "Learning by watching others (modeling)" },
            { term: "Encoding", def: "The process of getting information into memory" },
            { term: "Storage", def: "The process of retaining information in memory over time" },
            { term: "Retrieval", def: "The process of getting information out of memory" },
            { term: "Working Memory", def: "Short-term memory system that actively processes and manipulates information" },
            { term: "Long-Term Memory", def: "Relatively permanent storage of information" },
            { term: "Misinformation Effect", def: "Incorporating misleading information into one's memory of an event" }
        ]
    },
    la2: {
        scenarios: [
            { text: "A child hears a loud noise every time they see a dog. Now they cry when they see a dog.", type: "Classical Conditioning" },
            { text: "A student studies hard and gets an A, so they continue studying hard.", type: "Operant Conditioning (Positive Reinforcement)" },
            { text: "A rat presses a lever to turn off an electric shock.", type: "Operant Conditioning (Negative Reinforcement)" },
            { text: "A teenager watches their older sibling get praised for cleaning their room, so they start cleaning their room too.", type: "Observational Learning" },
            { text: "A driver speeds and gets a ticket, so they stop speeding.", type: "Operant Conditioning (Positive Punishment)" },
            { text: "You smell cookies baking and immediately feel happy because it reminds you of your grandmother's house.", type: "Classical Conditioning" },
            { text: "A child watches a cooking show and later tries to make the recipe themselves.", type: "Observational Learning" },
            { term: "A parent takes away video game privileges when a child misbehaves.", type: "Operant Conditioning (Negative Punishment)" },
            { text: "Your mouth waters when you hear the ice cream truck music.", type: "Classical Conditioning" },
            { text: "You check your phone frequently because sometimes there are interesting notifications.", type: "Operant Conditioning (Variable Ratio Schedule)" }
        ]
    },
    la3: {
        memoryExperiments: {
            title: "Memory Systems Interactive Lab",
            tasks: [
                { name: "Serial Position Effect", description: "Demonstrates primacy and recency effects in memory" },
                { name: "Levels of Processing", description: "Shallow vs deep processing affects memory" },
                { name: "Chunking", description: "Grouping information improves memory capacity" }
            ]
        }
    },
    la4: {
        dataAnalysis: {
            title: "Memory Research Data Analysis",
            chartData: {
                title: "Forgetting Curve & Spacing Effect"
            },
            questions: [
                { q: "According to Ebbinghaus's forgetting curve, when does most forgetting occur?", a: "Within the first hour after learning, then levels off" },
                { q: "How does the spacing effect improve memory compared to massed practice?", a: "Distributed practice over time produces better long-term retention than cramming" },
                { q: "What study strategy does this research support?", a: "Study in multiple shorter sessions over several days rather than one long session" }
            ]
        }
    }
};

const module3Discussion = {
    prompt: `**Discussion: Learning in the Real World**

**Part 1: Initial Post (300+ words)**
Describe a skill or habit you learned through classical conditioning, operant conditioning, or observational learning. Analyze the key elements and how the principles could be used to UNLEARN or change the behavior. Connect to at least 3 course concepts.

**Part 2: Peer Responses (150+ words each, 2 peers)**

**Grading:** 50 points`,
    rubric: "Discussion Rubric"
};

const module3Portfolio = {
    title: "Portfolio Piece #3: Behavior Change Plan",
    instructions: `Design a 1-week behavior change plan using operant conditioning principles. Track results and reflect on effectiveness. (40 points)`,
    rubric: "Portfolio Rubric"
};
