const mongoose = require('mongoose');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  quitWhen: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { usePushEach: true });

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['uId', 'devices', 'quitWhen']);
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};