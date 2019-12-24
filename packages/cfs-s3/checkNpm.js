import {
  checkNpmVersions
} from 'meteor/tmeasday:check-npm-versions';

if (Meteor.settings && Meteor.settings.cfs && Meteor.settings.cfs.aws) {
  checkNpmVersions({
    'aws-sdk': "^2.0.23"
  }, 'steedos:cfs-s3');

  AWS = require('aws-sdk');
}
