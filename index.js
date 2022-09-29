const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 2000

app.use(bodyParser.json())

const users = [
    {
        name: "femisola",
        surname: "Alawiye",
        email: "femisola@gmail.com",
        phone_no: "08132851453"
    },
    {
        name: "femisola",
        surname: "Alaiye",
        email: "fesola@gmail.com",
        phone_no: "08132853"
    },
    {
        name: "sola",
        surname: "wiye",
        email: "femi@gmail.com",
        phone_no: "081851453"
    },
]
    

app.get("/profile/:email", (req,res) => {
    const {email} = req.params
    const user = users.find(x => x.id == email)
    
    if (!user) {
        res.status(404).send({
            message: "user not found",
        })
    } 

    res.status(200).send({
        message: "user found",
        data: user
    })
})

//get all users
app.get('/users', (req, res) => { 

    res.status(200).send({
        message: "All users",
        data: users
    })

})


//create user

app.post('/create', (req, res) => { 

    const { firstname, othername, occupation, age } = req.body

    const user = {
        id: users.length + 1,
        firstname: firstname,   
        othername: othername,
        occupation: occupation,
        age: age
    }

    users.push(user)

    res.status(200).send({
        message: "user created",
        data: user
    })


})

app.listen(port, () =>{
    console.log(`The server is running on port: ${port}`)
})
