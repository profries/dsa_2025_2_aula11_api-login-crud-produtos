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

async function buscarPorEmail(email) {
    let usuario = await usuarioRepository.buscarPorEmail(email);
    if(usuario) {
        return usuario;
    }
    else {
        throw { id: 404, msg: "Usuario não encontrado!" }
    }
}

async function verificarLogin(usuario) {
    if(usuario.email) {
        let usuarioCadastrado = await usuarioRepository.buscarPorEmail(usuario.email);
        if(usuarioCadastrado) {
            if(usuario.senha && usuario.senha == usuarioCadastrado.senha) {
                return { mensagem: "Login realizado com sucesso!"}
            }
        }
    }
    console.log("ERRO", usuario.email);
    throw { id: 401, msg: "Email ou senha invalidos!"};
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    buscarPorEmail,
    verificarLogin
}