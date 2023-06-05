function Botao() {

const checkbox = document.getElementById("caixa1");
const isChecked = checkbox.checked;

document.getElementById("caixa1").value

     if(isChecked == true)
      {
        function Verificar() {

            var n = Number(document.getElementById("nome").value)
        
        
        
            if (n < 18) {
                document.getElementById("Resultado").innerHTML = `Você não pode tirar habilitação no Brasil, pois não é maior de 18 anos`
            }
        
            else {
                document.getElementById("Resultado").innerHTML = `Você já pode tirar habilitação no Brasil`
            }
        }
      }

      else 
      {
        function Verificar2() {

            var n = Number(document.getElementById("nome").value)
        
        
        
            if (n < 16) {
                document.getElementById("Resultado").innerHTML = `Você não pode tirar habilitação nos Estados unidos, pois não é maior de 16 anos`
            }
        
            else {
                document.getElementById("Resultado").innerHTML = `Você já pode tirar habilitação nos Estados unidos`
            }
        }
      }
    }