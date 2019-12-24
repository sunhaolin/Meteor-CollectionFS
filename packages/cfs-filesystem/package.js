Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-cfs-filesystem.git',
  name: 'steedos:cfs-filesystem',
  version: '0.1.2_1',
  summary: "Filesystem storage adapter for CollectionFS"
});


Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript@0.1.6');

  api.use(['steedos:cfs-base-package@0.0.30_1', 'steedos:cfs-storage-adapter@0.2.3_1']);
  api.addFiles('checkNpm.js', 'server');
  api.addFiles('filesystem.server.js', 'server');
  api.addFiles('filesystem.client.js', 'client');
});

Package.onTest(function(api) {
  api.use(['steedos:cfs-filesystem@0.1.2_1', 'test-helpers', 'tinytest'], 'server');
  api.addFiles('tests.js', 'server');
});
