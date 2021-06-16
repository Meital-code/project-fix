const mongoose=require('mongoose')
const dotenv=require ('dotenv')
const PersonModel=require('../models/personModel')

dotenv.config();

const CreatePerson=(req,res)=>{
    console.log(req.body);
    const currentPerson=new PersonModel(req.body)
    currentPerson.save().then(()=>{
    console.log("Person Created",currentPerson);
    res.status(200).json({massage:"Person Created",Person:currentPerson})
}).catch((error)=>{
    res.status(400).send('error')
});
}

// const ShowPerson=async(req,res)=>{
//     try{
//     const person=await PersonModel.findById(req.params.id)
//     console.log(person)
//     res.status(200).json({person:person});
// } catch (error) {
//     res.status(404).send('error')
// }}
const ShowPerson=async(req,res)=>{
    try{
    const person=await PersonModel.findOne(req.body.gmail)
    console.log(person)
    res.status(200).json({person:person});
} catch (error) {
    res.status(404).send('error')
}}

const GetAllPersons=async(req,res)=>{
    try{
    const allPerson=await PersonModel.find()
    console.log(allPerson)
    res.status(200).json({allPerson:allPerson});
} catch (error) {
    res.status(404).send('error')
}}

module.exports={CreatePerson,ShowPerson,GetAllPersons}