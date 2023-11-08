const express=require('express');
const Student=require("./models/Student");
const app=express();
app.use(express.json());

const PORT=5000;
require('./Db');

app.get("/", (req, res) => {
    res.send("Hello world!....");
});
app.get("/student",async (req, res) => {
    try{
        const studentList = await Student.find();
        res.send(studentList);
    }catch(error){
        console.log(error);
    }
});
app.post("/student", async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const createStudent = new Student(data);
        await createStudent.save();
        res.send("Student created")
    } catch (error) {
        console.log(error);
    }
});
app.put("/student/:name", async (req, res) => {
    try {
        const studentName =req.params.name;
        await Student.updateOne({name:studentName},{$set : req.body});
        res.send("Student updated");
    } catch (error) {
        console.log(error);
    }
});
app.delete("/student/:name", async (req, res) => {
    try {
        const studentName =req.params.name;
        await Student.deleteOne({name:studentName},{$set : req.body});
        res.send("Student deleted");
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT,function(){
    console.log(`server is running on localhost:${PORT}`);
});