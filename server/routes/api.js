const router=require('express').Router();
const Person =require('../controllers/personController')


router.post('/CreatePerson',Person.CreatePerson)

router.post('/ShowPerson',Person.ShowPerson)
// router.get('/ShowPerson/:id',Person.ShowPerson)
router.get('/GetAllPersons',Person.GetAllPersons)


module.exports=router;