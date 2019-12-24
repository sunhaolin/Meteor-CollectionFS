Package.describe({
  name: 'steedos:cfs-collection',
  version: '0.5.6_6',
  summary: 'CollectionFS, FS.Collection object',
  git: 'https://github.com/CollectionFS/Meteor-cfs-collection.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    // CFS
    'steedos:cfs-base-package@0.0.30_1',
    'steedos:cfs-tempstore@0.1.6_2',
    // Core
    'deps',
    'check',
    'livedata',
    'mongo-livedata',
    // Other
    'raix:eventemitter@0.1.1'
  ]);

  // Weak dependencies for uploaders
  api.use(['steedos:cfs-upload-http@0.0.22_2', 'steedos:cfs-upload-ddp@0.0.17_2'], { weak: true });

  api.addFiles([
    'common.js',
    'api.common.js'
  ], 'client');

  api.addFiles([
    'common.js',
    'api.common.js'
  ], 'server');
});

Package.onTest(function (api) {
  api.use(['steedos:cfs-standard-packages@0.5.10_6', 'steedos:cfs-gridfs@0.0.34_1', 'tinytest', 'underscore', 'test-helpers']);

  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});
