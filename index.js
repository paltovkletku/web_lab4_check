import express from 'express';

const app = express();

app.get('/login', (req, res) => {
  res.send('annaborisevich');
});

app.get('/id/:n', async (req, res) => {
  try {
    const response = await fetch(`https://nd.kodaktor.ru/users/${req.params.n}`);
    const json = await response.json();
    res.send(json.login);
  } catch (e) {
    res.status(500).send('error');
  }
});

app.listen(process.env.PORT || 3000);



// import express from 'express';
// import https from 'https';

// const app = express();

// app.get('/login', (req, res) => {
//   res.send('annaborisevich');
// });

// app.get('/id/:n', (req, res) => {
//   https.get(`https://nd.kodaktor.ru/users/${req.params.n}`, (response) => {
//     let data = '';
//     response.on('data', (chunk) => { data += chunk; });
//     response.on('end', () => {
//       try {
//         const json = JSON.parse(data);
//         res.send(json.login);
//       } catch (e) {
//         res.status(500).send('parse error');
//       }
//     });
//   }).on('error', (err) => {
//     res.status(500).send(err.message);
//   });
// });

// app.listen(process.env.PORT || 3000);
