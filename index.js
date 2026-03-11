let atletas = [
  {
    nome: "Daniel Lima",
    notas: [6, 7.8, 9.1, 9, 7.5]
  },
  {
    nome: "Paulo Miranda",
    notas: [8, 9.5, 6.8, 3.5, 8.9]
  },
  {
    nome: "Afonso Padilha",
    notas: [7.8, 9, 6.9, 8.5, 7.8]
  },
  {
    nome: "Caio Nascimento",
    notas: [7.8, 7.5, 4.3, 5, 8.3]
  },
  {
    nome: "Rodrigo Paiva",
    notas: [6.7, 4.5, 8.4, 9, 7.4]
  },
  {
    nome: "Leandro Barbosa",
    notas: [7.8, 5.2, 8, 6.3, 4.7]
  },
  {
    nome: "Luiz Bezerra",
    notas: [7.5, 6.4, 8, 3.5, 8.3]
  },
  {
    nome: "Dante Nascimento",
    notas: [6.4, 7.8, 8.6, 5.6, 7.4]
  },
  {
    nome: "Kleber Souza",
    notas: [7.8, 5.6, 8.5, 8.4, 3.6]
  },
  {
    nome: "Thiago Soares",
    notas: [6.5, 4.5, 6.8, 9, 5.9]
  }
];

function calcularMedia(notas) {
  let notasVerificadas = notas.sort((a, b) => a - b).slice(2);

  let somaDasNotas = 0;

  notasVerificadas.forEach(nota => somaDasNotas += nota);

  return somaDasNotas / notasVerificadas.length;
}

atletas.forEach((atleta) => {
  let media = calcularMedia(atleta.notas);
  console.log(`Atleta: ${atleta.nome}
Notas Obtidas: ${atleta.notas}
Média Válida: ${media.toFixed(1)}`);
});

