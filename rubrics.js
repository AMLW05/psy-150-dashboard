// COURSE RUBRICS - PSY-150 General Psychology
// 3 rubrics: Discussion Boards (100pts), Project Checkpoints (50pts), Final Portfolio (200pts)

const courseRubrics = {
    RUBRIC_1_Discussion_Boards: {
        title: "Discussion Board Rubric",
        totalPoints: 100,
        usage: "Used for all 4 discussion boards (Modules 1, 3, 5, 8)",
        description: "Each discussion includes psychology content (70 pts) and portfolio progress (30 pts in Modules 1, 3, 5)",
        criteria: [
            {
                category: "PART A: Psychology Discussion",
                totalPoints: 70,
                components: [
                    {
                        name: "Initial Post Quality",
                        points: 40,
                        exemplary: "Deep understanding with specific examples. Accurate terminology. Insightful analysis. Required research cited in APA format.",
                        proficient: "Solid understanding with relevant examples. Correct terminology. Clear connections. Citation included.",
                        developing: "Basic understanding, vague examples. Some terminology errors. Citation missing/incorrect.",
                        unsatisfactory: "Minimal understanding. Irrelevant examples. Terminology misused. No citation."
                    },
                    {
                        name: "Peer Response #1",
                        points: 15,
                        exemplary: "Substantive engagement. Adds new concepts/questions/perspectives. Extends conversation meaningfully.",
                        proficient: "Thoughtful response. Makes connections or asks questions. Contributes to discussion.",
                        developing: "Brief acknowledgment with minimal insight. Primarily agreement without extension.",
                        unsatisfactory: "Minimal engagement like 'Great post!' without substance."
                    },
                    {
                        name: "Peer Response #2",
                        points: 15,
                        exemplary: "Substantive engagement. Adds new concepts/questions/perspectives. Extends conversation meaningfully.",
                        proficient: "Thoughtful response. Makes connections or asks questions. Contributes to discussion.",
                        developing: "Brief acknowledgment with minimal insight. Primarily agreement without extension.",
                        unsatisfactory: "Minimal engagement like 'Great post!' without substance."
                    }
                ]
            },
            {
                category: "PART B: Portfolio Progress Update (Modules 1,3,5 only)",
                totalPoints: 30,
                components: [
                    {
                        name: "Research Progress",
                        points: 10,
                        exemplary: "Significant progress demonstrated with specific, detailed update.",
                        proficient: "Adequate progress with clear update.",
                        developing: "Minimal progress lacking specificity.",
                        unsatisfactory: "Little/no progress. Update missing or vague."
                    },
                    {
                        name: "Quality of Work",
                        points: 10,
                        exemplary: "Strong research understanding. Correct APA format. Clear descriptions.",
                        proficient: "Adequate understanding. Mostly correct APA. Described.",
                        developing: "Limited understanding. APA errors. Lacks detail.",
                        unsatisfactory: "Minimal understanding. Major APA errors. Incomplete."
                    },
                    {
                        name: "Critical Thinking",
                        points: 10,
                        exemplary: "Identifies challenges with solutions. Thoughtful questions. Aware of research complexities.",
                        proficient: "Notes challenges. Some problem-solving thinking.",
                        developing: "Minimal challenge awareness. Little reflection.",
                        unsatisfactory: "No identification of challenges."
                    }
                ]
            }
        ],
        notes: "Initial posts due Wednesday. Peer responses due Sunday. Module 8 discussion is 100pts (no portfolio component)."
    },

    RUBRIC_2_Project_Checkpoints: {
        title: "Project Checkpoint Rubric",
        totalPoints: 50,
        usage: "Used for Piece #1 (Module 1), Piece #2 (Module 3), Piece #3 (Module 5)",
        description: "Each checkpoint builds toward final portfolio (Module 7, 200pts)",
        criteria: [
            {
                name: "Content Completeness",
                points: 20,
                exemplary: "All components fully developed. Strong research understanding. Insightful analysis beyond requirements.",
                proficient: "All components present. Solid research understanding. Meets requirements.",
                developing: "Most components present, some lack detail. Basic understanding with gaps.",
                unsatisfactory: "Missing components. Minimal research understanding."
            },
            {
                name: "Research Method Understanding",
                points: 15,
                exemplary: "Sophisticated research design understanding. Appropriate method with clear justification. Variables operationalized. Anticipates challenges.",
                proficient: "Solid method understanding. Appropriate selection. Variables defined. Basic challenge awareness.",
                developing: "Basic understanding. Method may not be optimal. Variables loosely defined. Limited challenge awareness.",
                unsatisfactory: "Methods misunderstood. Inappropriate selection. Variables unclear/absent."
            },
            {
                name: "APA Format & Citations",
                points: 5,
                exemplary: "Perfect/near-perfect APA 7th edition. All sources properly cited.",
                proficient: "Mostly correct APA with minor errors. Sources cited.",
                developing: "Multiple APA errors. Some sources missing citations.",
                unsatisfactory: "Major APA errors. Missing citations."
            },
            {
                name: "Writing Quality",
                points: 5,
                exemplary: "Exceptional clarity and organization. No errors. Logical flow.",
                proficient: "Clear and organized. Few errors. Good flow.",
                developing: "Adequate but lacks clarity/organization. Some errors.",
                unsatisfactory: "Unclear or disorganized. Frequent errors."
            },
            {
                name: "Critical Thinking",
                points: 5,
                exemplary: "Exceptional critical thinking. Multiple perspectives. Identifies limitations/alternatives. Shows curiosity.",
                proficient: "Good critical thinking. Considers implications. Some limitation analysis.",
                developing: "Limited critical thinking. Surface-level analysis. Minimal limitation consideration.",
                unsatisfactory: "Little/no critical thinking. Purely descriptive."
            }
        ],
        pieceGuidance: {
            piece1: "Focus: Clear research question, appropriate method, ethical considerations. Question must be specific and measurable.",
            piece2: "Focus: Quality article selection (empirical, peer-reviewed, relevant). Synthesis identifies patterns/gaps, not just summary.",
            piece3: "Focus: Feasibility and detail of design. Procedure must be replicable. Confounds identified and addressed."
        },
        notes: "Checkpoints receive feedback for final portfolio improvement. Incorporate feedback in Module 7 submission."
    },

    RUBRIC_3_Final_Portfolio: {
        title: "Final Portfolio Rubric",
        totalPoints: 200,
        usage: "Complete APA research report (Module 7)",
        description: "Integrates all previous pieces plus data analysis and discussion with biopsychosocial integration",
        criteria: [
            {
                category: "Organization & APA Format",
                totalPoints: 40,
                components: [
                    {
                        name: "Structure",
                        points: 15,
                        description: "Complete APA manuscript: Title Page, Abstract, Introduction, Method, Results, Discussion, References. Proper headings/formatting."
                    },
                    {
                        name: "Citations & References",
                        points: 15,
                        description: "Perfect/near-perfect APA 7th edition. Minimum 3 empirical sources from Piece #2."
                    },
                    {
                        name: "Professional Appearance",
                        points: 10,
                        description: "Polished document. Consistent formatting. No typos. Tables/figures properly formatted."
                    }
                ]
            },
            {
                category: "Literature Integration",
                totalPoints: 30,
                components: [
                    {
                        name: "Literature Review",
                        points: 15,
                        description: "Synthesizes 3+ empirical articles. Identifies patterns, contradictions, gaps. Builds logical argument."
                    },
                    {
                        name: "Theoretical Framework",
                        points: 10,
                        description: "Clear framework. Hypothesis flows from literature. Proper psychological terminology."
                    },
                    {
                        name: "Source Quality",
                        points: 5,
                        description: "All sources empirical, peer-reviewed, relevant. No Wikipedia/blogs/non-academic sources."
                    }
                ]
            },
            {
                category: "Method Rigor",
                totalPoints: 30,
                components: [
                    {
                        name: "Research Design",
                        points: 15,
                        description: "Clear, detailed design. Appropriate method. Variables operationally defined. Replicable."
                    },
                    {
                        name: "Procedure Detail",
                        points: 10,
                        description: "Step-by-step procedure others can follow. Timeline included. Materials specified."
                    },
                    {
                        name: "Ethical Safeguards",
                        points: 5,
                        description: "Comprehensive ethics discussion. Informed consent. Confidentiality. Risk mitigation."
                    }
                ]
            },
            {
                category: "Results Quality",
                totalPoints: 30,
                components: [
                    {
                        name: "Data Presentation",
                        points: 10,
                        description: "Simulated data clearly organized. Descriptive statistics (M, SD, N). Table/visualization included."
                    },
                    {
                        name: "Statistical Analysis",
                        points: 10,
                        description: "Appropriate test (t-test/correlation/descriptive). Results in APA format. Significance addressed."
                    },
                    {
                        name: "Visual Representation",
                        points: 10,
                        description: "Clear, professional graph/chart. Proper labeling (title, axes, legend). Aids understanding."
                    }
                ]
            },
            {
                category: "Discussion Depth",
                totalPoints: 40,
                components: [
                    {
                        name: "Results Interpretation",
                        points: 10,
                        description: "Clear interpretation. Explains hypothesis support. Relates to literature. Accurate terminology."
                    },
                    {
                        name: "Biopsychosocial Integration ⭐",
                        points: 15,
                        description: "CRITICAL: Interprets using biological, psychological, AND social factors. Shows genuine integration. Explains factor interactions."
                    },
                    {
                        name: "Limitations & Future Directions",
                        points: 10,
                        description: "Thoughtful limitation analysis (confounds, sample, measurement). Specific, realistic future research suggestions."
                    },
                    {
                        name: "Real-World Implications",
                        points: 5,
                        description: "Practical applications discussed. Connects to real-world issues/problems."
                    }
                ]
            },
            {
                category: "Writing Quality",
                totalPoints: 30,
                components: [
                    {
                        name: "Clarity & Flow",
                        points: 10,
                        description: "Exceptionally clear, concise. Logical transitions. Ideas flow smoothly."
                    },
                    {
                        name: "Grammar & Mechanics",
                        points: 10,
                        description: "No/very few errors. Proper sentence structure. Correct punctuation/spelling."
                    },
                    {
                        name: "Scientific Writing Style",
                        points: 10,
                        description: "Objective, precise, formal. Third person appropriate. Evidence integrated smoothly."
                    }
                ]
            }
        ],
        notes: "Typical length: 8-12 pages (excluding title/abstract/references). Simulated data acceptable. Biopsychosocial analysis heavily weighted. Use Purdue OWL for APA help. Start early - this is substantial."
    }
};
