var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser');
    
var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +  '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.send('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("I'm listening on " + port);
})