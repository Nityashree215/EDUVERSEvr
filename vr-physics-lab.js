// Gold Foil Experiment Logic
function startGoldFoilExperiment() {
    const canvas = document.getElementById("goldFoilCanvas");
    const ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw nucleus
    ctx.beginPath();
    ctx.arc(200, 200, 30, 0, Math.PI * 2);
    ctx.fillStyle = "gold";
    ctx.fill();
    ctx.closePath();

    // Particle movement
    let x = 10;
    let y = 200;

    function moveParticle() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();

        if (x < 180) {
            x += 2;
        } else if (y > 180 && y < 220) {
            x += 2; // Pass through nucleus
        } else {
            y += y < 200 ? -2 : 2; // Deflection
            x += 2;
        }
        if (x < canvas.width) {
            requestAnimationFrame(moveParticle);
        }
    }

    moveParticle();
}

// Circuit Building Logic
function checkCircuit() {
    alert("Circuit Check: Ensure all components are connected properly.");
}

// Drag and Drop Components
document.querySelectorAll(".component").forEach(item => {
    item.addEventListener("dragstart", () => {
        item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", () => {
        item.style.opacity = "1";
    });
});
