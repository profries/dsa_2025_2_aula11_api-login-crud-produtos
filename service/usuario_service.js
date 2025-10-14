const usuarioRepository = require('../repository/usuario_repository')

async function listar() {
    return await usuarioRepository.listar();
}

async function inserir(usuario) {
    if(usuario && usuario.email && usuario.senha){
        return await usuarioRepository.inserir(usuario);
    }
    else {
        throw { id: 400, msg: "Usuario sem dados corretos"}
    }
}

async function buscarPorId(id) {
    let usuario = await usuarioRepository.buscarPorId(id);
    if(usuario) {
        return usuario;
    }
    else {
        throw { id: 404, msg: "Usuario não encontrado!" }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
}