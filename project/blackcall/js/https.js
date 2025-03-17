const express = require('express');
const app = express();

app.enable('trust proxy');
app.use(function(req, res, next){
        if(!req.secure){
                res.redirect("https://"+ req.headers.host + req.url);
        }else{
                next();
        }
});
app.listen(8080);