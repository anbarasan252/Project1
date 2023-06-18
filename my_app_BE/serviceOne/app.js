var express = require('express');
var app = express();
var cors = require('cors')

app.use(cors({origin:'http://localhost:4200'}))
app.get('',(req, res)=>{
    console.log('API success')
    res.send({response: 'am from backend'})
});
app.listen(8000)

