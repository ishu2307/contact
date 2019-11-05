const express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors=require('cors');
const app=express();


var { Details } = require('./contact.js')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/contactDetails');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/value',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    Details.find().then(function (data5){
        res.json(data5)
    }).catch(function(err){
        res.status(500).json({
            message:"error"
        })
    })
})
app.post('/add',function(req,res){
    console.log(req.body);
    var data5=req.body;
    var Data1=new Details(req.body);
    Data1.save().then(function(data){
        console.log(data5);
        res.json({
            message:"success"
        })
    }).catch(function(err){
        console.log(err);
        res.status(500).json({
            message:"error"
        })
    })
})

app.delete('/deleteValue/:id',function(req,res){
    Details.findByIdAndDelete({_id:req.params.id}).then(function(data){
        console.log(data);
        res.json(
            {
            message:"deleted"
        })
    }).catch(function(err)
    {
        console.log(err);
        res.json(
            {
            error:err
        })
    })

})
app.put('/updateValue/:id',function(req,res){
    Details.updateOne({_id:req.params.id},req.body).then(function(data){
        console.log(data);
        res.json(
            {
            message:"Updated"
        })
    }).catch(function(err)
    {
        console.log(err);
       
    })

});




app.listen(4000);