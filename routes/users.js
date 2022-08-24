const { json } = require("express")
const Todo = require('../models/Todo')
const router = require("express").Router()



// routes...

router.get("/getAll", async (req, res)=>{
    const getAll = await Todo.find()
    
    res.json({
        "status" : 200,
        "msg" : "success",
        "data" : getAll
    })
})

router.post('/', async(req, res)=>{
    const todo = new Todo({
        name : req.body.name,
        age : req.body.age,
        sex : req.body.sex,
        role : req.body.role,
    })

    try{
        const a1 = await todo.save()
        res.json(a1)
    }catch(err){
        console.log(err)
        res.json(err)
    }
})


router.put('/update/:id', async (req,res,next)=>{
    try{
        Todo.findOneAndUpdate({_id:req.params.id}, {
            $set:{
                name : req.body.name,
                age : req.body.age,
                sex : req.body.sex,
                role : req.body.role,
            }
        }).then((resp)=>{
            res.status(200).json({
                "message" : "Update Successfuly.."
            })
        }).catch(err=>{
            console.log(err)
            res.json({
                error : err
            })
        })
        
    }catch(err){
        console.log(err)
    }
})

router.delete('/delete/:id', async (req,res)=>{
   try{
        Todo.findOneAndDelete({_id:req.params.id}).then(resp=>{
            res.json({
                message : "deleted successfuly"
            })
        }).catch(err=>{
            console.log(err)
            res.json({
                error: "somthing went wrong..."
            })
        })
   }catch(err){
    console.log(err)
   }
})


module.exports = router