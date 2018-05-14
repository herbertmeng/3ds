const IndexController = require('./controller/indexcontroller.js');
const CategoryController = require('./controller/categorycontroller.js');
module.exports = function(router, app) {
  router.get('/',  IndexController.index);
  

  // 页面
  router.get('/category', CategoryController.index);
  
  router.get('/category/:categoryid', CategoryController.index);

// router.get('/model/:modelid', (ctx, next) => {
//   // ctx.router available
// });
// router.get('/profile/:uid', (ctx, next) => {
//   // ctx.router available
// });

// router.get('/api/login', (ctx, next) => {
//   // ctx.router available
// });

// router.get('/api/register', (ctx, next) => {
//   // ctx.router available
// });

// router.get('/api/capture', (ctx, next) => {
//   // ctx.router available
// });
// router.get('/api/ems', (ctx, next) => {
//   // ctx.router available
// });


// //文件上传

// router.post('/api/upload', (ctx, next) => {
//   // ctx.router available
// });


// /*获取所有的分类*/
// router.post('/api/category/list', (ctx, next) => {
//   // ctx.router available
// });

// /*获取素材列表*/
// router.post('/api/model/list', (ctx, next) => {
//   // ctx.router available
// });

// /*获取素材详情*/
// router.post('/api/model/:modelid', (ctx, next) => {
//   // ctx.router available
// });

// /*获取素材详情*/
// router.post('/api/profile/:profileid', (ctx, next) => {
//   // ctx.router available
// });



  app.use(router.routes())
  .use(router.allowedMethods());
}






 






