const md5 = require('md5');
const Account = require("../../models/account.model")
const Role = require("../../models/role.model")

const index = async(req, res) => {
  const account = await Account.find({
    deleted: false
  })
    res.render('admin/pages/account/index.pug', { titlePage: 'Trang quản lý tài khoản', account: account});
}
const create =async (req, res) => {
  const role = await Role.find({
    deleted: false
  })
  res.render('admin/pages/account/create.pug', { titlePage: 'Trang quản lý tài khoản', role: role});
}
const postAfterCreate =async (req, res) => {
  req.body.password = md5(req.body.password)
  console.log(req.body)
  const record = new Account(req.body)
  await record.save()
  res.redirect('back')
}
module.exports = {
  index,
  create,
  postAfterCreate
}