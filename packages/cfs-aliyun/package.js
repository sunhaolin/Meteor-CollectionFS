Package.describe({
  name: 'steedos:cfs-aliyun',
  version: '0.1.0_5',
  summary: 'Aliyun OSS storage adaptger for CollectionFS',
  git: 'https://github.com/yyang/cfs-aliyun.git',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript@0.1.6');

  api.use(['steedos:cfs-base-package@0.0.30_1', 'steedos:cfs-storage-adapter@0.2.3_1']);
  api.addFiles([
    'checkNpm.js',
    'aliyun.server.js',
    'aliyun.stream.js',
    ], 'server');
  api.addFiles('aliyun.client.js', 'client');
});
