async function uploadImage() {
    let input = document.getElementById("imageInput").files[0];

    if (!input) {
        alert("Please upload an image.");
        return;
    }

    let formData = new FormData();
    formData.append("file", input);

    try {
        let response = await fetch("https://virginiagonsalves-image-detector.hf.space/predict", {
            method: "POST",
            body: formData
        });

        console.log("Response Status:", response.status);
        let data = await response.json();  // Read response once

        document.getElementById("result").innerHTML = 
            `<p><strong>Prediction:</strong> ${data.prediction}</p>
             <p><strong>Confidence:</strong> ${data.confidence.toFixed(2)}%</p>`;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerHTML = `<p style="color:red;">Error: Unable to process the request.</p>`;
    }
}
