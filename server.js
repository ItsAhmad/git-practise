const express = require("express"); 
const app = express(); 
const PORT = 8080; 


app.get('/', (req, res) => {
  res.end(`<!DOCTYPE html>
<html>
  <head><title>Hello, World!</title></head>
  <body><h1>Hello, World!</h1></body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})


app.get('/hello/:name', (req, res) => {
    let name = req.params.name 
    res.send (`Hello ${name}!`)
}); 


app.use((req,res) => {
  res.status(404).send('Error: Page not Found')
})
