async function uploadImage() {
    let input = document.getElementById("imageInput").files[0];

    if (!input) {
        alert("Please upload an image.");
        return;
    }

    let formData = new FormData();
    formData.append("file", input);

    let response = await fetch("https://virginiagonsalves-image-detector.hf.space/", {
        method: "POST",
        body: formData
    });

    let data = await response.json();
    document.getElementById("result").innerHTML = 
        `<p><strong>Prediction:</strong> ${data.prediction}</p>
         <p><strong>Confidence:</strong> ${data.confidence.toFixed(2)}%</p>`;
}