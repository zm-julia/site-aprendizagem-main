function calcularPotencia() {
    const tensao = parseFloat(document.getElementById("tensao").value);
    const corrente = parseFloat(document.getElementById("corrente").value);
    const resistencia = parseFloat(document.getElementById("resistencia").value);

    let resultado = "";

    if (!isNaN(tensao) && !isNaN(corrente)) {
        const potenciaVI = tensao * corrente;
        resultado += `P = V × I = ${potenciaVI.toFixed(2)} W<br>`;
    }

    if (!isNaN(tensao) && !isNaN(resistencia)) {
        const potenciaV2R = (tensao ** 2) / resistencia;
        resultado += `P = V² ÷ R = ${potenciaV2R.toFixed(2)} W<br>`;
    }

    if (!isNaN(corrente) && !isNaN(resistencia)) {
        const potenciaI2R = (corrente ** 2) * resistencia;
        resultado += `P = I² × R = ${potenciaI2R.toFixed(2)} W<br>`;
    }

    if (resultado === "") {
        resultado = "Preencha pelo menos duas grandezas para calcular.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
