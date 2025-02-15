
let precision = 2;

function setPrecision(value) {
    precision = value;
}

function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let conversionType = document.getElementById("conversionType").value;
    let resultText = "";

    if (isNaN(temperature)) {
        document.getElementById("result").innerText = "Anna lämpötila!";
        return;
    }

    if (conversionType === "toFahrenheit") {
        if (temperature < -273.15) {
            document.getElementById("result").innerText = "Lämpötila ei voi olla alle absoluuttisen nollapisteen (-273,15 °C)!";
            return;
        }
        let fahrenheit = (temperature * 9/5) + 32;
        resultText = `${temperature} °C = ${fahrenheit.toFixed(precision)} °F`;
    } else {
        let celsius = (temperature - 32) * 5/9;
        if (celsius < -273.15) {
            document.getElementById("result").innerText = "Lämpötila ei voi olla alle absoluuttisen nollapisteen (-273,15 °C)!";
            return;
        }
        resultText = `${temperature} °F = ${celsius.toFixed(precision)} °C`;
    }

    document.getElementById("result").innerText = resultText;
}
