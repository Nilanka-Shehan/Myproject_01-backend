import User from './model.js';

// const users = [
//     {
//         id:1,
//         name:"Nilanka"
//     },
//     {
//         id:2,
//         name:"Shehan"
//     }
// ]

const getUser = (req,res,next)=>{      //To get all Users
    User.find()
        .then(response =>{
            res.json({response});
        })
        .catch(error =>{
            res.json({error:error})
        })
}
const addUser = (req,res,next)=>{
    //const { id, name } = req.body;
    const user = new User({
        id:req.body.id,
        name:req.body.name
    })
    user.save()
        .then(response=>{
            res.json({response})
        })
        .catch(error=>{
            res.json({error:error})
        })
}

const updateUser = (req,res,next)=>{
    // const id = req.body.id; 
    // const name = req.body.name; //we can create that using one line
    const {id,name} = req.body;  //object distructuring
    User.updateOne({id:id},{$set:{name:name}})
        .then(response=>{
            res.json({response})
        })
        .catch(error=>{
            res.json({error:error})
        })
}

const deleteUser = (req,res,next)=>{
    const id = req.body.id;
    User.deleteOne({id:id})
        .then(response=>{
            res.json({response})
        })
        .catch(error=>{
            res.json({error:error})
        })
}







export default {
    getUser,
    addUser,
    updateUser,
    deleteUser
}


