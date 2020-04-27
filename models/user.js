const mongoose = require('mongoose');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  uId: {
    type: String,
    required: true,
    unique: true
  },
  quitWhen: {
    type: Date
  },
  devices: [{
    name: {
      type: String
    },
    model: {
      type: String
    },
    softwareVersion: {
      type: String
    }
  }],
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