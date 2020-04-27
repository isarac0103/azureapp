const {User} = require('../models/user');

const authenticate = (req, res, next) => {

    var token = req.header('X-Auth');
  
    User.findByToken(token)
    .then((user) => {
      if (!user) {
        return Promise.reject();
      }
  
      req.user = user;
      req.token = token;
      next();
  
    }).catch((e) => {

      const resp = {
        success: false,
        status: {
          code: 401,
          message: "Giriş başarısız."
        }
      };
      res.status(401).send(resp);
    });
  };

  module.exports = {authenticate};