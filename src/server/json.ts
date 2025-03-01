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
// db.json
// {
//   "posts": [
//     { "id": 1, "title": "json-server", "author": "typicode" }
//   ],
//   "comments": [
//     { "id": 1, "body": "some comment", "postId": 1 }
//   ],
//   "profile": { "name": "typicode" }
// }

server.listen(3000, () => {
  console.log('JSON Server is running')
});
