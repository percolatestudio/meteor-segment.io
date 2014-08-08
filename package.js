Package.describe({
  summary: "Segment.io integration for Meteor (works on both client and server)"
});

Npm.depends({
  "analytics-node": "1.0.3"
});

Package.on_use(function (api) {
  api.use('underscore', 'server');

  api.add_files('snippet.js', 'client');
  api.add_files('server.js', 'server');
  
  api.export('analytics');
});
