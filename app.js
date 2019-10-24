
//Express Params
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));
app.set('port', process.env.PORT || 7878);
var cmd=require('node-cmd');


// Change anything below this ONLY!

app.post('/repo1', function (req, res) {
    cmd.get('bash repo1.sh',
        function(err, data, stderr){
            if (err) {
                console.log('error', err)
            } else {
                console.log('Success in Running the Code->',data)
            }
        }
    );
});


app.post('/repo2', function (req, res) {
    cmd.get('bash repo2.sh',
        function(err, data, stderr){
            if (err) {
                console.log('error', err)
            } else {
                console.log('Success in Running the Code->',data)
            }
        }
    );
});


// Change anything above this ONLY!
app.listen(app.get('port'));