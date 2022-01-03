const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('public'));
const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando puerto ${PORT}`);
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '/views/login.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '/views/register.html'));
});