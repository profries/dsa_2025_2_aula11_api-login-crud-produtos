const express = require('express')
const produtoRouter = require("./router/produto_router")
const usuarioRouter = require('./router/usuario_router')
const loggerMiddleware = require("./middleware/logger_middleware")

const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json

app.use(loggerMiddleware.realizaLog);

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('Hello World!')
    }, 1000);

})

app.use("/api/produtos", produtoRouter);
app.use('/api/usuarios', usuarioRouter);

app.listen(port, () => {
  console.log(`API running on port ${port}`)
})
