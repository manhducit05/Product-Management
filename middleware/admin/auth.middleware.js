const requireAuth = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
      res.redirect('/admin/auth/login');
  } else {
      next();
  }
};

  module.exports = {
    requireAuth
  }   