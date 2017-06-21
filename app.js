const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();

app.use('/js', express.static('js'));
app.use('/icon', express.static('icon'));
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/cursor', express.static('cursor'));

app.get('/', function (req, res) {
  let options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    },
  };
  res.sendFile('dev.html', options);
});

// app.use(serveStatic(path.join(__dirname, 'js')));
// app.use(serveStatic(path.join(__dirname, 'icon')));
// app.use(serveStatic(path.join(__dirname, 'css')));
// app.use(serveStatic(path.join(__dirname, 'fonts')));
// app.use(serveStatic(path.join(__dirname, 'cursor')));



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
