/* ===== 디지털 탐험가 - 메인 스크립트 ===== */

// ── 미션 데이터 (초등 5학년 수준) ──
const MISSIONS = [
    {
        level: 1,
        category: "🔑 키워드 조합",
        question: "조선시대 과학자 장영실이 만든 '자동으로 시간을 알려주는 물시계'의 이름은 무엇인가요?",
        hint: "💡 '장영실 자동 물시계 이름'으로 검색해 보세요.",
        answers: ["자격루"],
        acceptAny: true,
        explanation: "장영실이 만든 자동 물시계의 이름은 '자격루'예요! 스스로 종을 쳐서 시간을 알려줬답니다."
    },
    {
        level: 2,
        category: "🔑 키워드 조합",
        question: "세계에서 가장 작은 나라의 이름과 면적(km²)을 검색해 보세요. 나라 이름을 적어주세요!",
        hint: "💡 '세계에서 가장 작은 나라 면적'으로 검색해 보세요.",
        answers: ["바티칸", "바티칸 시국", "바티칸시국"],
        acceptAny: true,
        explanation: "세계에서 가장 작은 나라는 바티칸 시국(약 0.44km²)이에요! 우리 학교 운동장 60개 정도 크기랍니다."
    },
    {
        level: 3,
        category: "📑 탭 활용",
        question: "'석굴암 본존불상'을 검색한 후 이미지 탭을 눌러보세요. 본존불상이 바라보고 있는 방향은 동서남북 중 어디인가요?",
        hint: "💡 '석굴암 본존불상 방향'으로 검색하고, 이미지 탭에서 구조를 확인해 보세요.",
        answers: ["동", "동쪽", "동해"],
        acceptAny: true,
        explanation: "석굴암 본존불상은 동해 바다를 향해 동쪽을 바라보고 있어요! 이미지에서 확인할 수 있죠."
    },
    {
        level: 4,
        category: "📑 탭 활용",
        question: "'2025 어린이 코딩 대회'를 검색한 후 뉴스 탭을 눌러보세요. 뉴스 탭을 사용하면 일반 검색과 어떤 점이 다른가요?",
        hint: "💡 일반 검색 결과와 뉴스 탭 결과를 비교해 보세요. 어떤 종류의 결과가 나오나요?",
        answers: ["최신", "기사", "뉴스 기사", "최근", "언론", "신문"],
        acceptAny: true,
        explanation: "뉴스 탭을 사용하면 신문사나 언론사의 최신 기사만 모아서 볼 수 있어요!"
    },
    {
        level: 5,
        category: "✨ 따옴표(\" \") 활용",
        question: "구글에서 \"세계 최초의 금속 활자\"를 따옴표와 함께 검색해 보세요. 이 금속 활자로 인쇄된 책의 이름은 무엇인가요?",
        hint: "💡 \"세계 최초의 금속 활자\"를 따옴표로 감싸서 검색하면 정확한 결과를 찾을 수 있어요.",
        answers: ["직지심체요절", "직지", "직지심경"],
        acceptAny: true,
        explanation: "세계 최초의 금속 활자 인쇄본은 '직지심체요절'이에요! 따옴표 검색으로 정확한 정보를 찾을 수 있었죠."
    },
    {
        level: 6,
        category: "➖ 마이너스(-) 활용",
        question: "'재규어'를 검색하면 자동차 브랜드가 많이 나옵니다. 동물 재규어의 최고 달리기 속도(시속)를 찾으려면 어떻게 검색해야 할까요? 사용할 검색어를 적어보세요.",
        hint: "💡 '재규어 -자동차' 또는 '재규어 동물 -브랜드'처럼 불필요한 결과를 빼보세요.",
        answers: ["재규어 -자동차", "재규어 동물 -자동차", "재규어 -브랜드", "재규어 동물 -car"],
        acceptAny: true,
        explanation: "'재규어 -자동차'로 검색하면 동물 재규어 정보만 찾을 수 있어요! 최고 시속은 약 80km랍니다."
    },
    {
        level: 7,
        category: "🔑 키워드 조합",
        question: "거꾸로 해도 같은 숫자가 되는 소수를 '에미르프 소수'라고 합니다. 13을 거꾸로 하면 31인데, 둘 다 소수이죠! 1000보다 작은 에미르프 소수 중 가장 큰 수는 무엇인가요?",
        hint: "💡 '에미르프 소수 목록' 또는 'emirp prime list'로 검색해 보세요.",
        answers: ["989", "983"],
        acceptAny: true,
        explanation: "1000보다 작은 에미르프 소수 중 가장 큰 수를 검색으로 찾을 수 있어요! 키워드 조합이 중요하죠."
    },
    {
        level: 8,
        category: "✨ 따옴표(\" \") 활용",
        question: "\"대한민국 임시정부\"를 따옴표와 함께 검색하여, 임시정부가 마지막으로 있었던 중국 도시의 이름을 찾아보세요.",
        hint: "💡 \"대한민국 임시정부\" 마지막 소재지 — 이렇게 검색해 보세요.",
        answers: ["충칭", "중경", "충칭시"],
        acceptAny: true,
        explanation: "대한민국 임시정부의 마지막 소재지는 중국 충칭(중경)이에요! 따옴표로 정확한 검색을 할 수 있었죠."
    },
    {
        level: 9,
        category: "➖ 마이너스(-) 활용",
        question: "'수성'을 검색하면 경상북도 수성구 정보가 많이 나옵니다. 태양계 행성 수성의 공전 주기(태양을 한 바퀴 도는 데 걸리는 일수)를 찾아보세요. 검색어와 답(일수)을 함께 적어주세요.",
        hint: "💡 '수성 공전주기 -수성구' 또는 '수성 행성 -대구'로 검색해 보세요.",
        answers: ["88", "약 88", "88일"],
        acceptAny: true,
        explanation: "수성의 공전 주기는 약 88일이에요! '수성 -수성구'로 검색하면 행성 정보만 잘 나온답니다."
    },
    {
        level: 10,
        category: "🏆 종합 미션",
        question: "경복궁 근정전 앞마당에 놓여 있는 동물 석상 중, 상상 속의 동물이 있습니다. 이 동물의 이름은 무엇이고, 어떤 의미를 가지고 있는지 검색해 보세요. 동물 이름만 적어주세요!",
        hint: "💡 '경복궁 근정전 동물 석상 상상 동물'로 검색하거나, 이미지 탭도 함께 활용해 보세요.",
        answers: ["해태", "해치", "해태상", "해치상"],
        acceptAny: true,
        explanation: "경복궁 근정전 앞의 상상 속 동물은 '해태(해치)'예요! 옳고 그름을 판단하는 정의의 동물이랍니다. 키워드 조합 + 이미지 탭을 모두 활용하면 쉽게 찾을 수 있어요!"
    },
    {
        level: 11,
        category: "🔑 키워드 조합",
        question: "우리나라 최초의 인공위성 이름은 무엇이고, 몇 년도에 발사되었나요? 위성 이름만 적어주세요.",
        hint: "💡 '대한민국 최초 인공위성 발사'로 검색해 보세요.",
        answers: ["우리별 1호", "우리별1호", "우리별"],
        acceptAny: true,
        explanation: "우리나라 최초의 인공위성은 1992년에 발사된 '우리별 1호'예요!"
    },
    {
        level: 12,
        category: "📑 탭 활용",
        question: "'거문고자리'를 검색하고 이미지 탭을 눌러보세요. 거문고자리에서 가장 밝은 별의 이름은 무엇인가요?",
        hint: "💡 '거문고자리 가장 밝은 별'로 검색하고, 이미지에서 별자리 지도를 확인해 보세요.",
        answers: ["베가", "직녀성", "Vega"],
        acceptAny: true,
        explanation: "거문고자리에서 가장 밝은 별은 '베가(직녀성)'예요! 여름 밤하늘에서 볼 수 있답니다."
    },
    {
        level: 13,
        category: "✨ 따옴표(\" \") 활용",
        question: "\"세계 문화유산\" \"제주도\"를 따옴표와 함께 검색해 보세요. 제주도가 유네스코 세계자연유산에 등재된 연도는?",
        hint: "💡 두 개의 따옴표 키워드를 함께 사용하면 더 정확한 결과를 얻을 수 있어요.",
        answers: ["2007", "2007년"],
        acceptAny: true,
        explanation: "제주도는 2007년에 유네스코 세계자연유산에 등재되었어요!"
    },
    {
        level: 14,
        category: "➖ 마이너스(-) 활용",
        question: "'파이썬'을 검색하면 프로그래밍 언어 결과가 가득합니다. 뱀 파이썬의 최대 몸길이를 찾으려면 어떻게 검색할까요? 사용할 검색어를 적어주세요.",
        hint: "💡 '파이썬 뱀 -프로그래밍' 또는 '파이썬 -코딩 -언어'로 검색해 보세요.",
        answers: ["파이썬 -프로그래밍", "파이썬 뱀 -프로그래밍", "파이썬 뱀 -코딩", "파이썬 -코딩"],
        acceptAny: true,
        explanation: "'파이썬 뱀 -프로그래밍'으로 검색하면 뱀 정보만 찾을 수 있어요! 최대 약 10m까지 자란답니다."
    },
    {
        level: 15,
        category: "🔑 키워드 조합",
        question: "세계에서 가장 깊은 호수의 이름과 최대 수심을 검색해 보세요. 호수 이름만 적어주세요!",
        hint: "💡 '세계 가장 깊은 호수 최대 수심'으로 검색해 보세요.",
        answers: ["바이칼", "바이칼 호", "바이칼호"],
        acceptAny: true,
        explanation: "세계에서 가장 깊은 호수는 러시아의 바이칼호(최대 수심 1,642m)예요!"
    },
    {
        level: 16,
        category: "📑 탭 활용",
        question: "'첨성대 내부 구조'를 검색한 후 이미지 탭을 눌러보세요. 첨성대는 총 몇 단의 돌로 쌓여 있나요?",
        hint: "💡 이미지 탭에서 첨성대의 단면도나 구조도를 찾아보세요.",
        answers: ["27", "27단", "스물일곱"],
        acceptAny: true,
        explanation: "첨성대는 총 27단의 돌로 쌓여 있어요! 이미지 탭으로 구조를 눈으로 확인할 수 있었죠."
    },
    {
        level: 17,
        category: "✨ 따옴표(\" \") 활용",
        question: "\"아리랑 위성\"을 따옴표와 함께 검색해 보세요. 아리랑 위성의 공식 명칭(영어 약자)은 무엇인가요?",
        hint: "💡 \"아리랑 위성\" 공식 명칭 — 이렇게 검색해 보세요.",
        answers: ["KOMPSAT", "콤프샛"],
        acceptAny: true,
        explanation: "아리랑 위성의 공식 명칭은 KOMPSAT(Korea Multi-Purpose Satellite)이에요!"
    },
    {
        level: 18,
        category: "➖ 마이너스(-) 활용",
        question: "'공룡'을 검색하면 영화나 장난감 결과도 나옵니다. 실제 공룡 중 가장 큰 초식공룡의 이름을 찾으려면? 검색어를 적어보세요.",
        hint: "💡 '가장 큰 초식공룡 -영화 -장난감'처럼 불필요한 결과를 제외해 보세요.",
        answers: ["공룡 -영화 -장난감", "초식공룡 -영화", "가장 큰 초식공룡 -영화", "공룡 -쥬라기"],
        acceptAny: true,
        explanation: "'초식공룡 -영화 -장난감'으로 검색하면 학술적 정보를 잘 찾을 수 있어요!"
    },
    {
        level: 19,
        category: "🔑 키워드 조합",
        question: "대한민국에서 가장 오래된 목조 건물의 이름은 무엇인가요? 어디에 있는지도 검색해 보세요.",
        hint: "💡 '대한민국 가장 오래된 목조 건물'로 검색해 보세요.",
        answers: ["봉정사 극락전", "봉정사", "극락전"],
        acceptAny: true,
        explanation: "대한민국에서 가장 오래된 목조 건물은 안동 봉정사의 극락전이에요! 고려시대에 지어졌답니다."
    },
    {
        level: 20,
        category: "🏆 종합 미션",
        question: "우리나라 화폐 5만원권 뒷면에 그려진 그림의 제목과 그 그림을 그린 화가의 이름을 검색해 보세요. 화가의 이름만 적어주세요!",
        hint: "💡 '5만원권 뒷면 그림 화가'로 검색하거나, 이미지 탭에서 확인해 보세요.",
        answers: ["신사임당", "어몽룡"],
        acceptAny: true,
        explanation: "5만원권 뒷면에는 어몽룡(신사임당 작)과 풍죽도가 그려져 있어요! 앞면의 신사임당이 직접 그린 작품이랍니다."
    }
];

// ── 배지 데이터 ──
const BADGES = [
    { id: "search-king", icon: "🔍", name: "검색왕", condition: (s) => s.correct >= 16 },
    { id: "fact-checker", icon: "✅", name: "팩트체커", condition: (s) => s.correct >= 10 },
    { id: "speed-racer", icon: "⚡", name: "스피드레이서", condition: (s) => s.totalTime < 1200 },
    { id: "hint-free", icon: "🧠", name: "독립탐험가", condition: (s) => s.hintsUsed === 0 },
    { id: "perfect", icon: "💎", name: "완벽한 탐험", condition: (s) => s.correct === 20 },
    { id: "beginner", icon: "🌟", name: "첫 발걸음", condition: () => true }
];

// ── 상태 ──
const state = {
    playerName: "",
    currentScreen: "start",
    tutorialStep: 0,
    tutorialQuizPassed: [false, false, false],
    currentMission: 0,
    score: 0,
    correct: 0,
    missionResults: [],
    missionTimers: [],
    timerInterval: null,
    timeLeft: 0,
    hintShown: false,
    hintsUsed: 0,
    totalTimeUsed: 0,
    startTime: 0
};

// ── DOM References ──
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ── 초기화 ──
document.addEventListener("DOMContentLoaded", () => {
    createStars();
    initStartScreen();
    initTutorial();
    initChallenge();
    initResult();
});

// ── 별 배경 생성 ──
function createStars() {
    const container = $("#stars");
    for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const size = Math.random() * 3 + 1;
        star.style.cssText = `
            width: ${size}px; height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            --dur: ${Math.random() * 3 + 2}s;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(star);
    }
}

// ══════════════════════════════
//  1. 시작 화면
// ══════════════════════════════
function initStartScreen() {
    const nameInput = $("#player-name");
    const startBtn = $("#btn-start");

    nameInput.addEventListener("input", () => {
        startBtn.disabled = nameInput.value.trim().length === 0;
    });
    nameInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !startBtn.disabled) startBtn.click();
    });
    startBtn.addEventListener("click", () => {
        state.playerName = nameInput.value.trim();
        switchScreen("tutorial");
    });
}

// ══════════════════════════════
//  2. 튜토리얼
// ══════════════════════════════
function initTutorial() {
    // 탭 데모 클릭
    $$(".demo-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            $$(".demo-tab").forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            $$(".tab-info").forEach((info) => info.classList.remove("active"));
            $(`#tab-info-${tab.dataset.tab}`).classList.add("active");
        });
    });

    // 미니 퀴즈 옵션
    for (let i = 0; i < 3; i++) {
        const quizEl = $(`#quiz-${i}`);
        quizEl.querySelectorAll(".quiz-option").forEach((opt) => {
            opt.addEventListener("click", () => handleTutorialQuiz(i, opt));
        });
    }

    // 네비게이션
    $("#btn-tutorial-prev").addEventListener("click", () => moveTutorial(-1));
    $("#btn-tutorial-next").addEventListener("click", () => {
        if (state.tutorialStep === 2) {
            // 대회 시작
            switchScreen("challenge");
            startChallenge();
        } else {
            moveTutorial(1);
        }
    });
}

function handleTutorialQuiz(quizIndex, optEl) {
    const isCorrect = optEl.dataset.correct === "true";
    const feedback = $(`#quiz-feedback-${quizIndex}`);

    // 모든 옵션 비활성화
    $(`#quiz-${quizIndex}`).querySelectorAll(".quiz-option").forEach((o) => {
        o.classList.add("disabled");
        if (o.dataset.correct === "true") o.classList.add("correct");
    });

    if (isCorrect) {
        optEl.classList.add("correct");
        feedback.textContent = "🎉 정답이에요! 잘 했어요!";
        feedback.className = "quiz-feedback show correct";
        state.tutorialQuizPassed[quizIndex] = true;
    } else {
        optEl.classList.add("wrong");
        feedback.textContent = "🤔 아쉬워요! 정답을 확인해 보세요.";
        feedback.className = "quiz-feedback show wrong";
        state.tutorialQuizPassed[quizIndex] = true; // 틀려도 진행 가능
    }
    updateTutorialNav();
}

function moveTutorial(dir) {
    const prev = state.tutorialStep;
    state.tutorialStep = Math.max(0, Math.min(2, state.tutorialStep + dir));
    $(`#tutorial-slide-${prev}`).classList.remove("active");
    $(`#tutorial-slide-${state.tutorialStep}`).classList.add("active");
    updateTutorialNav();
}

function updateTutorialNav() {
    const step = state.tutorialStep;
    $("#btn-tutorial-prev").style.visibility = step === 0 ? "hidden" : "visible";
    const nextBtn = $("#btn-tutorial-next");

    if (state.tutorialQuizPassed[step]) {
        nextBtn.disabled = false;
        nextBtn.querySelector("span").textContent = step === 2 ? "🚀 대회 시작!" : "다음 →";
    } else {
        nextBtn.disabled = true;
        nextBtn.querySelector("span").textContent = "퀴즈를 풀어주세요";
    }

    // 프로그레스 바
    const pct = ((step + 1) / 3) * 100;
    $("#tutorial-progress-fill").style.width = pct + "%";
    $("#tutorial-progress-text").textContent = `${step + 1} / 3`;
}

// ══════════════════════════════
//  3. 대회 모드
// ══════════════════════════════
function initChallenge() {
    $("#btn-submit").addEventListener("click", submitAnswer);
    $("#answer-input").addEventListener("keydown", (e) => {
        if (e.key === "Enter") submitAnswer();
    });
    $("#btn-hint-toggle").addEventListener("click", toggleHint);
}

function startChallenge() {
    state.currentMission = 0;
    state.score = 0;
    state.correct = 0;
    state.missionResults = [];
    state.missionTimers = [];
    state.hintsUsed = 0;
    state.startTime = Date.now();
    $("#display-name").textContent = state.playerName;
    createStageDots();
    loadMission(0);
}

function createStageDots() {
    const container = $("#stage-dots");
    container.innerHTML = "";
    for (let i = 0; i < MISSIONS.length; i++) {
        const dot = document.createElement("div");
        dot.className = "stage-dot" + (i === 0 ? " active" : "");
        dot.textContent = i + 1;
        container.appendChild(dot);
    }
}

function loadMission(idx) {
    const m = MISSIONS[idx];
    state.hintShown = false;
    $("#mission-level").textContent = `LEVEL ${m.level}`;
    $("#mission-category").textContent = m.category;
    $("#mission-question").textContent = m.question;
    $("#hint-text").textContent = m.hint;
    $("#mission-hint").classList.remove("show");
    $("#answer-input").value = "";
    $("#answer-input").focus();
    $("#answer-feedback").className = "answer-feedback";
    $("#answer-feedback").style.display = "none";
    $("#btn-submit").disabled = false;
    $("#btn-hint-toggle").querySelector("span").textContent = "💡 힌트 보기";
    $("#display-stage").textContent = `${idx + 1} / ${MISSIONS.length}`;
    $("#display-score").textContent = state.score;

    // 타이머 시작 (3분)
    startTimer(180);

    // 스테이지 도트 업데이트
    $$(".stage-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === idx);
    });
}

function startTimer(seconds) {
    clearInterval(state.timerInterval);
    state.timeLeft = seconds;
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
        state.timeLeft--;
        updateTimerDisplay();
        if (state.timeLeft <= 0) {
            clearInterval(state.timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const min = String(Math.floor(state.timeLeft / 60)).padStart(2, "0");
    const sec = String(state.timeLeft % 60).padStart(2, "0");
    const el = $("#display-timer");
    el.textContent = `${min}:${sec}`;
    el.classList.toggle("danger", state.timeLeft <= 30);
}

function handleTimeUp() {
    const m = MISSIONS[state.currentMission];
    state.missionResults.push(false);
    state.missionTimers.push(180);
    showFeedback(false, `⏰ 시간 초과! 정답: ${m.explanation}`);
    $$(".stage-dot")[state.currentMission].classList.add("wrong");
    disableInput();
    setTimeout(() => nextMission(), 3000);
}

function toggleHint() {
    const hintEl = $("#mission-hint");
    if (hintEl.classList.contains("show")) {
        hintEl.classList.remove("show");
        $("#btn-hint-toggle").querySelector("span").textContent = "💡 힌트 보기";
    } else {
        hintEl.classList.add("show");
        state.hintsUsed++;
        $("#btn-hint-toggle").querySelector("span").textContent = "💡 힌트 숨기기";
    }
}

function submitAnswer() {
    const input = $("#answer-input").value.trim();
    if (!input) return;

    clearInterval(state.timerInterval);
    const m = MISSIONS[state.currentMission];
    const timeUsed = 180 - state.timeLeft;
    state.missionTimers.push(timeUsed);

    // 정답 체크 (유연하게)
    const isCorrect = m.answers.some((ans) =>
        input.toLowerCase().includes(ans.toLowerCase()) ||
        ans.toLowerCase().includes(input.toLowerCase())
    );

    if (isCorrect) {
        state.correct++;
        // 점수 계산: 기본 100점 + 시간 보너스 (남은 시간 * 0.5)
        const timeBonus = Math.floor(state.timeLeft * 0.5);
        const hintPenalty = state.hintShown ? 10 : 0;
        const points = 100 + timeBonus - hintPenalty;
        state.score += points;
        state.missionResults.push(true);
        $$(".stage-dot")[state.currentMission].classList.add("correct");
        showFeedback(true, `🎉 정답! +${points}점 (시간 보너스 +${timeBonus})`);
    } else {
        state.missionResults.push(false);
        $$(".stage-dot")[state.currentMission].classList.add("wrong");
        showFeedback(false, `❌ 아쉬워요! ${m.explanation}`);
    }

    $("#display-score").textContent = state.score;
    disableInput();
    setTimeout(() => nextMission(), 3000);
}

function showFeedback(isCorrect, message) {
    const el = $("#answer-feedback");
    el.textContent = message;
    el.className = `answer-feedback show ${isCorrect ? "correct" : "wrong"}`;
    el.style.display = "block";
}

function disableInput() {
    $("#btn-submit").disabled = true;
    $("#answer-input").disabled = true;
}

function nextMission() {
    $("#answer-input").disabled = false;
    state.currentMission++;
    if (state.currentMission >= MISSIONS.length) {
        finishChallenge();
    } else {
        loadMission(state.currentMission);
    }
}

function finishChallenge() {
    clearInterval(state.timerInterval);
    state.totalTimeUsed = Math.floor((Date.now() - state.startTime) / 1000);
    switchScreen("result");
    showResult();
}

// ══════════════════════════════
//  4. 결과 화면
// ══════════════════════════════
function initResult() {
    $("#btn-restart").addEventListener("click", () => {
        // 상태 초기화
        state.tutorialStep = 0;
        state.tutorialQuizPassed = [false, false, false];
        for (let i = 0; i < 3; i++) {
            const quizEl = $(`#quiz-${i}`);
            quizEl.querySelectorAll(".quiz-option").forEach((o) => {
                o.classList.remove("correct", "wrong", "disabled");
            });
            $(`#quiz-feedback-${i}`).className = "quiz-feedback";
        }
        $(`#tutorial-slide-0`).classList.add("active");
        $(`#tutorial-slide-1`).classList.remove("active");
        $(`#tutorial-slide-2`).classList.remove("active");
        updateTutorialNav();
        switchScreen("start");
    });
}

function showResult() {
    const totalMin = String(Math.floor(state.totalTimeUsed / 60)).padStart(2, "0");
    const totalSec = String(state.totalTimeUsed % 60).padStart(2, "0");

    $("#result-name").textContent = `🧑‍🚀 ${state.playerName}`;
    $("#result-score").textContent = state.score;
    $("#result-correct").textContent = `${state.correct} / ${MISSIONS.length}`;
    $("#result-time").textContent = `${totalMin}:${totalSec}`;

    // 수료증
    $("#cert-name").textContent = state.playerName;
    const now = new Date();
    $("#cert-date").textContent = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;

    // 제목
    if (state.correct === 20) {
        $("#result-title").textContent = "🏆 완벽한 탐험가!";
    } else if (state.correct >= 15) {
        $("#result-title").textContent = "🎉 훌륭한 탐험!";
    } else if (state.correct >= 8) {
        $("#result-title").textContent = "👏 잘 했어요!";
    } else {
        $("#result-title").textContent = "💪 다음엔 더 잘할 수 있어요!";
    }

    // 배지
    const stats = { correct: state.correct, totalTime: state.totalTimeUsed, hintsUsed: state.hintsUsed };
    const grid = $("#badges-grid");
    grid.innerHTML = "";
    BADGES.forEach((badge, i) => {
        const earned = badge.condition(stats);
        const el = document.createElement("div");
        el.className = "badge-item" + (earned ? "" : " locked");
        el.style.animationDelay = `${i * 0.15}s`;
        el.innerHTML = `<span class="badge-icon">${badge.icon}</span><span class="badge-name">${badge.name}</span>`;
        grid.appendChild(el);
    });

    // 폭죽 효과
    launchConfetti();
}

function launchConfetti() {
    const container = $("#confetti-container");
    container.innerHTML = "";
    const colors = ["#6c5ce7", "#00cec9", "#fd79a8", "#ffeaa7", "#55efc4", "#a29bfe"];
    for (let i = 0; i < 80; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        const color = colors[Math.floor(Math.random() * colors.length)];
        piece.style.cssText = `
            left: ${Math.random() * 100}%;
            background: ${color};
            --fall-dur: ${Math.random() * 2 + 2}s;
            animation-delay: ${Math.random() * 1.5}s;
            border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
            width: ${Math.random() * 8 + 4}px;
            height: ${Math.random() * 8 + 4}px;
        `;
        container.appendChild(piece);
    }
    setTimeout(() => { container.innerHTML = ""; }, 5000);
}

// ══════════════════════════════
//  화면 전환
// ══════════════════════════════
function switchScreen(name) {
    $$(".screen").forEach((s) => s.classList.remove("active"));
    $(`#screen-${name}`).classList.add("active");
    state.currentScreen = name;
    window.scrollTo(0, 0);
}
