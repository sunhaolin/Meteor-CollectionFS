Package.describe({
  name: 'steedos:cfs-reactive-list',
  version: '0.0.9',
  summary: 'ReactiveList provides a small, fast queue/list built for Power-Queue',
  git: 'https://github.com/CollectionFS/Meteor-reactive-list.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use('deps', ['client', 'server']);

  api.export('ReactiveList');
  api.addFiles(['reactive-list.js'], ['client', 'server']);
});

Package.onTest(function (api) {
  api.use('steedos:cfs-reactive-list@0.0.9');
  api.use('test-helpers', 'server');
  api.use('tinytest');

  api.addFiles('tests.js');
});
