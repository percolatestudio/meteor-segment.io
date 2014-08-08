var Analytics = Npm.require('analytics-node');

analytics = {};
analytics.load = function(writeKet) {
  analytics = new Analytics(writeKet);
};
