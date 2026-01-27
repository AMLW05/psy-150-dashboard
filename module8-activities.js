// Module 8: Final Exam & Course Integration
// Complete Activity Data

const module8Activities = {
    la1: {
        comprehensiveReview: {
            title: "Cumulative Review Activity (30 points)",
            description: "Comprehensive matching, categorization, and concept review covering all 8 modules",
            topics: [
                "Research methods and ethics (Module 1)",
                "Brain structures, neurotransmitters, sensation & perception (Module 2)",
                "Classical conditioning, operant conditioning, observational learning (Module 3)",
                "Memory systems, encoding, retrieval, forgetting (Module 3)",
                "Language, intelligence, motivation, emotion (Module 5)",
                "Personality theories, social psychology, conformity, obedience (Module 6)",
                "Psychological disorders, DSM-5, biopsychosocial model (Module 7)",
                "Stress, coping, treatment approaches (Module 7)"
            ],
            format: "Auto-graded quiz with matching, categorization, and application questions"
        }
    },
    la2: {
        integrationCase: {
            title: "Integration Case Study (40 points)",
            description: "Analyze a complex case requiring concepts from multiple modules",
            caseExample: {
                name: "Case: Alex's Complex Situation",
                presentation: "Alex, 35, was in a car accident 8 months ago resulting in mild traumatic brain injury (TBI). Since the accident, Alex has experienced: memory problems (difficulty forming new memories, frequently losing items), mood changes (increased anxiety and depression), sleep difficulties, and reduced motivation at work. Alex's relationships are strained, and they've started avoiding social situations.",
                analysisRequired: [
                    "**Biopsychology (Module 2):** Which brain structures might be affected by TBI? How could damage explain memory and mood changes?",
                    "**Learning & Memory (Module 3):** What type of memory is most affected? Why is Alex having trouble with new memories but not old ones?",
                    "**Cognition & Motivation (Module 5):** How do cognitive changes affect Alex's work performance and motivation?",
                    "**Social Psychology (Module 6):** How might Alex's self-concept and social behavior have changed? What role does social support play?",
                    "**Disorders & Health (Module 7):** Could Alex meet criteria for depression or PTSD? What's the relationship between brain injury, stress, and mental health?",
                    "**Treatment Recommendations:** What evidence-based interventions would you recommend? Consider biological (medication), psychological (therapy), and social (support) approaches."
                ]
            },
            instructions: "Write 3-4 pages integrating concepts from at least 4 different modules. Use the biopsychosocial model as your organizing framework.",
            rubric: "Integration (20 pts), Accuracy (10 pts), Depth of Analysis (10 pts)"
        }
    }
};

const module8Discussion = {
    prompt: `**Discussion: Course Reflections & Future Applications**

Looking back across the entire course:

**Part 1: Surprising Learning (100-150 words)**
What psychological concept or theory has been most surprising or paradigm-shifting for you? How did it change your thinking?

**Part 2: Personal Growth (100-150 words)**
How has your understanding of yourself or others changed? Provide specific examples.

**Part 3: Future Application (100-150 words)**
How will you apply psychological thinking in your future (career, relationships, personal growth, decision-making)? Be specific about which concepts you'll use and how.

**Peer Responses:** 150+ words each, 2 peers
- Share similar or contrasting experiences
- Add insights about their applications
- Celebrate growth together

**Grading:** 50 points`,
    rubric: "Discussion Rubric"
};

const finalExam = {
    title: "Comprehensive Final Exam (100 points)",
    description: "50 multiple-choice and true/false questions covering all modules, with emphasis on Modules 4-8",
    format: "Auto-graded Canvas quiz",
    timeLimit: "90 minutes",
    attempts: 1,
    questionDistribution: {
        module1: "5 questions (Research methods, ethics, approaches)",
        module2: "7 questions (Brain, neurotransmitters, perception)",
        module3: "8 questions (Learning, memory)",
        module4: "Integration questions (spread throughout)",
        module5: "10 questions (Cognition, intelligence, motivation, emotion)",
        module6: "10 questions (Personality, social psychology)",
        module7: "10 questions (Disorders, treatments, stress)",
        integration: "10 questions requiring synthesis across modules"
    },
    instructions: `**Final Exam Instructions:**

This comprehensive exam covers material from all 8 modules, with heavier emphasis on Modules 4-8 (material since the midterm).

**Format:**
- 50 questions total
- Multiple choice and true/false
- Some questions require you to integrate concepts across modules
- You have 90 minutes
- 1 attempt only

**Preparation:**
- Review all module quizzes and learning activities
- Study your portfolio pieces
- Review discussion posts
- Focus on major concepts, theories, and applications
- Use the Cumulative Review Activity (LA1) to identify gaps

**Tips:**
- Read questions carefully
- Eliminate obviously wrong answers
- Watch for words like "always," "never," "all," "none"
- Integration questions may require thinking across multiple modules
- Manage your time (about 1.5 minutes per question)

**Academic Integrity:**
- This is a closed-book exam
- Do not use notes, textbook, or internet
- Do not discuss questions with others
- Violations will result in course failure

**Good luck! You've prepared well throughout the semester.**`
};

const finalReflection = {
    title: "Final Reflection Paper (60 points)",
    instructions: `**Final Reflection: Your Psychological Thinking Journey (60 points)**

This is your opportunity to reflect on your growth as a psychological thinker throughout PSY-150.

**Instructions:**

**Part 1: Psychological Thinking Skills Development (25 points)**

For EACH of the 6 Psychological Thinking Skills, provide a specific example of how you developed that skill:

**PTS-1: Scientific Reasoning & Research Literacy**
- How has your ability to evaluate psychological claims improved?
- Give an example of when you applied this skill

**PTS-2: Application of Psychological Principles**
- How have you applied psychology concepts to your own life?
- Provide a specific example

**PTS-3: Biopsychosocial Integration**
- How has the biopsychosocial model changed how you understand behavior?
- Give an example of when you used this framework

**PTS-4: Ethical Analysis & Professional Standards**
- How has your awareness of ethical issues in psychology developed?
- Describe a situation where you considered ethical implications

**PTS-5: Data Literacy & Visual Analysis**
- How has your ability to interpret psychological research improved?
- Provide an example

**PTS-6: Critical Evaluation of Psychological Claims**
- How has this course changed how you evaluate popular psychology?
- Give an example of a claim you now view differently

---

**Part 2: Personal Growth & Insights (20 points)**

Reflect on how this course has changed your understanding of yourself and others:
- What have you learned about your own behavior, thoughts, or emotions?
- How has your understanding of others improved?
- What surprised you most about human psychology?
- How has this knowledge affected your relationships, decisions, or goals?

---

**Part 3: Future Application Plan (15 points)**

How will you continue to apply psychological thinking after this course?
- In your career or future career: How will psychology knowledge help?
- In relationships: What insights will you use?
- In personal growth: What areas will you work on?
- In civic life: How will you use psychology to understand social issues?
- In lifelong learning: What psychology topics want to explore further?

---

**Format:**
- 4-5 pages
- Organized with clear headings
- Specific examples and connections to course concepts
- First-person perspective encouraged (this is YOUR reflection)
- Due: Week 16 (during finals week)

**Grading:**
- Psychological Thinking Skills (25 pts) - Depth and specificity of examples
- Personal Growth (20 pts) - Insight and self-awareness
- Future Application (15 pts) - Concrete, realistic plans

This is not just a summary of the course - it's a reflection on YOUR intellectual and personal growth. Be honest, specific, and thoughtful.`,
    rubric: "Reflection Rubric"
};

const module8Portfolio = {
    title: "Portfolio Piece #8: Final Integration & Reflection",
    instructions: `Synthesize learning across entire course. Demonstrate all 6 Psychological Thinking Skills. Show how your understanding has evolved. Future application plan. 3-4 pages. (40 points)`,
    rubric: "Portfolio Rubric"
};
