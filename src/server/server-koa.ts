// koa
import Koa from 'koa';
import Koa_Logger from 'koa-logger';
import Koa_Router from 'koa-router';
import Koa_BodyParser from 'koa-bodyparser';
import Koa_Views from 'koa-views';
import Path from 'path';
export default () => {
  const server = new Koa();
  // Middleware
  // server.use(async (context, next) => {
  //   console.log(`start`);
  //   await next();
  //   console.log(`end`);
  // });
  server.use(Koa_Logger());
  server.use(Koa_BodyParser());
  // server.use(Koa_Views(__dirname, {
  //   extension: 'html'
  // }));
  server.use(Koa_Views(Path.join(__dirname, 'view'), {
    //extension: 'html'
    extension: 'pug'
    //extension: 'ejs'
  }));
  // Router
  const router = new Koa_Router();
  router.get('/get', async (context) => {
    context.body = `${ JSON.stringify(context.query) }`;
  });
  router.get('/post/page', async (context) => {
    context.body = `
      <form action="/post/submit" method="POST">
        <input type="text" name="name" />
        &nbsp;
        <button type="submit">submit</button>
      </form>
    `;
  });
  router.post('/post/submit', async (context) => {
    console.log(context.request.body);
    context.body = `<p>Welcome [${ context.request.body.name }] !</p>`;
  });
  router.get('/index', async (context) => {
    await context.render('index', {
      title: 'Index',
      name: 'Index',
    });
  });
  server.use(router.routes());
  server.listen(9090, () => console.log('server-koa has started'));
}
