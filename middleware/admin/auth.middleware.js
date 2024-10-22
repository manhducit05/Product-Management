const Account = require("../../models/account.model")
const Role = require("../../models/role.model")

const requireAuth = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    res.redirect('/admin/auth/login');
  }
  else {
    const user = await Account.findOne({
      token: token
    })
    user.password = ""
    const role = await Role.findOne({
      _id: user.roleID
    })
    res.locals.user = user
    res.locals.role = role
    res.locals.permission = role.permission
    next()
  }
}

module.exports = {
  requireAuth
}   