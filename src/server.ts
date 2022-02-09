console.log('this is server');

// express
import express from 'express';
const app = express();
const port = 9000;
const sleep = (milliSeconds: number) => {
  let startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
};
app.get('/', (request, response) => {
  //response.send(`hello world`);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('hello world');
});
app.get('/first', (request, response) => {
  console.log(`first start`);
  sleep(5000);
  //response.send(`first content:${ request.query['value'].toString() }`);
  response.send(`first`);
  console.log(`first end`);
});
app.get('/second', (request, response) => {
  console.log(`second start`);
  //response.send(`second content:${ request.query['value'].toString() }`);
  response.send(`second`);
  console.log(`second end`);
});
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

// https://www.nodebeginner.org/index-zh-tw.html
// import http, { IncomingMessage, ServerResponse } from 'http';
// import url from 'url';
// import spawn, { ExecException } from 'child_process';
// const sleep = (milliSeconds: number) => {
//   let startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + milliSeconds);
// };
// const mapper =
// {
//   '/first': (request: IncomingMessage, response: ServerResponse) => {
//     // sleep(5000);
//     // response.writeHead(200, {'Content-Type': 'text/plain'});
//     // response.write('this is first');
//     // response.end();
//     spawn.exec("find /",
//       { timeout: 10000, maxBuffer: 20000 * 1024 },
//       (error: ExecException, stdout: string, stderr: string) => {
//         sleep(5000);
//         response.writeHead(200, {'Content-Type': 'text/plain'});
//         //response.write('this is first');
//         response.write(stdout);
//         response.end();
//       });
//   },
//   '/second': (request: IncomingMessage, response: ServerResponse) => {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('this is second');
//     response.end();
//   },
//   '/page': (request: IncomingMessage, response: ServerResponse) => {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(`
//       <html>
//         <head>
//           <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
//         </head>
//         <body>
//           <form action="/text" method="post">
//             <textarea name="text" rows="20" cols="60"></textarea>
//             <br/>
//             <input type="submit" value="Submit text" />
//           </form>
//         </body>
//       </html>
//     `);
//     response.end()
//   },
//   '/text': (request: IncomingMessage, response: ServerResponse) => {
//     let postData = ``;
//     request.setEncoding('utf8');
//     request.addListener('data', (postDataChunk: string) => {
//       postData += postDataChunk;
//       console.log(`Received POST data chunk ${ postDataChunk }`);
//     });
//     request.addListener('end', function() {
//       response.writeHead(200, {'Content-Type': 'text/plain'});
//       response.write(`You've sent: ${ postData }`);
//       response.end();
//     })
//   }
// };
// const route = (request: IncomingMessage, response: ServerResponse) => {
//   console.log(`request.method:${ request.method }`);
//   console.log(`request.url:${ request.url }`);
//   let pathname = url.parse(request.url).pathname;
//   console.log(`About to route a request for ${ pathname }`);
//   if (typeof mapper[pathname] === 'function') {
//     console.log(`path [${ pathname }] start`);
//     mapper[pathname](request, response);
//     console.log(`path [${ pathname }] end`);
//   } else {
//     console.log('No request handler found');
//     response.writeHead(404, {"Content-Type": "text/plain"});
//     response.write("404 Not found");
//     response.end()
//   }
// };
// http.createServer((request: IncomingMessage, response: ServerResponse) => route(request, response)).listen(9000);
// console.log('Server has started.');
