// LA4: Higher Bloom's Application/Analysis Activities (20 pts each, autograded)
// One per module - requires application, analysis, or evaluation

const la4Activities = {
    module1: {
        title: "LA4: Research Ethics Case Analysis",
        format: "Case Study Analysis - Multiple Choice",
        points: 20,
        attempts: 2,
        timeLimit: 25,
        questionCount: 8,
        bloomsLevel: "Analyze/Evaluate",
        description: "Analyze research scenarios for ethical violations and determine appropriate actions",
        questions: [
            { q: "Researcher tells participants the study is about 'learning' but actually measures prejudice. At the end, explains the deception and true purpose. This is:", answers: ["Unethical - deception never allowed", "Ethical if debriefing occurs and no harm ✓", "Unethical - must tell truth always", "Ethical - no debriefing needed"], correct: 1 },
            { q: "Study on stress exposes participants to loud noises causing temporary discomfort but provides no lasting effects. Participants consent and can withdraw. This is:", answers: ["Unethical - any discomfort prohibited", "Ethical if benefits outweigh minimal risk ✓", "Unethical - loud noises never allowed", "Ethical only if paid highly"], correct: 1 },
            { q: "Researcher observes children's playground behavior without asking permission. This is ethical if:", answers: ["Never ethical without consent", "Behavior is public and anonymous ✓", "Children don't notice", "Parents are nearby"], correct: 1 },
            { q: "Tuskegee syphilis study (1932-1972) violated ethics by:", answers: ["Using African Americans", "Withholding treatment and deceiving participants ✓", "Lasting too long", "Using government funding"], correct: 1 },
            { q: "Researcher must stop study if:", answers: ["Results aren't significant", "Participant shows distress and wants to withdraw ✓", "Hypothesis is wrong", "Data is messy"], correct: 1 },
            { q: "Confidentiality in research means:", answers: ["No one sees data ever", "Participant identity protected in reports ✓", "Anonymous and confidential are same", "Researchers can't know who participated"], correct: 1 },
            { q: "IRB (Institutional Review Board) primarily protects:", answers: ["Researcher reputation", "Participant welfare and rights ✓", "University from lawsuits", "Research funding"], correct: 1 },
            { q: "Study finds treatment X helps Group A but harms Group B. Ethical action:", answers: ["Publish only Group A results", "Report both findings honestly ✓", "Hide Group B data", "Stop all treatment X use"], correct: 1 }
        ]
    },

    module2: {
        title: "LA4: Neuroscience Case Analysis",
        format: "Data Interpretation - Multiple Choice",
        points: 20,
        attempts: 2,
        timeLimit: 25,
        questionCount: 8,
        bloomsLevel: "Analyze/Apply",
        description: "Analyze brain damage cases and neurotransmitter scenarios to determine biological bases of behavior",
        questions: [
            { q: "Patient can understand speech but cannot speak fluently (knows what to say but can't form words). Most likely damage:", answers: ["Wernicke's area", "Broca's area ✓", "Hippocampus", "Amygdala"], correct: 1 },
            { q: "Patient cannot form new long-term memories but remembers childhood (like H.M.). Damage likely in:", answers: ["Frontal lobe", "Hippocampus ✓", "Cerebellum", "Occipital lobe"], correct: 1 },
            { q: "Patient has tremors, difficulty initiating movement, and slowed movement. Low levels of which neurotransmitter most likely:", answers: ["Serotonin", "Dopamine ✓", "Acetylcholine", "GABA"], correct: 1 },
            { q: "After amygdala damage, patient would most likely show:", answers: ["Memory loss", "Reduced fear response ✓", "Language problems", "Motor impairment"], correct: 1 },
            { q: "Split-brain patient sees image of spoon in LEFT visual field. They will:", answers: ["Say 'spoon'", "Point with left hand but not verbally name it ✓", "See nothing", "Name it normally"], correct: 1 },
            { q: "Person feels anxious. SSRIs (like Prozac) would help by:", answers: ["Decreasing serotonin", "Increasing serotonin availability ✓", "Blocking dopamine", "Reducing GABA"], correct: 1 },
            { q: "After frontal lobe damage (Phineas Gage case), changes occur in:", answers: ["Memory only", "Personality and impulse control ✓", "Vision", "Hearing"], correct: 1 },
            { q: "Person experiences phantom limb pain (pain in amputated limb). This demonstrates:", answers: ["Imaginary pain", "Brain creates pain perception without physical limb ✓", "Malingering", "Nerve damage only"], correct: 1 }
        ]
    },

    module3: {
        title: "LA4: Learning Principles Application Scenarios",
        format: "Application Scenarios - Multiple Choice",
        points: 20,
        attempts: 2,
        timeLimit: 25,
        questionCount: 10,
        bloomsLevel: "Apply/Analyze",
        description: "Apply conditioning and memory principles to real-world scenarios",
        questions: [
            { q: "Child cleans room, parents remove the chore of washing dishes for a week. This is:", answers: ["Positive reinforcement", "Negative reinforcement ✓", "Positive punishment", "Negative punishment"], correct: 1 },
            { q: "Dog gets shocked by invisible fence when approaching boundary. Dog stops approaching. This is:", answers: ["Negative reinforcement", "Positive punishment ✓", "Negative punishment", "Extinction"], correct: 1 },
            { q: "Teen loses phone for breaking curfew. This is:", answers: ["Positive punishment", "Negative punishment ✓", "Positive reinforcement", "Negative reinforcement"], correct: 1 },
            { q: "Worker receives paycheck every two weeks (regardless of hours worked that week). This is:", answers: ["Variable interval", "Fixed interval ✓", "Fixed ratio", "Variable ratio"], correct: 1 },
            { q: "Slot machine pays out unpredictably. This is:", answers: ["Fixed ratio", "Variable ratio ✓", "Fixed interval", "Variable interval"], correct: 1 },
            { q: "After chemotherapy causes nausea, patient develops aversion to hospital. This demonstrates:", answers: ["Operant conditioning", "Classical conditioning (taste/context aversion) ✓", "Observational learning", "Habituation"], correct: 1 },
            { q: "To improve exam memory, student should:", answers: ["Cram night before", "Study distributed over several days with self-testing ✓", "Highlight only", "Read once carefully"], correct: 1 },
            { q: "Forgetting password due to interference from new password demonstrates:", answers: ["Decay", "Retroactive interference ✓", "Proactive interference", "Encoding failure"], correct: 1 },
            { q: "Therapist treating phobia uses gradual exposure to feared object while client is relaxed. This is:", answers: ["Flooding", "Systematic desensitization ✓", "Aversion therapy", "Token economy"], correct: 1 },
            { q: "Eyewitness given misleading information after crime alters memory. This demonstrates:", answers: ["Encoding failure", "Misinformation effect ✓", "Decay", "Source amnesia"], correct: 1 }
        ]
    },

    module4: {
        title: "LA4: Cognitive Bias & Development Analysis",
        format: "Scenario Analysis - Multiple Choice",
        points: 20,
        attempts: 2,
        timeLimit: 25,
        questionCount: 10,
        bloomsLevel: "Analyze/Evaluate",
        description: "Identify cognitive biases and developmental stages in complex scenarios",
        questions: [
            { q: "Person overestimates shark attack risk after watching Shark Week. This demonstrates:", answers: ["Confirmation bias", "Availability heuristic ✓", "Hindsight bias", "Functional fixedness"], correct: 1 },
            { q: "Investor loses $1000 on stock but won't sell because 'already invested so much.' This is:", answers: ["Functional fixedness", "Sunk cost fallacy ✓", "Overconfidence", "Framing effect"], correct: 1 },
            { q: "Only reading news sources that support your political views demonstrates:", answers: ["Critical thinking", "Confirmation bias ✓", "Availability heuristic", "Anchoring"], correct: 1 },
            { q: "After accident, person says 'I knew that would happen.' This is:", answers: ["Confirmation bias", "Hindsight bias ✓", "Availability heuristic", "Representativeness"], correct: 1 },
            { q: "Child (age 2) sees parent hide toy under blanket and searches for it. Child has achieved:", answers: ["Conservation", "Object permanence ✓", "Abstract thinking", "Reversibility"], correct: 1 },
            { q: "Child (age 4) thinks moon follows them when walking. This demonstrates:", answers: ["Animism and egocentrism ✓", "Concrete operations", "Formal operations", "Conservation"], correct: 0 },
            { q: "Child (age 7) understands water amount stays same when poured into different shaped glass. This is:", answers: ["Object permanence", "Conservation ✓", "Centration", "Egocentrism"], correct: 1 },
            { q: "Adolescent believes 'everyone is watching me' (spotlight effect) and 'no one understands me' (personal fable). This is:", answers: ["Concrete thinking", "Adolescent egocentrism ✓", "Identity crisis", "Role confusion"], correct: 1 },
            { q: "According to Kohlberg, reasoning 'it's wrong because you'll get caught' represents:", answers: ["Preconventional morality ✓", "Conventional morality", "Postconventional morality", "No moral development"], correct: 0 },
            { q: "Child learns new word after hearing it once. This rapid vocabulary growth (age 2-6) is called:", answers: ["Telegraphic speech", "Language explosion ✓", "Overregularization", "Babbling"], correct: 1 }
        ]
    },

    module5: {
        title: "LA4: Motivation & Emotion Theory Application",
        format: "Theory Application - Multiple Choice",
        points: 20,
        attempts: 2,
        timeLimit: 25,
        questionCount: 10,
        bloomsLevel: "Apply/Analyze",
        description: "Apply motivation and emotion theories to workplace, academic, and health scenarios",
        questions: [
            { q: "Employee works hard for inherent satisfaction, not just paycheck. This is:", answers: ["Extrinsic motivation", "Intrinsic motivation ✓", "Drive reduction", "No motivation"], correct: 1 },
            { q: "According to Self-Determination Theory, motivation requires:", answers: ["Only money", "Autonomy, competence, and relatedness ✓", "Only external rewards", "Punishment"], correct: 1 },
            { q: "Student loses intrinsic interest in reading after being paid for each book. This is:", answers: ["Overjustification effect ✓", "Incentive theory", "Achievement motivation", "Goal setting"], correct: 0 },
            { q: "Person exercises because it releases endorphins (feels good). This supports:", answers: ["Drive reduction theory", "Incentive theory ✓", "Arousal theory", "Instinct theory"], correct: 1 },
            { q: "According to Maslow, before pursuing self-actualization, must satisfy:", answers: ["Only physiological needs", "All lower-level needs (physiological, safety, belonging, esteem) ✓", "No prerequisites", "Only safety"], correct: 1 },
            { q: "Person's heart races in dark alley, interprets as fear due to context. This supports:", answers: ["James-Lange theory", "Schachter-Singer two-factor theory ✓", "Cannon-Bard theory", "Facial feedback"], correct: 1 },
            { q: "Forcing smile makes person feel slightly happier. This supports:", answers: ["James-Lange", "Facial feedback hypothesis ✓", "Cannon-Bard", "Two-factor"], correct: 1 },
            { q: "During stress response, body releases cortisol. In General Adaptation Syndrome, prolonged stress leads to:", answers: ["Adaptation", "Exhaustion stage with depleted resources ✓", "Alarm only", "No effects"], correct: 1 },
            { q: "Problem-focused coping (directly addressing stressor) works best when:", answers: ["Stressor is uncontrollable", "Stressor is controllable ✓", "Never works", "Always better than emotion-focused"], correct: 1 },
            { q: "Social support helps during stress by:", answers: ["Eliminating stressors", "Buffering effects and providing resources ✓", "Making worse", "No effect proven"], correct: 1 }
        ]
    },

    module6: {
        title: "LA4: Personality & Social Psychology Integration",
        format: "Multi-Factor Analysis - Multiple Choice",
        points: 20,
        attempts: 2,
        timeLimit: 25,
        questionCount: 10,
        bloomsLevel: "Analyze/Evaluate",
        description: "Analyze personality and social behavior using multiple theoretical perspectives",
        questions: [
            { q: "Person high in conscientiousness (Big Five) would likely:", answers: ["Be disorganized", "Be organized, reliable, and self-disciplined ✓", "Be anxious", "Be closed to new experiences"], correct: 1 },
            { q: "According to Freud, person with very strong superego might:", answers: ["Act impulsively", "Feel excessive guilt and perfectionism ✓", "Have no morals", "Be well-balanced"], correct: 1 },
            { q: "Rogers' person-centered therapy emphasizes:", answers: ["Analyzing unconscious", "Providing unconditional positive regard ✓", "Behavior modification", "Medication"], correct: 1 },
            { q: "Driver cuts you off; you think 'What a jerk!' (ignoring that they might be rushing to hospital). This is:", answers: ["Actor-observer bias", "Fundamental attribution error ✓", "Self-serving bias", "No bias"], correct: 1 },
            { q: "You fail exam: 'Test was unfair.' You pass: 'I'm smart.' This demonstrates:", answers: ["Fundamental attribution error", "Self-serving bias ✓", "No bias", "Accuracy"], correct: 1 },
            { q: "In Milgram's study, 65% delivered maximum shock. This shows power of:", answers: ["Personality alone", "Situational factors and authority ✓", "Sadism", "No explanation"], correct: 1 },
            { q: "Person doesn't help accident victim because others are present. This is:", answers: ["Apathy", "Bystander effect (diffusion of responsibility) ✓", "Selfishness", "Conformity"], correct: 1 },
            { q: "Someone holds attitude 'smoking is bad' but smokes. To reduce cognitive dissonance, they might:", answers: ["Change both", "Change attitude ('smoking isn't that bad') or behavior (quit) ✓", "Do nothing", "Increase dissonance"], correct: 1 },
            { q: "Asch's line study showed people conform even when:", answers: ["Everyone agrees", "Group answer is obviously wrong ✓", "No pressure exists", "They're alone"], correct: 1 },
            { q: "Stereotype threat occurs when:", answers: ["No stereotypes exist", "Negative stereotype about group harms performance ✓", "Helps performance", "Only in certain groups"], correct: 1 }
        ]
    },

    module7: {
        title: "LA4: Psychological Disorder Diagnosis & Treatment Matching",
        format: "Case Analysis - Multiple Choice",
        points: 20,
        attempts: 2,
        timeLimit: 30,
        questionCount: 10,
        bloomsLevel: "Analyze/Evaluate",
        description: "Analyze symptoms to identify disorders and match with appropriate evidence-based treatments",
        questions: [
            { q: "Person has persistent sad mood, loss of interest in activities, sleep changes, worthlessness for 3+ weeks. Most likely:", answers: ["Bipolar disorder", "Major Depressive Disorder ✓", "Generalized Anxiety Disorder", "Schizophrenia"], correct: 1 },
            { q: "Person alternates between periods of extreme elevated mood/energy and deep depression. Most likely:", answers: ["Major depression", "Bipolar Disorder ✓", "Schizophrenia", "Anxiety disorder"], correct: 1 },
            { q: "Person has delusions, hallucinations, disorganized speech, and flat affect for 6+ months. Most likely:", answers: ["Depression", "Schizophrenia ✓", "Bipolar", "OCD"], correct: 1 },
            { q: "Person has intrusive thoughts about contamination and compulsive hand-washing. Most likely:", answers: ["GAD", "OCD (Obsessive-Compulsive Disorder) ✓", "Phobia", "PTSD"], correct: 1 },
            { q: "Person has flashbacks, hypervigilance, and avoidance after traumatic event. Most likely:", answers: ["Depression", "PTSD (Post-Traumatic Stress Disorder) ✓", "Bipolar", "Schizophrenia"], correct: 1 },
            { q: "Best treatment for specific phobias (e.g., fear of spiders):", answers: ["Medication only", "Exposure therapy ✓", "Psychoanalysis", "Hospitalization"], correct: 1 },
            { q: "CBT (Cognitive-Behavioral Therapy) for depression targets:", answers: ["Only thoughts", "Negative thought patterns and behavioral activation ✓", "Only behavior", "Unconscious conflicts"], correct: 1 },
            { q: "SSRIs (like Prozac) are first-line medication for:", answers: ["Schizophrenia", "Depression and anxiety disorders ✓", "ADHD", "Bipolar mania"], correct: 1 },
            { q: "Diathesis-stress model explains disorders as:", answers: ["Only genes", "Genetic/biological vulnerability + environmental stressors ✓", "Only stress", "Random"], correct: 1 },
            { q: "Evidence-based practice in psychology means:", answers: ["Only research", "Integrating research evidence, clinical expertise, and patient values ✓", "Only therapist experience", "Only patient preference"], correct: 1 }
        ]
    },

    module8: {
        title: "LA4: Biopsychosocial Integration - Complex Cases",
        format: "Integrative Analysis - Multiple Choice",
        points: 20,
        attempts: 2,
        timeLimit: 30,
        questionCount: 8,
        bloomsLevel: "Synthesize/Evaluate",
        description: "Analyze complex scenarios using integrated biopsychosocial perspective",
        questions: [
            { q: "College student has test anxiety. Which is a BIOLOGICAL factor:", answers: ["Negative thoughts about failing", "Sympathetic nervous system activation and cortisol release ✓", "Pressure from parents", "Competitive classroom culture"], correct: 1 },
            { q: "Same student's test anxiety - Which is PSYCHOLOGICAL factor:", answers: ["Cortisol levels", "Negative self-talk and catastrophic thinking ✓", "Family expectations", "Grading curve"], correct: 1 },
            { q: "Same student - Which is SOCIAL factor:", answers: ["Brain chemistry", "Fear cognitions", "Peer competition and cultural pressure for academic success ✓", "Arousal levels"], correct: 2 },
            { q: "For obesity treatment, biopsychosocial approach would include:", answers: ["Only diet pills", "Genetics, eating behaviors, and social/cultural factors ✓", "Only therapy", "Only social changes"], correct: 1 },
            { q: "Depression in adolescent - most complete biopsychosocial analysis includes:", answers: ["Only serotonin levels", "Serotonin, negative cognitions, and social isolation/bullying ✓", "Only cognitive distortions", "Only family problems"], correct: 1 },
            { q: "Cultural competence in psychology requires:", answers: ["Ignoring culture", "Understanding how culture shapes expression of distress and help-seeking ✓", "Same treatment for everyone", "Avoiding cultural topics"], correct: 1 },
            { q: "Best treatment for most disorders combines:", answers: ["Only medication", "Biological (medication), psychological (therapy), and social (support) interventions ✓", "Only therapy", "Only support groups"], correct: 1 },
            { q: "Psychological research contributes to society by:", answers: ["Only treating disorders", "Improving education, health, work, relationships, and policy ✓", "No practical value", "Only academic knowledge"], correct: 1 }
        ]
    }
};
