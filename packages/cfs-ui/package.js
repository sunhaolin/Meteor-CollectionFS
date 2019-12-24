Package.describe({
  name: 'steedos:cfs-ui',
  version: '0.1.4_2',
  summary: 'CollectionFS, provides UI helpers',
  git: 'https://github.com/CollectionFS/Meteor-cfs-ui.git'
});

Package.onUse(function(api) {
  api.versionsFrom(['1.0']);

  api.use([
    'steedos:cfs-base-package@0.0.30_1',
    'steedos:cfs-file@0.1.18_2',
    'blaze',
    'templating'
  ]);

  api.imply([
    'steedos:cfs-base-package@0.0.30_1'
  ]);

  api.addFiles([
    'ui.html',
    'ui.js'
  ], 'client');
});

// Package.on_test(function (api) {
//   api.use(['collectionfs', 'test-helpers', 'tinytest']);
//   api.add_files('tests/client-tests.js', 'client');
// });
