const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 2000

app.use(bodyParser.json())

const users = [
    {
        Name: "femisola",
        Surname: "Alawiye",
        email: "femisola@gmail.com",
        phone_no: "08132851453"
    },
    {
        Name: "femisola",
        Surname: "Alaiye",
        email: "fesola@gmail.com",
        phone_no: "08132853"
    },
    {
        Name: "sola",
        Surname: "wiye",
        email: "femi@gmail.com",
        phone_no: "081851453"
    },
]
    

app.get("/profile/all", (req,res) =>{
    res.status(200).send({
        message: " All credidential displayed",
        data: users
    })
})

app.listen(port, () =>{
    console.log(`The server is running on port: ${port}`)
})
