const dashboardRoutes = require('./dashboard.route')
const productRoutes = require('./product.route')
const roleRoutes = require('./role.route')
const systemConfig = require('../../config/system')
module.exports = (app)=>{
  const PATH_ADMIN = systemConfig.prefixAdmin
  app.use(`${PATH_ADMIN}/dashboard`,dashboardRoutes )
  app.use(`${PATH_ADMIN}/product`,productRoutes )
  app.use(`${PATH_ADMIN}/role`,roleRoutes )
}