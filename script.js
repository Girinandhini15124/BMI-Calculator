function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    
    if (height === "" || weight === "") {
        alert("Please enter valid height and weight");
        return;
    }
    
    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let resultText = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
        resultText += "You are underweight.";
    } else if (bmi < 24.9) {
        resultText += "You have a normal weight.";
    } else if (bmi < 29.9) {
        resultText += "You are overweight.";
    } else {
        resultText += "You are obese.";
    }

    document.getElementById("result").innerText = resultText;
}
