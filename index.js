const express = require('express');

const server = express(); // A variável server recebe express(),
                          // os parenteses indicam que o express exporta uma função,
                          // Ou seja, estamos chamando a função do express. 

server.use(express.json()); // o server é a instância do express, o use é um plugin já importado 
                            // que estamos adicionando para ele (express) e passamos para ele o
                            // express.json()

const users = ["Thonynho", "Manuellinha", "Benzinho"]

//Listagem de um único usuario
server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json({ message: `O usuário ` + users[index] + ` foi encontrado pelo identificador (${index})`  });
  // Lista o usuário índice 1, ou seja, o usuário Matheus 
})

//Listagem de todos os usuarios
server.get('/users', (req, res) => {
  return res.json(users);
})

//Cadastrar usuario
//request body
server.post("/users", (req, res) => {
  const { name } = req.body;

  users.push(name);
 
  return res.json(users);
});

//Editar Um usuario
server.put(
  "/users/:index", (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name; // Substitui no vetor o nome que está na posição do 
                         // index passado pelo nome passado no corpo da requisição

    return res.json(users);
  }
);

//Excluir um usuario
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1); // O método splice percorre o vetor até o index e 
                          // e exclui a partir daquela posição o número de 
                          // posições passada no segundo parâmetro.

  return res.json(users);
});

server

// Porta utilizada pelo servidor
server.listen(3000)
