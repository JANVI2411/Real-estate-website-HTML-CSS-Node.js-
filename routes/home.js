var express=require('express');
var app=express();

app.get('/home',function(req,res){
res.render('home');
});
