const express = require('express')
const sqlite3 = require('sqlite3').verbose();
const mongoose = require('mongoose')
const zod = require('zod')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://studentcouncil:Sdc2024@jecrcsdc.dckns.mongodb.net/?retryWrites=true&w=majority&appName=JECRCSDC")
.then(console.log("connected to atlas"))
.catch((err) => {console.log("unable to connect", err)})

const formSchemaMongoose = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    year: { type: String, required: true },
    branch: { type: String, required: true },
    section: { type: String, required: true },
    phone: { type: String, required: true, length: 10 },
    blood: { type: String, required: false },
    apply: { type: String, required: true },
    yourself: { type: String, required: true, minlength: 50 },
    whyjoin: { type: String, required: true, minlength: 50 },
    experience: { type: String, required: true },
    vertical: { type: String, required: false },
    club1: { type: String, required: false },
    club2: { type: String, required: false },
    socivert: { type: String, required: false },
    suggestion: { type: String, required: false }
})

const Form = mongoose.model('Form', formSchemaMongoose)

const formSchema = zod.object({
    name : zod.string(),
    email : zod.string().email(),
    year : zod.string(),
    branch : zod.string(),
    section : zod.string().max(2),
    phone : zod.string().length(10),
    blood : zod.string().optional(),
    apply : zod.string(),
    yourself : zod.string().min(50),
    whyjoin : zod.string().min(50),
    experience : zod.string(),
    vertical : zod.string().optional(),
    club1 : zod.string().optional(),
    club2 : zod.string().optional(),
    socivert : zod.string().optional(),
    suggestion : zod.string().optional()

})



app.post('/form', async (req, res) => {
    const response = req.body;

    const { success, error } = formSchema.safeParse(response);

    if (!success) {
        return res.status(400).json({ message: "Invalid inputs", error });
    }


    try {
        const existingForm = await Form.findOne({ $or: [{ email: response.email }, { phone: response.phone }] });

        if (existingForm) {
            return res.status(409).json({
                msg: "Email or phone number already exists"
            });
        }

        // Create a new form document
        const newForm = new Form({
            name: response.name,
            email: response.email,
            year: response.year,
            branch: response.branch,
            section: response.section,
            phone: response.phone,
            blood: response.blood || null,
            apply: response.apply,
            yourself: response.yourself,
            whyjoin: response.whyjoin,
            experience: response.experience,
            vertical: response.vertical,
            club1: response.club1 || null,
            club2: response.club2 || null,
            socivert: response.socivert || null,
            suggestion: response.suggestion || null
        });

        await newForm.save();

        res.status(201).json({ msg: "Form recorded successfully" });
    } catch (err) {
        console.error("Insert error:", err.message);
        res.status(500).json({ msg: "Something went wrong" });
    }
})
app.listen(3000)