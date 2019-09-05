const express = require('express');
const bodyparser = require('body-parser');
const { calculator } = require('./helper');
const moment = require('moment');
const fs = require('fs');

const app = express();


app.use(bodyparser.json());


var todos = ['do shopping', 'go meeting'];


app.get('/', (req,res)=>{
    res.send('hi');
});

app.get('/calculator/:num1/:num2/:operator',(req,res) => {
    let { num1, num2, operator } = req.params;
    res.send(String(calculator(num1, num2, operator)));

});
// GET ALL TODOS
app.get('/todo', (req, res) => {
    res.send(todos);
});


//ADD NEW TODO
app.post('todo', (req, res) => {
    todos.push(req.body.todo);

    res.send(todos);
});


//DELETE TODO FROM THE LİST/ARRAY
app.delete('/todo/:todo', (req, res)=> {
    req.params.todo;
    todos = todos.filter(x => x !== todo);

    res.send(todos);
});


//get date from future
app.get('/future/:hours', (req, res)=>{
    let futureDate = moment()
    .add(req.params.hours ,'hours')
    .format('LLL');

    res.send(futureDate);
});


//Login route
app.post('/login',(req, res) => {

    let { username, password} = req.body;

    if(username === 'admin' && password === 'password') {
        res.send('success');
    }else {
        res.sendStatus(401);
    }
});


app.post('report', (req, res) => {
    let { customer } = req.body;

    let isDirExist = fs.existsSync('./report');
    console.log(isDirExist);

    if(!isDirExist){
        fs.mkdirSync('./report');
    }
    try {
        fs.writeFileSync(`./report/${customer}.json`, JSON.stringify(req.body));
    } catch (error) {
        console.log(error);
        res.send('error');
        return;        
    }
    res.send('Saved');
});

app.get('/report', (req, res)=>{
 let dir = fs.readdirSync('./report');
 console.log(dir);

 let customers = dir.map(customer => customer.replace('.json', ''));
 res.send(customers);

});






app.listen(2000, () => console.log(`Listening on port 2000!`));
