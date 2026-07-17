const express = require('express');
const app = express()
const port = 3000

app.get('/users', (req, res) => {
    //Code to get all users
    res.send('GET Request to the users')
    consolelog('GET Request to the users')
})

app.post('/users', (req, res) => {
    //Code to Create new user
    res.send('POST Request to the users')
    consolelog('POST Request to the users')
})

app.patch('/users/:id', (req, res) => {
    //Code to update user partially]
    res.send(`PATCH Request to the user${req.params.id}`)
    consolelog(`PATCH Request to the user${req.params.id}`)
})

app.put('/users/:id', (req, res) => {
    //Code to Update user entirely
    res.send(`PUT Request to the user${req.params.id}`)
    consolelog(`PUT Request to the user${req.params.id}`)
})

app.delete('/users/:id', (req, res) => {
    //Code to delete a user
    res.send(`DELETE Request to the user${req.params.id}`)
    consolelog(`DELETE Request to the user${req.params.id}`)
})

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
}) 