
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual minha data de aniversari?");
    var respostaTime=prompt("Qual meu signo");
    var respostaTime=prompt("Qual é meu time ?);
    
    if (respostaTime.toLowerCase() === "24/05)"{
      alert("Isso mesmo! O Athlético PR é o melhor time!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
  
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
