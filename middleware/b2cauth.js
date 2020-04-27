const {User} = require('../models/user');

const b2cauth = (req, res, next) => {

    var uId = req.header('uId');
    console.log("uId", uId);
  
    User.findOne({uId})
    .then((user) => {
      if (!user) {
        return Promise.reject();
      }
  
      req.user = user;
      next();
  
    }).catch((e) => {

      console.log(e);

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

  module.exports = {b2cauth};