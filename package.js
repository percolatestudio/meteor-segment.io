Package.describe({
  "summary": "Segment.io integration for Meteor (works on both client and server)",
  "version": "2.0.9",
  "git": "https://github.com/percolatestudio/meteor-segment.io.git",
  "name": "percolatestudio:segment.io"
});

Npm.depends({
  "analytics-node": "1.0.3"
});

Package.on_use(function (api) {
  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.0');
  }
  
  api.use('underscore', 'server');
  api.add_files('snippet.js', 'client');
  api.add_files('server.js', 'server');
  
  api.export('analytics');
});
