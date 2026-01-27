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
        studentChoice: {
            title: "LA4: Student Choice Activity (20 points)",
            description: "Choose ONE option that interests you most. Each option requires applying learning and memory research to real-world contexts.",
            options: [
                {
                    id: "A",
                    title: "Option A: Eyewitness Testimony Research Evaluation",
                    description: "Evaluate the research validity on eyewitness testimony and memory reliability. Create a policy recommendation for courts based on scientific evidence.",
                    instructions: "Review research on factors affecting eyewitness accuracy (stress, weapon focus, leading questions, confidence-accuracy relationship). Analyze 2-3 key studies. Write a 2-3 page policy brief recommending how courts should handle eyewitness testimony. Use scientific evidence to support recommendations.",
                    gradingCriteria: [
                        "Research synthesis (8 pts) - Accuracy and depth of research understanding",
                        "Critical evaluation (6 pts) - Assessment of study validity and limitations",
                        "Application (6 pts) - Practical, evidence-based policy recommendations"
                    ],
                    linkedCLOs: ["CLO2", "CLO4"],
                    linkedPTS: ["PTS1", "PTS2"]
                },
                {
                    id: "B",
                    title: "Option B: Personal Study Strategy Experiment",
                    description: "Design and test a personal study strategy based on memory research (spacing effect, testing effect, elaborative encoding). Conduct a mini self-experiment.",
                    instructions: "Choose one memory principle from research (spacing, testing effect, elaborative encoding, etc.). Design a 2-week personal experiment testing it with your own studying. Track your performance. Write a 2-3 page report including: hypothesis, method, results, and reflection on effectiveness. Compare to your usual study methods.",
                    gradingCriteria: [
                        "Research foundation (7 pts) - Correct understanding of memory principle",
                        "Experiment design (7 pts) - Clear method, appropriate measurement",
                        "Analysis & reflection (6 pts) - Thoughtful evaluation of results and implications"
                    ],
                    linkedCLOs: ["CLO2", "CLO4"],
                    linkedPTS: ["PTS1", "PTS2"]
                },
                {
                    id: "C",
                    title: "Option C: 'Learning Styles' Myth Analysis",
                    description: "Analyze the 'Learning Styles' myth using scientific evidence. Explain why it persists in education despite being scientifically debunked.",
                    instructions: "Research the scientific evidence against 'learning styles' (visual/auditory/kinesthetic). Analyze why this myth persists in education. Write a 2-3 page analysis including: What the research shows, why the myth is appealing but wrong, what educators should do instead based on actual memory research.",
                    gradingCriteria: [
                        "Scientific evidence (8 pts) - Accurate research on learning styles myth",
                        "Critical analysis (6 pts) - Explanation of why myth persists",
                        "Practical recommendations (6 pts) - Evidence-based alternatives for educators"
                    ],
                    linkedCLOs: ["CLO2", "CLO4"],
                    linkedPTS: ["PTS1", "PTS6"]
                }
            ],
            submissionFormat: "2-3 page written analysis uploaded to Canvas",
            rubric: "Student Choice Activity Rubric (20 points total)"
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
