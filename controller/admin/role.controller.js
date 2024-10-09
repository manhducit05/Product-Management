const Role = require("../../models/role.model")

//index
const index =async (req, res) => {
  const role = await Role.find({
    deleted: false
  })
  console.log(role)
  res.render('admin/pages/role/index.pug', { titlePage: 'Trang nhóm quyền', role: role});
}

//create Role
const create = async(req, res) => {
  
  res.render('admin/pages/role/create.pug', { titlePage: 'Trang nhóm quyền'});
}
const postAfterCreate = async(req, res) => {
  req.body.createdAt = new Date()
  console.log(req.body)
  const record = new Role(req.body)
  await record.save();
  res.redirect('/admin/role')
}

//edit Role
const edit = async(req, res) => {
  const id = req.params.id
  const role = await Role.findOne({
    deleted: false,
    _id: id
  })
  console.log(role)
  res.render('admin/pages/role/edit.pug', { titlePage: 'Trang chỉnh sửa', role: role});
}
const postAfterEdit = async(req, res) => {
  req.flash('update', 'Cập nhật nhóm quyền thành công!');
  const id = req.params.id
  await Role.updateOne({ _id: id }, { 
    title: req.body.title,
    description: req.body.description
  })
  res.redirect('/admin/role')
}
//delete role
const deleteRole = async(req, res) => {
  req.flash('delete', 'Xoá sản phẩm thành công!')
  const id = req.params.id
  await Role.updateOne({_id: id}, { 
    deleted: 'true',
    deleteAt: new Date()
   })
  res.redirect('back')
}
//view one 
const viewOne = async(req, res)=>{
  const id = req.params.id
  const role = await Role.findOne({
    deleted: false,
    _id: id
  })
  res.render('admin/pages/role/viewOne.pug', { titlePage: 'Trang chỉnh sửa', role: role});
}
//permission 
const permission = async(req, res)=>{
  const role = await Role.find({
    deleted: false
  })
  console.log(role)
  res.render('admin/pages/role/permission.pug', { titlePage: 'Trang phân quyền', role: role});
}

const editPermission = async(req, res)=>{
  const dataJSON = JSON.parse(req.body.objectPermission)
  console.log(dataJSON)
  dataJSON.forEach(async(item)=>{
    await Role.updateOne({ _id: item.id }, { 
      permission: item.permission 
    })
  })
  res.redirect('back')

}
module.exports = {
  index,
  create,
  postAfterCreate,
  edit,
  postAfterEdit,
  deleteRole,
  viewOne,
  permission,
  editPermission
}