var express = require('express');
var router = express.Router();
const Users = require('../models/users.model');

/* GET users listing. */
router.get('/', (req, res) =>{
  Users.findAll().then((users) =>{
    res.send(users)
  }).catch((error) =>{
    res.status(500).send(error)
  })
});

router.post('/authenticate', (req, res) =>{  //validação do usuario no BD
  Users.findOne({where: { //FindOne procuro 1 usuario no BD com as informações passadas pelo Front
    userName: req.body.user,     
  }}).then((user) =>{   
    if(!user){
      return res.status(404).send('user not found')
    }
    if(user.userPassword === req.body.password){      
      return res.send({user: user.userName, pokemon: user.userPokemon})
    }else{
      return res.status(400).send('invalid password')
    }
  }).catch((error) =>{
    return res.status(500).send(error)
  })
})

router.post('/registerUser', (req, res) =>{//endereço register
  Users.findOne({where: { //procura na tabela users
    userName: req.body.user, //onde userName é igual o parametro passado pelo front
  }}).then((user) =>{
    if(!user){// se na tabela não ouver nenhum usuario com o nome que esta sendo inserido entao ele cria um novo usuario
      Users.create({// é criado na tabela
        userName: req.body.user,
        userPassword: req.body.password,
        userPokemon: req.body.pokemon,
      }).then(()=>{
        return res.status(201).send('usuário criado com sucesso')
      }).catch((error) =>{
        return res.status(500).send(error)
      })
    }else{  
      console.log('usuário já existe')  
      return res.status(400).send('usuário já existe')      
    }
  }).catch((error) =>{
    return res.status(500).send(error)
  })  
  console.log(req.body)  
})

module.exports = router;