var Analytics = Npm.require('analytics-node');

analytics = {};
analytics.load = function(writeKet) {
  var a = new Analytics(writeKet);

  // extending a's functionality to the analytics namespace
  analytics.__proto__ = a.__proto__;
  _.each(a, function(value, key) {
    analytics[key] = value;
  });
};
