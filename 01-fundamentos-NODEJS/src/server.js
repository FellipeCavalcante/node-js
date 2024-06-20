import http from 'node:http'

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso
// POST => Criar um recurso
// PUT => Atualizar um recurso
// PATCH => Atualizar parcialmente/especificamente um recurso
// DELETE => Deletar um recurso

// GET /users => Buscar um usuario no back-end
// POST /users => Criar um usuario no back-end

// Stateful - Stateles

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/resposta) => Metadados

const users = []

const server = http.createServer((req, res) => {
  const { method, url} = req

  if (method == 'GET' && url == '/users') {
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method == 'POST' && url == '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    })

    return res.end("Criação de usuário")
  }

  return res.end("Hello worldd")
})

server.listen(3333)
