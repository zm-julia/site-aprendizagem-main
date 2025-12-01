function calcularLeiOhm() {
    let V = parseFloat(document.getElementById("tensao").value);
    let I = parseFloat(document.getElementById("corrente").value);
    let R = parseFloat(document.getElementById("resistencia").value);
    let resultado = document.getElementById("resultado");

    // Cálculos
    if (isNaN(V) && !isNaN(I) && !isNaN(R)) {
        V = I * R;
        resultado.innerHTML = `Tensão calculada: <strong>${V} V</strong>`;
    } 
    else if (isNaN(I) && !isNaN(V) && !isNaN(R)) {
        I = V / R;
        resultado.innerHTML = `Corrente calculada: <strong>${I} A</strong>`;
    } 
    else if (isNaN(R) && !isNaN(V) && !isNaN(I)) {
        R = V / I;
        resultado.innerHTML = `Resistência calculada: <strong>${R} Ω</strong>`;
    }
    else {
        resultado.innerHTML = "Preencha só dois espaços";
    }
}
// Arrumar Código Depois

   