// Application State
const state = {
    activeTab: 'dashboard',
    activeModuleId: null,
    activePageIndex: 0,
    completedModules: new Set(JSON.parse(localStorage.getItem('ochin_completed_modules') || '[]')),
    readQuestions: new Set(JSON.parse(localStorage.getItem('ochin_read_questions') || '[]')),
    theme: localStorage.getItem('ochin_theme') || 'dark'
};

// DOM Elements
const elements = {
    body: document.body,
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeBtnText: document.getElementById('theme-btn-text'),
    navItems: document.querySelectorAll('.nav-item'),
    tabContents: document.querySelectorAll('.tab-content'),
    globalSearch: document.getElementById('global-search'),
    overallProgressPercentage: document.getElementById('overall-progress-percentage'),
    overallProgressBar: document.getElementById('overall-progress-bar'),
    statCompletedModules: document.getElementById('stat-completed-modules'),
    statReadQuestions: document.getElementById('stat-read-questions'),
    nextModulePreview: document.getElementById('next-module-preview'),
    moduleNavList: document.getElementById('module-navigation-list'),
    
    // Module Viewer Elements
    moduleViewer: document.getElementById('module-viewer'),
    activeModuleTitle: document.getElementById('active-module-title'),
    activeModuleDesc: document.getElementById('active-module-desc'),
    modulePagesContainer: document.getElementById('module-pages-container'),
    prevPageBtn: document.getElementById('prev-page-btn'),
    nextPageBtn: document.getElementById('next-page-btn'),
    modulePageIndicator: document.getElementById('module-page-indicator'),
    modulePagesSidebarList: document.getElementById('module-pages-sidebar-list'),
    markModuleComplete: document.getElementById('mark-module-complete'),
    backToDashBtn: document.getElementById('back-to-dash-btn'),
    
    // Q&A Elements
    qnaSearch: document.getElementById('qna-search'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    qnaListContainer: document.getElementById('qna-list-container')
};

// Initialize Application
function init() {
    setupTheme();
    setupNavigation();
    setupQnAGuide();
    setupGlobalSearch();
    renderSidebarModules();
    updateProgressAndStats();
    renderDashboardPreview();
    renderQuizSplash();
    setupQuizEvents();
    setupResetProgress();
    
    // Auto-expand first question in guide to show interaction
    const firstQ = document.querySelector('.qna-question-btn');
    if (firstQ) firstQ.click();
}

// Reset Handler
function setupResetProgress() {
    document.getElementById('reset-progress-btn').addEventListener('click', () => {
        if (confirm("Are you sure you want to reset all training progress and Q&A history?")) {
            localStorage.removeItem('ochin_completed_modules');
            localStorage.removeItem('ochin_read_questions');
            state.completedModules.clear();
            state.readQuestions.clear();
            
            renderSidebarModules();
            updateProgressAndStats();
            renderDashboardPreview();
            renderQnAList(qnaData);
            
            quizState.currentIndex = -1;
            renderQuizSplash();
            
            alert("Progress cleared successfully!");
        }
    });
}

// Theme Handlers
function setupTheme() {
    if (state.theme === 'light') {
        elements.body.classList.remove('dark-theme');
        elements.body.classList.add('light-theme');
        elements.themeToggleBtn.querySelector('.material-icons-round').textContent = 'dark_mode';
        elements.themeBtnText.textContent = 'Dark Mode';
    } else {
        elements.body.classList.remove('light-theme');
        elements.body.classList.add('dark-theme');
        elements.themeToggleBtn.querySelector('.material-icons-round').textContent = 'light_mode';
        elements.themeBtnText.textContent = 'Light Mode';
    }

    elements.themeToggleBtn.addEventListener('click', () => {
        if (elements.body.classList.contains('dark-theme')) {
            elements.body.classList.remove('dark-theme');
            elements.body.classList.add('light-theme');
            state.theme = 'light';
            elements.themeToggleBtn.querySelector('.material-icons-round').textContent = 'dark_mode';
            elements.themeBtnText.textContent = 'Dark Mode';
        } else {
            elements.body.classList.remove('light-theme');
            elements.body.classList.add('dark-theme');
            state.theme = 'dark';
            elements.themeToggleBtn.querySelector('.material-icons-round').textContent = 'light_mode';
            elements.themeBtnText.textContent = 'Light Mode';
        }
        localStorage.setItem('ochin_theme', state.theme);
    });
}

// Navigation Controllers
function setupNavigation() {
    elements.navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            switchTab(target);
        });
    });

    elements.backToDashBtn.addEventListener('click', () => {
        switchTab('dashboard');
    });
}

function switchTab(tabId) {
    state.activeTab = tabId;
    
    // Update navigation sidebar active highlights
    elements.navItems.forEach(btn => {
        if (btn.getAttribute('data-target') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Also highlight module menu item in sidebar if module-viewer is active
    if (tabId === 'module-viewer') {
        const activeNavBtn = document.querySelector(`.nav-item[data-module-id="${state.activeModuleId}"]`);
        if (activeNavBtn) activeNavBtn.classList.add('active');
    }

    // Toggle content views
    elements.tabContents.forEach(content => {
        if (content.id === tabId || (tabId === 'module-viewer' && content.id === 'module-viewer')) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    // Reset scroll positions
    document.querySelector('.content-body').scrollTop = 0;
}

// Dynamic Sidebar Module Menus
function renderSidebarModules() {
    elements.moduleNavList.innerHTML = '';
    trainingModules.forEach(mod => {
        const btn = document.createElement('button');
        btn.className = 'nav-item';
        btn.setAttribute('data-module-id', mod.id);
        
        const isComplete = state.completedModules.has(mod.id);
        const iconName = isComplete ? 'check_circle' : 'radio_button_unchecked';
        
        btn.innerHTML = `
            <span class="material-icons-round ${isComplete ? 'text-success' : ''}">${iconName}</span>
            <span style="font-size: 13px;">${mod.title.split(':')[0]}</span>
        `;
        
        btn.addEventListener('click', () => {
            loadModule(mod.id);
        });
        
        elements.moduleNavList.appendChild(btn);
    });
}

// Module Loading & Page Paging Logic
function loadModule(moduleId, pageIndex = 0) {
    const module = trainingModules.find(m => m.id === moduleId);
    if (!module) return;

    state.activeModuleId = moduleId;
    state.activePageIndex = pageIndex;
    
    elements.activeModuleTitle.textContent = module.title;
    elements.activeModuleDesc.textContent = module.description;
    
    renderModulePage(module);
    renderModuleSidebar(module);
    switchTab('module-viewer');
}

function renderModulePage(module) {
    const page = module.pages[state.activePageIndex];
    if (!page) return;

    elements.modulePagesContainer.innerHTML = `
        <div class="module-content-page">
            ${page.content}
        </div>
    `;

    // Update indicators
    elements.modulePageIndicator.textContent = `Page ${state.activePageIndex + 1} of ${module.pages.length}`;
    
    // Page buttons disabled/enabled state
    elements.prevPageBtn.disabled = state.activePageIndex === 0;
    
    if (state.activePageIndex === module.pages.length - 1) {
        elements.nextPageBtn.innerHTML = `Finish <span class="material-icons-round">done</span>`;
    } else {
        elements.nextPageBtn.innerHTML = `Next <span class="material-icons-round">navigate_next</span>`;
    }

    // Set Completion Checkbox state
    elements.markModuleComplete.checked = state.completedModules.has(module.id);
    
    // Bind buttons
    elements.prevPageBtn.onclick = () => {
        if (state.activePageIndex > 0) {
            loadModule(module.id, state.activePageIndex - 1);
        }
    };

    elements.nextPageBtn.onclick = () => {
        if (state.activePageIndex < module.pages.length - 1) {
            loadModule(module.id, state.activePageIndex + 1);
        } else {
            // Reached final page
            markActiveModuleCompleted(true);
            switchTab('dashboard');
        }
    };

    elements.markModuleComplete.onchange = (e) => {
        markActiveModuleCompleted(e.target.checked);
    };
}

function renderModuleSidebar(module) {
    elements.modulePagesSidebarList.innerHTML = '';
    module.pages.forEach((page, index) => {
        const btn = document.createElement('button');
        btn.className = `page-nav-item ${index === state.activePageIndex ? 'active' : ''}`;
        
        btn.innerHTML = `
            <span class="material-icons-round">description</span>
            <span>Page ${index + 1}</span>
        `;
        
        btn.addEventListener('click', () => {
            loadModule(module.id, index);
        });
        
        elements.modulePagesSidebarList.appendChild(btn);
    });
}

function markActiveModuleCompleted(isChecked) {
    if (isChecked) {
        state.completedModules.add(state.activeModuleId);
    } else {
        state.completedModules.delete(state.activeModuleId);
    }
    
    localStorage.setItem('ochin_completed_modules', JSON.stringify(Array.from(state.completedModules)));
    
    renderSidebarModules();
    updateProgressAndStats();
    renderDashboardPreview();
}

// Reference Guide (Q&A) Controllers
function setupQnAGuide() {
    renderQnAList(qnaData);

    // Filter by category
    elements.filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            filterQnA();
        });
    });

    // Search bar
    elements.qnaSearch.addEventListener('input', () => {
        filterQnA();
    });
}

function renderQnAList(questions) {
    elements.qnaListContainer.innerHTML = '';
    
    if (questions.length === 0) {
        elements.qnaListContainer.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
                <span class="material-icons-round" style="font-size: 48px; margin-bottom: 12px; opacity: 0.5;">search_off</span>
                <p>No questions matched your search query.</p>
            </div>
        `;
        return;
    }

    questions.forEach(q => {
        const item = document.createElement('div');
        item.className = `qna-item ${state.readQuestions.has(q.id) ? 'read' : ''}`;
        item.setAttribute('data-id', q.id);
        
        item.innerHTML = `
            <button class="qna-question-btn">
                <div class="qna-question-title-wrapper">
                    <span class="qna-num">Q-${q.id}</span>
                    <span class="qna-title">${q.question}</span>
                    <span class="category-tag ${q.category}">${q.category}</span>
                </div>
                <span class="material-icons-round qna-arrow">expand_more</span>
            </button>
            <div class="qna-answer-panel">
                <div class="qna-answer-text">${q.answer}</div>
                <div class="qna-example-box">
                    <h5>Real-World Example</h5>
                    <div class="qna-example-content">${q.example}</div>
                </div>
            </div>
        `;

        const btn = item.querySelector('.qna-question-btn');
        btn.addEventListener('click', () => {
            const isExpanded = item.classList.contains('expanded');
            
            // Accordion single-expansion behavior
            document.querySelectorAll('.qna-item').forEach(other => {
                if (other !== item) other.classList.remove('expanded');
            });

            if (!isExpanded) {
                item.classList.add('expanded');
                // Track reading
                if (!state.readQuestions.has(q.id)) {
                    state.readQuestions.add(q.id);
                    localStorage.setItem('ochin_read_questions', JSON.stringify(Array.from(state.readQuestions)));
                    updateProgressAndStats();
                }
            } else {
                item.classList.remove('expanded');
            }
        });

        elements.qnaListContainer.appendChild(item);
    });
}

function filterQnA() {
    const keyword = elements.qnaSearch.value.toLowerCase().trim();
    const activeCategoryBtn = document.querySelector('.filter-btn.active');
    const category = activeCategoryBtn ? activeCategoryBtn.getAttribute('data-category') : 'all';

    const filtered = qnaData.filter(q => {
        const matchesCategory = category === 'all' || q.category === category;
        const matchesKeyword = q.question.toLowerCase().includes(keyword) || 
                              q.answer.toLowerCase().includes(keyword) || 
                              q.example.toLowerCase().includes(keyword);
        
        return matchesCategory && matchesKeyword;
    });

    renderQnAList(filtered);
}

// Global Dashboard Search
function setupGlobalSearch() {
    elements.globalSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = elements.globalSearch.value.trim();
            if (!query) return;
            
            // Transfer query to Q&A search and open tab
            elements.qnaSearch.value = query;
            switchTab('qna-guide');
            filterQnA();
        }
    });
}

// Calculate Progress Metrics
function updateProgressAndStats() {
    const totalModules = trainingModules.length;
    const totalQuestions = 100; // Phase 5 includes 100 questions
    
    const completedModulesCount = state.completedModules.size;
    const readQuestionsCount = state.readQuestions.size;
    
    // Dashboard Stats update
    elements.statCompletedModules.textContent = `${completedModulesCount}/${totalModules}`;
    elements.statReadQuestions.textContent = `${readQuestionsCount}/${totalQuestions}`;
    
    // Overall Percentage Calculation: 
    // Modules represent 60% of total score, Q&As represent 40%
    let modulesProgress = totalModules > 0 ? (completedModulesCount / totalModules) * 60 : 0;
    let questionsProgress = totalQuestions > 0 ? (readQuestionsCount / totalQuestions) * 40 : 0;
    
    const percentage = Math.round(modulesProgress + questionsProgress);
    
    elements.overallProgressPercentage.textContent = `${percentage}%`;
    elements.overallProgressBar.style.width = `${percentage}%`;
}

// Render Dashboard "Next Up" preview box
function renderDashboardPreview() {
    elements.nextModulePreview.innerHTML = '';
    
    // Find first incomplete module
    const nextMod = trainingModules.find(m => !state.completedModules.has(m.id));
    
    if (!nextMod) {
        elements.nextModulePreview.innerHTML = `
            <div class="next-preview-card" style="border-color: var(--success-color); background-color: rgba(16, 185, 129, 0.05);">
                <div class="next-preview-header">
                    <span class="tag" style="background-color: rgba(16, 185, 129, 0.15); color: var(--success-color);">Completed</span>
                </div>
                <h4>All Modules Done!</h4>
                <p>Excellent work. You have finished all Phase 1 training modules. Head over to the Go-Live Reference Guide to review common questions.</p>
                <button class="btn btn-secondary" onclick="switchTab('qna-guide')">Open Reference Guide</button>
            </div>
        `;
        return;
    }

    elements.nextModulePreview.innerHTML = `
        <div class="next-preview-card">
            <div class="next-preview-header">
                <span class="tag">Incomplete</span>
                <span style="font-size: 11px; color: var(--text-secondary); font-weight: 500;">${nextMod.pages.length} Pages</span>
            </div>
            <h4>${nextMod.title}</h4>
            <p>${nextMod.description}</p>
            <button class="btn btn-primary" id="dashboard-start-module-btn">
                Start Module <span class="material-icons-round">play_arrow</span>
            </button>
        </div>
    `;

    document.getElementById('dashboard-start-module-btn').addEventListener('click', () => {
        loadModule(nextMod.id, 0);
    });
}

// Interactive Quiz System Data
const quizQuestions = [
    {
        question: "Jose Ramirez-Garcia arrives at the front desk. What is the correct OCHIN Epic search technique to prevent duplicate charts?",
        options: [
            "Search by spelling the first 3 letters of the Last Name, first 3 letters of the First Name (e.g. 'RAM, JOS') plus Date of Birth.",
            "Click 'Create New Patient' immediately and type the full name to save time.",
            "Only search using the Social Security Number (SSN).",
            "Perform a broad search for 'Jose' and scan all matching records manually."
        ],
        answer: 0,
        explanation: "The OCHIN Search Strategy requires searching with the first 3 letters of the last name, first 3 letters of the first name, and the patient's DOB. This prevents missing existing charts that might have slight spelling variations."
    },
    {
        question: "A self-pay patient states they have zero income and are currently unhoused. How do you configure their sliding fee scale (SFS) guarantor?",
        options: [
            "Input family size and verified income as zero, link SFS Tier A, and apply a Hardship Waiver to adjust off the nominal fee.",
            "Register them as a full self-pay patient with 100% responsibility and instruct them to call billing later.",
            "Block check-in until they can provide physical proof of income documents.",
            "Assign them a commercial health plan dummy card to satisfy registration errors."
        ],
        answer: 0,
        explanation: "For unhoused patients with zero income, FQHC guidelines mandate applying the SFS Tier A (nominal fee). If they cannot afford the nominal fee, apply the approved Hardship Waiver to waive the copay at checkout without blocking care."
    },
    {
        question: "You want to pull today's clinical vitals directly into your progress note template. What SmartTool command do you type?",
        options: [
            "Type the SmartLink @VS@ inside your note.",
            "Type the SmartPhrase .rosnegative inside the flowsheet.",
            "Copy and paste the vitals manually from the flowsheet cell.",
            "Press F2 to open the vitals dropdown selector."
        ],
        answer: 0,
        explanation: "SmartLinks (denoted by @ symbols) pull dynamic chart data. Typing @VS@ automatically imports a formatted table of today's vitals into the progress note."
    },
    {
        question: "When signing a prescription for a controlled substance (EPCS), what authentication steps are required?",
        options: [
            "Enter your Epic login password and approve a Duo push notification sent to your registered mobile phone.",
            "Type the patient's pharmacy NPI registration code.",
            "Obtain verbal approval from the clinic nurse manager.",
            "Scan the barcode on the patient's photo ID card."
        ],
        answer: 0,
        explanation: "E-Prescribing Controlled Substances (EPCS) requires dual-factor authentication: your Epic credential password plus a biometric/mobile token approval via Duo security."
    },
    {
        question: "A claim is denied with error code CO-16 because a child's sliding fee scale poverty level was left blank. How do you resolve this?",
        options: [
            "Edit the patient's SFS registration demographics to compute the FPL, and click 'Resubmit' in the claim edit workqueue.",
            "Delete the claim and charge off the visit balance entirely.",
            "Call the patient's parents and ask them to pay the full commercial rate.",
            "Re-transmit the claim immediately without changes to force payer review."
        ],
        answer: 0,
        explanation: "CO-16 indicates a claim lacks necessary information. Edit the patient profile demographics to calculate the FPL (UDS requirement), then click Resubmit in the billing workqueue."
    }
];

let quizState = {
    currentIndex: -1, // -1 means not started
    userAnswers: []
};

// Bind Quiz UI Elements
function setupQuizEvents() {
    const nextBtn = document.getElementById('quiz-next-btn');
    const prevBtn = document.getElementById('quiz-prev-btn');
    
    nextBtn.addEventListener('click', () => {
        if (quizState.currentIndex === -1) {
            // Start Quiz
            quizState.currentIndex = 0;
            quizState.userAnswers = new Array(quizQuestions.length).fill(null);
            prevBtn.style.display = 'inline-flex';
            nextBtn.textContent = 'Next';
            renderQuizQuestion();
        } else if (quizState.currentIndex === quizQuestions.length - 1) {
            // Submit Quiz
            evaluateQuiz();
        } else {
            // Next Question
            if (quizState.userAnswers[quizState.currentIndex] === null) {
                alert("Please select an option before proceeding.");
                return;
            }
            quizState.currentIndex++;
            renderQuizQuestion();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (quizState.currentIndex > 0) {
            quizState.currentIndex--;
            renderQuizQuestion();
        } else {
            // Reset to splash
            quizState.currentIndex = -1;
            prevBtn.style.display = 'none';
            nextBtn.textContent = 'Start Quiz';
            renderQuizSplash();
        }
    });
}

function renderQuizSplash() {
    const questionBox = document.getElementById('quiz-question-box');
    questionBox.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <span class="material-icons-round text-primary" style="font-size: 64px; margin-bottom: 16px;">assignment</span>
            <h2>Assess Your OCHIN Epic Readiness</h2>
            <p style="color: var(--text-secondary); margin-top: 12px; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.6;">
                This quiz covers critical workflows for Front Desk, Clinical Rooming, Providers, and Billing queues. Answer all 5 scenario questions to check your confidence.
            </p>
        </div>
    `;
    document.getElementById('quiz-next-btn').textContent = 'Start Quiz';
    document.getElementById('quiz-prev-btn').style.display = 'none';
}

function renderQuizQuestion() {
    const qBox = document.getElementById('quiz-question-box');
    const q = quizQuestions[quizState.currentIndex];
    const nextBtn = document.getElementById('quiz-next-btn');
    
    // Update button text on final question
    if (quizState.currentIndex === quizQuestions.length - 1) {
        nextBtn.innerHTML = `Submit Quiz <span class="material-icons-round">check</span>`;
    } else {
        nextBtn.innerHTML = `Next <span class="material-icons-round">navigate_next</span>`;
    }

    let optionsHTML = '';
    q.options.forEach((opt, idx) => {
        const isSelected = quizState.userAnswers[quizState.currentIndex] === idx;
        optionsHTML += `
            <div class="quiz-option-item ${isSelected ? 'selected' : ''}" data-index="${idx}">
                <span class="quiz-radio-dot"></span>
                <span>${opt}</span>
            </div>
        `;
    });

    qBox.innerHTML = `
        <div class="quiz-question-header">
            <span class="quiz-question-num">Question ${quizState.currentIndex + 1} of ${quizQuestions.length}</span>
            <h3 class="quiz-question-text">${q.question}</h3>
        </div>
        <div class="quiz-options-list">
            ${optionsHTML}
        </div>
    `;

    // Bind option click listeners
    const options = qBox.querySelectorAll('.quiz-option-item');
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            options.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            const selectedIdx = parseInt(opt.getAttribute('data-index'));
            quizState.userAnswers[quizState.currentIndex] = selectedIdx;
        });
    });
}

function evaluateQuiz() {
    if (quizState.userAnswers[quizState.currentIndex] === null) {
        alert("Please select an option before submitting.");
        return;
    }

    const qBox = document.getElementById('quiz-question-box');
    const nextBtn = document.getElementById('quiz-next-btn');
    const prevBtn = document.getElementById('quiz-prev-btn');

    let correctCount = 0;
    quizQuestions.forEach((q, idx) => {
        if (quizState.userAnswers[idx] === q.answer) {
            correctCount++;
        }
    });

    const scorePercentage = Math.round((correctCount / quizQuestions.length) * 100);
    const passed = scorePercentage >= 80;

    prevBtn.style.display = 'none';
    nextBtn.innerHTML = `Retry Quiz <span class="material-icons-round">replay</span>`;
    
    // Bind retry behavior
    nextBtn.onclick = () => {
        quizState.currentIndex = -1;
        renderQuizSplash();
        setupQuizEvents(); // Rebind original events
    };

    let reviewHTML = '';
    quizQuestions.forEach((q, idx) => {
        const userAns = quizState.userAnswers[idx];
        const isCorrect = userAns === q.answer;
        
        reviewHTML += `
            <div style="border-top: 1px solid var(--border-color); padding-top: 16px; margin-top: 16px; text-align: left;">
                <h4 style="font-size: 14px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
                    ${idx + 1}. ${q.question}
                </h4>
                <p style="font-size: 13px; color: ${isCorrect ? 'var(--success-color)' : 'var(--danger-color)'}; font-weight: 600; display: flex; align-items: center; gap: 4px;">
                    <span class="material-icons-round" style="font-size: 16px;">${isCorrect ? 'check_circle' : 'cancel'}</span>
                    Your Answer: ${q.options[userAns]}
                </p>
                ${!isCorrect ? `
                <p style="font-size: 13px; color: var(--success-color); font-weight: 600; margin-top: 4px; display: flex; align-items: center; gap: 4px;">
                    <span class="material-icons-round" style="font-size: 16px;">check_circle</span>
                    Correct Answer: ${q.options[q.answer]}
                </p>
                ` : ''}
                <p style="font-size: 12px; color: var(--text-muted); margin-top: 6px; font-style: italic;">
                    <strong>Explanation:</strong> ${q.explanation}
                </p>
            </div>
        `;
    });

    qBox.innerHTML = `
        <div class="quiz-results-card">
            <div class="quiz-score-circle ${passed ? '' : 'failed'}">
                <span class="quiz-score-num">${scorePercentage}%</span>
                <span class="quiz-score-label">${passed ? 'Passed' : 'Failed'}</span>
            </div>
            <h2 class="quiz-result-title">${passed ? 'Ready for Go-Live!' : 'Needs Review'}</h2>
            <p class="quiz-result-desc">
                ${passed ? 
                  'Excellent work! You demonstrate a solid understanding of critical FQHC, administrative, and clinical workflows in OCHIN Epic.' : 
                  'We recommend reviewing the specific modules on SFS guarantor check-in, duplicate charts, and SmartLink shortcuts before Go-Live.'}
            </p>
            
            <div style="margin-top: 32px;">
                <h3 style="font-size: 16px; font-weight: 700; text-align: left; margin-bottom: 16px;">Review Answers</h3>
                ${reviewHTML}
            </div>
        </div>
    `;
}

// Start app on DOM load
document.addEventListener('DOMContentLoaded', init);
