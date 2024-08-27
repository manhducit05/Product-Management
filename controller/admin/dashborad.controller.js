const dashboard = (req, res) => {
  res.render('admin/pages/dashboard/index.pug', { titlePage: 'Trang tổng quan'});
}

module.exports = {dashboard}

