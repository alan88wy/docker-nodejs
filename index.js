const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1><br><h2>Welcome to Docker DevOps with NodeJS</h2><br><h3>My Docker Exercise</h3><br><p>This is fun</p></p>")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
