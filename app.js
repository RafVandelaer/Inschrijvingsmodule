const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');

//const User = require('./models/user');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const inschrijfRoutes = require('./routes/inschrijf');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  /*User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));*/
    
    //console.log("Found");
    next();
});



app.use('/inschrijven', inschrijfRoutes);
//app.use(shopRoutes);

app.use(errorController.get404);
//console.log("Express server listening on port " + app.get('port'));

app.listen(3000, () =>
  console.log("Express server listening on port 3000"),
);