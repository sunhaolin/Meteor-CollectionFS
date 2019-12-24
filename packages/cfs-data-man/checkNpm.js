// fix warning: xxx not installed
require("mime/package.json");
require("temp/package.json");

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
	mime: "^2.0.2",
	'buffer-stream-reader': "0.1.1",
	//request: "2.44.0",
	// We use a specific commit from a fork of "request" package for now; we need fix for
	// https://github.com/mikeal/request/issues/887 (https://github.com/CollectionFS/Meteor-CollectionFS/issues/347)
	request: "^2.81.0",
	temp: "0.7.0" // for tests only
}, 'steedos:cfs-data-man');