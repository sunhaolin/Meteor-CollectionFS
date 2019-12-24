Package.describe({
  name: 'steedos:cfs-access-point',
  version: '0.1.50_2',
  summary: 'CollectionFS, add ddp and http accesspoint capability',
  git: 'https://github.com/CollectionFS/Meteor-cfs-access-point.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // This imply is needed for tests, and is technically probably correct anyway.
  api.imply([
    'steedos:cfs-base-package@0.0.30_1'
  ]);

  api.use([
    //CFS packages
    'steedos:cfs-base-package@0.0.30_1',
    'steedos:cfs-file@0.1.18_2',
    //Core packages
    'check',
    'ejson',
    //Other packages
    'steedos:cfs-http-methods@0.0.32_1',
    'steedos:cfs-http-publish@0.0.13_1'
  ]);

  api.addFiles([
    'access-point-common.js',
    'access-point-handlers.js',
    'access-point-server.js'
  ], 'server');

  api.addFiles([
    'access-point-common.js',
    'access-point-client.js'
  ], 'client');
});

Package.onTest(function (api) {
  api.versionsFrom('1.0');

  api.use([
    //CFS packages
    'steedos:cfs-access-point',
    'steedos:cfs-standard-packages',
    'steedos:cfs-gridfs',
    //Core packages
    'test-helpers',
    'http',
    'tinytest',
    'underscore',
    'ejson',
    'ordered-dict',
    'random',
    'deps'
  ]);

  api.addFiles('tests/client-tests.js', 'client');
  api.addFiles('tests/server-tests.js', 'server');
});
