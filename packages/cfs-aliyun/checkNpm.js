import {
  checkNpmVersions
} from 'meteor/tmeasday:check-npm-versions';

if (Meteor.settings && Meteor.settings.cfs && Meteor.settings.cfs.aliyun) {
  checkNpmVersions({
    'aliyun-sdk': '^1.9.2'
  }, 'steedos:cfs-aliyun');

  Aliyun = require('aliyun-sdk');
}