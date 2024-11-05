document.querySelectorAll(".buttons").forEach(div => {
    div.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            // 선택한 값과 질문 ID를 저장
            const value = event.target.value;
            const questionId = div.getAttribute("data-question");

            // 선택된 버튼의 스타일 업데이트
            div.querySelectorAll("button").forEach(button => button.classList.remove("selected"));
            event.target.classList.add("selected");

            // 선택한 답변을 각 질문의 ID로 저장
            div.setAttribute("data-answer", value);
        }
    });
});

document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = {
        q1: "1.0",
        q2: "2.0",
        q3: "3.0",
        q4: "4.0",
        q5: "1.0",
        q6: "3.0",
        q7: "1.0",
        q8: "4.0",
        q9: "2.0",
        q10: "3.0"
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let key in answers) {
        const userAnswer = document.querySelector(`[data-question="${key}"]`).getAttribute("data-answer");
        if (userAnswer === answers[key]) {
            score++;
        }
    }

    const result = document.getElementById("result");
    result.textContent = `총 ${totalQuestions}문제 중 ${score}개를 맞췄습니다.`;

    if (score === totalQuestions) {
        result.textContent += " 모든 답이 정확합니다!";
    } else {
        result.textContent += " 다시 시도해보세요.";
    }
});

document.querySelectorAll(".buttons").forEach(div => {
    div.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            // 선택한 값과 질문 ID를 저장
            const value = event.target.value;
            const questionId = div.getAttribute("data-question");

            // 선택된 버튼의 스타일 업데이트
            div.querySelectorAll("button").forEach(button => button.classList.remove("selected"));
            event.target.classList.add("selected");

            // 선택한 답변을 각 질문의 ID로 저장
            div.setAttribute("data-answer", value);
        }
    });
});

document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = {
        q1: { correct: "1.0", explanation: "상대의 감정을 무시하고 가볍게 여겨 불편하게 할 수 있는 반응입니다." },
        q2: { correct: "2.0", explanation: "형식적인 반응으로 상대방의 감정을 충분히 이해하지 않았습니다." },
        q3: { correct: "3.0", explanation: "기본적인 공감을 표현하여 상대의 감정을 반영하는 적절한 반응입니다." },
        q4: { correct: "4.0", explanation: "상대의 심층적인 감정을 반영하여 신뢰를 쌓을 수 있는 깊은 반응입니다." },
        q5: { correct: "1.0", explanation: "상대방의 감정을 가볍게 여기며 관계에 부정적 영향을 줄 수 있는 반응입니다." },
        q6: { correct: "3.0", explanation: "상대의 감정을 정확히 이해하고 위로하는 기본적인 공감을 표현했습니다." },
        q7: { correct: "1.0", explanation: "상대의 감정을 무시하고 단순히 잊으라고 하는 부적절한 반응입니다." },
        q8: { correct: "4.0", explanation: "상대의 긴장과 불안까지 이해하며 깊이 공감하는 반응입니다." },
        q9: { correct: "2.0", explanation: "형식적인 반응으로 상대방의 감정을 충분히 고려하지 않은 반응입니다." },
        q10: { correct: "3.0", explanation: "상대의 상황을 이해하고 회복할 수 있다는 격려를 포함한 공감 표현입니다." }
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;
    let incorrectAnswers = [];

    for (let key in answers) {
        const userAnswer = document.querySelector(`[data-question="${key}"]`).getAttribute("data-answer");
        if (userAnswer === answers[key].correct) {
            score++;
        } else {
            incorrectAnswers.push({
                question: key,
                correct: answers[key].correct,
                explanation: answers[key].explanation
            });
        }
    }

    const result = document.getElementById("result");
    result.innerHTML = `<p>총 ${totalQuestions}문제 중 ${score}개를 맞췄습니다.</p>`;

    if (incorrectAnswers.length > 0) {
        let explanationHtml = "<h3>틀린 문제 해설</h3><ul>";
        incorrectAnswers.forEach(item => {
            explanationHtml += `<li><strong>문제 ${item.question.replace("q", "")}:</strong> 정답은 ${item.correct}. ${item.explanation}</li>`;
        });
        explanationHtml += "</ul>";
        result.innerHTML += explanationHtml;
    } else {
        result.innerHTML += "<p>모든 답이 정확합니다! 잘하셨습니다!</p>";
    }
});
