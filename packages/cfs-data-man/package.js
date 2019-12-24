Package.describe({
  name: 'steedos:cfs-data-man',
  version: '0.0.8_2',
  summary: 'A data manager, allowing you to attach various types of data and get it back in various other types',
  git: 'https://github.com/CollectionFS/Meteor-data-man.git'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript@0.1.6');

  api.use(['ejson']);

  api.use(['steedos:cfs-filesaver@0.0.6'], {weak: true});

  api.export('DataMan');

  api.addFiles([
    'client/Blob.js', //polyfill for browsers without Blob constructor; currently necessary for phantomjs support, too
    'client/data-man-api.js'
  ], 'client');

  api.addFiles([
    'checkNpm.js',
    'server/data-man-api.js',
    'server/data-man-buffer.js',
    'server/data-man-datauri.js',
    'server/data-man-filepath.js',
    'server/data-man-url.js',
    'server/data-man-readstream.js'
  ], 'server');

});

Package.onTest(function (api) {
  api.use(['steedos:cfs-data-man@0.0.8_2', 'http', 'tinytest', 'test-helpers', 'steedos:cfs-http-methods@0.0.32_1']);

  api.addFiles(['tests/common.js', 'tests/client-tests.js'], 'client');
  api.addFiles(['tests/common.js', 'tests/server-tests.js'], 'server');
});
