Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-cfs-file.git',
  name: 'steedos:cfs-file',
  version: '0.1.18_2',
  summary: 'CollectionFS, FS.File object'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript@0.1.6');

  // This imply is needed for tests, and is technically probably correct anyway.
  api.imply([
    'steedos:cfs-base-package@0.0.30_1'
  ]);

  api.use([
    'steedos:cfs-base-package@0.0.30_1',
    'steedos:cfs-storage-adapter@0.2.3_1',
    'tracker',
    'check',
    'ddp',
    'mongo',
    'http',
    'steedos:cfs-data-man@0.0.8_2',
    'raix:eventemitter@0.1.1'
  ]);

  api.addFiles([
    'fsFile-common.js'
  ], 'client');

  api.addFiles([
    'checkNpm.js',
    'fsFile-common.js',
    'fsFile-server.js'
  ], 'server');
});

Package.onTest(function (api) {
  api.use([
    'steedos:cfs-standard-packages@0.5.10_6',
    'steedos:cfs-gridfs@0.0.34_1',
    'tinytest@1.0.0',
    'http@1.0.0',
    'test-helpers@1.0.0',
    'steedos:cfs-http-methods@0.0.32_1'
  ]);

  api.addFiles([
    'tests/file-tests.js'
  ]);
});
