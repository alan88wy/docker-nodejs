const express = require("express")
const mongoose = require('mongoose');
const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD, PORT, MONGO_URL } = require("./config/config");

const app = express()

// You can get ip address of mongo container using 'docker inspect <mongodb container name>' 
// Or instead of using ip address and if you run them in docker, 
// you can refer to the container name instead like 'mongodb' below.

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then (() => console.log('Successfully connected to Mongo DB'))
.catch ((e) => console.log(e))

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1><br><h2>Welcome to Docker DevOps with NodeJS</h2><br><h3>My Docker Exercise</h3><br><p>This is fun</p></p>")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
