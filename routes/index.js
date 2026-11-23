var express = require('express');
var router = express.Router();
var data = require('../data/data.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  const games = data.getGames();
  res.render('index', { games });
});

/*GET game page*/
router.get('/game/:id',function(req,res,next){
  const id= req.params.id;
  const game = data.getGameById(id);
  if (game) {
    res.render('game', { game })
  }else{
    res.render('error', {message : "Ese juego no existe", error : {status : "404", stack: " "}})
  }

  
})

module.exports = router;
