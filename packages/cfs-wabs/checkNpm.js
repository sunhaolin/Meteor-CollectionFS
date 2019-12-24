import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
	'azure-storage': "0.7.0"
}, 'steedos:cfs-wabs');