function comprar() {
  const tipo = document.getElementById("tipo-ingresso").value;
  const qtd = parseInt(document.getElementById("qtd").value);

  if (isNaN(qtd) || qtd <= 0) {
    alert("Insira uma quantidade válida.");
    return;
  }

  processarCompra(tipo, qtd);
}

function verificarEstoque(tipo, qtd) {
  const idElemento = `qtd-${tipo}`;
  const elementoQuantidade = document.getElementById(idElemento);
  const qtdDisponivel = parseInt(elementoQuantidade.textContent);

  if (qtd > qtdDisponivel) {
    alert(
      `Quantidade insuficiente para ${tipo}. Restam apenas ${qtdDisponivel}.`
    );
    return false;
  }
  return true;
}

function comprarPista(qtd) {
  const elementoPista = document.getElementById("qtd-pista");
  const qtdAtual = parseInt(elementoPista.textContent);
  elementoPista.textContent = qtdAtual - qtd;
  alert("Compra de ingressos da pista realizada com sucesso!");
}

function comprarSuperior(qtd) {
  const elementoSuperior = document.getElementById("qtd-superior");
  const qtdAtual = parseInt(elementoSuperior.textContent);
  elementoSuperior.textContent = qtdAtual - qtd;
  alert("Compra de ingressos da cadeira superior realizada com sucesso!");
}

function comprarInferior(qtd) {
  const elementoInferior = document.getElementById("qtd-inferior");
  const qtdAtual = parseInt(elementoInferior.textContent);
  elementoInferior.textContent = qtdAtual - qtd;
  alert("Compra de ingressos da cadeira inferior realizada com sucesso!");
}

function processarCompra(tipo, qtd) {
  if (!verificarEstoque(tipo, qtd)) return;

  switch (tipo) {
    case "pista":
      comprarPista(qtd);
      break;
    case "superior":
      comprarSuperior(qtd);
      break;
    case "inferior":
      comprarInferior(qtd);
      break;
    default:
      alert("Tipo de ingresso inválido.");
  }
}
