document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit-dictation");
    const userWriting = document.getElementById("user-writing");
    const feedback = document.getElementById("feedback");
    const scoreDisplay = document.getElementById("score");
    const dictationAudio = document.getElementById("dictation-audio");

    const correctAnswer = "This is a sample dictation for practice.";

    submitBtn.addEventListener("click", function () {
        const userAnswer = userWriting.value.trim().toLowerCase();

        if (!userAnswer) {
            feedback.textContent = "Please write the dictation before submitting.";
            feedback.style.color = "red";
            return;
        }

        let score = calculateScore(userAnswer, correctAnswer);

        if (score === 100) {
            feedback.textContent = "Great job! You have written the dictation correctly.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Your writing is almost correct. Here's the corrected version:";
            feedback.style.color = "orange";
            scoreDisplay.textContent = `Score: ${score}%`;
        }
    });

    function calculateScore(userAnswer, correctAnswer) {
        const userWords = userAnswer.split(" ");
        const correctWords = correctAnswer.split(" ");

        let correctCount = 0;
        userWords.forEach((word, index) => {
            if (correctWords[index] && word.toLowerCase() === correctWords[index].toLowerCase()) {
                correctCount++;
            }
        });

        return Math.floor((correctCount / correctWords.length) * 100);
    }
});

