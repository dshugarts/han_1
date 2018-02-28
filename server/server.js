const express = require('express');
const app = express();

app.use(express.static('server/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Router!
const healthRouter = require('./routes/health-router');
app.use('/user', healthRouter);

const port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log('listening on port', port);  
});