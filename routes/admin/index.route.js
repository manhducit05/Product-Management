const dashboardRoutes = require('./dashboard.route')
const productRoutes = require('./product.route')
const roleRoutes = require('./role.route')
const accountRoutes = require('./account.route')
const systemConfig = require('../../config/system')
const authRoutes = require('./auth.route')
const authMiddleware = require('../../middleware/admin/auth.middleware')
module.exports = (app)=>{
  const PATH_ADMIN = systemConfig.prefixAdmin
  app.use(`${PATH_ADMIN}/dashboard`,authMiddleware.requireAuth,dashboardRoutes )
  app.use(`${PATH_ADMIN}/product`,authMiddleware.requireAuth,productRoutes )
  app.use(`${PATH_ADMIN}/role`,authMiddleware.requireAuth,roleRoutes )
  app.use(`${PATH_ADMIN}/account`,authMiddleware.requireAuth,accountRoutes )
  app.use(`${PATH_ADMIN}/auth`,authRoutes )
}