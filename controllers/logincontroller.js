
const { Login }  = require('../app/models');
const { User}  = require('../app/models');

const { List }  = require('../app/models');

async function getAll (req, res){
   let logins = await Login.findAll
   ({include: [{
    model: User,
    as: 'user'
  }]});
   return res.status(200).send(logins);}
   
   async function getLoginById(req, res){
      let id=req.params.id;
      let login=await Login.findByPk(id,
        {include: [{
        model: User,
        as: 'user'
      }]});
      return res.status(200).send(login);
   }

   async function getLoginByCredentials(req, res){
    
    let login=await Login.findOne(
      { where: {
         email: req.params.email, 
        password:req.params.password} },
        {include: [{
        model: User,
        as: 'user'
      }]});
    return res.status(200).send(login);
 }

 //assim cria o Login mas não o user 
 async function postLogin(req,res){
   const login=await Login.create(
     {  email:req.body.email,
        password:req.body.password
    }
   )
  
   return res.status(201).send(login);
  }
    //funciona iupii
  async function postLoginUser(req, res) {
    let login = await Login.create({
        email:req.body.email,
        password:req.body.password,
        user:req.body.user},
         {
      	include: [{
          model: User,
          as: 'user'
        }]
      })
      return res.status(201).send(login);
     
  }


   module.exports={getAll,
    getLoginById,
    getLoginByCredentials,
    postLogin,
    postLoginUser
   
   }