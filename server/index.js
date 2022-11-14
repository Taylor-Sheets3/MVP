const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, /*TODO define path*/)));
app.use(express.json());

/*TODO define routes*/

app.listen(process.env.PORT);
console.log(`listening at port http://localhost:${process.env.PORT}`);