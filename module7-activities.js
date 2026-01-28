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
            { q: "Diathesis-stress model explains disorders as:", answers: ["Only biological", "Interaction of predisposition and environmental stressors ✓", "Only environmental", "No causes"], correct: 1 },
            { q: "Negative triad in depression (Beck) includes negative thoughts about:", answers: ["Only self", "Self, world, and future ✓", "Only future", "Others only"], correct: 1 },
            { q: "Difference between major depression and bipolar:", answers: ["No difference", "Bipolar includes manic/hypomanic episodes ✓", "Depression is more severe", "Bipolar is only mania"], correct: 1 },
            { q: "Hallucinations vs delusions:", answers: ["Same thing", "Hallucinations: false perceptions; Delusions: false beliefs ✓", "Only visual experiences", "Only thoughts"], correct: 1 },
            { q: "CBT effectiveness stems from:", answers: ["Only changing thoughts", "Changing maladaptive thought patterns and behaviors ✓", "Only behavior change", "No evidence"], correct: 1 },
            { q: "Exposure therapy is especially effective for:", answers: ["Schizophrenia", "Anxiety disorders and phobias ✓", "Bipolar disorder", "Personality disorders"], correct: 1 },
            { q: "SSRIs (Prozac, Zoloft) work by:", answers: ["Blocking dopamine", "Increasing serotonin availability ✓", "Sedation only", "Affecting GABA"], correct: 1 },
            { q: "Psychodynamic therapy focuses on:", answers: ["Only current behavior", "Unconscious conflicts and past experiences ✓", "Only cognitions", "Medication"], correct: 1 },
            { q: "Evidence-based practice means:", answers: ["Only clinical experience", "Integrating research evidence, clinical expertise, and patient values ✓", "Only research", "Only patient preference"], correct: 1 },
            { q: "Stigma surrounding mental illness:", answers: ["Helps treatment seeking", "Reduces treatment seeking and increases suffering ✓", "No impact", "Only affects others"], correct: 1 }
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
            { q: "Person has persistent sad mood, loss of interest, sleep/appetite changes, worthlessness for 3 weeks. Most likely diagnosis:", answers: ["Bipolar disorder", "Major depressive disorder ✓", "Generalized anxiety", "Schizophrenia"], correct: 1 },
            { q: "Patient experiences panic attacks, avoids places where escape difficult. Likely diagnosis:", answers: ["Social anxiety", "Panic disorder with agoraphobia ✓", "Specific phobia", "GAD"], correct: 1 },
            { q: "Using diathesis-stress model, depression results from:", answers: ["Only genetic factors", "Genetic vulnerability + environmental stressors ✓", "Only stress", "No biological factors"], correct: 1 },
            { q: "Person has intrusive thoughts about contamination, washes hands 50+ times daily. Best treatment approach:", answers: ["Medication only", "CBT with exposure and response prevention ✓", "Psychoanalysis only", "No treatment works"], correct: 1 },
            { q: "Cognitive therapy for depression (Beck) focuses on:", answers: ["Unconscious conflicts", "Identifying and challenging negative automatic thoughts ✓", "Only behavior", "Medication"], correct: 1 },
            { q: "SSRIs work by:", answers: ["Blocking dopamine", "Increasing serotonin availability at synapse ✓", "Sedation", "Affecting GABA only"], correct: 1 },
            { q: "Patient experiences hallucinations (hearing voices) and delusions (belief in conspiracy). Likely diagnosis:", answers: ["Major depression", "Schizophrenia ✓", "Bipolar disorder", "Anxiety disorder"], correct: 1 },
            { q: "Systematic desensitization for phobias involves:", answers: ["Immediate intense exposure", "Gradual exposure with relaxation ✓", "Medication only", "Psychoanalysis"], correct: 1 },
            { q: "Difference between psychologist and psychiatrist:", answers: ["No difference", "Psychiatrists are MDs who can prescribe; psychologists typically PhD/PsyD ✓", "Psychologists prescribe", "Same training"], correct: 1 },
            { q: "Evidence-based practice in mental health means:", answers: ["Only using research", "Integrating research, clinical expertise, and patient values ✓", "Ignoring research", "One treatment for all"], correct: 1 }
        ]
    }
};

const module7Quiz = {
    questions: [
        { q: "Medical model of psychological disorders emphasizes:", answers: ["Only behavior", "Biological and disease perspective ✓", "Only thoughts", "No treatment"], correct: 1 },
        { q: "Comorbidity means:", answers: ["One disorder only", "Presence of two or more disorders simultaneously ✓", "No disorders", "Cured disorders"], correct: 1 },
        { q: "Dopamine hypothesis of schizophrenia suggests:", answers: ["Too little dopamine", "Excessive dopamine activity ✓", "No neurotransmitter involvement", "Only serotonin matters"], correct: 1 },
        { q: "Learned helplessness (Seligman) relates to:", answers: ["Anxiety only", "Depression after uncontrollable negative events ✓", "Schizophrenia", "Personality"], correct: 1 },
        { q: "Rosenhan's 'On Being Sane in Insane Places' showed:", answers: ["Perfect diagnosis", "Diagnostic labels can influence perceptions and treatment ✓", "All patients are misdiagnosed", "No issues with diagnosis"], correct: 1 },
        { q: "Meta-analyses of psychotherapy effectiveness show:", answers: ["No therapies work", "Most therapies are effective, with some variations ✓", "Only one therapy works", "Medication always better"], correct: 1 },
        { q: "Electroconvulsive therapy (ECT) is used for:", answers: ["All disorders", "Severe depression not responding to other treatments ✓", "Anxiety only", "As first-line treatment"], correct: 1 },
        { q: "Cultural considerations in diagnosis require:", answers: ["Ignoring culture", "Understanding cultural expressions of distress ✓", "One universal standard", "No adjustments"], correct: 1 },
        { q: "Placebo effect in therapy/medication means:", answers: ["Treatment is fake", "Expectation of improvement contributes to outcomes ✓", "No real effects", "Only deception"], correct: 1 },
        { q: "Recovery-oriented approach to mental illness emphasizes:", answers: ["Only symptom removal", "Hope, empowerment, and meaningful life despite symptoms ✓", "Permanent disability", "No treatment"], correct: 1 }
    ]
};

const module7Discussion = null;

const module7Checkpoint = {
    title: "Psychological Investigation Portfolio - ALL 6 PIECES DUE (200 points)",
    instructions: "Submit your complete 6-piece Psychological Investigation Portfolio: Piece #1 (Research Question & Method), Piece #2 (Literature Review), Piece #3 (Hypothesis & Design), Piece #4 (Data Collection Plan), Piece #5 (Data Analysis & Results), and Piece #6 (Complete APA Report). All pieces have been progressively developed throughout Modules 2-7. This is your culminating research experience demonstrating mastery of psychological thinking skills. See project-pieces.js for complete details and rubric."
};
