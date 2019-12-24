 Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-cfs-tempstore.git',
  name: 'steedos:cfs-tempstore',
  version: '0.1.6_2',
  summary: 'CollectionFS, temporary storage'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript@0.1.6');

  api.use(['steedos:cfs-base-package@0.0.30_1', 'steedos:cfs-file@0.1.18_2']);

  api.use('steedos:cfs-filesystem@0.1.2_1', { weak: true });
  api.use('steedos:cfs-gridfs@0.0.34_1', { weak: true });

  api.use('mongo');

  api.addFiles('checkNpm.js', 'server');

  api.addFiles([
    'tempStore.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.addFiles('tests/server-tests.js', 'server');
// });
