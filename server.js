var Analytics = Npm.require('analytics-node');
var userId = Meteor.userId();

analytics = {};
analytics.load = function (writeKey) {
  var a = new Analytics(writeKey);
  a.__proto__._track = a.__proto__.track;
  // extending a's functionality to the analytics namespace
  a.__proto__.track = function (event, properties) {
    'use strict';
    var props = {
      event: event,
      properties: properties
    };

    if (userId) {
      props['userId'] = userId;
    } else {
      props['anonymous_id'] = 'anonymous-user';
    }

    a._track(props);
  };

  analytics.__proto__ = a.__proto__;
  _.each(a, function (value, key) {
    analytics[key] = value;
  });
};

