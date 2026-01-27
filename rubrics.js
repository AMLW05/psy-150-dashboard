// PSY-150 Course Rubrics
// Three main rubrics used throughout the course

const rubricData = {
    rubric1: {
        title: "Discussion Board Rubric (50 points)",
        usage: "Used for all 8 module discussion boards",
        criteria: [
            {
                name: "Initial Post - Content Quality (15 pts)",
                excellent: "Post demonstrates deep understanding of psychological concepts. Integrates multiple course concepts accurately. Provides specific, well-developed examples. Shows critical thinking and analysis.",
                proficient: "Post shows good understanding of concepts. Uses 2-3 course concepts accurately. Provides relevant examples. Shows some analysis.",
                developing: "Post shows basic understanding. Uses 1-2 concepts with minor errors. Examples are vague or general. Limited analysis.",
                needsWork: "Post shows minimal understanding. Concepts missing or incorrect. No clear examples. No analysis."
            },
            {
                name: "Initial Post - Research & Evidence (10 pts)",
                excellent: "Incorporates research evidence from textbook AND outside sources. Properly cites sources. Distinguishes between research findings and personal opinion.",
                proficient: "Uses textbook evidence effectively. May include one outside source. Citations present. Mostly distinguishes research from opinion.",
                developing: "Uses limited textbook evidence. No outside sources. Few or no citations. Some confusion between research and opinion.",
                needsWork: "No evidence from textbook or research. No citations. Personal opinion only."
            },
            {
                name: "Initial Post - Length & Organization (5 pts)",
                excellent: "Meets word count requirement (300+ words). Well-organized with clear introduction, body, and conclusion. Easy to follow.",
                proficient: "Meets word count. Generally organized. Mostly easy to follow.",
                needsWork: "Below word count OR poorly organized. Difficult to follow."
            },
            {
                name: "Peer Response 1 (10 pts)",
                excellent: "Substantive response (150+ words) that extends discussion. Asks thoughtful questions or provides new perspective. References course concepts. Respectful and encouraging tone.",
                proficient: "Good response (150+ words) that engages with peer's ideas. References some course concepts. Respectful tone.",
                developing: "Basic response (100-149 words). Minimal engagement with ideas. Few course connections. Respectful but superficial.",
                needsWork: "Brief response (<100 words) OR merely agrees without adding substance. No course connections."
            },
            {
                name: "Peer Response 2 (10 pts)",
                excellent: "Substantive response (150+ words) that extends discussion. Asks thoughtful questions or provides new perspective. References course concepts. Respectful and encouraging tone.",
                proficient: "Good response (150+ words) that engages with peer's ideas. References some course concepts. Respectful tone.",
                developing: "Basic response (100-149 words). Minimal engagement with ideas. Few course connections. Respectful but superficial.",
                needsWork: "Brief response (<100 words) OR merely agrees without adding substance. No course connections."
            }
        ]
    },

    rubric2: {
        title: "Portfolio Piece Rubric (40 points)",
        usage: "Used for all 8 portfolio pieces (progressive semester-long project)",
        criteria: [
            {
                name: "Psychological Thinking Skills (15 pts)",
                excellent: "Demonstrates targeted Psychological Thinking Skill at high level. Shows progression from earlier portfolio pieces. Applies skill accurately to new context.",
                proficient: "Demonstrates targeted skill adequately. Shows some progression. Generally accurate application.",
                developing: "Demonstrates skill at basic level. Limited progression. Some inaccuracies in application.",
                needsWork: "Does not demonstrate targeted skill OR demonstrates it incorrectly."
            },
            {
                name: "Content Accuracy & Depth (12 pts)",
                excellent: "Psychological concepts are explained accurately and in depth. Demonstrates sophisticated understanding. Integrates multiple concepts appropriately.",
                proficient: "Concepts are accurate with good understanding. Explains concepts clearly. Integrates 2-3 concepts.",
                developing: "Concepts mostly accurate with basic understanding. Explanations are superficial. Limited integration.",
                needsWork: "Concepts are inaccurate OR show minimal understanding. No integration."
            },
            {
                name: "Application & Analysis (8 pts)",
                excellent: "Applies psychology to specific, real-world situation with insight. Analysis is thoughtful and goes beyond surface level. Makes meaningful connections.",
                proficient: "Applies psychology to real-world situation appropriately. Analysis is clear. Makes relevant connections.",
                developing: "Application is general or vague. Analysis is superficial. Few connections made.",
                needsWork: "No clear application OR analysis is missing."
            },
            {
                name: "Writing Quality & Format (5 pts)",
                excellent: "Well-organized, clear writing. No major grammatical errors. Meets length requirement. Professional format.",
                proficient: "Generally clear writing. Few grammatical errors. Meets length requirement. Appropriate format.",
                needsWork: "Poor organization OR multiple errors OR below length requirement OR unprofessional format."
            }
        ]
    },

    rubric3: {
        title: "Student Choice Activity Rubric (20 points)",
        usage: "Used for LA4 activities in Modules 1-8 (student selects from 2-3 options)",
        criteria: [
            {
                name: "Research Quality & Evidence (8 pts)",
                excellent: "Uses multiple high-quality sources. Synthesizes research accurately. Distinguishes between strong and weak evidence. Proper citations.",
                proficient: "Uses adequate sources. Represents research accurately. Some evaluation of evidence quality. Citations present.",
                developing: "Limited sources. Some inaccuracies in representing research. Little evaluation of evidence. Few citations.",
                needsWork: "Insufficient sources OR research misrepresented OR no citations."
            },
            {
                name: "Critical Analysis (6 pts)",
                excellent: "Demonstrates sophisticated critical thinking. Evaluates multiple perspectives. Identifies assumptions and limitations. Goes beyond surface-level analysis.",
                proficient: "Shows good critical thinking. Considers different viewpoints. Identifies some limitations. Clear analysis.",
                developing: "Basic analysis. Single perspective. Few limitations identified. Superficial treatment.",
                needsWork: "No critical analysis OR merely summarizes without evaluating."
            },
            {
                name: "Application & Recommendations (6 pts)",
                excellent: "Makes practical, well-justified recommendations. Clearly connects research to application. Considers real-world constraints. Thoughtful and feasible suggestions.",
                proficient: "Makes appropriate recommendations. Connects to research. Considers some practical issues. Reasonable suggestions.",
                developing: "Recommendations are vague or poorly justified. Weak connection to research. Little consideration of practicality.",
                needsWork: "No recommendations OR recommendations are not supported by analysis."
            }
        ]
    }
};
