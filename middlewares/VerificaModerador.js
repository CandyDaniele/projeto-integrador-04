const {Usuario, Privilegio} = require('../models')


const VerificaModerador = async (req,res,next) => {
    // se session do usuário não estiver 
    
    
    let  email = req.session.usuario.email;

    const user = await Usuario.findOne({ where: {email} });

    if(user.cargo == 1 || user.aprovado != 1){
        res.redirect('/semPrivilegio');
    }

    // Se chegou até aqui, a session está ok
    next();
}

module.exports = VerificaModerador;