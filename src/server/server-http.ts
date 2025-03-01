// http
// https://www.nodebeginner.org/index-zh-tw.html
import Http from 'http';
import Https, { ServerOptions } from 'https';
import Fs from 'fs';
import Child_Process from 'child_process';
import Formidable from 'formidable';
export default () => {
  const serverOptions: ServerOptions = {
    // pfx: '',
    // passphrase: '123456',
    key: Fs.readFileSync('d:/mkcert/localhost+2-key.pem'),
    cert: Fs.readFileSync('d:/mkcert/localhost+2.pem'),
    requestCert: true,
    rejectUnauthorized: false
  };
  // Http.createServer((request, response) => {
  Https.createServer(serverOptions, (request, response) => {
    console.log(`request.url:${ request.url }`);
    console.log(`request.method:${ request.method }`);
    console.log(`[${ request.url }] start`);
    switch (request.url) {
      case '/first': {
        console.log('first doing');
        Child_Process.exec("node sleep.js",
          (error, stdout, stderr) => {
            console.log(`error:${ error }`);
            console.log(`stdout:${ stdout }`);
            console.log(`stderr:${ stderr }`);
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write('this is first');
            response.end();
          });
        break;
      };
      case '/second': {
        console.log('second doing');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('this is second');
        response.end();
        break;
      };
      case '/text/page': {
        console.log('text page doing');
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(`
          <html>
            <head>
              <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            </head>
            <body>
              <form action="/text/submit" method="post">
                <textarea name="text" rows="20" cols="60"></textarea>
                <br/>
                <input type="submit" value="Submit" />
              </form>
            </body>
          </html>
        `);
        response.end();
        break;
      };
      case '/text/submit': {
        console.log('text submit doing');
        let postData = ``;
        request.setEncoding('utf8');
        request.addListener('data', (postDataChunk: string) => {
          postData += postDataChunk;
          console.log(`Received POST data chunk ${ postDataChunk }`);
        });
        request.addListener('end', function() {
          response.writeHead(200, {'Content-Type': 'text/plain'});
          response.write(`${ postData }`);
          response.end();
        });
        break;
      };
      case '/upload/page': {
        console.log('upload page doing');
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(`
          <html>
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            </head>
            <body>
              <form action="/upload/submit" enctype="multipart/form-data" method="post">
                <input type="text" name="text" />
                <br/>
                <input type="file" name="upload" />
                <br/>
                <input type="submit" value="Submit" />
              </form>
            </body>
          </html>
        `);
        response.end();
        break;
      };
      case '/upload/submit': {
        console.log('upload submit doing');
        const form = new Formidable.IncomingForm();
        form.parse(request, (err, fields, files) => {
          console.log(err);
          console.log(fields);
          console.log(files);
          response.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
          response.write(`
            fields:\r\n${ JSON.stringify(fields) }\r\n
            files:\r\n${ JSON.stringify(files) }\r\n
          `);
          response.end();
        });
        break;
      };
      default: {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
        break;
      };
    };
    console.log(`[${ request.url }] end`);
  // }).listen(9000, () => console.log('server-http(900) has started'));
  }).listen(9090, () => console.log('server-http(9090) has started'));
}
