Package.describe({
  name: 'steedos:cfs-upload-http',
  version: '0.0.22_2',
  summary: 'CollectionFS, HTTP File Upload',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'steedos:cfs-base-package@0.0.30_1',
    'steedos:cfs-tempstore@0.1.6_2',
    'steedos:cfs-file@0.1.18_2',
    'steedos:cfs-access-point@0.1.50_2',
    'steedos:cfs-power-queue@0.9.11',
    'steedos:cfs-reactive-list@0.0.9'
  ]);

  api.addFiles([
    'upload-http-common.js',
    'upload-http-client.js'
  ], 'client');

  api.addFiles([
    'upload-http-common.js'
  ], 'server');
});

// Package.onTest(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.addFiles('tests/server-tests.js', 'server');
//   api.addFiles('tests/client-tests.js', 'client');
// });
