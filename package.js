Package.describe({
  summary: "Segment.io loader snippet"
});

Package.on_use(function (api) {
  api.add_files('snippet.js', 'client');

  api.export(['analytics']);
});
