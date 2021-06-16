const mongoose=require('mongoose')
const personSchema=mongoose.Schema({
    
     name: {
         type:String,
    } ,  
     family: {
        type:String,
   } ,
    
   age:{ type:Number
    },
    
    city:{
        type:String,
},
gmail:{
    type:String,

},
    phone:{
        type:String,
        default:'',
        validate:{
            validator:function(v){
                return /^$|^\d{10}$/.test(v);
            },
            message:props =>`${props.value} is not valid for number`
        },
    
},


})
module.exports=mongoose.model('person',personSchema)