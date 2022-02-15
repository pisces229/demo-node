// express
// https://github.com/expressjs/express
import Express from 'express';
import Child_Process from 'child_process';
export default () => {
  const server = Express();
  server.get('/first', (request, response) => {
    console.log(`first start`);
    Child_Process.exec("node sleep.js",
    (error, stdout, stderr) => {
      console.log(`error:${ error }`);
      console.log(`stdout:${ stdout }`);
      console.log(`stderr:${ stderr }`);
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write('this is first');
      response.end();
    });
    console.log(`first end`);
  });
  server.get('/second', (request, response) => {
    console.log(`second start`);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(`this is second`);
    response.end();
    console.log(`second end`);
  });
  server.listen(9000, () => console.log('server-express has started'));
}
