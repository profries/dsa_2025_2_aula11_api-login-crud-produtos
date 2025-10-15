const express = require('express')
const produtoRouter = require("./router/produto_router")
const usuarioRouter = require('./router/usuario_router')
const loginController = require("./controller/login_controller")
const loggerMiddleware = require("./middleware/logger_middleware")
const authMiddleware = require("./middleware/auth_middleware")

const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json

app.use(loggerMiddleware.realizaLog);

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('Hello World!')
    }, 1000);

})

app.post("/api/login", loginController.realizarLogin)

app.use("/api/usuarios", usuarioRouter);

app.use(authMiddleware.verificarAcesso);

app.use("/api/produtos", produtoRouter);


app.listen(port, () => {
  console.log(`API running on port ${port}`)
})
