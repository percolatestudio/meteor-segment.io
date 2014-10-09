Package.describe({
  summary: "Segment.io integration for Meteor (works on both client and server) at version 1.0.3",
  version: "3.0.0",
  name: "percolatestudio:segment.io",
  git: "https://github.com/percolatestudio/meteor-segment.io.git"
});

Npm.depends({
  "analytics-node": "1.0.3"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('snippet.js', 'client');
  api.addFiles('server.js', 'server');
  api.export('analytics');
});
