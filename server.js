import mongoose from 'mongoose';
import app from './app.js';
import router from './routers.js';
// const app = express();
// app.use(express.json());  //this is must for read a body------in app.js already has this
// If we not use CORS package we cannot connect backend frontend, browser is blocked is because they are in different origins
//Since, app.js already use app.use(cros()), only importing that we can access it

const port = 3001
const host = 'localhost'


const uri = `mongodb+srv://Nilanka:nilanka@cluster0.63gdbq3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

//create connection with mongoDB
const connect = async ()=>{
    try {
        await mongoose.connect(uri);
        console.log("Successfully connect to the mongoDB");
    } catch (error) {
        console.log("MongoDB Error: ",error);
    }
}

connect();

app.use('/api',router);

app.listen(port,host,()=>{
    console.log(`App listen on port ${port}`);
});

