const { Movie}  = require('../app/models');


async function getAllMovies (req, res){
   let movies = await Movie.findAll();
   return res.status(200).send(movies);
}
   

async function getMovieById(req, res){
      let id=req.params.id;
      let movie=await Movie.findByPk(id)
      return res.status(200).send(movie);
   }

   async function postMovie(req,res){
      const movie=await Movie.create(
        {  movie_name:req.body.movie_name,
           movie_poster:req.body.movie_poster
       }
      )
     
      return res.status(201).send(movie);
     }



   module.exports={
       getAllMovies,
       getMovieById,
       postMovie
   
   }