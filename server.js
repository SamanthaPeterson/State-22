var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

Object.defineProperty(exports, "__esModule", { value: true }); 


// var compression = require('compression'); 
// var enforce = require('express-sslify'); 

// if (process.env.NODE_ENV !== 'production') require('dotenv').config(); 

// var stripe = require('stripe')(process.env.STRIP_SECRET_KEY); 

var app = express();
var localhost = process.env.localhost || 3001;

// app.use(compression());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors()); 

if (process.env.NODE_ENV === 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')));

    // app.get('*', let(req, res) {
    //     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    // }); 
}

module.exports = app; 
// app.listen(port, error => {
//     if (error) throw error;
//     console.log('Server running on port' + port);
// }); 

app.get('./service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.post('/payment', (req, res) => {
    var body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ errro: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    })
}); 


