const index = (req, res) => {
  res.render('client/pages/home/index.pug', { titlePage: 'Home page', message: 'Hello there!' });
}

module.exports = {
  index
};
