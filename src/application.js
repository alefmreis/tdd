const Koa = require('koa');
const cors = require('koa2-cors');


class Application {

  constructor() {
    this.server = new Koa();
    this.setMiddlewares();
    this.setDatabase();
    this.setRouters();
  }

  setMiddlewares() {
    this.server.use(require('koa-bodyparser')());
    this.server.use(cors({
      allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'apikey'],
      credentials: true
    }));
  }

  init() {
    this.server.listen(process.env.PORT || 3500);
    console.log(`API server is listening on port ${process.env.PORT || 3500}!`);
  }
}

module.exports = Application;
