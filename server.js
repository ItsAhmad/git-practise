const express = require("express"); 
const app = express(); 
const PORT = 8080; 

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})

app.get('/', (req, res) => {
  res.end(`<!DOCTYPE html>
<html>
  <head><title>Hello, World!</title></head>
  <body><h1>Hello, World!</h1></body>
</html>`);
});

app.get('/hello/:name', (req, res) => {
    let name = req.params.name 
    res.send (`Hello ${name}!`)
}); 

app.get('/about', (req, res) => {
  res.end(`<!DOCTYPE html>
<html>
  <head><title>About this Project</title></head>
    <body>
      <h1>About this Project</h1>
      <p>Our goal in this project is to develop a basic Express application.</p>
      <p>This will be done as a team with a mentor to practice good git habits.</p>
      <p>The Express application must meet the following requirements:</p>
      <ul>
        <li><input type="checkbox" checked> GET /            => Displays a hello world HTML page.</li>
        <li><input type="checkbox" checked> GET /hello/:name => Displays a hello page to a specific person.</li>
        <li><input type="checkbox" checked> GET /about       => Displays some information about this project (it can be the same as the README.)</li>
        <li><input type="checkbox" checked> If a request does not match the above, display a 404 Page and appropriate HTTP status.</li>
      </ul>
    </body>
</html>`);
});
