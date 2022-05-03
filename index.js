const express = require("express")
const mongoose = require('mongoose');
const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD, PORT } = require("./config/config");
const { application } = require("express");

const postRouter = require("./routes/postRoute")
const userRouter = require("./routes/userRoute");


const app = express()

app.use(express.json())

// You can get ip address of mongo container using 'docker inspect <mongodb container name>' 
// Or instead of using ip address and if you run them in docker, 
// you can refer to the container name instead like 'mongodb' below.

const MONGO_URL=`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/Posts?authSource=admin`

const connectWithRetry = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    })
    .then (() => console.log('Successfully connected to Mongo DB'))
    .catch ((e) => {
        console.log(e)
        setTimeout(() => {
            connectWithRetry()
        }, 5000);
    })
}

connectWithRetry()


// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1><br><h2>Welcome to Docker DevOps with NodeJS</h2><br><h3>My Docker Exercise</h3><br><p>This is fun</p></p>")
})

// localhost:3000/api/v1/posts
app.use("/api/v1/posts", postRouter)

app.use("/api/v1/users", userRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
