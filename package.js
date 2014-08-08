Package.describe({
  summary: "Segment.io support for Meteor (works on both client and server)"
});

Npm.depends({
  "analytics-node": "1.0.3"
});

Package.on_use(function (api) {
  api.add_files('snippet.js', 'client');
  api.add_files('server.js', 'server');

  api.export(['analytics']);
});
