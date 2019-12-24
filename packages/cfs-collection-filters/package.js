Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-cfs-collection-filters.git',
  name: 'steedos:cfs-collection-filters',
  version: '0.2.5_6',
  summary: 'CollectionFS, adds FS.Collection filters'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['steedos:cfs-base-package@0.0.30_1', 'steedos:cfs-collection@0.5.6_6']);

  api.addFiles([
    'filters.js'
  ], 'client');

  api.addFiles([
    'filters.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest']);

//   api.addFiles('tests/server-tests.js', 'server');
//   api.addFiles('tests/client-tests.js', 'client');
// });
