Package.describe({
  name: 'steedos:cfs-gridfs',
  version: '0.0.34_1',
  summary: 'GridFS storage adapter for CollectionFS',
  git: 'https://github.com/CollectionFS/Meteor-cfs-gridfs.git'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript@0.1.6');

  api.use(['steedos:cfs-base-package@0.0.30_1', 'steedos:cfs-storage-adapter@0.2.3_1']);
  api.addFiles('checkNpm.js', 'server');
  api.addFiles('gridfs.server.js', 'server');
  api.addFiles('gridfs.client.js', 'client');
});

Package.onTest(function(api) {
  api.use(['steedos:cfs-gridfs@0.0.34_1', 'test-helpers', 'tinytest'], 'server');
  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});
