document.addEventListener("DOMContentLoaded", () => {
    const feedbackElement = document.getElementById("feedback");
    const resultsSection = document.getElementById("results");
    const restartButton = document.getElementById("restart-experiment");
    const apparatusActions = {
        scalpel: document.getElementById("scalpel"),
        slide: document.getElementById("glass-slide"),
        burner: document.getElementById("bunsen-burner"),
        microscope: document.getElementById("microscope"),
    };

    const apparatus = Object.keys(apparatusActions);
    let step = 0;

    // Instructions for each step
    const steps = [
        { key: "c", text: "Cut the onion root tip.", action: performCut },
        { key: "p", text: "Place the root on the slide and stain it.", action: placeAndStain },
        { key: "h", text: "Heat the slide.", action: heatSlide },
        { key: "m", text: "Focus under the microscope.", action: observeMicroscope },
    ];

    // Start Experiment or Restart
    restartButton.addEventListener("click", () => {
        resetExperiment();
    });

    // Experiment Interactivity
    document.addEventListener("keydown", (event) => {
        const currentStep = steps[step];
        if (event.key.toLowerCase() === currentStep.key) {
            feedbackElement.textContent = currentStep.text;
            currentStep.action();
            step++;
            if (step < steps.length) feedbackElement.textContent = steps[step].text;
            else showResults();
        }
    });

    function performCut() {
        apparatusActions["scalpel"].style.transform = "scale(1.2)";
    }

    function placeAndStain() {
        apparatusActions["slide"].style.border = "2px solid green";
    }

    function heatSlide() {
        apparatusActions["burner"].style.border = "2px dashed red";
    }

    function observeMicroscope() {
        feedbackElement.textContent = "Observing mitosis stages!";
    }

    function showResults() {
        resultsSection.style.display = "block";
    }

    function resetExperiment() {
        step = 0;
        feedbackElement.textContent = "Restarted! Follow steps again.";
        resultsSection.style.display = "none";
    }
});
