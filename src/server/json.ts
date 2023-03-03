import { create, router, defaults, bodyParser } from 'json-server';
const server = create();

server.use(defaults());
// server.use(bodyParser);

server.get('/test', (req, res) => {
  res.jsonp({ success: true, message: '', data: { ok: true } });
  // res.status(500).jsonp('oh noes!');
  // res.status(404).jsonp('I dont have that');
});

// server.use(router('db.json'));

server.listen(3000, () => {
  console.log('JSON Server is running')
});
