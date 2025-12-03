/* ============================
 Funções básicas (itens 5 a 12)
============================ */


// 5 - ordenar 1..20
function ordenarCrescente() {
  let nums = [];
  for (let i = 1; i <= 20; i++) nums.push(i);
  return nums;
}
function ordenarDecrescente() {
  let nums = [];
  for (let i = 20; i >= 1; i--) nums.push(i);
  return nums;
}

// 6 - bubble sort
function bubbleSortAleatorio() {
  let arr = [];
  for (let i = 0; i < 10; i++) arr.push(Math.floor(Math.random() * 20) + 1);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

// 7 - somar 10 aleatórios
function somarAleatorios() {
  let arr = [];
  let soma = 0;

  for (let i = 0; i < 10; i++) {
    let n = Math.floor(Math.random() * 220) + 1;
    arr.push(n);
    soma += n;
  }

  return { array: arr, total: soma };
}

// 8 - matriz 3x3
function gerarMatriz() {
  let m = [];
  for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
      linha.push(Math.floor(Math.random() * 20) + 1);
    }
    m.push(linha);
  }
  return m;
}

// 9 / 12 - IMC
function calcularIMC(p, a) {
  if (!p || !a) return NaN;
  return (p / (a * a)).toFixed(2);
}

// 10 - temperatura
function converterTemperatura(v, tipo) {
  if (isNaN(v)) return NaN;

  if (tipo === "CtoF") return (v * 9/5 + 32).toFixed(2);
  if (tipo === "FtoC") return ((v - 32) * 5/9).toFixed(2);

  return NaN;
}

// 11 - busca linear
function buscaLinear(arr, alvo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === alvo) return i;
  }
  return -1;
}

/* =============================================
 Funções chamadas pelos botões do HTML
============================================= */

function acaoOrdenar() {
  document.getElementById("r5").innerHTML =
    "Crescente: " + ordenarCrescente().join(", ") +
    "<br>Decrescente: " + ordenarDecrescente().join(", ");
}

function acaoBubble() {
  document.getElementById("r6").innerHTML =
    "Ordenado: " + bubbleSortAleatorio().join(", ");
}

function acaoSomar() {
  let r = somarAleatorios();
  document.getElementById("r7").innerHTML =
    "Números: " + r.array.join(", ") +
    "<br>Total: " + r.total;
}

function acaoMatriz() {
  let m = gerarMatriz();
  document.getElementById("r8").innerHTML =
    "<pre>" + m.map(l => l.join(" | ")).join("\n") + "</pre>";
}

function acaoIMC() {
  let p = parseFloat(document.getElementById("peso1").value);
  let a = parseFloat(document.getElementById("altura1").value);

  if (isNaN(p) || isNaN(a)) {
    document.getElementById("r9").innerHTML = "Preencha corretamente.";
    return;
  }

  document.getElementById("r9").innerHTML = "IMC = " + calcularIMC(p, a);
}

function acaoTempCtoF() {
  let v = parseFloat(document.getElementById("tempValor").value);

  if (isNaN(v)) {
    document.getElementById("r10").innerHTML = "Valor inválido.";
    return;
  }

  document.getElementById("r10").innerHTML =
    `${v} °C = ${converterTemperatura(v, "CtoF")} °F`;
}

function acaoTempFtoC() {
  let v = parseFloat(document.getElementById("tempValor").value);

  if (isNaN(v)) {
    document.getElementById("r10").innerHTML = "Valor inválido.";
    return;
  }

  document.getElementById("r10").innerHTML =
    `${v} °F = ${converterTemperatura(v, "FtoC")} °C`;
}

function acaoBusca() {
  let raw = document.getElementById("listaBusca").value;

  if (!raw.trim()) {
    document.getElementById("r11").innerHTML = "Informe uma lista.";
    return;
  }

  let arr = raw.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
  let alvo = parseFloat(document.getElementById("alvoBusca").value);

  if (isNaN(alvo)) {
    document.getElementById("r11").innerHTML = "Informe um número alvo.";
    return;
  }

  let pos = buscaLinear(arr, alvo);

  document.getElementById("r11").innerHTML =
    pos >= 0 ? "Encontrado na posição " + pos : "Não encontrado.";
}

function acaoIMC2() {
  let p = parseFloat(document.getElementById("peso2").value);
  let a = parseFloat(document.getElementById("altura2").value);

  if (isNaN(p) || isNaN(a)) {
    document.getElementById("r12").innerHTML = "Preencha corretamente.";
    return;
  }

  document.getElementById("r12").innerHTML = "IMC = " + calcularIMC(p, a);
}
