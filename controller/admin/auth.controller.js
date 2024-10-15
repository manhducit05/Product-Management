const md5 = require('md5');
const Account = require("../../models/account.model")
const login = (req, res) => {
  res.render('admin/pages/auth/login.pug');
}
const loginValidation = async(req, res) => {
  const email = req.body.email
  const password = md5( req.body.password)
  const account = await Account.findOne({
    deleted: false,
    email: email
  }
)
  if(!account) {
    req.flash('delete', 'Tài khoản không tồn tại!')
    res.redirect('back')

  }
  else{
    if(account.status=='inactive') {
      res.redirect('back')
    }
    else{
      if(password!=account.password){
        req.flash('delete', 'Mật khẩu không đúng')
        res.redirect('back')
      }
      else{
         req.flash('update', 'Đăng nhập thành công!');
         res.cookie('token', account.token)
         res.redirect('/admin/dashboard')
      }
  }
}
}
  module.exports = {
    login,
    loginValidation
  }