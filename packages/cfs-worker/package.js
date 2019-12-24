Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-cfs-worker.git',
  name: 'steedos:cfs-worker',
  version: '0.1.5_4',
  summary: 'CollectionFS, file worker - handles file copies/versions'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript@0.1.6');

  api.use([
    'steedos:cfs-base-package@0.0.30_1',
    'steedos:cfs-tempstore@0.1.6_2',
    'steedos:cfs-storage-adapter@0.2.3_1'
  ]);

  api.use([
    'livedata',
    'mongo-livedata',
    'steedos:cfs-power-queue@0.9.11'
  ]);

  api.addFiles([
    'fileWorker.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('steedos:cfs-standard-packages@0.0.0');

//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict', 'random']);

//   api.addFiles('tests/client-tests.js', 'client');
//   api.addFiles('tests/server-tests.js', 'server');
// });
