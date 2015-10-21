Package.describe({
  summary: "Segment.io integration for Meteor (works on both client and server)",
  version: "2.0.0_1",
  name: "percolatestudio:segment.io",
  git: "https://github.com/percolatestudio/meteor-segment.io.git"
});

Npm.depends({
  "analytics-node": "2.0.0"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use("underscore");
  api.addFiles('snippet.js', 'client');
  api.addFiles('server.js', 'server');
  api.export('analytics');
});
