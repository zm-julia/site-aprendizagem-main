<script>
        function somarAleatorios() {
            let numeros = [];
            for (let i = 0; i < 10; i++) {
                numeros.push(Math.floor(Math.random() * 220) + 1);
            }

            const soma = numeros.reduce((a, b) => a + b, 0);

            document.getElementById("resultadoSoma").innerHTML =
                `Números: ${numeros.join(", ")}<br>Soma total: ${soma}`;
        }

        function gerarMatriz() {
            let matriz = [];

            for (let i = 0; i < 3; i++) {
                matriz[i] = [];
                for (let j = 0; j < 3; j++) {
                    matriz[i][j] = Math.floor(Math.random() * 20) + 1;
                }
            }

            let texto = "";
            matriz.forEach(linha => {
                texto += linha.join(" | ") + "<br>";
            });

            document.getElementById("resultadoMatriz").innerHTML = texto;
        }

        function calcularIMC() {
            const peso = parseFloat(document.getElementById("pesoIMC").value);
            const altura = parseFloat(document.getElementById("alturaIMC").value);

            if (isNaN(peso) || isNaN(altura)) {
                document.getElementById("resultadoIMC").innerHTML =
                    "Preencha todos os campos.";
                return;
            }

            const imc = peso / (altura * altura);

            document.getElementById("resultadoIMC").innerHTML =
                `IMC: ${imc.toFixed(2)}`;
        }

        function converterCF() {
            const c = parseFloat(document.getElementById("temp").value);
            if (isNaN(c)) return;

            const f = (c * 9 / 5) + 32;
            document.getElementById("resultadoTemp").innerHTML =
                `${c}°C = ${f.toFixed(2)}°F`;
        }

        function converterFC() {
            const f = parseFloat(document.getElementById("temp").value);
            if (isNaN(f)) return;

            const c = (f - 32) * 5 / 9;
            document.getElementById("resultadoTemp").innerHTML =
                `${f}°F = ${c.toFixed(2)}°C`;
        }

        function buscarLinear() {
            const array = [5, 12, 8, 33, 2, 19, 7, 25];
            const valor = parseInt(document.getElementById("valorBusca").value);

            let posicao = -1;

            for (let i = 0; i < array.length; i++) {
                if (array[i] === valor) {
                    posicao = i;
                    break;
                }
            }

            if (posicao === -1) {
                document.getElementById("resultadoBusca").innerHTML =
                    `Valor não encontrado no array.`;
            } else {
                document.getElementById("resultadoBusca").innerHTML =
                    `Valor encontrado na posição ${posicao}.`;
            }
        }
    </script>

</body>

</html>