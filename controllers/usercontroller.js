const { User }  = require('../app/models');
const { List }  = require('../app/models');
const { Login }  = require('../app/models');

async function getAllUser (req, res){
    let user = await User.findAll(
    {include: [{
    model: List,
    as: 'list'
  }]});
   return res.status(200).send(user);
 }

async function getUserById (req, res){
  let id=req.params.id
  let user = await User.findByPk(id,
  {include: [{
  model: List,
  as: 'list'
}]});
 return res.status(200).send(user);
}

async function postUser(req,res){
  const user=await User.create(
    {  user_name:req.body.user_name,
       description:req.body.description
   }
  )
 
  return res.status(201).send(user);
 }

 async function postUserList(req, res) {
  let login = await Login.create({
      email:req.body.email,
      password:req.body.password},
       {
      include: [{
        model: List,
        as: 'list'
      }]
    })
    return res.status(201).send(login);
   
}
 module.exports={getAllUser,
  getUserById,
  postUser,
  postUserList
   
 }