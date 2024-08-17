const index = (req, res) => {
  res.render('client/pages/home/index.pug', { title: 'Hey', message: 'Hello there!' });
}

module.exports = {
  index
};
