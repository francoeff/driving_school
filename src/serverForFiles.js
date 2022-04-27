const express = require('express');
const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended : false } ) );

app.use('/uploadFiles', (req ,res) => {
  console.log('Hola')
});


app.listen( 6000, () => {
  console.log('Escuchando en el puerto 6000');
} )

