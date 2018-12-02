var express = require('express');
var router = express.Router();


var id = 1;
var blog = [];

//CRUD blog api using nodejs
//Create
router.post('/create', function(req, res, next) {
	var body = req.body;
	body.id = id;
	id++;
	blog.push(body);
	res.send('Article has been added.');
});

//Read
router.get('/read/:id', function(req, res, next) {
	var id = req.params.id;
	var result = blog.find(item => item.id == id);
	res.send(result);
	console.log(id)
});

//Update
router.put('/update/:id', function(req, res, next) {
	var id = req.params.id -1;
	blog[id] = req.body;
	res.send('Article has been updated.');
});

//Delete
router.delete('/delete/:id', function(req, res, next) {
  var delid = req.params.id;
  console.log(delid)
		for(var i = 0; i < blog.length-1; i++) {
			if(blog[i].id == delid) {
			blog.splice(i,1); 
      res.send('Article has been deleted.');
      console.log (blog.splice(i,1));
			} else { 
        res.send('Article not found');
      }
		} 	
   	
});

//View All
router.all('/getall', function(req, res, next) {
	res.send(blog);
});

module.exports = router;

