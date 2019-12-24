// fix warning: xxx not installed
require("temp/package.json");

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
	temp: "0.7.0" // for tests only
}, 'steedos:cfs-file');