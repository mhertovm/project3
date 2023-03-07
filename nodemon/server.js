const express = require('express')
const sqlite = require('sqlite3').verbose()
const app = express()
const port = 3001
const cors = require("cors")
app.use(express.json())
app.use(cors())

const db = new sqlite.Database('datab.db', (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("OK")
    }
})

app.get('/', (req, res) => {
    db.all('SELECT * FROM sports_shoes', (err, data) => {
        res.send(data)
    })
})

app.get('/shoes/:id', (req, res) => {
    const id = req.params.id
    db.get('SELECT * FROM sports_shoes WHERE sports_shoes_id=?', [id], (err, data) => {
        res.send(data)
    })
})

app.post('/new', (req,res) => {
    
    const name = req.body.name
    const img = req.body.img
    const price = req.body.price
    const info = req.body.info

    db.run('INSERT INTO sports_shoes (name,img,price,info) values (?,?,?,?)', [name,img,price,info],(err) => {
        res.send("Posted")
    })
})

app.put('/update/:sports_shoes_id', (req,res) => {
    
    const id = req.params.sports_shoes_id
    const name = req.body.name
    const img = req.body.img
    const price = req.body.price
    const info = req.body.info
   

    db.run('UPDATE sports_shoes SET name=?, img=?, price=?, info=? WHERE sports_shoes_id=?', [name,img,price,info,id],(err) => {
        res.send("Update")
    })
})


app.delete('/delet', (req,res) => {
    
    const sports_shoes_id = req.body.sports_shoes_id

    db.run('DELETE FROM sports_shoes WHERE sports_shoes_id=?;', [sports_shoes_id],(err) => {
        res.send("Deleted")
    })
})

app.listen(port)