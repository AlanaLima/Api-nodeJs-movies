
const { List }  = require('../app/models');
const { Movie}  = require('../app/models');
const { Show }  = require('../app/models');
const { MovieList } = require('../app/models/movielist');

async function getAllList (req, res){
    let list = await List.findAll(
    {include: [{
    model: Movie,
    as: 'movies'
  }]});
   return res.status(200).send(list);
 }
 async function getListById (req, res){
  let id=req.params.id
  let list = await List.findByPk(id,
  {include: [{
  model: Movie,
  as: 'movies'
}]});
 return res.status(200).send(list);
}
//faltou incluir os movies, olhar para o login
async function postList(req,res){
  const list=await List.create(
    {  person_id:req.body.person_id,
      list_name:req.body.list_name,
      movies:req.body.movies
   }
  )
 
  return res.status(201).send(list);
 }
// naum funciona nao sei pq
 async function addMovie(req,res){
  let idlista=req.body.list_id;
  let idmovie=req.body.movie_id;
  let list = await List.findByPk(idlista)
  let movie=await Movie.findByPk(idmovie);
  let newList = await list.addMovie(movie);
  // let listmovie = await MovieList.create({
  //   list_id:req.body.list_id,
  //   movie_id:req.body.movie_id})
  return res.status(201).send(newList);
 }



 module.exports={getAllList,
  getListById,
  postList,
  addMovie
   
 }