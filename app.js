import cors from 'cors'; //for shaire data without block that block is create by browsers
import express from 'express';
import controller from './controller.js';

const app=express();
app.use(cors());


//const server = http.createServer(app);

// Set up Socket.IO
// const io = new Server(server);

// io.on('connection', (socket) => {
//   console.log('a user connected');
  
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });


app.use(express.urlencoded({   /* When a client submits an HTML form with method="POST", the data is sent as URL-encoded by default. 
                                  This middleware helps in parsing that data and making it available under the req.body object.*/
    extended:true
}))

app.use(express.json()); //convert req into json format

//Rest Apis for get,put,update,delete
//To get user
app.get('/getuser',(req,res)=>{      
    controller.getUser(req,res,next =>{
        res.send(res);
    });
});

//To create user
app.post('/createusers',(req,res)=>{
    controller.addUser(req.body,res,next =>{ //'next'---pass control to the next middleware function in the chain
        res.send(res);
    });
});

//Update User
app.put('/updateuser',(req,res)=>{
    controller.updateUser(req.body,res,next =>{
        res.send(res);
    });
});

//Delete User
app.delete('/deleteuser',(req,res)=>{
    controller.deleteUser(req,res,next =>{   // rather than use res,next we can use (callback) for both
        res.send(res);
    });
});




export default app;