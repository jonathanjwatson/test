const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/config', function(req,res){
    res.json({
        appName: "reactExpress"
    })
});

app.use(express.static(__dirname + '/client/build/'));
app.get('*', function(req,res){
    res.sendFile(__dirname + '/client/build/index.html')
  })


const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log(`Magic is happening on port ${PORT}`);
});