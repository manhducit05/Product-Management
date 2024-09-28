const { paging } = require("../../helper/paging")
const Product = require("../../models/products.model")
const index = async (req, res) => {
  const statusFilterBtn = [
    {
      class: "btn btn-outline-success btnActive",
      status:"",
      text: "Tất cả"
    },
    {
      class: "btn btn-outline-success btnActive",
      status:"active",
      text: "Hoạt động"
    },
    {
      class: "btn btn-outline-success btnActive",
      status:"inactive",
      text: "Dừng hoạt động"
    }
  ]
  const find = {
    deleted: false,
  }
  //set status
  if(req.query.status)
    find.status = req.query.status
  //set title (regex)
  if(req.query.title){
    var searchKey = req.query.title
    const regex = new RegExp(searchKey,"i") //tạo chuỗi regex
    find.tittle = regex
  }

//paging
  const count =  (await Product.find(find)).length
  const page = paging(count, req)

  const products = await Product.find(find).limit(page.limit).skip((page.currentPage - 1)*page.limit)


  res.render('admin/pages/product/index.pug', { titlePage: 'Product Page', message: 'Products', products: products, statusFilterBtn: statusFilterBtn, searchKey: searchKey, count:page.numOfPages, currentPage: page.currentPage})
}

const changeStatus = async (req, res)=>{
//change status
if(req.params.status){
  req.flash('update', 'Cập nhật trạng thái thành công!');
  const status = req.params.status
  const id = req.params.id
  console.log(status, id)

  await Product.updateOne({ _id: id }, { status: status });
  res.redirect('back')
}
}
//delete product
const deleteItem = async(req, res)=>{
  req.flash('delete', 'Xoá sản phẩm thành công!')
  const id = req.params.id
  await Product.updateOne({_id: id}, { 
    deleted: 'true',
    deleteAt: new Date()
   })
  res.redirect('back')
}
//multi-change
const changeMulti = async (req, res) => {
  req.flash('update', 'Cập nhật trạng thái thành công!');
  try {
    console.log(req.body);
    const idsArray = req.body.ids.split(','); // Assuming ids are sent as a comma-separated string
    // Perform the update
    const result = await Product.updateMany(
      { _id: { $in: idsArray } },
      { status: req.body.type }
    )
    }    
    catch (error) {
      // Handle any errors
      console.error(error);}
   res.redirect('back')
    
} 
//create user
const createProduct = async(req,res)=>{
  res.render('admin/pages/product/create.pug')
}
const postAfterCreate = async(req,res)=>{
  const count =  (await Product.find({deleted:false})).length


  req.body.thumbnail = `/uploads/${req.file.filename}`

  req.body.price = parseInt(req.body.price)
  req.body.discountPercentage = parseInt(req.body.discountPercentage)
  req.body.stock = parseInt(req.body.stock)
  req.body.position = count+1
  req.body.createdAt = new Date()

  console.log(req.body)

  const product = new Product(req.body)
  await product.save();
  res.redirect('/admin/product')  
 
}
//view product
const viewProduct = async(req, res)=>{
  const id = req.params.id
  const find = {
    _id: id,
    deleted: false
  }
  const product = await Product.findOne(find)
  console.log(product)
  res.render('admin/pages/product/read.pug',{ product: product})
}

//edit product
const editProduct = async(req, res)=>{
  const id = req.params.id
  const find = {
    _id: id,
    deleted: false
  }
  const product = await Product.findOne(find)
  res.render('admin/pages/product/edit.pug',{ product: product})
}
const sendAfterEditProduct = async(req, res)=>{
  req.flash('update', 'Cập nhật sản phẩm thành công!');
  const id = req.params.id
  console.log(id)
  const newData = req.body
  console.log(newData)
  await Product.updateOne({ _id: id }, { 
      thumbnail: newData.thumbnail,
      tittle : newData.tittle,
      price : newData.price,
      discountPercentage: newData.discountPercentage,
      stock : newData.stock,
      status:  newData.status
      
    });
  res.redirect('back')
}
module.exports = {
  index,
  changeStatus,
  deleteItem,
  changeMulti,
  createProduct,
  postAfterCreate,
  viewProduct,
  editProduct,
  sendAfterEditProduct
}