// Module 7: Psychological Disorders & Health Psychology
// Complete Activity Data

const module7Activities = {
    la1: {
        questions: [
            { term: "Psychological Disorder", def: "Patterns of thoughts, feelings, or behaviors that cause distress, dysfunction, or deviance" },
            { term: "DSM-5", def: "Diagnostic and Statistical Manual of Mental Disorders (5th edition); classification system for psychological disorders" },
            { term: "Major Depressive Disorder", def: "Disorder characterized by persistent sadness and loss of interest lasting at least 2 weeks" },
            { term: "Generalized Anxiety Disorder (GAD)", def: "Excessive, uncontrollable worry about multiple areas of life for at least 6 months" },
            { term: "Panic Disorder", def: "Recurrent, unexpected panic attacks with fear of future attacks" },
            { term: "PTSD", def: "Post-Traumatic Stress Disorder; develops after exposure to trauma with flashbacks, avoidance, and hyperarousal" },
            { term: "Schizophrenia", def: "Severe disorder involving delusions, hallucinations, disorganized thinking and behavior" },
            { term: "Bipolar Disorder", def: "Disorder involving alternating episodes of depression and mania" },
            { term: "OCD", def: "Obsessive-Compulsive Disorder; intrusive thoughts (obsessions) and repetitive behaviors (compulsions)" },
            { term: "Cognitive-Behavioral Therapy (CBT)", def: "Therapy that challenges negative thoughts and changes maladaptive behaviors" },
            { term: "Antidepressants", def: "Medications that increase neurotransmitters (serotonin, norepinephrine) to treat depression and anxiety" },
            { term: "Stigma", def: "Negative attitudes and discrimination toward people with mental illness" },
            { term: "Stress", def: "The process by which we perceive and respond to challenging or threatening events" },
            { term: "General Adaptation Syndrome", def: "Selye's model: alarm, resistance, exhaustion stages of stress response" },
            { term: "Coping", def: "Cognitive and behavioral efforts to manage stress" }
        ]
    },
    la2: {
        caseStudies: [
            {
                name: "Case Study 1: Sarah - Depression & Anxiety",
                presentation: "Sarah, 24, reports feeling sad most days for 3 months. She's lost interest in activities she used to enjoy, has trouble sleeping, feels worthless, and struggles to concentrate at work. She also worries constantly about her job performance, relationships, and health.",
                questions: [
                    "What symptoms suggest Major Depressive Disorder?",
                    "Are there symptoms of anxiety disorders?",
                    "How would you explain Sarah's condition using the biopsychosocial model?"
                ],
                diagnosis: "Likely Major Depressive Disorder with comorbid Generalized Anxiety Disorder",
                biopsychosocial: {
                    biological: "Possible neurotransmitter imbalances (serotonin, norepinephrine); genetic vulnerability; sleep disruption affecting mood",
                    psychological: "Negative thought patterns, rumination, learned helplessness, perfectionism",
                    social: "Work stress, relationship difficulties, lack of social support, societal pressure"
                }
            },
            {
                name: "Case Study 2: Marcus - PTSD",
                presentation: "Marcus, 28, was in a severe car accident 6 months ago. He has vivid flashbacks, avoids driving, has nightmares, is easily startled, and feels emotionally numb. He's withdrawn from friends and has difficulty trusting others.",
                questions: [
                    "What symptoms meet PTSD criteria?",
                    "Why did this develop after the accident?",
                    "What evidence-based treatments exist for PTSD?"
                ],
                diagnosis: "Post-Traumatic Stress Disorder",
                biopsychosocial: {
                    biological: "Amygdala hyperactivity, hippocampus changes, stress hormone dysregulation",
                    psychological: "Trauma memory processing, avoidance coping, hypervigilance, safety beliefs shattered",
                    social: "Social withdrawal, relationship strain, possible lack of support, stigma about seeking help"
                }
            },
            {
                name: "Case Study 3: Jamal - Possible Schizophrenia",
                presentation: "Jamal, 22, believes the government is monitoring his thoughts through his phone. He hears voices commenting on his actions. His speech is sometimes difficult to follow, jumping between unrelated topics. He's stopped attending classes and rarely leaves his apartment.",
                questions: [
                    "What positive and negative symptoms are present?",
                    "Why is early intervention important for schizophrenia?",
                    "What combination of treatments is typically most effective?"
                ],
                diagnosis: "Possible Schizophrenia (requires professional evaluation)",
                biopsychosocial: {
                    biological: "Dopamine dysregulation, brain structure differences, genetic vulnerability",
                    psychological: "Impaired reality testing, cognitive deficits, disorganized thinking",
                    social: "Social withdrawal, functional impairment, possible substance use, family stress"
                }
            }
        ]
    },
    la3: {
        dataAnalysis: {
            title: "Mental Health Statistics Analysis",
            datasets: [
                { title: "Lifetime Prevalence Rates", description: "Percentage of population that will experience each disorder in their lifetime" },
                { title: "Comorbidity Data", description: "How often disorders co-occur (e.g., depression with anxiety)" },
                { title: "Treatment-Seeking Rates", description: "Percentage of people with disorders who seek professional help" },
                { title: "Treatment Effectiveness", description: "Success rates for different interventions (CBT, medication, combined)" }
            ],
            questions: [
                { q: "Which disorders are most common?", a: "Anxiety disorders (highest prevalence), followed by mood disorders, substance use disorders, then others" },
                { q: "What percentage of people with mental illness seek treatment?", a: "Only about 40-50% seek treatment; many barriers exist (cost, stigma, access)" },
                { q: "How effective is treatment?", a: "CBT and medications show 60-80% effectiveness for many disorders; combined treatment often most effective" }
            ]
        }
    },
    la4: {
        title: "Treatment Evaluation Activity",
        instructions: "Choose one disorder. Compare evidence for different treatments (CBT, medication, alternative therapies). Identify pseudoscience red flags.",
        disorders: ["Major Depression", "Anxiety Disorders", "PTSD", "OCD"],
        evidenceBasedTreatments: [
            "Cognitive-Behavioral Therapy (strong evidence)",
            "Antidepressants (SSRIs, SNRIs - strong evidence)",
            "Exposure therapy (for anxiety, OCD, PTSD)",
            "Mindfulness-Based Cognitive Therapy"
        ],
        pseudoscienceRedFlags: [
            "Claims to cure all mental illnesses with one method",
            "No scientific research supporting effectiveness",
            "Relies on testimonials rather than controlled studies",
            "Promises quick, permanent cures",
            "Rejects mainstream psychological science"
        ]
    }
};

const module7Discussion = {
    prompt: `**Discussion: Reducing Stigma**

Choose one psychological disorder that is highly stigmatized (schizophrenia, borderline personality disorder, substance use disorders, etc.). Research: What are common misconceptions? What does science show? How does stigma affect treatment-seeking and recovery? How can we reduce stigma?

**Initial Post:** 300+ words, with course concepts and outside research
**Peer Responses:** 150+ words each, 2 peers

**Grading:** 50 points`,
    rubric: "Discussion Rubric"
};

const module7Assignment = {
    title: "What's Normal Anyway? - Comprehensive Analysis",
    instructions: `**Written Assignment: "What's Normal Anyway?" (60 points)**

Write a 3-4 page analysis addressing:

**Part 1: Criteria for Abnormality (20 points)**
- Discuss the 4 D's: Distress, Dysfunction, Deviance, Danger
- Why is it difficult to define "abnormal"?
- How do cultural factors affect what's considered abnormal?
- Provide specific examples

**Part 2: Biopsychosocial Analysis of One Disorder (25 points)**
- Choose one disorder from Module 7
- Explain using ALL THREE levels:
  - Biological factors (brain, neurotransmitters, genetics)
  - Psychological factors (thoughts, learning, coping)
  - Social/cultural factors (relationships, culture, stress)
- Use specific evidence from research

**Part 3: Evidence-Based Treatment (10 points)**
- What treatments have research support?
- How do we know they work?
- What treatments should be avoided (pseudoscience)?

**Part 4: Ethical Implications (5 points)**
- How does diagnostic labeling affect people?
- How can we reduce stigma?
- What are the risks and benefits of diagnosis?

**Format:** 3-4 pages, APA style, minimum 3 scholarly sources

**Due:** Week 13

**Rubric:** Criteria analysis (20 pts), Biopsychosocial explanation (25 pts), Treatment evaluation (10 pts), Ethics (5 pts)`,
    rubric: "Writing Assignment Rubric"
};

const module7Portfolio = {
    title: "Portfolio Piece #7: Mental Health Case Study",
    instructions: `Comprehensive case analysis with diagnosis (using DSM criteria), biopsychosocial explanation, and evidence-based treatment recommendations. 3-4 pages. (40 points)`,
    rubric: "Portfolio Rubric"
};
