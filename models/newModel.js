const mongoose = require('mongoose');
const _ = require('lodash');

var NewModelSchema = new mongoose.Schema({
  title: {
    type: String
  },
  amount: {
    type: Number
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { usePushEach: true });

NewModelSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['title', 'amount', 'description']);
};

var NewModel = mongoose.model('NewModel', NewModelSchema);

module.exports = {NewModel};