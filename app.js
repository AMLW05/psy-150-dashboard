// PSY-150 Dashboard - Interactive JavaScript
// Dynamically renders collapsible modules from course-data.json

let courseData = null;

// Load data and render
fetch('course-data.json')
    .then(r => r.json())
    .then(data => {
        courseData = data;
        renderAll();
    })
    .catch(err => console.error('Load error:', err));

function renderAll() {
    renderModules();
    renderRubrics();
    renderSkills();
    renderResources();
}

function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
}

function toggleModule(n) {
    const c = document.getElementById('module-content-' + n);
    if (!c) {
        console.error('Module content not found for module', n);
        return;
    }
    const h = c.previousElementSibling;
    if (!h) {
        console.error('Module header not found for module', n);
        return;
    }
    c.classList.toggle('active');
    h.classList.toggle('active');
}

function copyModuleContent(n, event) {
    event.stopPropagation();
    const content = document.getElementById('module-content-' + n);
    const moduleData = courseData.modules.find(m => m.number === n);

    if (!content || !moduleData) return;

    // Create modal overlay with content display (like CSC-113)
    const modal = document.createElement('div');
    modal.className = 'modal-container';
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;';

    const modalHTML = `
        <div style="background: var(--parchment); border-radius: 12px; max-width: 1200px; width: 100%; max-height: 90vh; display: flex; flex-direction: column; box-shadow: 0 20px 60px rgba(0,0,0,0.5); border: 3px solid var(--accent);">
            <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; padding: 25px; border-bottom: 3px solid var(--accent); background: var(--gray-light);">
                <h3 style="margin: 0; color: var(--ink); font-size: 1.5em;">📄 Module ${n}: ${moduleData.title}</h3>
                <div style="display: flex; gap: 10px;">
                    <button onclick="copyModalContent()" style="background: var(--accent); color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: Georgia, serif; font-size: 14px;">📋 Copy</button>
                    <button onclick="window.print()" style="background: var(--success); color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: Georgia, serif; font-size: 14px;">🖨️ Print</button>
                    <button onclick="this.closest('.modal-container').remove()" style="background: #d63031; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: Georgia, serif; font-size: 14px;">✕ Close</button>
                </div>
            </div>
            <div class="modal-content-display" id="modal-content-${n}" style="padding: 30px; overflow-y: auto; flex: 1; background: white; line-height: 1.8;">
                ${content.innerHTML}
            </div>
        </div>
    `;

    modal.innerHTML = modalHTML;
    document.body.appendChild(modal);

    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Add print styles
    const printStyle = document.createElement('style');
    printStyle.textContent = `
        @media print {
            body * { visibility: hidden; }
            .modal-container, .modal-container * { visibility: visible; }
            .modal-container { position: absolute; left: 0; top: 0; width: 100%; background: white !important; }
            .modal-header button { display: none !important; }
        }
    `;
    document.head.appendChild(printStyle);
}

// Copy function for modal content
function copyModalContent() {
    const modalContent = document.querySelector('.modal-content-display');
    if (!modalContent) return;

    const text = modalContent.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML = '✅ Copied!';
        btn.style.background = '#00b894';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = 'var(--accent)';
        }, 2000);
    }).catch(err => {
        alert('Failed to copy. Please select text manually and copy.');
        console.error('Copy failed:', err);
    });
}

function copyActivity(mn, idx, event) {
    event.stopPropagation();
    const details = document.getElementById('activity-details-m' + mn + '-a' + idx);
    const activityTitle = details.parentElement.querySelector('.activity-title').textContent;

    let textContent = activityTitle + '\n\n' + details.innerText;

    navigator.clipboard.writeText(textContent).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = '#00b894';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        alert('Copy failed. Please select and copy manually.');
    });
}

function copyAssessment(id, event) {
    event.stopPropagation();
    const details = document.getElementById('activity-details-' + id);
    const assessmentTitle = details.parentElement.querySelector('.activity-title').textContent;

    let textContent = assessmentTitle + '\n\n' + details.innerText;

    navigator.clipboard.writeText(textContent).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = '#00b894';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        alert('Copy failed. Please select and copy manually.');
    });
}

function toggleActivity(id) {
    document.getElementById('activity-details-' + id).classList.toggle('active');
}

function renderModules() {
    const container = document.getElementById('modules-container');
    if (!courseData || !courseData.modules) return;

    courseData.modules.forEach(m => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = '<div class="module-header" onclick="toggleModule(' + m.number + ')"><div class="module-number">' + m.number + '</div><div class="module-title-wrapper"><div class="module-title">' + m.title + '</div><div class="module-meta">' + m.dates + '</div></div><button class="copy-btn" onclick="copyModuleContent(' + m.number + ', event)" title="View module content - Copy or Print">🖨️ Print/Copy</button><span class="toggle-icon">▼</span></div><div id="module-content-' + m.number + '" class="module-content">' + buildModuleContent(m) + '</div>';
        container.appendChild(card);
    });
}

function buildModuleContent(m) {
    try {
        let html = '<div class="subsection"><h3 class="subsection-title">Inquiry Questions</h3><ul class="inquiry-list">';
        m.inquiryQuestions.forEach(q => html += '<li>' + q + '</li>');
        html += '</ul></div><div class="subsection"><h3 class="subsection-title">Module Learning Objectives</h3><ol class="mlo-list">';
        m.mlos.forEach(mlo => {
            const cloLinks = mlo.linkedCLOs && mlo.linkedCLOs.length > 0 ? ' <em class="clo-alignment">(Aligns with: ' + mlo.linkedCLOs.join(', ') + ')</em>' : '';
            html += '<li><strong>MLO' + mlo.number + ':</strong> ' + mlo.text + cloLinks + '</li>';
        });
        html += '</ol></div><div class="subsection"><h3 class="subsection-title">Learning Activities</h3>';
        m.activities.forEach((a, i) => {
            try {
                html += buildActivity(a, m.number, i);
            } catch (err) {
                console.error('Error building activity', i, 'for module', m.number, err);
                html += '<div class="activity-card"><div class="activity-header"><span class="activity-title">Error loading activity</span></div></div>';
            }
        });
        html += '</div><div class="subsection"><h3 class="subsection-title">Assessments</h3>';
        m.assessments.forEach(a => {
            try {
                html += buildAssessment(a, m.number);
            } catch (err) {
                console.error('Error building assessment for module', m.number, err);
                html += '<div class="activity-card"><div class="activity-header"><span class="activity-title">Error loading assessment</span></div></div>';
            }
        });
        html += '</div>';
        return html;
    } catch (err) {
        console.error('Error building module content for module', m.number, err);
        return '<div style="padding:20px;color:red;">Error loading module content. Check console for details.</div>';
    }
}

function buildActivity(a, mn, idx) {
    const id = 'm' + mn + '-a' + idx;
    const feat = a.featured ? ' featured' : '';
    let details = '<p><strong>Instructions:</strong> ' + a.studentInstructions + '</p>';

    // Get module activities data
    const moduleData = {
        1: typeof module1Activities !== 'undefined' ? module1Activities : null,
        2: typeof module2Activities !== 'undefined' ? module2Activities : null,
        3: typeof module3Activities !== 'undefined' ? module3Activities : null,
        4: typeof module4Activities !== 'undefined' ? module4Activities : null,
        5: typeof module5Activities !== 'undefined' ? module5Activities : null,
        6: typeof module6Activities !== 'undefined' ? module6Activities : null,
        7: typeof module7Activities !== 'undefined' ? module7Activities : null,
        8: typeof module8Activities !== 'undefined' ? module8Activities : null
    };

    const modAct = moduleData[mn];
    if (!modAct) return '<div class="activity-card' + feat + '" onclick="toggleActivity(\'' + id + '\')"><div class="activity-header"><div><span class="activity-title">' + a.title + '</span>' + (a.autoGraded ? '<span class="badge badge-auto">Auto-Graded</span>' : '') + '<span class="badge badge-points">' + a.points + ' pts</span>' + (a.featured ? '<span class="badge badge-featured">Featured</span>' : '') + '</div><span class="toggle-icon">▼</span></div><div class="activity-meta">' + a.format + ' • ' + a.timeLimit + ' min • ' + a.attempts + ' attempts</div><div id="activity-details-' + id + '" class="activity-details">' + details + '</div></div>';

    // LA1: Matching questions
    if (idx === 0 && modAct.la1) {
        details += '<h4 style="margin-top:20px">Matching Pairs (15 items):</h4><table style="margin-top:10px"><thead><tr><th style="width:30%">Term</th><th>Definition</th></tr></thead><tbody>';
        modAct.la1.questions.forEach(q => {
            details += '<tr><td><strong>' + q.term + '</strong></td><td>' + q.def + '</td></tr>';
        });
        details += '</tbody></table>';
    }
    // LA2: Multiple choice
    else if (idx === 1 && modAct.la2) {
        details += '<h4 style="margin-top:20px">Multiple Choice Questions (10 items):</h4>';
        modAct.la2.questions.forEach((q, i) => {
            details += '<div class="question-block"><div class="question-text">Q' + (i+1) + ': ' + q.q + '</div>';
            q.answers.forEach((ans, aidx) => {
                details += '<div class="answer-option' + (aidx === q.correct ? ' correct' : '') + '">' + String.fromCharCode(97+aidx) + ') ' + ans + '</div>';
            });
            details += '</div>';
        });
    }
    // LA3: Student Choice Activities (Categorization, Timeline, Matching, Data Analysis, etc.)
    else if (idx === 2 && modAct.la3) {
        details += '<h4 style="margin-top:20px">Student Choice Activity</h4>';
        details += '<p style="margin:10px 0;font-style:italic">Students select between the following options:</p>';

        // Iterate through all properties in la3 to find activity options
        let optionCount = 1;
        Object.keys(modAct.la3).forEach(key => {
            const activity = modAct.la3[key];

            // Render timeline activities
            if (key.includes('timeline') || key.includes('Timeline')) {
                details += '<div style="margin:20px 0;padding:15px;background:#f8f9fa;border-left:4px solid var(--accent);border-radius:4px">';
                details += '<h5 style="margin:0 0 10px 0;color:var(--accent)">Option ' + String.fromCharCode(64 + optionCount) + ': Timeline Builder</h5>';
                if (activity.events) {
                    details += '<table style="margin-top:10px"><thead><tr><th style="width:10%">#</th><th>Event</th><th style="width:20%">Date</th></tr></thead><tbody>';
                    activity.events.forEach((e, i) => {
                        details += '<tr><td><strong>' + (i+1) + '</strong></td><td>' + e.event + '</td><td>' + e.date + '</td></tr>';
                    });
                    details += '</tbody></table>';
                }
                details += '</div>';
                optionCount++;
            }
            // Special handling for integratedConceptApplication (Module 8)
            else if (key === 'integratedConceptApplication' && activity.cases) {
                details += '<div style="margin:20px 0;padding:15px;background:#f8f9fa;border-left:4px solid var(--accent);border-radius:4px">';
                details += '<h5 style="margin:0 0 10px 0;color:var(--accent)">Option ' + String.fromCharCode(64 + optionCount) + ': Biopsychosocial Case Analysis</h5>';
                details += '<p style="margin:10px 0">Analyze each scenario using the biopsychosocial model:</p>';
                activity.cases.forEach((c, i) => {
                    details += '<div style="margin:15px 0;padding:12px;background:white;border-radius:4px">';
                    details += '<p style="margin:0 0 8px 0"><strong>Case ' + (i+1) + ':</strong> ' + c.scenario + '</p>';
                    details += '<ul style="margin-left:20px;line-height:1.6">';
                    details += '<li><strong>Biological:</strong> ' + c.biological + '</li>';
                    details += '<li><strong>Psychological:</strong> ' + c.psychological + '</li>';
                    details += '<li><strong>Social:</strong> ' + c.social + '</li>';
                    details += '</ul></div>';
                });
                details += '</div>';
                optionCount++;
            }
            // Render matching/categorization activities
            else if (activity.scenarios || activity.examples || activity.structures || activity.descriptions || activity.techniques || activity.concepts || activity.cases) {
                const items = activity.scenarios || activity.examples || activity.structures || activity.descriptions || activity.techniques || activity.concepts || activity.cases;
                details += '<div style="margin:20px 0;padding:15px;background:#f8f9fa;border-left:4px solid var(--accent);border-radius:4px">';
                details += '<h5 style="margin:0 0 10px 0;color:var(--accent)">Option ' + String.fromCharCode(64 + optionCount) + ': ' + key.replace(/([A-Z])/g, ' $1').trim() + '</h5>';
                details += '<p style="margin:10px 0">Match or categorize the following items:</p>';
                details += '<table style="margin-top:10px"><thead><tr><th style="width:10%">#</th><th>Item</th><th style="width:35%">Answer/Category</th></tr></thead><tbody>';
                items.forEach((item, i) => {
                    const itemText = item.text || item.scenario || item.behavior || item.symptom || item.symptoms || item.situation || item.description || item.strategy || item.name || '';
                    const answer = item.answer || item.type || item.stage || item.neurotransmitter || item.disorder || item.field || item.theory || item.approach || item.function || '';
                    if (itemText && answer) {
                        details += '<tr><td><strong>' + (i+1) + '</strong></td><td>' + itemText + '</td><td><span class="badge badge-auto" style="display:inline-block">' + answer + '</span></td></tr>';
                    }
                });
                details += '</tbody></table></div>';
                optionCount++;
            }
        });
    }
    // LA4: Higher Bloom's Level Activities (all modules have LA4)
    else if (idx === 3 && modAct.la4) {
        details += '<h4 style="margin-top:20px">' + modAct.la4.title + '</h4>';

        // Questions format (multiple choice, like LA2)
        if (modAct.la4.questions) {
            details += '<p style="margin:10px 0;font-style:italic;color:#666">Higher-order thinking: Analyze, Evaluate, Apply</p>';
            modAct.la4.questions.forEach((q, i) => {
                details += '<div class="question-block"><div class="question-text">Q' + (i+1) + ': ' + q.q + '</div>';
                q.answers.forEach((ans, aidx) => {
                    details += '<div class="answer-option' + (aidx === q.correct ? ' correct' : '') + '">' + String.fromCharCode(97+aidx) + ') ' + ans + '</div>';
                });
                details += '</div>';
            });
        }
        // Student choice format (legacy)
        else if (modAct.la4.studentChoice) {
            details += '<p style="margin:10px 0">' + modAct.la4.studentChoice.description + '</p>';
            modAct.la4.studentChoice.options.forEach((opt, i) => {
                details += '<div style="margin:20px 0;padding:15px;background:#f8f9fa;border-left:4px solid #4a90e2;border-radius:4px">';
                details += '<h5 style="margin:0 0 10px 0;color:#4a90e2">' + opt.title + '</h5>';
                details += '<p style="margin:5px 0"><strong>Description:</strong> ' + opt.description + '</p>';
                details += '<p style="margin:5px 0"><strong>Instructions:</strong> ' + opt.instructions + '</p>';
                details += '</div>';
            });
            details += '<p style="margin-top:15px"><strong>Format:</strong> ' + modAct.la4.studentChoice.submissionFormat + '</p>';
        }
        // Items format (matching/categorization)
        else if (modAct.la4.items) {
            details += '<p style="margin:10px 0"><strong>' + modAct.la4.instructions + '</strong></p>';
            details += '<table style="margin-top:10px"><thead><tr><th style="width:10%">#</th><th>Item</th><th style="width:30%">Answer</th></tr></thead><tbody>';
            modAct.la4.items.forEach((item, i) => {
                details += '<tr><td><strong>' + (i+1) + '</strong></td><td>' + item.text + '</td><td><span class="badge badge-auto" style="display:inline-block">' + item.answer + '</span></td></tr>';
            });
            details += '</tbody></table>';
        }
    }

    return '<div class="activity-card' + feat + '" onclick="toggleActivity(\'' + id + '\')"><div class="activity-header"><div><span class="activity-title">' + a.title + '</span>' + (a.autoGraded ? '<span class="badge badge-auto">Auto-Graded</span>' : '') + '<span class="badge badge-points">' + a.points + ' pts</span>' + (a.featured ? '<span class="badge badge-featured">Featured</span>' : '') + '</div><div><button class="copy-btn" onclick="copyActivity(' + mn + ',' + idx + ', event)" title="Copy to clipboard for Canvas">📋 Copy</button><span class="toggle-icon">▼</span></div></div><div class="activity-meta">' + a.format + ' • ' + a.timeLimit + ' min • ' + a.attempts + ' attempts</div><div id="activity-details-' + id + '" class="activity-details">' + details + '</div></div>';
}

function buildAssessment(a, mn) {
    const id = 'm' + mn + '-assess-' + (a.type === 'Discussion Board' ? 'disc' : a.type === 'Project Checkpoint' ? 'checkpoint' : a.type === 'Midterm Exam' ? 'midterm' : a.type === 'Final Exam' ? 'final' : a.type === 'Final Project' ? 'finalproject' : 'quiz');
    let details = '';

    // Get module-specific data (discussions, checkpoints, quizzes, exams)
    // Pattern: Discussions in 1,3,5,8 | Checkpoints in 2,4,6,7 | Midterm in 4 | Final in 8
    const moduleData = {
        1: { discussion: typeof module1Discussion !== 'undefined' ? module1Discussion : null, quiz: typeof module1Quiz !== 'undefined' ? module1Quiz : null },
        2: { checkpoint: typeof module2Checkpoint !== 'undefined' ? module2Checkpoint : null, quiz: typeof module2Quiz !== 'undefined' ? module2Quiz : null },
        3: { discussion: typeof module3Discussion !== 'undefined' ? module3Discussion : null, quiz: typeof module3Quiz !== 'undefined' ? module3Quiz : null },
        4: { checkpoint: typeof module4Checkpoint !== 'undefined' ? module4Checkpoint : null, midterm: typeof module4Midterm !== 'undefined' ? module4Midterm : null, quiz: typeof module4Quiz !== 'undefined' ? module4Quiz : null },
        5: { discussion: typeof module5Discussion !== 'undefined' ? module5Discussion : null, quiz: typeof module5Quiz !== 'undefined' ? module5Quiz : null },
        6: { checkpoint: typeof module6Checkpoint !== 'undefined' ? module6Checkpoint : null, quiz: typeof module6Quiz !== 'undefined' ? module6Quiz : null },
        7: { checkpoint: typeof module7Checkpoint !== 'undefined' ? module7Checkpoint : null, quiz: typeof module7Quiz !== 'undefined' ? module7Quiz : null },
        8: { discussion: typeof module8Discussion !== 'undefined' ? module8Discussion : null, finalExam: typeof module8FinalExam !== 'undefined' ? module8FinalExam : null, quiz: typeof module8Quiz !== 'undefined' ? module8Quiz : null }
    };

    const modData = moduleData[mn];

    // Discussion Board - Get data from discussions.js
    if (a.type === 'Discussion Board') {
        const discussionsData = (typeof discussionBoards !== 'undefined') ? discussionBoards : null;
        const moduleKey = 'module' + mn;
        let disc = null;

        if (discussionsData && discussionsData[moduleKey]) {
            disc = discussionsData[moduleKey];
        }

        if (disc) {
            details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
            details += '<h4 style="margin-top:0;color:var(--accent)">' + disc.title + '</h4>';
            details += '<div style="white-space:pre-wrap;line-height:1.8;margin:15px 0">' + disc.prompt + '</div>';
            if (disc.requirements && disc.requirements.length > 0) {
                details += '<h5 style="margin-top:20px;color:var(--accent)">Requirements:</h5><ul style="margin-left:20px;line-height:1.8">';
                disc.requirements.forEach(req => details += '<li>' + req + '</li>');
                details += '</ul>';
            }
            if (disc.rubric) {
                details += '<h5 style="margin-top:20px;color:var(--accent)">Grading Rubric:</h5>';
                details += '<table style="width:100%;margin-top:10px;border-collapse:collapse"><thead><tr style="background:#e9ecef"><th style="padding:10px;text-align:left;border:1px solid #dee2e6">Criterion</th><th style="padding:10px;text-align:center;border:1px solid #dee2e6;width:80px">Points</th></tr></thead><tbody>';
                disc.rubric.forEach(item => {
                    details += '<tr><td style="padding:10px;border:1px solid #dee2e6">' + item.criterion + '</td><td style="padding:10px;text-align:center;border:1px solid #dee2e6">' + item.points + '</td></tr>';
                });
                details += '</tbody></table>';
            }
            details += '<p style="margin-top:15px;font-style:italic">Copy/paste ready for Canvas. See discussions.js for complete content.</p></div>';
        }
    }
    // Thread Project Checkpoint - Get data from project-pieces.js
    else if (a.type === 'Project Checkpoint') {
        const projectData = (typeof psychologicalInvestigationPortfolio !== 'undefined') ? psychologicalInvestigationPortfolio : null;
        let piece = null;

        // Map module to piece number (updated for new pattern)
        const pieceMap = { 1: 'piece1', 3: 'piece2', 5: 'piece3' };
        const pieceKey = pieceMap[mn];

        if (projectData && pieceKey) {
            piece = projectData[pieceKey];
        }

        if (piece) {
            details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
            details += '<h4 style="margin-top:0;color:var(--accent)">' + piece.title + ' (' + piece.points + ' pts)</h4>';
            details += '<p style="margin:10px 0;font-style:italic;color:#666">📌 Individual submission graded. Incorporate feedback into final portfolio (Module 7, 200 pts).</p>';
            details += '<div style="white-space:pre-wrap;line-height:1.8;margin:15px 0">' + piece.instructions + '</div>';
            if (piece.tips && piece.tips.length > 0) {
                details += '<h5 style="margin-top:20px">💡 Tips for Success:</h5><ul style="margin-left:20px;line-height:1.8">';
                piece.tips.forEach(tip => details += '<li>' + tip + '</li>');
                details += '</ul>';
            }
            details += '<p style="margin-top:15px;font-style:italic">Copy/paste ready for Canvas. See project-pieces.js and rubrics.js (RUBRIC_2_Project_Checkpoints) for complete content.</p></div>';
        }
    }
    // Final Portfolio - Module 7
    else if (a.type === 'Final Portfolio') {
        const projectData = (typeof psychologicalInvestigationPortfolio !== 'undefined') ? psychologicalInvestigationPortfolio : null;
        const piece = projectData ? projectData.module7Submission : null;

        if (piece) {
            details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
            details += '<h4 style="margin-top:0;color:var(--accent)">⭐ ' + piece.title + ' (' + piece.points + ' pts)</h4>';
            details += '<p style="margin:10px 0;font-weight:bold;color:var(--accent)">Complete APA-style research report integrating Pieces #1-3 plus data analysis and biopsychosocial discussion</p>';
            details += '<div style="white-space:pre-wrap;line-height:1.8;margin:15px 0">' + piece.description + '</div>';
            if (piece.submissionRequirements) {
                details += '<h5 style="margin-top:20px">Submission Requirements:</h5><ul style="margin-left:20px;line-height:1.8">';
                piece.submissionRequirements.forEach(req => details += '<li>' + req + '</li>');
                details += '</ul>';
            }
            details += '<p style="margin-top:15px;font-style:italic">Copy/paste ready for Canvas. See project-pieces.js and rubrics.js (RUBRIC_3_Final_Portfolio) for complete content.</p></div>';
        }
    }
    // Module Quiz
    else if (a.type === 'Module Quiz' && modData && modData.quiz) {
        const quiz = modData.quiz;
        details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
        details += '<h4 style="margin-top:0;color:var(--accent)">Module ' + mn + ' Quiz Questions</h4>';
        quiz.questions.forEach((q, i) => {
            details += '<div class="question-block" style="margin-top:20px;padding:15px;background:white;border-radius:4px;border-left:4px solid var(--accent)"><div class="question-text"><strong>Q' + (i+1) + ':</strong> ' + q.q + '</div>';
            q.answers.forEach((ans, aidx) => {
                details += '<div class="answer-option' + (aidx === q.correct ? ' correct' : '') + '" style="margin:8px 0 8px 20px">' + String.fromCharCode(97+aidx) + ') ' + ans + '</div>';
            });
            details += '</div>';
        });
        details += '</div>';
    }
    // Midterm Exam
    else if (a.type === 'Midterm Exam') {
        const exam = (typeof midtermExam !== 'undefined') ? midtermExam : null;
        if (exam && exam.questions) {
            details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
            details += '<h4 style="margin-top:0;color:var(--accent)">Midterm Exam (Modules 1-4)</h4>';
            details += '<p style="margin:10px 0"><strong>Format:</strong> 50 multiple-choice questions covering all content from Modules 1-4</p>';
            details += '<p style="margin:10px 0"><strong>Points:</strong> 100 points (2 points per question)</p>';
            details += '<h5 style="margin-top:20px">Exam Questions Preview (' + exam.questions.length + ' total):</h5>';
            exam.questions.forEach((q, i) => {
                details += '<div class="question-block" style="margin-top:15px;padding:15px;background:white;border-radius:4px;border-left:4px solid var(--success)"><div class="question-text"><strong>Q' + (i+1) + ':</strong> ' + q.q + '</div>';
                q.answers.forEach((ans, aidx) => {
                    details += '<div class="answer-option' + (aidx === q.correct ? ' correct' : '') + '" style="margin:8px 0 8px 20px">' + String.fromCharCode(97+aidx) + ') ' + ans + '</div>';
                });
                details += '</div>';
            });
            details += '<p style="margin-top:15px;font-style:italic">See exams.js for complete exam with all 50 questions.</p></div>';
        }
    }
    // Final Exam
    else if (a.type === 'Final Exam') {
        const exam = (typeof finalExam !== 'undefined') ? finalExam : null;
        if (exam && exam.questions) {
            details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
            details += '<h4 style="margin-top:0;color:var(--accent)">Comprehensive Final Exam (Modules 1-8)</h4>';
            details += '<p style="margin:10px 0"><strong>Format:</strong> 50 multiple-choice questions covering all course content</p>';
            details += '<p style="margin:10px 0"><strong>Coverage:</strong> Cumulative with emphasis on Modules 5-8 (15 review questions from 1-4, 35 new questions from 5-8)</p>';
            details += '<p style="margin:10px 0"><strong>Points:</strong> 100 points (2 points per question)</p>';
            details += '<h5 style="margin-top:20px">Final Exam Questions Preview (' + exam.questions.length + ' total):</h5>';
            exam.questions.forEach((q, i) => {
                details += '<div class="question-block" style="margin-top:15px;padding:15px;background:white;border-radius:4px;border-left:4px solid var(--warning)"><div class="question-text"><strong>Q' + (i+1) + ':</strong> ' + q.q + '</div>';
                q.answers.forEach((ans, aidx) => {
                    details += '<div class="answer-option' + (aidx === q.correct ? ' correct' : '') + '" style="margin:8px 0 8px 20px">' + String.fromCharCode(97+aidx) + ') ' + ans + '</div>';
                });
                details += '</div>';
            });
            details += '<p style="margin-top:15px;font-style:italic">See exams.js for complete exam with all 50 questions.</p></div>';
        }
    }

    // Build the card with consistent button handling
    if (details) {
        // Determine button text and metadata
        let buttonHtml = '<button class="copy-btn" onclick="copyAssessment(\'' + id + '\', event)" title="Copy to clipboard">📋 Copy</button>';
        let metaHtml = '';

        // Add question count if available
        if (a.questionCount) {
            metaHtml = '<div class="activity-meta">' + a.questionCount + ' questions</div>';
        }

        return '<div class="activity-card" onclick="toggleActivity(\'' + id + '\')"><div class="activity-header"><div><span class="activity-title">' + a.title + '</span>' + (a.autoGraded ? '<span class="badge badge-auto">Auto-Graded</span>' : '') + '<span class="badge badge-points">' + a.points + ' pts</span></div><div>' + buttonHtml + '<span class="toggle-icon">▼</span></div></div>' + metaHtml + '<div id="activity-details-' + id + '" class="activity-details">' + details + '</div></div>';
    }

    // Fallback for assessments without detailed data (shouldn't happen with new system)
    return '<div class="activity-card"><div class="activity-header"><div><span class="activity-title">' + a.title + '</span>' + (a.autoGraded ? '<span class="badge badge-auto">Auto-Graded</span>' : '') + '<span class="badge badge-points">' + a.points + ' pts</span></div><span class="toggle-icon">▼</span></div>' + (a.questionCount ? '<div class="activity-meta">' + a.questionCount + ' questions</div>' : '') + '</div>';
}

function renderRubrics() {
    const c = document.getElementById('rubrics-container');

    if (typeof rubricData !== 'undefined') {
        // Render full rubric details
        [rubricData.rubric1, rubricData.rubric2, rubricData.rubric3].forEach(r => {
            const div = document.createElement('div');
            div.className = 'subsection';
            let html = '<h3 class="subsection-title">' + r.title + '</h3><p style="margin-bottom:15px"><strong>Used For:</strong> ' + r.usage + '</p>';

            html += '<table class="rubric-table"><thead><tr><th style="width:20%">Criterion</th>';
            if (r.criteria[0].excellent) {
                html += '<th style="width:20%">Excellent</th><th style="width:20%">Proficient</th><th style="width:20%">Developing</th><th style="width:20%">Needs Work</th>';
            } else {
                html += '<th style="width:27%">Excellent</th><th style="width:27%">Proficient</th><th style="width:26%">Needs Work</th>';
            }
            html += '</tr></thead><tbody>';

            r.criteria.forEach(cr => {
                html += '<tr><td><strong>' + cr.name + '</strong></td>';
                if (cr.excellent) html += '<td>' + cr.excellent + '</td>';
                html += '<td>' + cr.proficient + '</td>';
                if (cr.developing) html += '<td>' + cr.developing + '</td>';
                html += '<td>' + cr.needsWork + '</td></tr>';
            });
            html += '</tbody></table>';
            div.innerHTML = html;
            c.appendChild(div);
        });
    } else {
        // Fallback simple version
        const rubrics = [
            { title: 'Rubric 1: Project Checkpoints', pts: 50, use: 'Modules 1, 3, 5', crit: [['Topic/Source Selection', 15], ['Historical Context', 15], ['Research Planning', 15], ['Writing Mechanics', 5]] },
            { title: 'Rubric 2: Discussion Boards', pts: 30, use: 'Modules 2, 4, 6, 8', crit: [['Initial Post Quality', 10], ['Peer Engagement', 10], ['Historical Accuracy', 10]] },
            { title: 'Rubric 3: Final Project', pts: 100, use: 'Module 7', crit: [['Thesis/Argument', 20], ['Evidence/Analysis', 20], ['Historical Context', 20], ['Organization', 20], ['Mechanics', 20]] }
        ];
        rubrics.forEach(r => {
            const div = document.createElement('div');
            div.className = 'subsection';
            let html = '<h3 class="subsection-title">' + r.title + ' (' + r.pts + ' points)</h3><p style="margin-bottom:15px"><strong>Used For:</strong> ' + r.use + '</p><table><thead><tr><th>Criterion</th><th>Points</th></tr></thead><tbody>';
            r.crit.forEach(cr => html += '<tr><td><strong>' + cr[0] + '</strong></td><td>' + cr[1] + ' pts</td></tr>');
            html += '</tbody></table>';
            div.innerHTML = html;
            c.appendChild(div);
        });
    }
}

function renderSkills() {
    const c = document.getElementById('skills-container');
    if (!courseData || !courseData.psychologicalThinkingSkills) return;
    courseData.psychologicalThinkingSkills.forEach(s => {
        const div = document.createElement('div');
        div.className = 'activity-card' + (s.id === 'PTS6' ? ' featured' : '');
        let html = '<div class="activity-header"><span class="activity-title">' + s.name + '</span>' + (s.id === 'PTS6' ? '<span class="badge badge-featured">NEW</span>' : '') + '</div><p style="margin:10px 0">' + s.description + '</p><div style="margin-top:15px;padding:15px;background:var(--gray-light);border-radius:6px"><strong>Progression:</strong><ul style="margin-left:20px;margin-top:10px;line-height:1.8">';
        s.progression.forEach(p => html += '<li>' + p + '</li>');
        html += '</ul></div>';
        div.innerHTML = html;
        c.appendChild(div);
    });
}

function renderResources() {
    const c = document.getElementById('resources-container');
    if (typeof courseResources === 'undefined') return;

    Object.keys(courseResources).forEach(key => {
        const resource = courseResources[key];
        const id = 'resource-' + key;

        const card = document.createElement('div');
        card.className = 'activity-card';
        card.onclick = () => toggleActivity(id);

        let html = '<div class="activity-header">';
        html += '<div><span style="font-size:1.5em;margin-right:10px">' + resource.icon + '</span>';
        html += '<span class="activity-title">' + resource.title + '</span></div>';
        html += '<div><button class="copy-btn" onclick="copyResource(\'' + id + '\', event)" title="Copy to clipboard">📋 Copy</button>';
        html += '<span class="toggle-icon">▼</span></div></div>';

        html += '<div id="activity-details-' + id + '" class="activity-details">';
        html += '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';

        resource.sections.forEach((section, idx) => {
            html += '<div style="margin-top:' + (idx > 0 ? '25px' : '0') + '">';
            html += '<h4 style="color:var(--accent);margin-bottom:10px">' + section.heading + '</h4>';
            html += '<div style="white-space:pre-wrap;line-height:1.8">' + section.content + '</div>';
            html += '</div>';
        });

        html += '</div></div>';
        card.innerHTML = html;
        c.appendChild(card);
    });
}

function copyResource(id, event) {
    event.stopPropagation();
    const details = document.getElementById('activity-details-' + id);
    if (!details) return;

    const text = details.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML = '✅ Copied!';
        btn.style.background = 'var(--success)';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 2000);
    });
}
