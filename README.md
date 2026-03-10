# Projeto - Notas de Atletas

Este projeto em JavaScript calcula a média válida das notas de atletas em uma competição.

## 📌 Objetivo

O sistema recebe um conjunto de atletas com 5 notas cada.  
As notas são ordenadas, as duas menores são descartadas e a média é calculada utilizando as três maiores.

O resultado final exibe no console:

- Nome do atleta
- Notas obtidas
- Média válida

## ⚙️ Tecnologias utilizadas

- JavaScript
- Métodos de array (`sort`, `slice`, `forEach`)

## 🧠 Lógica utilizada

1. As notas são ordenadas usando `sort()`
2. As duas menores notas são removidas com `slice()`
3. As três maiores notas são somadas
4. A média é calculada com base nas notas restantes
5. O resultado é exibido no console para cada atleta

## ▶️ Como executar

1. Instale o Node.js
2. Clone o repositório
3. Execute no terminal:
