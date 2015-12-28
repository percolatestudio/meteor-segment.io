var Analytics = Npm.require('analytics-node');

analytics = {};
analytics.load = function (writeKey) {
  var a = new Analytics(writeKey);
  a.__proto__._track = a.__proto__.track;
  // extending a's functionality to the analytics namespace
  a.__proto__.track = function (event, properties) {
    'use strict';
    var message = {
      event: event,
      properties: properties
    };

    var userId = Meteor.userId();
    if (userId) {
      message['userId'] = userId;
    } else {
      message['anonymous_id'] = 'anonymous-user';
    }

    a._track(message);
  };

  analytics.__proto__ = a.__proto__;
  _.each(a, function (value, key) {
    analytics[key] = value;
  });
};

