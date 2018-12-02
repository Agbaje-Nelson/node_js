var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var router = express.Router();

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('We are connected');
});

//create template
var blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: String,
  content: String
});

//read entries function
blogSchema.methods.viewBlog = function(){
  var content = blog
  ? 'This is your content: ' + entry
  : 'You do not have a content';
  console.log(blog);
} 



// signup template
var signUpSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});


var Blog = mongoose.model('Blog', blogSchema);
var SignUp = mongoose.model('SignUp',signUpSchema)

//creating entries
// var entry = new Blog({ 
//   title: 'Peaches',
//   author: 'Nelson',
//   date: '23-24-25',
//   content: 'gsdhihihfgifgjihg'
// });

// var entry2 = new Blog({ 
//   title: 'Pears',
//   author: 'Nelson',
//   date: '23-24-25',
//   content: 'gsdhihihfgifgjihg'
// });

// var entry3 = new Blog({ 
//   title: 'Apples',
//   author: 'Nelson',
//   date: '23-24-25',
//   content: 'gsdhihihfgifgjihg'
// });

//reading entries
//entry.viewBlog();

//save to database function 
// entry.save(function(err, entry){
//   if (err) return console.error(err);
//   entry.viewBlog();
// });

// //view all entries function
// Blog.find(function(err, blogs){
//   if (err) return console.error(err);
//   console.log(blogs);
// });

// //filter entries function
// Blog.find({title: /^Peaches/}, console.log(callback));


/* insert new blog entry */
router.post('/create', function(req, res, next) {
  var blog = new Blog(req.body);
  console.log(1);
  blog.save(function(err, result){
  if (err) return console.error(err);
  res.status(201).send(result);
 });
});

/* view a blog entry */
router.get('/read', function(req, res, next) {
  let blogId = new Blog(req.body.id);
  let result = blog.find(item => item.id == blogId);
  res.send(result);

});

/* update a blog entry */
router.get('/update', function(req, res, next) {
  let blogId = req.body.id;
  let result = blog.find(item => item.id == blogId);
  res.send(result);

});

/* delete a blog entry */
router.get('/delete', function(req, res, next) {
  let blogId = req.body.id;
  let result = blog.find(item => item.id == blogId);
  res.send(result);

});

/* sign up */
router.post('/signup', function(req, res, next) {
  var values = new SignUp(req.body);
  values.save(function(err, result){
  if (err) return console.error(err);
  res.send(result);
  });

});

/* log in */
router.post('/login', function(req, res, next) {
  var newEmail = new SignUp(req.body.email);
  var newPassword = new SignUp(req.body.password);

  function checkEmail(){
    var email = signUpSchema.email;
    console.log(email);
  } checkEmail();
});

// router.get('/login', function(req, res, next) {
//   let blogId = req.body.id;
//   let result = blog.find(item => item.id == blogId);
//   res.send(result);

// });


module.exports = router;
