document.getElementById("updateBtn").addEventListener("click", function() {
    const msg = document.getElementById("message");
    msg.textContent = "🎉 Jenkins CI/CD pipeline successfully deployed this change!";
    msg.style.color = "#0078d7";
});
