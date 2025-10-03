const express = require('express')
const {Pool} = require('pg')
const zod = require('zod')
const app = express()
const dotenv = require('dotenv')

dotenv.config()
app.use(express.json())

const formSchema = zod.object({
    name : zod.string(),
    email : zod.string().email(),
    year : zod.string(),
    branch : zod.string(),
    section : zod.string(),
    phone : zod.string().length(10),
    apply : zod.string(),
    yourself : zod.string().max(50),
    whyjoin : zod.string().max(50),
    expirence : zod.string(),
    vertical : zod.string(),
    techvert : zod.string().optional(),
    cultvert : zod.string().optional(),
    socivert : zod.string().optional()

})

const pool = new Pool({
    user : process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})



pool.connect((err, client, release) => {

    if (err){
        return console.log("err in connecting db")
    }
    client.query('SELECT NOW()', (err,result) => {
        release()
        if (err){
            return console.log("err in query excecution", err.message)
        }
        console.log("connected", result.rows)
    })
})

app.post('/form', async (req,res) => {

    const response = req.body
    const {success} = formSchema.safeParse(response)

    if(!success){
        return res.status(304).json("invalid inputs")
    }

    try {
        const emailq = `SELECT * FROM users WHERE email = $1`
        const resultq = await pool.query(emailq, [response.email])
        if (resultq.rows.length > 0){
            return res.status(303).json({
                msg : "user already exist"
            })
        } else {
        const insertq = `INSERT INTO users (name, email, year, branch, section, phone, apply, yourself, whyjoin, experince, vertical, techvert, cultvert, socivert) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`;
        const insert = await pool.query(insertq, [response.name, response.email, response.year, response.branch,
            response.section, response.phone, response.apply, response.yourself, response.whyjoin, response.expirence, response.vertical,
            response.techvert, response.cultvert, response.socivert 
        ])
        res.status(203).json(insert.rows[0])
    }
    } catch(err){
        return res.json("smtg went wrong")
    }
})

app.listen(3000)