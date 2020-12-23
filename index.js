const express = require('express');
const app = express();
const port = 33;


const method = require('./method');


app.get('/', (req, res) => {
	const out = method();
	res.send(out);
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})
