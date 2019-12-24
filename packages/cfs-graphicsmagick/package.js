Package.describe({
  name: 'steedos:cfs-graphicsmagick',
  version: '0.0.18_1',
  summary: "Adds `gm` to scope with the ability to perform GraphicsMagick or ImageMagick manipulation",
  git: "https://github.com/CollectionFS/Meteor-cfs-graphicsmagick.git"
});


//also requires that you install the ImageMagick
//or GraphicsMagick app on your server

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript@0.1.6');

  api.addFiles('checkNpm.js', 'server');
  api.addFiles('gm.js', 'server');

  api.export('gm');
});

Package.onTest(function(api) {
  api.use(['steedos:cfs-graphicsmagick@0.0.18_1', 'test-helpers', 'tinytest'], 'server');
  api.addFiles('tests/server-tests.js', 'server');
});
