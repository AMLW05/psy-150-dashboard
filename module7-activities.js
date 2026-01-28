// Module 7: Psychological Disorders & Treatment
const module7Activities = {
    la1: {
        questions: [
            { term: "DSM-5", def: "Diagnostic and Statistical Manual; classification system for mental disorders" },
            { term: "Anxiety Disorder", def: "Excessive worry and fear interfering with daily functioning" },
            { term: "Generalized Anxiety Disorder", def: "Persistent, excessive worry about various areas" },
            { term: "Panic Disorder", def: "Recurrent unexpected panic attacks with intense fear" },
            { term: "Major Depressive Disorder", def: "Persistent depressed mood and loss of interest/pleasure" },
            { term: "Bipolar Disorder", def: "Alternating manic (elevated mood) and depressive episodes" },
            { term: "Schizophrenia", def: "Severe disorder with delusions, hallucinations, disorganized thinking" },
            { term: "Obsessive-Compulsive Disorder", def: "Intrusive thoughts (obsessions) and repetitive behaviors (compulsions)" },
            { term: "PTSD", def: "Trauma-related disorder with flashbacks, avoidance, hyperarousal" },
            { term: "Psychotherapy", def: "Treatment using psychological techniques to improve mental health" },
            { term: "Cognitive-Behavioral Therapy", def: "Treatment targeting maladaptive thoughts and behaviors" },
            { term: "Exposure Therapy", def: "Gradual confrontation with feared stimuli to reduce anxiety" },
            { term: "Antidepressants", def: "Medications (SSRIs, SNRIs) treating depression by affecting neurotransmitters" },
            { term: "Antipsychotics", def: "Medications treating schizophrenia by blocking dopamine receptors" },
            { term: "Therapeutic Alliance", def: "Trust and collaboration between therapist and client" }
        ]
    },
    la2: {
        questions: [
            { q: "The diathesis-stress model provides which explanation for the development of psychological disorders?", answers: ["Disorders result from biological factors exclusively", "Disorders arise from the interaction between biological predisposition and environmental stressors ✓", "Disorders are caused solely by environmental factors", "Disorders have no identifiable causes"], correct: 1 },
            { q: "Aaron Beck's cognitive theory of depression describes the 'negative triad' as consisting of negative thoughts about:", answers: ["Only the self", "The self, the world, and the future ✓", "Only the future", "Other people exclusively"], correct: 1 },
            { q: "What is the primary diagnostic distinction between major depressive disorder and bipolar disorder?", answers: ["There is no meaningful difference between them", "Bipolar disorder includes manic or hypomanic episodes in addition to depressive episodes ✓", "Major depression is always more severe", "Bipolar disorder consists only of manic episodes"], correct: 1 },
            { q: "In the context of psychotic symptoms, what is the distinction between hallucinations and delusions?", answers: ["They refer to the same phenomenon", "Hallucinations are false sensory perceptions; delusions are false fixed beliefs ✓", "Both refer exclusively to visual experiences", "Both refer exclusively to thought content"], correct: 1 },
            { q: "Cognitive-behavioral therapy (CBT) demonstrates effectiveness in treating various disorders primarily through which mechanisms?", answers: ["Exclusively changing thought patterns", "Systematically changing maladaptive thought patterns and related behaviors ✓", "Exclusively changing observable behaviors", "No empirical evidence supports its effectiveness"], correct: 1 },
            { q: "Exposure therapy has been demonstrated to be especially effective for treating which category of psychological disorders?", answers: ["Schizophrenia spectrum disorders", "Anxiety disorders including phobias and PTSD ✓", "Bipolar and related disorders", "Personality disorders exclusively"], correct: 1 },
            { q: "Selective serotonin reuptake inhibitors (SSRIs) such as Prozac and Zoloft work through which mechanism of action?", answers: ["Blocking dopamine receptors in the brain", "Increasing serotonin availability in the synaptic cleft ✓", "Producing sedation exclusively", "Affecting only GABA neurotransmission"], correct: 1 },
            { q: "Psychodynamic therapy, derived from psychoanalytic theory, primarily focuses on which therapeutic elements?", answers: ["Only current observable behaviors", "Unconscious conflicts, defense mechanisms, and past experiences ✓", "Only conscious cognitive processes", "Medication management exclusively"], correct: 1 },
            { q: "In contemporary mental health treatment, evidence-based practice refers to:", answers: ["Relying exclusively on clinical experience", "Integrating the best available research evidence with clinical expertise and patient values ✓", "Following only research findings without clinical judgment", "Considering only patient preferences"], correct: 1 },
            { q: "How does stigma surrounding mental illness affect individuals experiencing psychological disorders?", answers: ["It facilitates treatment-seeking behavior", "It reduces treatment-seeking and increases suffering and social isolation ✓", "It has no measurable impact on outcomes", "It only affects perceptions of others"], correct: 1 }
        ]
    },
    la3: {
        disorderSymptomMatching: {
            descriptions: [
                { symptoms: "Persistent sad mood, loss of interest, sleep changes, worthlessness", disorder: "Major Depressive Disorder" },
                { symptoms: "Alternating elevated/irritable mood and depression", disorder: "Bipolar Disorder" },
                { symptoms: "Excessive worry about multiple areas for 6+ months", disorder: "Generalized Anxiety Disorder" },
                { symptoms: "Recurrent panic attacks, fear of future attacks", disorder: "Panic Disorder" },
                { symptoms: "Intrusive thoughts and repetitive behaviors", disorder: "Obsessive-Compulsive Disorder" },
                { symptoms: "Delusions, hallucinations, disorganized speech", disorder: "Schizophrenia" },
                { symptoms: "Flashbacks, avoidance, hyperarousal after trauma", disorder: "PTSD" },
                { symptoms: "Intense fear of specific object or situation", disorder: "Specific Phobia" },
                { symptoms: "Fear of social situations and negative evaluation", disorder: "Social Anxiety Disorder" },
                { symptoms: "Detachment from reality, identity confusion", disorder: "Dissociative Disorder" }
            ]
        },
        therapyApproachMatching: {
            techniques: [
                { description: "Challenge negative automatic thoughts", approach: "Cognitive-Behavioral Therapy (CBT)" },
                { description: "Explore unconscious conflicts and childhood experiences", approach: "Psychodynamic Therapy" },
                { description: "Provide unconditional positive regard and empathy", approach: "Humanistic/Person-Centered Therapy" },
                { description: "Gradual exposure to feared stimuli with relaxation", approach: "Systematic Desensitization (Behavioral)" },
                { description: "Identify and modify cognitive distortions", approach: "Cognitive Therapy" },
                { description: "Use reinforcement to shape desired behaviors", approach: "Behavior Modification" },
                { description: "Focus on present awareness and acceptance", approach: "Mindfulness-Based Therapy" },
                { description: "Analyze transference in therapeutic relationship", approach: "Psychodynamic/Psychoanalytic" },
                { description: "Teach coping skills for distress tolerance", approach: "Dialectical Behavior Therapy (DBT)" },
                { description: "Prescribe medication targeting neurotransmitters", approach: "Biomedical/Psychopharmacology" }
            ]
        }
    },
    la4: {
        title: "LA4: Psychological Disorders & Treatment Analysis",
        questions: [
            { q: "An individual reports persistent sad mood, complete loss of interest in previously enjoyed activities, significant sleep and appetite changes, and feelings of worthlessness lasting three weeks. What is the most likely diagnosis?", answers: ["Bipolar disorder", "Major depressive disorder ✓", "Generalized anxiety disorder", "Schizophrenia"], correct: 1 },
            { q: "A patient experiences recurrent unexpected panic attacks and has begun avoiding crowded places and situations where escape would be difficult. What is the most likely diagnosis?", answers: ["Social anxiety disorder", "Panic disorder with agoraphobia ✓", "Specific phobia", "Generalized anxiety disorder"], correct: 1 },
            { q: "Using the diathesis-stress model to explain the development of depression, the disorder would result from:", answers: ["Only genetic and biological factors", "The interaction between genetic vulnerability and environmental stressors ✓", "Only environmental stress without biological factors", "No identifiable biological factors"], correct: 1 },
            { q: "An individual experiences intrusive obsessive thoughts about contamination and washes their hands more than 50 times daily. What treatment approach has the strongest empirical support?", answers: ["Medication management exclusively", "Cognitive-behavioral therapy with exposure and response prevention ✓", "Long-term psychoanalysis exclusively", "No effective treatment exists for this condition"], correct: 1 },
            { q: "Aaron Beck's cognitive therapy approach for treating depression primarily focuses on which therapeutic target?", answers: ["Exploring unconscious conflicts from childhood", "Identifying and systematically challenging negative automatic thoughts ✓", "Changing only observable behaviors", "Medication management exclusively"], correct: 1 },
            { q: "Selective serotonin reuptake inhibitors (SSRIs) treat depression and anxiety through which pharmacological mechanism?", answers: ["Blocking dopamine receptors in the brain", "Increasing serotonin availability and activity at the synapse ✓", "Producing sedation and drowsiness exclusively", "Affecting only GABA neurotransmission"], correct: 1 },
            { q: "A patient reports hearing voices commanding them to perform actions and maintains a fixed false belief in an elaborate conspiracy against them. What is the most likely diagnosis?", answers: ["Major depressive disorder with psychotic features", "Schizophrenia or a psychotic disorder ✓", "Bipolar I disorder", "Generalized anxiety disorder"], correct: 1 },
            { q: "Systematic desensitization, a behavioral treatment for phobias and anxiety, involves which therapeutic approach?", answers: ["Immediate intense exposure to the feared stimulus (flooding)", "Gradual hierarchical exposure paired with relaxation techniques ✓", "Medication management exclusively", "Traditional psychoanalytic interpretation"], correct: 1 },
            { q: "What is the primary difference in training and scope of practice between psychologists and psychiatrists?", answers: ["There is no meaningful difference in training or practice", "Psychiatrists hold medical degrees (MD/DO) and can prescribe medication; psychologists typically hold doctoral degrees (PhD/PsyD) in psychology ✓", "Psychologists have prescription privileges in all states", "Both professions have identical training paths"], correct: 1 },
            { q: "In contemporary mental health care, evidence-based practice is best defined as:", answers: ["Relying exclusively on published research studies", "Integrating the best available research evidence with clinical expertise and patient values and preferences ✓", "Completely ignoring research in favor of clinical intuition", "Applying one standardized treatment to all patients"], correct: 1 }
        ]
    }
};

const module7Quiz = {
    questions: [
        { q: "The medical model approach to understanding psychological disorders emphasizes which conceptual framework?", answers: ["Only observable behavioral manifestations", "A biological and disease-based perspective on mental illness ✓", "Only cognitive thought processes", "The complete absence of treatment approaches"], correct: 1 },
        { q: "In diagnostic terminology, comorbidity refers to which clinical situation?", answers: ["The presence of only one isolated disorder", "The simultaneous presence of two or more distinct disorders in an individual ✓", "The complete absence of any diagnosable disorders", "Disorders that have been successfully cured"], correct: 1 },
        { q: "The dopamine hypothesis as an explanation for schizophrenia proposes which neurochemical mechanism?", answers: ["Insufficient dopamine activity in key brain regions", "Excessive dopamine activity, particularly in mesolimbic pathways ✓", "No involvement of neurotransmitters whatsoever", "Only serotonin dysregulation without dopamine involvement"], correct: 1 },
        { q: "Martin Seligman's concept of learned helplessness has been particularly influential in understanding which psychological condition?", answers: ["Only anxiety disorders", "Depression following exposure to uncontrollable negative events ✓", "Schizophrenia and psychotic disorders", "Only personality characteristics"], correct: 1 },
        { q: "David Rosenhan's classic study 'On Being Sane in Insane Places' demonstrated which important finding about psychiatric diagnosis?", answers: ["Psychiatric diagnosis is perfectly accurate", "Diagnostic labels can powerfully influence staff perceptions and patient treatment ✓", "All psychiatric patients are inevitably misdiagnosed", "There are no concerns about diagnostic validity"], correct: 1 },
        { q: "What have meta-analyses examining psychotherapy effectiveness across multiple studies generally concluded?", answers: ["No therapeutic approaches demonstrate effectiveness", "Most psychotherapy approaches are effective, though some variation exists in outcomes ✓", "Only one specific therapy approach shows effectiveness", "Medication is always superior to psychotherapy"], correct: 1 },
        { q: "Electroconvulsive therapy (ECT) in contemporary psychiatric practice is primarily utilized for:", answers: ["Treating all categories of mental disorders", "Severe treatment-resistant depression not responding to other interventions ✓", "Only anxiety disorders", "As the standard first-line treatment approach"], correct: 1 },
        { q: "Why are cultural considerations critically important in the diagnosis of psychological disorders?", answers: ["Culture should be completely ignored in diagnosis", "Cultural context shapes expressions of distress and symptom presentation ✓", "One universal diagnostic standard applies to all cultures", "No adjustments are needed for cultural differences"], correct: 1 },
        { q: "The placebo effect in psychotherapy and medication research demonstrates which psychological phenomenon?", answers: ["The treatment intervention itself is entirely fake", "Patient expectations of improvement can contribute to therapeutic outcomes ✓", "No genuine therapeutic effects occur", "Treatment involves only deliberate deception"], correct: 1 },
        { q: "The recovery-oriented approach to mental illness, in contrast to traditional models, emphasizes which therapeutic goals?", answers: ["Only complete symptom removal and cure", "Hope, empowerment, and building a meaningful life even with persistent symptoms ✓", "Acceptance of permanent disability without intervention", "Avoiding all treatment entirely"], correct: 1 }
    ]
};

const module7Discussion = null;

const module7Checkpoint = {
    title: "Psychological Investigation Portfolio - ALL 6 PIECES DUE (200 points)",
    instructions: "Submit your complete 6-piece Psychological Investigation Portfolio: Piece #1 (Research Question & Method), Piece #2 (Literature Review), Piece #3 (Hypothesis & Design), Piece #4 (Data Collection Plan), Piece #5 (Data Analysis & Results), and Piece #6 (Complete APA Report). All pieces have been progressively developed throughout Modules 2-7. This is your culminating research experience demonstrating mastery of psychological thinking skills. See project-pieces.js for complete details and rubric."
};
