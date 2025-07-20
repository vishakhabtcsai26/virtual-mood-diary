function analyzeMood() {
    const text = document.getElementById("diaryEntry").value;

    fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("moodResult").innerText = `Detected Mood: ${data.mood}`;
    })
    .catch(error => console.error("Error:", error));
}
