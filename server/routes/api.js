const router=require('express').Router();
const Person =require('../controllers/personController')


router.post('/CreatePerson',Person.CreatePerson)

router.get('/ShowPerson/:id',Person.ShowPerson)
// router.get('./ShowAllPersons',Person.ShowAllPersons)


module.exports=router;