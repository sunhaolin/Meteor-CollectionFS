Package.describe({
  name: 'steedos:cfs-dropbox',
  version: '0.0.3_2',
  summary: 'Dropbox storage adapter for CollectionFS',
  git: 'https://github.com/CollectionFS/Meteor-CollectionFS/tree/master/packages/dropbox',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript@0.1.6');

  api.use(['steedos:cfs-base-package@0.0.30_1', 'steedos:cfs-storage-adapter@0.2.3_1']);
  api.addFiles([
    'checkNpm.js',
    'dropbox.server.js',
    'dropbox.upload.stream.js',
  ], 'server');
  api.addFiles('dropbox.client.js', 'client');
});

Package.onTest(function(api) {
  api.use(['steedos:cfs-standard-packages@0.5.10_6', 'steedos:cfs-dropbox@0.0.3_2', 'test-helpers', 'tinytest'], 'server');
  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});