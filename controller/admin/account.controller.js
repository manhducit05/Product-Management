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
const viewOnes = async(req, res) => {
  const id = req.params.id
  const account = await Account.findOne({
    _id: id,
    deleted: false
  })
  console.log(account)
    res.render('admin/pages/account/view.pug', { titlePage: 'Trang chi tiết tài khoản', account: account});
}
const deleteAccount = async(req, res) => {
  req.flash('delete', 'Xoá tài khoản thành công!')

  const id = req.params.id
  await Account.updateOne({
    _id: id,
  },{
    deleted: 'true',
    deleteAt: new Date()
  })
  res.redirect('back')
}
const changePassword = async(req, res) => {
  const id = req.params.id
  const account = await Account.findOne({
    _id: id,
    deleted: false
  })
  res.render('admin/pages/account/change-password.pug', { titlePage: 'Trang chi tiết tài khoản', account: account});
}
const sendAfterChange = async(req,res)=>{
  req.flash('update', 'Đổi mật khẩu thành công!');
  console.log(req.body)
  await Account.updateOne({
    _id: req.body.id,
  },{
    password : md5(req.body.password)
  })
  res.redirect('back')
}
module.exports = {
  index,
  create,
  postAfterCreate,
  viewOnes,
  deleteAccount,
  changePassword,
  sendAfterChange
}