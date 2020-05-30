var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const {
    check,
    validationResult,
    body
} = require('express-validator');

var storage = multer.diskStorage({
    destination: function (res, file, cb) {
        cb(null, path.join('uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({
    storage: storage
})

// Controllers
const homeController = require('../controllers/homeController');
const autorizaLogin = require('../controllers/autorizaLoginController');
const formController = require('../controllers/formsController');
const localizacaoController = require('../controllers/localizacaoController');
const buscaController = require('../controllers/buscaController');
const parametrosJogoController = require('../controllers/parametrosJogoController')

// Middlewares
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');
const VerificaAdm = require('../middlewares/VerificaAdm');
const VerificaMod = require('../middlewares/VerificaModerador');

// Sem verificação 
router.get('/', homeController.index);
router.get('/cadastro', homeController.cadastro);
router.get('/login/error', homeController.loginError);
router.get('/buscaEstado', localizacaoController.buscaEstado);
router.get('/buscaCidade/:id', localizacaoController.buscaCidade);
router.get('/buscaJogo', buscaController.jogos);
router.get('/buscaUsuario/:item', buscaController.usuarios);
router.get('/tema', parametrosJogoController.tema);
router.get('/dominio', parametrosJogoController.dominio);
router.get('/mecanica', parametrosJogoController.mecanica);
router.get('/tema/todos', parametrosJogoController.temaTodos);
router.get('/dominio/todos', parametrosJogoController.dominioTodos);
router.get('/mecanica/todos', parametrosJogoController.mecanicaTodos);


// Com verificação
router.get('/feeds', VerificaUsuarioLogado, homeController.feeds);
router.get('/cadastroJogo', VerificaUsuarioLogado, homeController.cadastroJogo);
router.get('/perfil', VerificaUsuarioLogado, homeController.perfil);
router.get('/jogo', VerificaUsuarioLogado, homeController.jogo);
router.get('/busca', VerificaUsuarioLogado, homeController.busca);
router.get('/moduloDestaques', VerificaUsuarioLogado, homeController.moduloDestaques);
router.get('/excluir', VerificaUsuarioLogado, homeController.excluir);
router.get('/semPrivilegio', VerificaUsuarioLogado, homeController.semPrivilegio);
router.get('/editar', VerificaUsuarioLogado, homeController.editar);

// Páginas Restritas
router.get('/perfilModerador', VerificaMod, VerificaUsuarioLogado, homeController.perfilModerador);
router.get('/perfilAdm', VerificaAdm, VerificaUsuarioLogado, homeController.perfilAdm);

// POSTS 
router.post('/login', autorizaLogin.loginSession);

// POSTS formulario
router.post('/cadastro', formController.cadastroUsuario);
router.post('/excluir', VerificaUsuarioLogado, formController.excluirUsuario);
router.post('/editar', VerificaUsuarioLogado, formController.editarUsuario);
router.post('/cadastroJogo', VerificaUsuarioLogado, upload.any(), [
        check("nomeJogo").isLength({min:2, max:100}),
        check("descricaoJogo").isLength({max:450}),
        check("duracao").toInt().isLength({max:3}),
        check("downtimeJogo").toInt(),
        check("tutorialJogo").isLength({max:450}),
        check("pesoJogo").toInt(),
        check("regrasJogo").isLength({max:450}),
        check("maxJogadores").toInt().isLength({max:2}),
        check("minJogadores").toInt().isLength({max:2}),
        check("temaJogo").toInt().isLength({min:1}),
        check("dominioJogo").toInt().isLength({min:1}),
        check("mecanicaJogo").toInt().isLength({min:1}),
    ],
    formController.cadastrarJogo);

module.exports = router;